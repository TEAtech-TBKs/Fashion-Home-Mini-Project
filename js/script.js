const marquee = document.getElementById("eventMarquee");

if (marquee) {
  marquee.textContent = 
    "Upcoming: Luxury Collection Launch - April 15 | Fashion Show - May 10 | Private Styling - June 5";
}

function showDetails(eventName){
  alert(eventName + " details coming soon!");
}