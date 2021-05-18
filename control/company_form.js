import connectDatabase from '../database/db_connection.js';
import { CompanyFormSetDb } from '../database/company_form.js';

const conn = connectDatabase();
const company_formset_db = new CompanyFormSetDb(conn);

export function storeFormDataSet(data) {
  return "ahi";
}

export function listForms(data) {

}

export function getFormDataSet(created_datetime) {
  return "hai";
}
