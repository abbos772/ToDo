const inputName = document.querySelector(".form__input-name");
const form = document.querySelector(".form");
const tbody = document.querySelector(".table tbody");
const check = document.querySelector(".check");
const td = document.querySelector(".dd");

check.addEventListener("click", () => {
  inputName.classList.toggle("show");
});

let now = new Date();
let hour = now.getHours();
let minute = now.getMinutes();
let second = now.getSeconds();
hour = hour < 10 ? "0" + hour : hour;
minute = minute < 10 ? "0" + minute : minute;
second = second < 10 ? "0" + second : second;

const DATA = [{ name: "Piyoz", id: now.getTime(), vaqt: "17:50" }];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let newUser = {
    id: `id-${new Date().getTime()}`,
    name: inputName.value,
  };
  DATA.push(newUser);
  console.log(DATA);
  createTable(DATA);
  inputName.value = "";
});

function createTable(data) {
  while (tbody.firstChild) {
    tbody.firstChild.remove();
  }
  data.forEach((user, index) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `
    <td><input type="checkbox" name="checkbox" id="checkk" class = "check"></td>
        <td class = "dd" >${user.name}</td>
        <td>${now.getHours()}:${now.getMinutes()}</td>
        <td><button onclick = 'deleteUser(${index})'  class="btn-danger">X<alt=""></button></td>
        `;
    tbody.appendChild(tr);
  });
}

createTable(DATA);

function deleteUser(index) {
  DATA.splice(index, 1);
  createTable(DATA);
}
