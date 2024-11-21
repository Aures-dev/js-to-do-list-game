let btn = document.querySelector(".btn");
//lance la fonction d'activation
btn.addEventListener("click", activate);
let userInput;
function activate() {
  //recupère la donnée de l'input
  userInput = document.querySelector(".input").value;
  //crée un li dans le DOM
  let li = document.createElement("li");
  li.setAttribute(
    "class",
    "d-flex justify-content-between align-items-center list-group-item ps-0 pe-3 py-1"
  );
  let text = document.createTextNode(userInput);
  //dépose la donnée de l'input dans li
  li.appendChild(text);
  //crée un button dans le DOM
  let supprBtn = document.createElement("BUTTON");
  supprBtn.setAttribute("class", "bg-danger");
  let temp = document.createTextNode("delete");
  supprBtn.classList.add("btn");
  supprBtn.appendChild(temp);
  //envoi la donnée dans le ul
  if (userInput === "") {
    alert("Ecrivez du contenu");
  } else {
    document.querySelector(".myList").appendChild(li).appendChild(supprBtn);
  }
  //je vide mon input
  document.querySelector(".input").value = "";

  //supprime l'élément quand tu clique sur le delete
  supprBtn.addEventListener("click", () => {
    document.querySelector(".myList").removeChild(li);
  });

  //style le bouton de supression
  li.classList.add("setCursor");
  li.addEventListener("click", () => {
    li.classList.toggle("bg-warning");
    li.classList.toggle("text-decoration-line-through");
    supprBtn.classList.add("text-decoration-none");
  });

  user.storeInLocalStorage(userInput);
}

class dataManager {
  constructor(element) {
    this.id = element;
  }
  storeInLocalStorage(el) {
    this.id++;
    localStorage.setItem(`Task${this.id}`, `${el}`);
  }
}
let count = 0;

let user = new dataManager(count);

//charge les anciennes tâches au chargement de la page
document.addEventListener("DOMContentLoaded", function () {
  let supprBtn = document.createElement("BUTTON");
  supprBtn.setAttribute("class", "bg-danger");
  let temp2 = document.createTextNode("delete");
  supprBtn.classList.add("btn");
  supprBtn.appendChild(temp2);

  let oldTasks = Object.values(localStorage);
  console.log(oldTasks);
  oldTasks.forEach((task) => {
    let li = document.createElement("li");
    li.setAttribute(
      "class",
      "d-flex justify-content-between align-items-center list-group-item ps-0 pe-3 py-1"
    );
    let temp = document.createTextNode(task);
    li.appendChild(temp);
    document.querySelector(".myList").appendChild(li).appendChild(supprBtn);

    supprBtn.addEventListener("click", () => {
      document.querySelector(".myList").removeChild(li);
    });
  });
});
