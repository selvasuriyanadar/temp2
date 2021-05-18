import { getFormDataSet, storeFormDataSet } from '../control/company_form.js';
import express from 'express';

export default function installHandler(app) {

  app.use(express.json());

  app.get('/company-form-set', async (req, res, next) => {
    try {
      const result = await getFormDataSet(req.query.created_datetime);
      res.send(result);
    } catch (e) {
      next(e);
    }
  });

  app.post('/company-form-set', (req, res) => {
    res.send(storeFormDataSet(req.body));
  });
}
