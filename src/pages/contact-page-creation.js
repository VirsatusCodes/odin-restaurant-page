export {contactPageRender};

function contactPageRender() {
const content = document.querySelector('#content');
const greetingText = "Other PAGE!!!"
const introductionText = "Welcome to the restaurant! we have a wide selection of our favorites from all around the world! we hope that if you dine in you feel welcome and comfortable, and if you order out you find the food delicious and comforting!"
const hoursText = 'Sunday: 8am - 8pm \r\n Monday: 6am - 6pm \r\n Tuesday: 6am - 6pm \r\n Wednesday: 6am - 6pm \r\n Thursday: 6am - 10pm \r\n Friday: 6am - 10pm \r\n Saturday: 8am - 10pm'

const box1 = document.createElement('div');
box1.classList.add('box');
content.appendChild(box1);
const greetingBox = document.createElement('h1');

greetingBox.classList.add('text');
box1.appendChild(greetingBox);
greetingBox.textContent= greetingText;

const box2 = document.createElement('div');
box2.classList.add('box');
content.appendChild(box2);

const introductionBox=document.createElement('p');
introductionBox.classList.add('text');
box2.appendChild(introductionBox);
introductionBox.textContent= introductionText;

const box3 = document.createElement('div');
box3.classList.add('box');
content.appendChild(box3);

const hoursBox = document.createElement('p');
hoursBox.classList.add('text');
box3.appendChild(hoursBox);
hoursBox.textContent = hoursText;
};