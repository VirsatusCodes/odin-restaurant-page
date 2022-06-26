export {menuPageRender};

const  menuItemFactory = (itemName, itemDescription) => {
    return {itemName, itemDescription}   
  };


function menuPageRender(){
    const menuItems = [];
    /* having this would mean making an interface for the restaurant
    to change their menu items as well but here i wont go the extra mile */

  const lasagna = menuItemFactory('lasagna', 'delicious tasty multi-dough layered goodness');
  menuItems.push(lasagna);
 
  const sandwiches = menuItemFactory('sandwiches!', 'a personnel favorite! can never get over the variations and deliciousness of a good sandwich!');
  menuItems.push(sandwiches);

  for(let i = 0 ; i < menuItems.length; i++){
      const box = document.createElement('div');
      box.classList.add('box');
      content.appendChild(box);

      const MenuItemName = document.createElement('h2');
      MenuItemName.classList.add('text');
      box.appendChild(MenuItemName);
      MenuItemName.textContent= menuItems[i].itemName;

      const menuItemDescription = document.createElement('p');
      menuItemDescription.classList.add('text');
      box.appendChild(menuItemDescription);
      menuItemDescription.textContent= menuItems[i].itemDescription;
  };

}