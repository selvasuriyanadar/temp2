class CompanyFormSetDb{
  constructor(conn) {
    this.conn = conn;
  }

  insert(form_set) {
    const stmt1 = 'INSERT INTO company_form.company_form_set SET ?';
    const stmt2 = 'INSERT INTO company_form.company_form_data SET ?';
    this.conn.query(stmt1,
      {created_datetime: form_set.created_datetime},
      (err, res) => {
        if (err) throw err;

        console.log('Last inserted company_form_set created_datetime:', res.created_datetime);
      }
    );
    for (const form_data of form_set.form_data_list) {
      this.conn.query(stmt2,
        form_data,
        (err, res) => {
          if (err) throw err;

          console.log('form data inserted');
        }
      );
    }
  }

  read_form_set(form_set) {}

  read_form_data(form_set) {
    const stmt = `
      SELECT * FROM company_form.company_form_data
      WHERE created_datetime == ?;
    `;
    this.conn.query(stmt,
      [form_set.created_datetime],
      (err, rows) => {
        if (err) throw err;

        rows.forEach( (row) => {
          const form_data = new FormData(row.form_no);
          form_data.copy(row);
          form_set.form_data_list.push(form_data);
        });
        console.log(rows);
      }
    );
  }
}
