import ejs from 'ejs';
import path from 'path';
import puppeteer from 'puppeteer';

export function savePdf(path, data) {
  ejs.renderFile(path.join(__dirname, './views/', path),
    data,
    (err, html) => {
      if (err) {
        res.send(err);
      } else {
        const options = {
          "height": "11.25in",
          "width": "8.5in",
          "header": {
            "height": "20mm",
          },
          "footer": {
            "height": "20mm",
          },
        };
        puppeteer
      }
    }
  )
}
