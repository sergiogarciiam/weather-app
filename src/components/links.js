export const createLinks = () => {
  const links = document.createElement("p");
  const author = document.createElement("a");
  const source = document.createElement("a");

  links.classList.add("links");
  author.textContent = "Sergio García";
  source.textContent = "Source Code";

  links.appendChild(author);
  links.innerText += " | ";
  links.appendChild(source);

  return links;
};
