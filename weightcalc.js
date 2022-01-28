let weight = document.getElementById("curweight")
const weightSubmit = document.getElementById("submitButton")
const weightDisp = document.getElementById('weightneeded')
weightSubmit.addEventListener('click', WeightDeterminer)
const lbtolose = document.createElement("p")
const today = new Date();
const goaldate = new Date(2022, 8, 1);

Date.prototype.addDays = function (days) {
    let date = today;
    date.setDate(date.getDate() + days);
    return date;
}
let date = new Date();
let threedays = new Date();
threedays = date.addDays(3);
let initialdate = threedays.toLocaleDateString("en-US");
let newdate = initialdate.substring(0, initialdate.length-5);


function WeightDeterminer(event){
    
    event.preventDefault();
    weightDisp.innerHTML = ""
    let weightuntil = weight.value - 220
    let leftside = weightuntil * 3
    let daysuntil = (goaldate.getTime() - today.getTime()) / (1000 * 3600 * 24)
    let finalweight = (leftside / daysuntil).toFixed(1)
    let goalweight = weight.value - finalweight


    lbtolose.innerHTML = "You need to reach " + goalweight + " pounds by " + newdate
        + " in order to hit your goal by " 
        + goaldate.toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).substring(10) + ".";
    weightDisp.appendChild(lbtolose)
}