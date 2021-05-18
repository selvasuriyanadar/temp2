CREATE TABLE company_form.company_form_set (
  created_datetime varchar(24),

  PRIMARY KEY (created_datetime)
) DEFAULT CHARSET=utf8;

CREATE TABLE company_form.company_form_data (
  created_datetime varchar(24),
  form_no int,
  project_name text,
  duration int,
  start_date varchar(10),
  end_date varchar(10),
  men_workers int,
  women_workers int,
  total_workers int,
  men_perday_salary int,
  women_perday_salary int,
  men_total_salary int,
  women_total_salary int,
  total_salary int,

  FOREIGN KEY form_set (created_datetime) REFERENCES company_form_set (created_datetime),
  PRIMARY KEY (created_datetime, form_no)
) DEFAULT CHARSET=utf8;
