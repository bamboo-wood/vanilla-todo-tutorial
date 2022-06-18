import "./styles.css";

// incomplete list
const incompleteList = document.getElementById("incomplete-list");

// complete list
const completeList = document.getElementById("complete-list");

const onClickAdd = () => {
  // get value user input text.
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // create incomplete-row.
  const li = document.createElement("li");

  // create incomplete-element.
  const div = document.createElement("div");
  div.className = "list-row";

  // create incomplete-paragraph.
  const p = document.createElement("p");
  p.innerText = inputText;

  // create complete-button.
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // delete incomplete-element from incomplete-list.
    deleteFromimcompleteList(completeButton.closest("li"));

    // get element add to completed-list.
    const addTarget = completeButton.closest("li");

    // get todo's name
    const text = addTarget.firstElementChild.firstElementChild.innerText;

    addTarget.textContent = null;

    // create completed-element.
    const div = document.createElement("div");
    div.className = "list-row";

    // create completed-paragraph.
    const p = document.createElement("p");
    p.innerText = text;

    // create back-button
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    // set some element to completed element.
    div.appendChild(p);
    div.appendChild(backButton);
    addTarget.appendChild(div);

    // add complete-element to completed-list.
    completeList.appendChild(addTarget);
  });

  // create delete-button
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromimcompleteList(deleteButton.closest("li"));
  });

  // set some element to incomplete element.
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  // add incomplete-element to incomplete-list.
  incompleteList.appendChild(li);
};

// delete target element from incomplete list.
const deleteFromimcompleteList = (target) => {
  incompleteList.removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
