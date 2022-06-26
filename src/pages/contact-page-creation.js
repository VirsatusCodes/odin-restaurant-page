export {contactPageRender};

function contactPageRender() {
const content = document.querySelector('#content');
const greetingText = "Contact us"
const nameText = "Bob"
const contactInfo = ' you can contact me via phone: (XXX)-XXX-XXXX \r\n or email! bobbyboucher@waterboy.com'

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

const introductionBox=document.createElement('h3');
introductionBox.classList.add('text');
box2.appendChild(introductionBox);
introductionBox.textContent= nameText;

const contactInfoBox=document.createElement('p')
contactInfoBox.classList.add('text');
box2.appendChild(contactInfoBox);
contactInfoBox.textContent= contactInfo;
};