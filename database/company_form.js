import { FormData } from '../data/FormData.js';
import util from 'util';

export class CompanyFormSetDb{
  constructor(conn) {
    this.conn = conn;
    this.query = util.promisify(conn.query).bind(conn);
  }

  insert(form_set) {
    if (form_set.validateDeeply()) {
      const stmt1 = 'INSERT INTO company_form_set SET ?';
      const stmt2 = 'INSERT INTO company_form_data SET ?, ?';
      const created_datetime = form_set.created_datetime;

      this.conn.query(stmt1,
        { created_datetime },
        (err, res) => {
          if (err) throw err;

          console.log('Last inserted company_form_set');
        }
      );

      for (const form_data of form_set.form_data_list) {
        this.conn.query(stmt2,
          [
            form_data,
            { created_datetime }
          ],
          (err, res) => {
            if (err) throw err;
          }
        );
      }
    }
  }

  read_form_set() {}

  async read_form_data(form_set) {
    const stmt = `
      SELECT * FROM company_form_data
      WHERE STRCMP(created_datetime, ?) = 0;
    `;
    try {
      const rows = await this.query(stmt,
        [form_set.created_datetime]
      );
      rows.forEach( (row) => {
        console.log(row);
        const form_data = new FormData(row.form_no);
        console.log(form_data);
        form_data.copy(row);
        console.log(form_data);
        form_set.form_data_list.push(form_data);
        console.log(form_set);
      });
      console.log(rows);
    }
    catch (err) {
      throw err;
    }
  }
}
