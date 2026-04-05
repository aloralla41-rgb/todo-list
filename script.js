const DB_URL = "https://tinkr.tech/sdb-ui/todo%20list/todo%20list";
const API_KEY = "pykbu6JQvfcuBCZIJ-Ko1SPFWDrOZHK1R_MOTxsOlsE";

function loadTodos() {
  fetch(DB_URL, {
    headers: { "Authorization": API_KEY }
  })
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("todoList");
    list.innerHTML = "";
    data.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item.text;
      list.appendChild(li);
    });
  });
}
function addTodo() {
  const text = document.getElementById("todoInput").value;
  if (!text) return;

  fetch(DB_URL, {
    method: "POST",
    headers: {
      "Authorization": API_KEY,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text: text })
  })
  .then(() => {
    document.getElementById("todoInput").value = "";
    loadTodos();
  });
}

loadTodos(); 
