import utltimateBurger  from ".//images/ultimate-burger.jpg";
import cheeseBurger from ".//images/menu-1.jpg";
import bbqBurger from ".//images/menu-3.png";
import infernoBurger from ".//images/menu-2.jpg";
import stackMonster from ".//images/menu-4.jpg";


export function menuContent() {
  const section = document.createElement("section");
  section.classList.add("menu");

  const menuTitle = document.createElement("h1");
  menuTitle.classList.add("menu-title");
  menuTitle.textContent = "Our Burgers"

  const menuSubtitle = document.createElement("p");
  menuSubtitle.classList.add("menu-subtitle");
  menuSubtitle.textContent = "🔥 Crafted fresh • Grilled hot • Built for hunger.";

  // Ultimate Burger Feature
  const utltimateBurgerContainer = document.createElement("div");
  utltimateBurgerContainer.classList.add("ultimate-burger");

  const ultimateInner = document.createElement("div");
  ultimateInner.classList.add("ultimate-inner");

  const ultimateContent = document.createElement("div");
  ultimateContent.classList.add("ultimate-content");

  const h2 = document.createElement("h2");
  h2.textContent = "The Ultimate Burger";

  const ultimateDescription = document.createElement("p");
  ultimateDescription.classList.add("ultimate-description");
  ultimateDescription.textContent = `Triple flame-grilled beef, molten cheddar & swiss,
  caramelized onions, smoked bacon, special house sauce,
  layered on a butter-toasted brioche crown.`;

  const ultimateTagline = document.createElement("p");
  ultimateTagline.classList.add("ultimate-tagline");
  ultimateTagline.textContent = "Not for the light-hearted. Built to dominate hunger.";

  const ultimatePrice = document.createElement("span");
  ultimatePrice.classList.add("ultimate-price");
  ultimatePrice.textContent = "$16.99";

  const utltimateImage = document.createElement("div");
  utltimateImage.classList.add("ultimate-image");

  const ultimateBurgerImage = document.createElement("img");
  ultimateBurgerImage.src = utltimateBurger;
  ultimateBurgerImage.alt = "The Ultimate Burger";

  
  // Menu Items Section
  const menuGrid = document.createElement("div");
  menuGrid.classList.add("menu-grid");

  // First Menu Item
  const menuItem1 = document.createElement("div");
  menuItem1.classList.add("menu-item");

  const menuImageContainer1 = document.createElement("div");
  menuImageContainer1.classList.add("menu-image");

  const menuImage1 = document.createElement("img")
  menuImage1.src = cheeseBurger;
  menuImage1.alt = "Classic Cheeseburger";

  const itemDescription1 = document.createElement("div");
  itemDescription1.classList.add("item-description");

  const itemName = document.createElement("h2");
  itemName.textContent = 'Classic Cheeseburger';

  const aboutItem = document.createElement("p");
  aboutItem.textContent = 'Juicy beef patty, melted cheddar, lettuce, tomato, house sauce on a toasted brioche bun.';

  const price = document.createElement("span");
  price.classList.add("price");
  price.textContent = "$8.99";

  // Second Menu Item
  const menuItem2 = document.createElement("div");
  menuItem2.classList.add("menu-item");

  const menuImageContainer2 = document.createElement("div");
  menuImageContainer2.classList.add("menu-image");

  const menuImage2 = document.createElement("img")
  menuImage2.src = bbqBurger;
  menuImage2.alt = "Smoky BBQ Burger";

  const itemDescription2 = document.createElement("div");
  itemDescription2.classList.add("item-description");

  const itemName2 = document.createElement("h2");
  itemName2.textContent = 'Smoky BBQ Burger';

  const aboutItem2 = document.createElement("p");
  aboutItem2.textContent = 'Flame-grilled beef, crispy bacon, onion rings, smoky BBQ sauce.';

  const price2 = document.createElement("span");
  price2.classList.add("price");
  price2.textContent = "$10.49";


  // Third Menu Item
  const menuItem3 = document.createElement("div");
  menuItem3.classList.add("menu-item");

  const menuImageContainer3 = document.createElement("div");
  menuImageContainer3.classList.add("menu-image");

  const menuImage3 = document.createElement("img")
  menuImage3.src = infernoBurger;
  menuImage3.alt = "Spicy Inferno Burger";

  const itemDescription3 = document.createElement("div");
  itemDescription3.classList.add("item-description");

  const itemName3 = document.createElement("h2");
  itemName3.textContent = 'Spicy Inferno Burger';

  const aboutItem3 = document.createElement("p");
  aboutItem3.textContent = 'Pepper jack cheese, jalapeños, chili mayo, bold heat for brave souls.';

  const price3 = document.createElement("span");
  price3.classList.add("price");
  price3.textContent = "$9.99";


  // Third Menu Item
  const menuItem4 = document.createElement("div");
  menuItem4.classList.add("menu-item");

  const menuImageContainer4 = document.createElement("div");
  menuImageContainer4.classList.add("menu-image");

  const menuImage4 = document.createElement("img")
  menuImage4.src = stackMonster;
  menuImage4.alt = "Double Stack Monster";

  const itemDescription4 = document.createElement("div");
  itemDescription4.classList.add("item-description");

  const itemName4 = document.createElement("h2");
  itemName4.textContent = 'Double Stack Monster';

  const aboutItem4 = document.createElement("p");
  aboutItem4.textContent = 'Two beef patties, double cheese, pickles, signature monster sauce.';

  const price4 = document.createElement("span");
  price4.classList.add("price");
  price4.textContent = "$12.99";

  section.append(menuTitle, menuSubtitle, utltimateBurgerContainer, menuGrid);

  // Ultimate Burger Render
  utltimateBurgerContainer.append(ultimateInner);
  ultimateInner.append(ultimateContent, utltimateImage);
  ultimateContent.append(h2, ultimateDescription, ultimateTagline, ultimatePrice);
  utltimateImage.appendChild(ultimateBurgerImage);

  // Menu Items Render
  menuGrid.append(menuItem1, menuItem2, menuItem3, menuItem4);

  menuItem1.append(menuImageContainer1, itemDescription1);
  menuImageContainer1.appendChild(menuImage1);
  itemDescription1.append(itemName, aboutItem, price);

  menuItem2.append(menuImageContainer2, itemDescription2);
  menuImageContainer2.appendChild(menuImage2);
  itemDescription2.append(itemName2, aboutItem2, price2)

  menuItem3.append(menuImageContainer3, itemDescription3);
  menuImageContainer3.appendChild(menuImage3);
  itemDescription3.append(itemName3, aboutItem3, price3);

  menuItem4.append(menuImageContainer4, itemDescription4);
  menuImageContainer4.appendChild(menuImage4);
  itemDescription4.append(itemName4, aboutItem4, price4);

  return section;
}