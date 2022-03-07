const now = new Date().getTime();
const countnowDate = new Date("March 12, 2022 12:00:00").getTime();
const text = document.getElementById('demodate').innerHTML

// console.log(now, countnowDate);

const distanceBase = countnowDate - now;

const days = Math.floor(distanceBase / (1000* 60 * 60 *24));
// console.log(days)
const hours = Math.floor((distanceBase % (1000*60*60*24)) / (1000*60*60));
// console.log(hours)
const minutes = Math.floor((distanceBase % (1000*60*60)) / (1000*60));
const seconds = Math.floor((distanceBase % (1000*60)) / 1000);


text = `${days}j ${hours}h ${minutes}m ${seconds}s`