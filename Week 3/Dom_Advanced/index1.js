function addDiv() {
  const div = document.createElement("div");
  div.innerHTML = "<h1>Hi There</h1>";

  document.querySelector("body").appendChild(div);
}
