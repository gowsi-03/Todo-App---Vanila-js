const form = document.querySelector("form");
let input = document.querySelector("input");
input.focus();
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let input = document.querySelector("input");
  if (input.value === "") {
    msg.classList.add("error");
    msg.innerHTML = "Please enter fields";
    return false;
  } else if (input.value.length < 5) {
    msg.classList.add("error");
    msg.innerHTML = "Should be more than 5 letters";
    return false;
  } else {
    msg.innerHTML = "sucess";
  }
  acceptData();
  input.value = "";
  msg.innerHTML = "";
});

let data = {};

let acceptData = () => {
  data["text"] = input.value;
  //console.log(data);
  addTodo();
};

function addTodo(text) {
  let ul = document.querySelector("ul");
  let li = document.createElement("li");
  li.innerHTML = `
        <span class="todo-item">${data.text}</span>
        <button name="checkButton"><i class="fas fa-check-square"></i></button>
        <button name="editButton"><i class='fas fa-edit'></i></button>
        <button name="deleteButton"><i class="fas fa-trash"></i></button>
    `;
  li.classList.add("todo-list-item");
  ul.appendChild(li);
}

document
  .querySelector("ul")
  .addEventListener("click", handleClickDeleteOrCheck);
function handleClickDeleteOrCheck(e) {
  if (e.target.name == "checkButton") checkTodo(e);

  if (e.target.name == "editButton") editTodo(e);

  if (e.target.name == "deleteButton") deleteTodo(e);
}

let checkTodo = (e) => {
  let item = e.target.parentNode;
  if (item.style.textDecoration == "line-through")
    item.style.textDecoration = "none";
  else item.style.textDecoration = "line-through";
};
// function checkTodo(e) {
//   let item = e.target.parentNode;
//   if (item.style.textDecoration == "line-through")
//     item.style.textDecoration = "none";
//   else item.style.textDecoration = "line-through";
// }

let editTodo = (e) => {
  let li = document.createElement("li");
  let item = e.target.parentNode;
  //input.value =  li.innerHTML;
  input.value = innerHTML = [data.text];
  input.focus();
  e.target.parentNode.remove();
};
let deleteTodo = (e) => {
  let item = e.target.parentNode;

  item.addEventListener(
    "transitionend",
    (e = () => {
      item.remove();
    })
  );

  item.classList.add("todo-list-item-fall");
};
document.getElementById("clear").addEventListener(
  "click",
  (handleClearAll = (e) => {
    document.querySelector("ul").innerHTML = "";
    input.focus();
  })
);
// document
//   .querySelector("ul")
//   .addEventListener("click", handleClickDeleteOrCheck);
// function handleClickDeleteOrCheck(e) {
//   if (e.target.name == "checkButton") checkTodo(e);

//   if (e.target.name == "editButton") editTodo(e);

//   if (e.target.name == "deleteButton") deleteTodo(e);
// }
// function checkTodo(e) {
//   let item = e.target.parentNode;
//   if (item.style.textDecoration == "line-through")
//     item.style.textDecoration = "none";
//   else item.style.textDecoration = "line-through";
// }

// let editTodo = (e) => {
//   let li = document.createElement("li");
//   let item = e.target.appendChild;
//   input.value = item.innerHTML;
//   //input.value ="";
//   e.target.parentNode.remove();
// };
// function deleteTodo(e) {
//   let item = e.target.parentNode;

//   item.addEventListener("transitionend", function () {
//     item.remove();
//   });

//   item.classList.add("todo-list-item-fall");
// }
// document.getElementById("clear").addEventListener(
//   "click",
//   (handleClearAll = (e) => {
//     document.querySelector("ul").innerHTML = "";
//   })
// );

// handleClearAll);
// function handleClearAll(e) {
//   document.querySelector("ul").innerHTML = "";
// }

// if (input.value === "") {
//   console.log("failure");
// } else {
//   console.log("successs");
//   msg.innerHTML = "sucees";

//   input.value = "";
// }

// let formValidate = () => {
//   if (input.value === "") {
//     console.log("failure");
//   } else {
//     console.log("successs");
//     msg.innerHTML = "";
//   }
// };
