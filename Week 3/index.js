let ctr = 1;
function addTodo() {
  const inputEl = document.querySelector("input");
  const value = inputEl.value;

  const divEl = document.createElement("div");
  divEl.innerHTML =
    "<div>" +
    value +
    "</div><button onclick='deleteTodo(' + ctr + ')'>Delete</button>";
  divEl.setAttribute("id", ctr);
  ctr = ctr + 1;

  document.querySelector("body").appendChild(divEl);
}

function deleteTodo(index) {
  const element = document.getElementById(index);
  element.parentNode.removeChild(element);
}
