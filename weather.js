// to just initailize 
checkweather("delhi");



const x = document.querySelector(".nav input");

// to click button on search icon 
document.querySelector(".btn").addEventListener("click",()=>{
	document.querySelector( ".state" ).innerHTML = "State:- ";
	document.querySelector( ".temp" ).innerHTML =   "Temp:- ";
	document.querySelector( ".weather" ).innerHTML=  "Weather:- ";
	document.querySelector(".hum").innerHTML = "Humidity:- ";

	checkweather(x.value,document.querySelector(".inp").innerHTML="")
})


// to press enter key 
document.addEventListener("keydown",(e)=>{
	let key = e.key;
	if (key=="Enter"){
		// to  clean previously displayed data
		document.querySelector( ".state" ).innerHTML = "State:- ";
		document.querySelector( ".temp" ).innerHTML =   "Temp:- ";
		document.querySelector( ".weather" ).innerHTML=  "Weather:- ";
		document.querySelector(".hum").innerHTML = "Humidity:- ";
	
		// Add
		checkweather(x.value,document.querySelector( ".inp" ).innerHTML="");
	// console.log("you have press enter");
	}
})


// to fetch and send to display data
function checkweather(st) {	
fetch("https://api.openweathermap.org/data/2.5/weather?q=" + st + "&appid=877c1f7d0938d6c1e3c2ff50f4b898d5")
.then(x=>x.json())
.then(y=>{display(y)

} 
)}



// to display data

function display(data) {
	let state= data.name;
	let temp = Math.round(data.main.temp-273.15);
	let weather =data.weather[0].main ;
	let hum = data.main.humidity;

	let weicon = document.querySelector(".im")
	
	document.querySelector( ".state" ).innerHTML =" "+ state;
	document.querySelector( ".temp" ).innerHTML +=  " "+ temp+"°C";
	document.querySelector( ".weather" ).innerHTML += " "+ weather;
	document.querySelector(".hum").innerHTML += " "+hum;


	// to change icon 
	weicon.src= "file:///C:/Users/ishuk/Desktop/visual%20studio%20file/web_dev/mini_projects_frontend/weather%20app/images/"+data.weather[0].main+".png"
	}