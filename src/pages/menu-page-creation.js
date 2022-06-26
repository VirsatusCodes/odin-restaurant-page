export {menuPageRender};
import picture from '.././img/food.jpeg';

const  menuItemFactory = (itemName, itemDescription, image) => {
    return {itemName, itemDescription, image}   
  };

function menuPageRender(){
    const menuItems = [];
    /* having this would mean making an interface for the restaurant
    to change their menu items as well but here i wont go the extra mile */

  const lasagna = menuItemFactory('lasagna', 'delicious tasty multi-dough layered goodness', picture);
  menuItems.push(lasagna);
 
  const sandwiches = menuItemFactory('sandwiches!', 'a personnel favorite! can never get over the variations and deliciousness of a good sandwich!', picture);
  menuItems.push(sandwiches);

  for(let i = 0 ; i < menuItems.length; i++){
      const box = document.createElement('div');
      box.classList.add('menu-box');
      content.appendChild(box);

      const MenuItemName = document.createElement('h2');
      MenuItemName.classList.add('text');
      box.appendChild(MenuItemName);
      MenuItemName.textContent= menuItems[i].itemName;

      const menuItemDescription = document.createElement('p');
      menuItemDescription.classList.add('text');
      box.appendChild(menuItemDescription);
      menuItemDescription.textContent= menuItems[i].itemDescription;

      const menuItemPicture = document.createElement('img');
      menuItemPicture.classList.add('img');
      box.appendChild(menuItemPicture);
      menuItemPicture.src= menuItems[i].image;
  };

}