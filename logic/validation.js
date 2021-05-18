export function isInt(value) {
  let valid = true;
  if (!isEmpty(value))
  {
    let nmb = parseInt(value);
    if(isNaN(nmb))
      valid &= false;
  }
  else
    valid &= false;
  return valid;
}

export function isDate(value) {
  let valid = true;
  if (!isEmpty(value))
  {
    let startdate_parts = value.split("-");
    if(startdate_parts.length !== 3
      || isNaN(new Date(startdate_parts[0], startdate_parts[1], startdate_parts[2])))
      valid &= false;
  }
  else
    valid &= false;
  return valid;
}

export function isEmpty(value) {
  let valid = true;
  if (value === undefined || value === null || value === "")
    valid &= false;
  return valid;
}
