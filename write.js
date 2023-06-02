let titleElement = document.getElementById("title");
let name = new URLSearchParams(window.location.search).get("name");
if (name !== null) {
  titleElement.innerHTML = `Hello ${name}`;
}