const endDate = "17 April 2024 10:00 PM";
document.getElementById('end-date').innerText = endDate;
const inputs = document.querySelectorAll("input");

function clock() {
  const end = new Date(endDate);
  const now = new Date();
  const dif = (end - now) / 1000;
  if(dif < 0 ) return;
  console.log(dif);
  console.log(end);
  console.log(now);
  //  console.log(Math.floor(dif / 3600 / 24));         //days
  inputs[0].value = Math.floor(dif / 3600 / 24);
  // console.log(Math.floor(dif / 3600) % 24);         //hour
  inputs[1].value = Math.floor(dif / 3600) % 24;
  // console.log(Math.floor(dif / 60) % 60);           //min
  inputs[2].value = Math.floor(dif / 60) % 60;
  // console.log(Math.floor(dif  % 60));               //sec
  inputs[3].value = Math.floor(dif % 60);
}
clock();
setInterval(() => {
  clock();
}, 1000);
