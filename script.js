


  // Function to generate random police messages


// Mock data for multiple people
const peopleData = [
  {
    name: "Leonard",
    birthday: "03.03.2010",
    fullName: "Singer",
    address: "In Fischeln, ansonsten unbekannt",
    school: "Frei-Herr-Vom-Stein (Realschule), Krefeld", 
    Notes: "Er hängt immer neben Nebengebäude ab.",
    Freundeskreis: "Slawa aus der 8c, Alexej aus der 8c, finnley aus der 8c und letztendlich Oriol aus der 8c.",
    Single: "Single",
    Partner: "nicht vorhanden.",
    Haare: "Blond",
    Gewicht: "Unbekannt",
    Größe: "1,78",
    Mutter: "Unbekannt",
    Vater: "Unbekannt",
    Geschwister: "Keine",
    Hobbies: "Lernen / Lesen",
  },
{
    name: "Yusuf Kaplan",
    birthday: "11.11.2008",
    fullName: "Kaplan",
    address: "Braunschweig",
    school: "Salzgitter Realschule",
    Notes: "",
    Freundeskreis: "Unbekannt",
    Single: "Single",
    Partner: "nicht vorhanden",
    Haare: "Schwarz",
    Gewicht: "70 Kilogramm",
    Größe: "1,75",
    Mutter: "Unbekannt",
    Vater: "Unbekannt",
    Geschwister: "Esma Kaplan",
    Hobbies: "Klavier spielen",
  },
{
    name: "Marta Szumilas",
    birthday: "15.03.2009",
    fullName: "Szmulias",
    address: "Ritterstrase krefeld",
    school: "Frei-Herr-Vom-Stein (Realschule), Krefeld",
    Notes: "",
    Freundeskreis: "Unbekannt",
    Single: "Vergeben",
    Partner: "Darius Stefan Verbiceanu ",
    Haare: "Schwarz",
    Gewicht: "65 Kilogramm",
    Größe: "1,65",
    Mutter: "Renata Nowak",
    Vater: "Rafaelo Szumilas",
    Geschwister: "Dominika Nowak",
    Hobbies: "",
  },

  {
    name: "Mateusz Lubiecki",
    birthday: "01.11.2008",
    fullName: "Lubiecki",

    address: "Elizabethstr. 63, krefeld",
    school: "Kaiserplatz, Krefeld",
    Notes: "",
    Freundeskreis: "Unbekannt",
    Single: "Vergeben",
    Partner: "Noemi Palmeri",
    Haare: "Blond",
    Gewicht: "",
    Größe: "",
    Mutter: "Silwia Lubiecki",
    Vater: "Jaroslaw Lubiecki",
    Geschwister: "Monika Lubiecki",
    Hobbies: "Ficken",
  },
 {
    name: "Noemi Palmeri",
    birthday: "14.09.2010",
    fullName: "Palmeri",
    address: "Viktoriastr. 100, krefeld",
    school: "Kaiserplatz, Krefeld",
    Notes: "",
    Freundeskreis: "Unbekannt",
    Single: "Vergeben",
    Partner: "Mateusz Lubiecki",
    Haare: "Schwarz",
    Gewicht: "63 Kilogramm",
    Größe: "1,68",
    Mutter: "Unbekannt",
    Vater: "Unbekannt",
    Geschwister: "Zwei Geschwister, Vanessa Palmeri und Gaia Palmeri.",
    Hobbies: "Ficken",
  },
{
    name: "Yusuf Balaban",
    birthday: "14.11.2008",
    fullName: "Balaban",
    address: "Remschneider. 218, krefeld",
    school: "Frei-Herr-Vom-Stein (Realschule), Krefeld",
    Notes: "",
    Freundeskreis: "Milo, Schayan, Christian, Finnley",
    Single: "Vergeben",
    Partner: "Marija Rosbach",
    Haare: "Schwarz",
    Gewicht: "ungefähr 65 Kilogramm",
    Größe: "1,73",
    Mutter: "Unbekannt",
    Vater: "Hasan Balaban",
    Geschwister: "Jüngeren Bruder und ältere Schwester, Namen unbekannt.",
    Hobbies: "Vermutlich Fußball, Spazieren und Zocken.",
  },
  // Add more people here

{
    name: "Finnley Fitch",
    birthday: "30.07.2009",
    fullName: "Fitch",
    address: "Irmgardisweg, Uerdingen Krefeld",
    school: "Frei-Herr-Vom-Stein (Realschule), Krefeld",
    Notes: "",
    Freundeskreis: "Yusuf, Luis, Ecrin, Drian, Effe",
    Single: "Single",
    Partner: "nicht vorhanden",
    Haare: "Braun"
    Gewicht: "59 Kilogramm",
    Größe: "1,86",
    Mutter: "Unbekannt",
    Vater: "Unbekannt",
    Geschwister: "Unbekannt",
    Hobbies: "Fortnite zocken, vapen und spazieren",
  },
    
  },
  
];



let speechSynthesisUtterance = new SpeechSynthesisUtterance();
speechSynthesisUtterance.lang = 'de-DE';

// Function to speak the given text
function speakText(person) {
  const text = `
      Geburtsdatum: ${person.birthday}.
      Nachname: ${person.fullName}.
      Adresse: ${person.address}.
      Schule: ${person.school}.
      Haare: ${person.Haare}.
      Gewicht: ${person.Gewicht}.
      Größe: ${person.Größe} "Meter"
      Single: ${person.Single}.
      Partner: ${person.Partner}.
      Mutter: ${person.Mutter}.
      Vater: ${person.Vater}.
      Geschwister: ${person.Geschwister}.
      Freundeskreis: ${person.Freundeskreis}.
      Hobbies: ${person.Hobbies}.
      Notizen: ${person.Notes}.
  `;
  speechSynthesisUtterance.text = text;
  speechSynthesis.speak(speechSynthesisUtterance);
}
function stopSpeaking() {
  speechSynthesis.cancel();
}
speechSynthesisUtterance.onerror = function(event) {
  console.error('Speech synthesis error:', event.error);
};


document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchInput');
  const result = document.getElementById('result');
  const resultItems = document.querySelectorAll('.result-item');
  const button = document.getElementById('searchButtonVisiblity');

  // Hide the search input and result container initially
  searchInput.style.display = 'none';
  result.style.display = 'none';
  resultItems.forEach(item => {
      item.style.display = 'none';
  });

  // Flag to keep track of search input visibility
  let searchInputVisible = false;

  // Add event listener to the button
  button.addEventListener('click', function() {
      // Toggle the visibility of the search input when the button is clicked
      if (!searchInputVisible) {
          searchInput.style.display = 'block';
          searchInputVisible = true;
      } else {
          searchInput.style.display = 'none';
          // If the search input is hidden, clear the search results
          result.style.display = 'none';
          resultItems.forEach(item => {
              item.style.display = 'none';
          });
          searchInput.value = ''; // Clear the search input field
          searchInputVisible = false;
      }
  });

  // Add event listener to search input for handling user input
  searchInput.addEventListener('input', function() {
      const searchTerm = searchInput.value.trim().toLowerCase();
      const person = peopleData.find(person => person.name.toLowerCase() === searchTerm);

      if (person) {
          // Update the content of result items with the information of the found person
          document.getElementById('name').textContent = person.name;
          document.getElementById('birthday').textContent = person.birthday;
          document.getElementById('fullName').textContent = person.fullName;
          document.getElementById('address').textContent = person.address;
          document.getElementById('school').textContent = person.school;
          document.getElementById('notizen').textContent = person.Notes;
          document.getElementById('single').textContent = person.Single;
          document.getElementById('partner').textContent = person.Partner;
          document.getElementById('freundeskreis').textContent = person.Freundeskreis;
          document.getElementById('haare').textContent = person.Haare;
          document.getElementById('gewicht').textContent = person.Gewicht;
          document.getElementById('größe').textContent = person.Größe;
          document.getElementById('mutter').textContent = person.Mutter;
          document.getElementById('vater').textContent = person.Vater;
          document.getElementById('hobbies').textContent = person.Hobbies;
          document.getElementById('geschwister').textContent = person.Geschwister;
          // Show the result container and result items
          result.style.display = 'block';
          resultItems.forEach(item => {
              item.style.display = 'block';
          });

          // Add class to style the result container and result items
          result.classList.add('result-visible');
          resultItems.forEach(item => {
              item.classList.add('result-text-white');
          });
      } else {
          // If no matching person found, hide the result container and result items
          result.style.display = 'none';
          resultItems.forEach(item => {
              item.style.display = 'none';
          });

          // Remove class to reset the styles
          result.classList.remove('result-visible');
          resultItems.forEach(item => {
              item.classList.remove('result-text-white');
          });
      }
  });
  searchInput.addEventListener('input', function() {
    const inputValue = this.value.trim();
  
    // If the input is empty, stop speaking
    if (inputValue === '') {
        stopSpeaking();
    }
  });
  
});




const searchInput = document.getElementById('searchInput');
const result = document.getElementById('result');
const nameElement = document.getElementById('name');
const birthdayElement = document.getElementById('birthday');
const fullNameElement = document.getElementById('fullName');
const photoElement = document.getElementById('photo');
const addressElement = document.getElementById('address');
const schoolElement = document.getElementById('school');
const notesElement = document.getElementById('notizen');
const freundeskreisElement = document.getElementById('freundeskreis');
const partnerElement = document.getElementById('partner');
const singleElement = document.getElementById('single');
const haareElement = document.getElementById('haare');
const gewichtElement = document.getElementById('gewicht');
const größeElement = document.getElementById('größe');
const mutterElement = document.getElementById('mutter');
const vaterElement = document.getElementById('vater');
const geschwisterElement = document.getElementById('geschwister');
const hobbiesElement = document.getElementById('hobbies');
const noPhotoText = "Kein Foto bekannt";

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const person = peopleData.find(person => person.name.toLowerCase() === searchTerm);

  if (person) {
    nameElement.textContent = person.name;
    birthdayElement.textContent = person.birthday;
    fullNameElement.textContent = person.fullName;
    addressElement.textContent = person.address;
    schoolElement.textContent = person.school;
    notesElement.textContent = person.Notes;
    singleElement.textContent = person.Single;
    partnerElement.textContent = person.Partner;
    freundeskreisElement.textContent = person.Freundeskreis;
    haareElement.textContent = person.Haare;
    größeElement.textContent = person.Größe;
    gewichtElement.textContent = person.Gewicht;
    mutterElement.textContent = person.Mutter;
    vaterElement.textContent = person.Vater;
    geschwisterElement.textContent = person.Geschwister;
    hobbiesElement.textContent = person.Hobbies;
    result.style.display = 'block';
    speakText(person);
   
  } else {
    result.style.display = 'none';
  }
});
