// //Descrizione:
// Scrivere un programma che chieda all’utente:
// Il numero di chilometri da percorrere
// Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console. 

// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. 
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// MILESTONE 3:
// Ora che la logica è funzionante in pagina, possiamo andare a dedicarci allo stile, raffinando la parte di HTML e CSS in modo da renderla esteticamente gradevole.

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
  // recupero gli id del form
  const form = document.querySelector('form');
  const fullNameInput = document.getElementById('full-name');
  const distanceInput = document.getElementById('distance');
  const ageRangeSelect = document.getElementById('age-range');

  // recupero anche gli id del dom
  const showName = document.getElementById('show-name');
  const showOffer = document.getElementById('ticket');
  const showWagon = document.getElementById('wagon');
  const showCodeCP = document.getElementById('code-cp');
  const showPrice = document.getElementById('price');

 // Handle form submission
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent actual form submission

    // Get values from inputs
    const fullName = fullNameInput.value.trim();
    const distance = parseFloat(distanceInput.value);
    const ageRange = ageRangeSelect.value;

    // Validation
    if (!fullName || isNaN(distance) || distance <= 0 || ageRange === 'choice') {
      alert("Per favore compila tutti i campi correttamente.");
      return;
    }

    // Constants
    const pricePerKm = 0.21;
    let ticketPrice = distance * pricePerKm;
    let offer = "Standard";

    // Apply discounts based on age
    if (ageRange === 'minor') {
      ticketPrice *= 0.8;
      offer = "Sconto Minorenne";
    } else if (ageRange === 'anziano') {
      ticketPrice *= 0.6;
      offer = "Sconto Over 65";
    }

    // Round price to 2 decimals
    ticketPrice = ticketPrice.toFixed(2);

    // Generate random wagon and CP code
    const wagonNumber = Math.floor(Math.random() * 12) + 1;
    const codeCP = Math.floor(Math.random() * 90000) + 10000;

    // Update the ticket section
    showName.innerText = fullName.toUpperCase();
    showOffer.innerText = offer;
    showWagon.innerText = wagonNumber;
    showCodeCP.innerText = codeCP;
    showPrice.innerText = `€ ${ticketPrice}`;
  });

  // Reset form on "Annulla" button
  const resetButton = document.querySelectorAll('button')[1]; // Second button
  resetButton.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form reset

    form.reset();

    // Reset ticket display
    showName.innerText = "JOHN SNOW";
    showOffer.innerText = "-----";
    showWagon.innerText = "-----";
    showCodeCP.innerText = "-----";
    showPrice.innerText = "-----";
  });
});
