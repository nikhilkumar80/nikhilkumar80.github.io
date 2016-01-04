/**
* http://nikolay.rocks/2015-12-12-seconds-to-human
**/
function msToHuman(ms) {
  let total   = Math.floor(ms / 1000);
  let seconds = total % 60; total = Math.floor(total / 60);
  let minutes = total % 60; total = Math.floor(total / 60);
  let hours   = total % 24; total = Math.floor(total / 24);
  let days    = total % 30; total = Math.floor(total / 30);
  let months  = total;

  if (months) {
    return `${months} months, ${days} days`;
  } else if (days) {
    return `${days} days, ${hours} hours`;
  } else if (hours) {
    return `${zerofy(hours)}:${zerofy(minutes)}:${zerofy(seconds)}`;
  } else if (minutes) {
    return `${zerofy(minutes)}:${zerofy(seconds)}`;
  } else {
    return `${seconds}sec`;
  }

  function zerofy(num) {
    return num > 9 ? num : "0"+num;
  }
}
