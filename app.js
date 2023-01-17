const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
const deadlineDate = document.querySelector(".countdown-info h4");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");
let futureDate = new Date(2023,0,27,23,0,0);

const day = weekdays[futureDate.getDay()];
const month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const year = futureDate.getFullYear();
const hour = futureDate.getHours();
const min = futureDate.getMinutes();

const format=(item) => {
    if(item < 10){
        return `0${item}`;
    }
    return item;
}

deadlineDate.innerHTML = `Taking off on ${day} ${date} ${month} ${year} at ${format(hour)}:${format(min)}`;

function getRemainningTime(){
    let today = new Date();
    const todayTime = today.getTime();
    const futureTime = futureDate.getTime();
    const remainTime = futureTime - todayTime;
    const oneDay = 24*60*60*1000;
    const oneHr = 60*60*1000;
    const oneMin = 60*1000;
    const oneSec = 1000;

    const remainingDay = Math.floor(remainTime/oneDay);
    const remainingHr = Math.floor((remainTime%oneDay)/oneHr);
    const remainingMin = Math.floor((remainTime%oneHr)/oneMin);
    const remainingSec = Math.floor((remainTime%oneMin)/oneSec);

    const values = [remainingDay,remainingHr,remainingMin,remainingSec];
    items.forEach(function(item,index){
        item.innerHTML=`${values[index]}`;
    })
    if(remainTime < 0){
        clearInterval(countdown);
        deadline.innerHTML="<h4>Trip has passed</h4>"
    }
}
const countdown = setInterval(getRemainningTime,1000);
getRemainningTime();
