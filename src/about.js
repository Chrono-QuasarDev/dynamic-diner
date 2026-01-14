export function aboutContent() {
  const section = document.createElement("section");
  section.classList.add("about");

  const title = document.createElement("h1");
  title.textContent = "About Dynamic Diner";

  const tagline = document.createElement("p");
  tagline.classList.add("about-tagline");
  tagline.textContent =
    "Where fire meets flavor, and burgers become memories.";

  const content = document.createElement("div");
  content.classList.add("about-content");

  const story = document.createElement("p");
  story.textContent =
    "Dynamic Diner was born from a simple idea: burgers should be bold, honest, and unforgettable. No frozen shortcuts. No boring bites. Just flame-grilled beef, carefully chosen ingredients, and recipes refined through obsession.";

  const philosophy = document.createElement("p");
  philosophy.textContent =
    "Every burger we serve is built with intention — from the sear on the patty to the balance of sauces. We believe great food doesn’t need to shout. It just needs to be done right.";

  const signature = document.createElement("p");
  signature.classList.add("about-signature");
  signature.textContent = "— The Dynamic Diner Kitchen";

  content.append(story, philosophy, signature);
  section.append(title, tagline, content);

  return section;
}
