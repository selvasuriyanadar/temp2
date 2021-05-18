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

function isReal(value) {
  let valid = true;
  if (!isEmpty(value))
  {
    let nmb = parseFloat(value);
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
    let date_parts = value.split("-");
    if(date_parts.length !== 3
      || isNaN(new Date(date_parts[0], date_parts[1], date_parts[2]))
    )
      valid &= false;
  }
  else
    valid &= false;
  return valid;
}

function isTime(value) {
  let valid = true;
  if (!isEmpty(value))
  {
    let time_parts = value.split(":");
    if (time_parts.length !== 3
      || !(isInt(time_parts[0])
        && isInt(time_parts[1])
        && isReal(time_parts[2].replace("Z", ""))
      )
    )
      valid &= false;
  }
  else
    valid &= false;
  return valid;
}

export function isDateTime(value) {
  let valid = true;
  if (!isEmpty(value))
  {
    let [ date, time ] = value.split("T");
    if (isEmpty(date) || !isDate(date))
      valid &= false;
    if (isEmpty(time) || !isTime(time))
      valid &= false;
  }
  else
    valid &= false;
  return valid;
}

export function isEmpty(value) {
  let valid = true;
  if (value !== undefined && value !== null && value !== "")
    valid &= false;
  return valid;
}
