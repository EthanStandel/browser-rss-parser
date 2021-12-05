var dateJOURNAL = new Date(new Date().setHours(19, 45));

//To calcute time before the ARTE JOURNAL
var Diff_ARTEJOURNAL_In_Time = dateJOURNAL - new Date();

// To calculate hours before the ARTE JOURNAL
var Diff_ARTEJOURNAL_In_Hours = Math.floor((Diff_ARTEJOURNAL_In_Time % 86400000) / 3600000); // hours
// To calculate minutes before the ARTE JOURNAL
var Diff_ARTEJOURNAL_In_Mins = Math.round(((Diff_ARTEJOURNAL_In_Time % 86400000) % 3600000) / 60000); // minutes

//Countdown to ARTE JOURNAL //formatted for notification
if (new Date() <= dateJOURNAL) {
var diffusion_date = "dans " + Diff_ARTEJOURNAL_In_Hours + " h " + Diff_ARTEJOURNAL_In_Mins + " min";

var diffusion_date = diffusion_date.replace("0 h ", "");
var diffusion_date = diffusion_date.replace("1 h 0 min", "1 heure");
var diffusion_date = diffusion_date.replace("h 0 min", "heures");

}else {
var diffusion_date = "diffusé à 19:45"
}

var LINK_ITEM = "<ul> <li class='arte'> <a class='item-link' href='https://www.arte.tv/fr/videos/RC-014085/arte-journal/' target='_blank'> <div class='media'> <div class='image'> <img src='https://alloforfait.fr/wp-content/uploads/2019/12/logo-arte.jpg'> </div> <div class='item-container'> <div class='item-F-line'> <div class='source-name'>ARTE Journal</div> <div class='item-publish-date'>" + diffusion_date +"</div></div> <div class='item-title'>Chaque soir, la rédaction franco-allemande d'ARTE Journal propose une approche européenne et culturelle de l'actualité. Un regard original sur le monde.</div> </div></div></a> </li> </ul>";

var hours = new Date().toLocaleTimeString([], {hour: '2-digit'}).replace(/[^0-9]/g, '');

if (hours >= 18) {
  function arteNotif() {
  document.getElementById("ArteBanner").innerHTML = LINK_ITEM;
  
}
arteNotif();
}
/*/ add line <div id="ArteBanner"></div> under the h3 element for main title of topic (subtopic title will be h4)/*/
