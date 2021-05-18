import { getFormDataSet, storeFormDataSet } from './control/company_form.js';
import express from 'express';

export default function installHandler(app) {

  app.use(express.json());

  app.get('/company-form-set', (req, res) => {
    res.send(getFormDataSet(req.query.created_datetime));
  });

  app.post('/company-form-set', (req, res) => {
    res.send(storeFormDataSet(req.body));
  });
}
