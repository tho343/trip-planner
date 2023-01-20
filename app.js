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


//nav script

const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
toggle.addEventListener("click", function(){
    const classListOfLinks = links.classList;
    classListOfLinks.toggle("show-links");
    
})

//scroll script

const navCenter = document.querySelector(".nav-center");
window.addEventListener("scroll",function(){
    if(this.window.pageYOffset > navCenter.getBoundingClientRect().height){
        navCenter.classList.add("fixed-nav");;
    }else{
        navCenter.classList.remove("fixed-nav");
    }
})

const sections = document.querySelectorAll(".scroll-link");

sections.forEach(function(section){
    section.addEventListener("click",function(e){
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        const navHeight = navCenter.getBoundingClientRect().height;
        const linkContainer = document.querySelector(".links");
        
        let position = element.offsetTop - navHeight;
        const fixedNavBar = navCenter.classList.contains("fixed-nav");
       if(!fixedNavBar){
        position =position - navHeight;
       }
       if(navCenter.getBoundingClientRect().height > 81){
        position = position + linkContainer.getBoundingClientRect().height;
       }
       
        window.scrollTo(
            let = 0,
            top = position
        )
        links.classList.remove("show-links");
    })
})