const formEl = document.getElementById("formEl");
console.log(formEl);
const itemInput = document.getElementById("itemInput");
console.log(itemInput);
const addBtn = document.getElementById("addBtn");
console.log(addBtn);
const listItem = document.getElementById("listItem");
console.log(listItem);
const deleteBtn = document.getElementsByClassName("deleteBtn");
console.log(deleteBtn);

function addItem(e) {
  e.preventDefault();
  const inputValue = itemInput.value;
  console.log(inputValue);

  if (inputValue) {
    const divEl = document.createElement("div");
    divEl.className = "bg-gray-600 max-w-sm p-2 rounded text-white m-4";

    const createList = document.createElement("li");
    createList.className = "flex items-center justify-between";
    createList.textContent = inputValue;

    const createBtn = document.createElement("button");
    createBtn.className = "bg-red-600 p-2 rounded hover:bg-red-700";
    createBtn.innerText = "x";

    divEl.append(createList);
    createList.append(createBtn);

    console.log(divEl);
    listItem.append(divEl);

    //console.log(listItem);
    formEl.reset();
  }
}

formEl.addEventListener("submit", addItem);
