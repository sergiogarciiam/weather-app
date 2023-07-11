export const createLinks = () => {
  const links = document.createElement("p");
  const author = document.createElement("a");
  const separator = document.createElement("p");
  const source = document.createElement("a");

  links.classList.add("links");

  author.textContent = "Sergio García";
  author.href = "https://github.com/sergiogarciiam";
  author.target = "__blank";

  separator.textContent = " | ";

  source.textContent = "Source Code";
  source.href = "https://github.com/sergiogarciiam/weather-app";
  source.target = "__blank";

  links.appendChild(author);
  links.appendChild(separator);
  links.appendChild(source);

  return links;
};
