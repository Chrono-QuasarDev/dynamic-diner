import burgerImage from ".//images/burger.png";

export function heroContent() {
  const hero = document.createElement("div");
  hero.classList.add("hero");
  
  const heroText = document.createElement("div");
  heroText.classList.add("hero-text");

  const badge = document.createElement("span");
  badge.classList.add("badge");
  badge.textContent = "🔥 Fresh • Juicy • Handmade";

  const heroTitle = document.createElement("h1");
  heroTitle.textContent = 'The Ultimate';
  const lineBreak = document.createElement("br")
  const titleSpan = document.createElement("span")
  titleSpan.textContent = "Burger Club";

  const paragraph = document.createElement("p");
  paragraph.textContent = `Savor the flavor. Crafted with passion, stacked with perfection, and grilled to absolute greatness.`;

  const ctaButtons = document.createElement("div");
  ctaButtons.classList.add("cta-buttons");

  const primaryButton = document.createElement("button");
  primaryButton.classList.add("primary");
  primaryButton.textContent = "View Menu";

  const secondaryButton = document.createElement("button");
  secondaryButton.classList.add("secondary");
  secondaryButton.textContent = "Order Now";

  const trust = document.createElement("div");
  trust.classList.add("trust");

  trust.innerHTML = `
    <div>⭐ 4.9 Rating</div>
    <div>🍔 10k+ Burgers Served</div>
    <div>📍 Local Favorite</div>
  `;

  const heroImage = document.createElement("div");
  heroImage.classList.add("hero-img");

  const image = document.createElement("img");
  image.src = burgerImage;
  image.alt = "Deliciously stacked burger";

  hero.append(heroText, heroImage);
  heroText.append(badge, heroTitle, paragraph, ctaButtons, trust);
  heroTitle.append(lineBreak, titleSpan);
  ctaButtons.append(primaryButton, secondaryButton);
  heroImage.appendChild(image);
  
  return hero;
}