function date1() {
  let date = new Date();
  // get the time
  let hours = document.getElementById("hours")
  let minutes = document.getElementById("minutes")
  let seconds = document.getElementById("seconds")
  hours.innerHTML = date.getHours() < 10 ? "0" + date.getHours(): date.getHours();
  minutes.innerHTML = date.getMinutes() < 10 ? "0" + date.getMinutes(): date.getMinutes() ;
  seconds.innerHTML =  date.getSeconds() < 10 ? "0" + date.getSeconds(): date.getSeconds();
// get date
let days = document.getElementById("days")
let months = document.getElementById("months")
let year = document.getElementById("year")
days.innerHTML = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
months.innerHTML = date.getMonth() +1 < 10 ? "0" + (date.getMonth() +1) : date.getMonth() +1;
year.innerHTML = date.getFullYear();

  // let daty = document.getElementById("date");
  // daty.innerHTML =
  //   date.getDate() +
  //   "-" +
  //   parseInt(date.getMonth() + 1) +
  //   "-" +
  //   date.getFullYear();
}
setInterval(date1, 100);
onload = date1();
