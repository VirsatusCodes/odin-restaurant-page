import './style.css';
import * as contactPage from './pages/contact-page-creation';
import * as menuPage from './pages/menu-page-creation';
import * as initialPage from './pages/initial-page-creation';
/* npx webpack | npx webpack --watch | for the terminal*/

const domManipulation = (() => {

    initialPage.buttonsRender();
    initialPage.initialPageRender();

    function clearDOM() {
       while(content.children[1])content.children[1].remove();
    };

    const homeButton = document.querySelector('#initial-page');
    homeButton.addEventListener('click', () => {
    console.log('test');
    clearDOM();
    initialPage.initialPageRender();   
    })

    const menuButton = document.querySelector('#menu-page');
    menuButton.addEventListener('click', () => {
    console.log('test');
    clearDOM();
    contactPage.contactPageRender();  
    })
    
    
    return {}
 })();



/* function clearDOM() {
    const staticNodeList = 
   for(let i = 1 ; i < content.children.length ; i++) {
       content.children[i].remove();
   }
} */