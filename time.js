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
}
setInterval(date1, 100);
onload = date1();
// dark mode
const sun = document.getElementById("sun")
const moon = document.getElementById("moon")
const body = document.querySelector("body")
const mcontainer = document.querySelector(".container-mode")

moon.addEventListener("click", (eo) => {
  mode("dark");
  localStorage.setItem("theme", "dark");
});
sun.addEventListener("click", (eo) => {
  mode("light");
  localStorage.setItem("theme", "light");
});
onload = (eo) => {
  mode(localStorage.getItem("theme"));
};
const mode = (id) => {
  if (id === "dark") {
    moon.style.opacity ="0";
    sun.style.opacity ="1";
    body.classList.add("dark");
  }else if(id === "light"){
    moon.style.opacity ="1";
    sun.style.opacity ="0";
    body.classList.remove("dark");
  }
}
