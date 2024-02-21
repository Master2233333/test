


  // Function to generate random police messages


// Mock data for multiple people
const peopleData = [
    {
      name: "Leonard",
      birthday: "03.03.2010",
      fullName: "Singer",
      photo: false,
      address: "In Fischeln, ansonsten unbekannt",
      school: "Frei-Herr-Vom-Stein (Realschule), Krefeld"
    },
  {
      name: "Yusuf Kaplan",
      birthday: "10.11.2008",
      fullName: "Kaplan",
      photo: false,
      address: "Braunschweig",
      school: "Unbekannt"
    },
  {
      name: "Marta Szumilas",
      birthday: "15.03.2009",
      fullName: "Szmulias",
      photo: false,
      address: "Ritterstrase krefeld",
      school: "Frei-Herr-Vom-Stein (Realschule), Krefeld"
    },
    // Add more people here
  ];
  
  const searchInput = document.getElementById('searchInput');
  const result = document.getElementById('result');
  const nameElement = document.getElementById('name');
  const birthdayElement = document.getElementById('birthday');
  const fullNameElement = document.getElementById('fullName');
  const photoElement = document.getElementById('photo');
  const addressElement = document.getElementById('address');
  const schoolElement = document.getElementById('school');
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
      result.style.display = 'block';
      
      // Animation for sliding in from the top
      result.style.animation = 'slideIn 0.5s forwards';
  
      if (person.photo) {
        photoElement.src = "placeholder.jpg"; // Provide the path to the placeholder image or some default image
        photoElement.style.display = 'block';
      } else {
        photoElement.style.display = 'none';
        photoElement.src = ""; // Clear src attribute
        photoElement.textContent = noPhotoText;
      }
    } else {
      result.style.display = 'none';
    }
  });

  function generateRandomPoliceMessages() {
    const messages = [
        "Einbruch auf der Hauptstraße",
        "Diebstahl an der Bahnhofstraße",
        "Autounfall auf der Autobahn A3",
        "Raubüberfall in der Kirchenallee",
        "Sachbeschädigung an der Lindenstraße",
        "Brandstiftung in der Ahornweg",
        "Drogenhandel in der Eichenallee",
        "Körperverletzung auf dem Marktplatz",
        "Einbruch in die Apotheke am Markt",
        "Fahrerflucht auf der Rosenweg",
        "Diebstahl in der Parkstraße",
        "Raubüberfall in der Goethestraße",
        "Sexuelle Belästigung in der Schillerplatz",
        "Hausfriedensbruch in der Mozartstraße",
        "Widerstand gegen die Staatsgewalt in der Bergstraße",
        "Schwarzfahren in der Bahnstraße",
        "Einbruch in das Juweliergeschäft in der Händelallee",
        "Trunkenheit am Steuer in der Lindenallee",
        "Verstoß gegen das Betäubungsmittelgesetz in der Gartenstraße",
        "Fahrraddiebstahl am Bahnhof",
        "Vandalismus in der Industriestraße",
        "Körperverletzung in der Schulstraße",
        "Häusliche Gewalt in der Tannenweg",
        "Verkehrsunfallflucht in der Feldstraße",
        "Schwarzarbeit auf dem Bauernhofweg",
        "Schwarzmarktverkauf in der Friedrichstraße",
        "Hehlerei in der Reeperbahn",
        "Illegale Prostitution in der Rotlichtviertel",
        "Gefährliche Körperverletzung in der Hauptallee",
        "Kreditkartenbetrug in der Bankstraße",
        "Internetbetrug in der Online-Geschäft",
        "Körperverletzung auf dem Fußballplatz",
        "Hausfriedensbruch im Supermarkt",
        "Drogenhandel in der Diskothek",
        "Betrug in der Immobilienbranche",
        "Sachbeschädigung im Park",
        "Raubüberfall in der Tankstelle",
        "Betrug in der Gastronomie",
        "Illegaler Waffenbesitz in der Wohnsiedlung",
        "Verstoß gegen das Tierschutzgesetz im Tierheim",
        "Sexuelle Belästigung im Schwimmbad",
        "Raubüberfall im Juweliergeschäft",
        "Sachbeschädigung an öffentlichen Einrichtungen",
        "Diebstahl von Kfz-Teilen",
        "Betrug beim Online-Shopping",
        "Illegale Einwanderung",
        "Schwarzarbeit auf Baustellen",
        "Fälschung von Markenartikeln",
        "Umweltverschmutzung im Naturschutzgebiet",
        "Steuerhinterziehung",
        "Verstoß gegen das Jugendschutzgesetz",
        "Betrug mit gefälschten Dokumenten",
        "Illegaler Handel mit exotischen Tieren",
        "Bestechung im öffentlichen Dienst",
        "Verstoß gegen das Waffengesetz",
        "Betrug mit gefälschten Arzneimitteln",
        "Korruption im Unternehmen",
        "Gewerbsmäßiger Diebstahl",
        "Geldwäsche",
        "Menschenhandel",
        "Sprengstoffanschlag",
        "Raubmord in der Innenstadt",
        "Entführung in der Wohngegend",
        "Organisiertes Verbrechen",
        "Terroranschlag am Flughafen",
        "Banküberfall in der Bankfiliale",
        "Mord in der Kleinstadt",
        "Großangelegte Drogenrazzia",
        "Schmuggel von illegalen Substanzen",
        "Betrug mit gefälschten Kunstwerken",
        "Verrat von Staatsgeheimnissen",
        "Spionageaktion in der Regierung",
        "Sabotage an der Industrieanlage",
        "Entführung eines hochrangigen Politikers",
        "Bombendrohung im Einkaufszentrum",
        "Auftragsmord im Mafia-Milieu",
        "Gewalttätige Demonstrationen",
        "Geiselnahme in der Bank",
        "Angriff auf Polizeibeamte",
        "Anschlag auf Regierungsgebäude",
        "Schiffsentführung auf hoher See",
        "Hackerangriff auf wichtige Institutionen",
        "Illegaler Handel mit Kriegswaffen",
        "Kampf gegen Terrorismus",
        "Gegenmaßnahmen zur Bekämpfung der Kriminalität",
        "Gefährlicher Drogenkurier",
        "Beweissicherung am Tatort",
        "Verhör von Verdächtigen",
        "Internationale Fahndung nach Verbrechern",
        "Undercover-Einsatz zur Aufklärung von Verbrechen",
        "Beschlagnahmung illegaler Vermögenswerte",
        "Einsatz von Spürhunden bei der Suche nach Drogen",
        "Überwachung von Verdächtigen durch Observation",
        "Ermittlungen gegen die organisierte Kriminalität",
        "Sonderkommission zur Aufklärung von Verbrechen",
        "Forensische Untersuchung von Beweismitteln",
        "Einsatz von Spezialeinheiten bei Geiselnahmen",
        "Abhörmaßnahmen zur Aufdeckung von Straftaten",
        "Kriminaltechnische Untersuchung von Spuren",
        "Schutz von Zeugen vor möglicher Gefährdung",
        "Aufklärung von Vermisstenfällen",
        "Einsatz von Drohnen zur Überwachung",
        "Verdeckte Ermittlungen gegen Kriminelle",
        "Einsatz von Lockvögeln zur Ergreifung von Tätern",
        "Befragung von Augenzeugen",
        "Zerschlagung von Drogenkartellen",
        "Gesichtserkennung zur Identifizierung von Verdächtigen",
        "Aufdeckung von Korruption in öffentlichen Ämtern",
        "Aufklärung von Tötungsdelikten",
        "Zusammenarbeit mit internationalen Behörden",
        "Razzia gegen illegale Glücksspielbetriebe",
        "Analyse von Telekommunikationsdaten",
        "Täterprofilanalyse zur Ermittlung von Verdächtigen",
        "Gezielte Fahndung nach Schwerverbrechern",
        "Einsatz von Sondermitteln zur Verbrechensbekämpfung",
        "Durchsuchung von Wohnungen mit richterlichem Beschluss",
        "Beschlagnahmung von illegal erworbenem Vermögen",
        "Durchführung von DNA-Analysen bei Straftaten",
        "Einsatz von Undercover-Agenten zur Informationsbeschaffung",
        "Verhaftung von international gesuchten Verbrechern",
        "Erstellung von Phantombildern von Tatverdächtigen",
        "Rückführung gestohlener Kunstwerke",
        "Beseitigung von Sprengstofffunden durch Spezialkräfte",
        "Verhinderung von Geldwäscheaktivitäten",
        "Durchsetzung von Fahrverboten bei Verkehrsvergehen",
        "Beobachtung von Verdächtigen durch verdeckte Ermittler",
        "Anordnung von Hausdurchsuchungen zur Beweissicherung",
        "Überwachung von Gefährdern durch den Verfassungsschutz",
        "Schutz von Persönlichkeiten des öffentlichen Lebens",
        "Sicherstellung von Beweismitteln für die Gerichtsverhandlung",
        "Verhinderung von illegalen Einwanderungsströmen",
        "Durchführung von Rauschgiftkontrollen an Grenzübergängen",
        "Einsatz von Drohnen zur Überwachung von Großveranstaltungen",
        "Sicherung von Beweismaterial bei internationalen Verbrechen",
        "Schulung von Polizeikräften zur Terrorismusbekämpfung",
        "Gesetzliche Regelungen zur Bekämpfung der organisierten Kriminalität",
        "Durchsetzung von Ausreiseverbote bei Gefährdern",
        "Einsatz von Videoüberwachung zur Prävention von Straftaten",
        "Abschreckung von Drogenhandel durch verstärkte Kontrollen",
        "Bekämpfung von Wirtschaftskriminalität durch Sonderermittlungen",
        "Erfassung von Daten zur Kriminalitätsentwicklung",
        "Schutz von Minderjährigen vor Kriminalität",
        "Beschlagnahmung von illegalen Waffen",
        "Durchführung von Razzien gegen kriminelle Vereinigungen",
        "Sicherung von Beweismitteln durch Spezialkräfte",
        "Gefährderansprachen zur Prävention von Straftaten",
        "Durchsetzung von Ausweisung bei Gefährdern",
        "Abwehr von Cyberangriffen auf staatliche Institutionen",
        "Bekämpfung von Steuerhinterziehung durch internationale Kooperation",
        "Durchsetzung von Handelsbeschränkungen bei illegalen Waren",
        "Einsatz von Schleierfahndern zur Bekämpfung der Schleuserkriminalität",
        "Rückführung von gestohlenen Kunstschätzen",
        "Durchführung von DNA-Analysen bei Vermisstenfällen",
        "Überwachung von Online-Plattformen zur Bekämpfung von Kinderpornografie",
        "Erstellung von Fahndungsplakaten bei Vermisstenmeldungen",
        "Einsatz von Sprengstoffspürhunden bei Großveranstaltungen",
        "Zusammenarbeit mit privaten Sicherheitsdiensten",
        "Durchsetzung von Alkoholverboten in der Öffentlichkeit",
        "Schutz von Unternehmen vor Wirtschaftsspionage",
        "Bekämpfung von Hackerangriffen auf kritische Infrastrukturen",
        "Überwachung von extremistischen Gruppen durch den Verfassungsschutz",
        "Durchsetzung von Haftbefehlen bei schweren Straftaten",
        "Beseitigung von Bombenfunden durch Spezialisten",
        "Durchsetzung von Platzverweisen bei Belästigung",
        "Sicherstellung von Falschgeld bei Geldfälschung",
        "Durchführung von DNA-Analysen bei Massenpanik",
        "Prävention von Terrorismus durch internationale Zusammenarbeit",
        "Einsatz von Tauchern zur Bergung von Beweismitteln",
        "Beschlagnahmung von illegalen Drogen",
        "Durchsetzung von Tierhaltungsverboten bei Tierquälerei",
        "Schutz von Menschenrechten bei polizeilichen Maßnahmen",
        "Gesetzliche Grundlagen zur Verfolgung von Kriminalität",
        "Erstellung von Fahndungslisten bei internationalen Fahndungen",
        "Einsatz von Zivilfahndern zur Erkennung von Straftaten",
        "Überwachung von Grenzübergängen zur Bekämpfung der illegalen Einreise",
        "Verhinderung von Menschenhandel durch verstärkte Kontrollen",
        "Abwehr von Angriffen auf Regierungseinrichtungen",
        "Durchsetzung von Aufenthaltsverboten bei Gefährdern",
        "Überwachung von Ermittlungsverfahren durch die Staatsanwaltschaft",
        "Gesetzliche Regelungen zur Erhebung von Beweisen",
        "Schutz von Opfern bei polizeilichen Maßnahmen",
        "Bekämpfung von Umweltkriminalität durch spezialisierte Einheiten",
        "Durchsetzung von Schutzmaßnahmen bei häuslicher Gewalt",
        "Beschlagnahmung von illegalen Waffenlager",
        "Erstellung von Gefährdungsanalysen zur Verbrechensprävention",
        "Einsatz von Hochleistungskameras zur Videoüberwachung",
        "Kontrolle von Einreisenden zur Abwehr von Terrorgefahr",
        "Durchsetzung von Überwachungsmaßnahmen bei Gefährdern",
        "Überwachung von Telekommunikationsnetzen zur Gefahrenabwehr",
        "Schutz von Religionsgemeinschaften vor Anschlägen",
        "Sicherstellung von illegalen Glücksspielautomaten",
        "Bekämpfung von Falschinformationen im Internet",
        "Durchsetzung von Ausreiseverboten bei Terrorismusverdacht",
        "Einsatz von Atemalkoholtests bei Verkehrsdelikten",
        "Verhinderung von Cyberangriffen auf kritische Infrastrukturen",
        "Überwachung von Sicherheitsbereichen zur Verbrechensprävention",
        "Durchsetzung von Ausreisepflichten bei Gefährdern",
        "Beschlagnahmung von illegalen Gegenständen bei Großrazzien",
        "Erstellung von Gefährdungsstufen zur Einschätzung von Bedrohungen",
        "Einsatz von Leichenspürhunden bei der Suche nach Vermissten",
        "Überwachung von Extremisten durch den Verfassungsschutz",
        "Durchsetzung von Einreiseverboten bei Gefahren für die öffentliche Sicherheit",
        "Schutz von Minderheiten vor Hassverbrechen",
        "Sicherstellung von illegalen Kopien bei Markenrechtsverletzungen",
        "Bekämpfung von illegalen Glücksspielbetrieben durch Razzien",
        "Durchsetzung von Kontaktverboten bei Stalkingfällen",
        "Überwachung von kriminellen Vereinigungen durch verdeckte Ermittler",
        "Sicherung von Gefahrenquellen bei Bombenentschärfungen",
        "Erstellung von Gefährderansprachen zur Verhinderung von Anschlägen",
        "Einsatz von Körperscannern zur Waffenkontrolle",
        "Überwachung von Gefährdern durch elektronische Fußfesseln",
        "Durchsetzung von Einreisekontrollen zur Abwehr von Terroristen",
        "Beschlagnahmung von illegalen Propagandamaterialien",
        "Schutz von Asylsuchenden vor Angriffen",
        "Sicherstellung von illegalen Downloads bei Urheberrechtsverletzungen",
        "Bekämpfung von illegalen Feuerwerken durch gezielte Kontrollen",
        "Durchsetzung von Durchsuchungsbeschlüssen bei schweren Straftaten",
        "Überwachung von Straftätern bei Bewährungsauflagen",
        "Sicherung von Gefährdungsobjekten bei Terrorgefahr",
        "Erstellung von Täterprofilen zur Aufklärung von Straftaten",
        "Einsatz von Scharfschützen zur Gefahrenabwehr",
        "Überwachung von Risikogruppen durch präventive Maßnahmen",
        "Durchsetzung von Platzverweisen bei öffentlichen Unruhen",
        "Beschlagnahmung von illegalen Einwanderungsdokumenten",
        "Schutz von Wirtschaftsunternehmen vor Sabotage",
        "Sicherstellung von illegalen Gegenständen bei Razzien",
        "Bekämpfung von illegalen Autorennen durch verstärkte Kontrollen",
        "Durchsetzung von Sicherheitsmaßnahmen bei Großveranstaltungen",
        "Überwachung von Online-Foren zur Gefahrenabwehr",
        "Sicherung von Spuren bei Großbrandermittlungen",
        "Erstellung von Beweisfotos zur Tatortdokumentation",
        "Einsatz von Lügendetektoren zur Wahrheitsfindung",
        "Überwachung von Gefährdern durch Vorratsdatenspeicherung",
        "Durchsetzung von Meldepflichten bei Straftaten",
        "Beschlagnahmung von illegalen Propagandavideos",
        "Schutz von Personen vor Bedrohungen durch Extremisten",
        "Sicherstellung von illegalen Substanzen bei Razzien",
        "Bekämpfung von Drogenhandel durch verdeckte Ermittlungen",
        "Durchsetzung von Betretungsverboten bei Privatgrundstücken",
        "Überwachung von Personen im Zeugenschutzprogramm",
        "Sicherung von Beweismitteln bei Sprengstoffanschlägen",
        "Erstellung von Fahndungsplakaten bei Vermisstenfällen",
     ];

    const polizeiMessagesDiv = document.getElementById('polizei-messages');

    setInterval(() => {
        const randomIndex = Math.floor(Math.random() * messages.length);
        const randomMessage = messages[randomIndex];
        const messageElement = document.createElement('div');
        messageElement.classList.add('polizei-message');
        messageElement.textContent = randomMessage;
        polizeiMessagesDiv.appendChild(messageElement);

        // Remove the message after 5 seconds
        setTimeout(() => {
            polizeiMessagesDiv.removeChild(messageElement);
        }, 5000);
    }, 6000); // Adjust timing as needed
}
  generateRandomPoliceMessages();
