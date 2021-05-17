import { joinDate, treatAsUTC, daysBetween } from "../logic/date.js";
import { isEmpty, isInt, isDate } from "../logic/validation.js";

export class FormData {

  constructor(form_no) {
    this.form_no = form_no;
    this.project_name = "";
    this.duration = "";
    this.start_date = "";
    this.end_date = "";
    this.men_workers = "";
    this.women_workers = "";
    this.total_workers = "";
    this.men_perday_salary = "";
    this.women_perday_salary = "";
    this.men_total_salary = "";
    this.women_total_salary = "";
    this.total_salary = "";
    this.datetime = "";
  }

  copy(form) {
    this.project_name = form.project_name;
    this.duration = form.duration;
    this.start_date = form.start_date;
    this.end_date = form.end_date;
    this.men_workers = form.men_workers;
    this.women_workers = form.women_workers;
    this.total_workers = form.total_workers;
    this.men_perday_salary = form.men_perday_salary;
    this.women_perday_salary = form.women_perday_salary;
    this.men_total_salary = form.men_total_salary;
    this.women_total_salary = form.women_total_salary;
    this.total_salary = form.total_salary;
    this.datetime = form.datetime;
  }

  validate() {
    let valid = true;
    if (!(isInt(this.form_no)
      && !isEmpty(this.project_name)
      && isInt(this.duration)
      && isDate(this.start_date)
      && isDate(this.end_date)
      && isInt(this.men_workers)
      && isInt(this.women_workers)
      && isInt(this.total_workers)
      && isInt(this.men_perday_salary)
      && isInt(this.women_perday_salary)
      && isInt(this.men_total_salary)
      && isInt(this.women_total_salary)
      && isInt(this.total_salary)
    ))
      valid &= false;
    return valid;
  }
}

export class FormAccess {

  constructor(form) {
    this.error = {};
    this.form = form;
  }

  fetchInt(value, field_name, error) {
    if (value !== "")
    {
      if(isInt(nmb))
      {
        this.form[field_name] = nmb;
        delete this.error[field_name];
      }
      else
        this.error[field_name] = error;
    }
  }

  fetchDate(value, field_name, error) {
    if (value !== "")
    {
      if(isDate(value))
      {
        this.form[field_name] = value;
        delete this.error[field_name];
      }
      else
        this.error[field_name] = error;
    }
  }

  fetchProjectName(value) {
    if (value !== "")
    {
      this.form.project_name = value;
    }
  }

  fetchDuration(value) {
    this.fetchInt(value, "duration", "please enter duration in terms of month count.");
  }

  fetchStartDate(value) {
    this.fetchDate(value, "start_date", "please enter a valid date for Start Date.");
  }

  fetchEndDate(value) {
    this.fetchDate(value, "end_date", "please enter a valid date for End Date.");
  }

  fetchMenWorkers(value) {
    this.fetchInt(value, "men_workers", "please enter a valid number for No of Men Working.");
  }

  fetchWomenWorkers(value) {
    this.fetchInt(value, "women_workers", "please enter a valid number for No of Women Working.");
  }

  fetchTotalWorkers(value) {
    this.fetchInt(value, "total_workers", "");
  }

  fetchMenPerdaySalary(value) {
    this.fetchInt(value, "men_perday_salary", "please enter a valid number for Salary Per Day for Men.");
  }

  fetchWomenPerdaySalary(value) {
    this.fetchInt(value, "women_perday_salary", "please enter a valid number for Salary Per Day for Women.");
  }

  fetchMenTotalSalary(value) {
    this.fetchInt(value, "men_total_salary", "");
  }

  fetchWomenTotalSalary(value) {
    this.fetchInt(value, "women_total_salary", "");
  }

  fetchTotalSalary(value) {
    this.fetchInt(value, "total_salary", "");
  }

  generateEndDate() {
    if (this.form.duration !== ""
        && this.form.start_date !== "")
    {
      let a = [{year: 'numeric'}, {month: '2-digit'}, {day: '2-digit'}];
      let startdate_parts = this.form.start_date.split("-");
      let duration = this.form.duration;
      let enddate = new Date(startdate_parts[0], startdate_parts[1]-1+duration, startdate_parts[2]);
      this.form.end_date = joinDate(enddate, a, '-');
    }
  }

  generateTotalWorkers() {
    if (this.form.men_workers !== ""
        && this.form.women_workers !== "")
    {
      this.form.total_workers = this.form.men_workers + this.form.women_workers;
    }
  }

  generateMenTotalSalary() {
    if (this.form.men_perday_salary !== ""
        && this.form.start_date !== ""
        && this.form.end_date !== "")
    {
      this.form.men_total_salary = this.form.men_perday_salary*daysBetween(this.form.start_date, this.form.end_date);
    }
  }

  generateWomenTotalSalary() {
    if (this.form.women_perday_salary !== ""
        && this.form.start_date !== ""
        && this.form.end_date !== "")
    {
      this.form.women_total_salary= this.form.women_perday_salary*daysBetween(this.form.start_date, this.form.end_date);
    }
  }

  generateTotalSalary() {
    if (this.form.women_total_salary !== ""
        && this.form.men_total_salary !== "")
    {
      this.form.total_salary = this.form.women_total_salary+this.form.men_total_salary;
    }
  }
}
