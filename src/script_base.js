import React from 'react';
import ReactDOM from 'react-dom';

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
const diffusion_date = "diffusé à 19:45"
}

var hours = new Date().toLocaleTimeString([], {hour: '2-digit'}).replace(/[^0-9]/g, '');

function Banner() {
  if (hours >= 18) {
    return (
      <ul>
        <li>
          <a class='item-link' href='https://www.arte.tv/fr/videos/RC-014085/arte-journal/' target='_blank'> 
            <div class='media'> 
              <div class='image'> 
                <img src='https://alloforfait.fr/wp-content/uploads/2019/12/logo-arte.jpg' /> 
              </div> 
              <div class='item-container'> 
                <div class='item-F-line'> 
                  <div class='source-name'>ARTE Journal</div> 
                  <div class='item-publish-date'>{diffusion_date}</div>
                </div>
                <div class='item-title'>Chaque soir, la rédaction franco-allemande d'ARTE Journal propose une approche européenne et culturelle de l'actualité. Un regard original sur le monde.</div>
              </div>
            </div>
          </a>
        </li>
      </ul>
    );
  }
}

ReactDOM.render(
  <Banner />,
  document.getElementById('external-script-element')
);