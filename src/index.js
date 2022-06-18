import "./styles.css";

const onClickAdd = () => {
  // input text
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // imcomplete list
  const imcomleteList = document.getElementById("imcomplete-list");

  // div
  const div = document.createElement("div");
  div.className = "list-row";

  // li
  const li = document.createElement("li");
  li.innerText = inputText;

  // button(complete)
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("completed");
  });

  // button(delete)
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    alert("deleted");
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  imcomleteList.appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
