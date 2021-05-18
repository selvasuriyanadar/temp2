import connectDatabase from '../database/db_connection.js';
import { CompanyFormSetDb } from '../database/company_form.js';
import { FormSet, FormData } from '../data/FormData.js'

const conn = connectDatabase();
const company_formset_db = new CompanyFormSetDb(conn);

export function storeFormDataSet(data) {
  const current_datetime = (new Date()).toISOString();
  const form_set = new FormSet(current_datetime);
  form_set.copyDeeply(data);
  company_formset_db.insert(form_set);
  return { created_datetime: current_datetime };
}

export function listForms(data) {

}

export async function getFormDataSet(created_datetime) {
  const form_set = new FormSet(created_datetime);
  await company_formset_db.read_form_data(form_set);
  return form_set;
}
