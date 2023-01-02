export function contactsLoad() {
  const content = document.querySelector("#content");

  const headline = document.createElement("h1");
  const image = document.createElement("img");
  const about = document.createElement("p");

  content.appendChild(headline);
  content.appendChild(image);
  content.appendChild(about);

  image.src = "../src/jason-leung-poI7DelFiVA-unsplash.jpg";
  headline.textContent = "Contacts";
  about.textContent =
    "Srsly guys. This is the BEST. RESTAURANT. EVAAAR! Here is why: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. ";
}
