const DB_URL = "https://tinkr.tech/sdb/todolist";

function loadTodos() {
  fetch(DB_URL)
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
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: text })
  })
  .then(() => {
    document.getElementById("todoInput").value = "";
    loadTodos();
  });
}

loadTodos();