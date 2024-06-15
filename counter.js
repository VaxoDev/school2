let stamCounter = 1000;
const stamCounterElement = document.querySelector('.stam');
const stamCounterElement2 = document.querySelector('.stam2');

function incrementStamCounter() {
  const formattedNumber = `${stamCounter}+`;
  stamCounterElement.textContent = formattedNumber;
  stamCounterElement2.textContent = formattedNumber;
  stamCounter++;
  if (stamCounter > 1500) {
    clearInterval(stamIntervalId);
  }
}
const stamIntervalId = setInterval(incrementStamCounter, 1);

let staffCounter = 0;
const staffCounterElement = document.querySelector('.staff');
const staffCounterElement2 = document.querySelector('.staff2');

function incrementStaffCounter() {
  const formattedNumber = `${staffCounter}`;
  staffCounterElement.textContent = formattedNumber;
  staffCounterElement2.textContent = formattedNumber;
  staffCounter++;
  if (staffCounter > 100) {
    clearInterval(staffIntervalId);
  }
}
const staffIntervalId = setInterval(incrementStaffCounter, 20);

let langCounter = 0;
const langCounterElement = document.querySelector('.lang');
const langCounterElement2 = document.querySelector('.lang2');

function incrementLangCounter() {
  const formattedNumber = `${langCounter}`;
  langCounterElement.textContent = formattedNumber;
  langCounterElement2.textContent = formattedNumber;
  langCounter++;
  if (langCounter > 5) {
    clearInterval(langIntervalId);
  }
}
const langIntervalId = setInterval(incrementLangCounter, 500);