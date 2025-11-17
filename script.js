// This list will hold everything the user adds
let entries = [];

// This tells us what to show (all, income, or expense)
let filter = "all";

// When page loads, get saved entries from browser memory
window.onload = function () {
  let saved = localStorage.getItem("entries");

  if (saved) {
    entries = JSON.parse(saved);
  }

  render();
};

// Save entries to browser memory
function saveData() {
  localStorage.setItem("entries", JSON.stringify(entries));
}

// Clear the form boxes
function resetForm() {
  document.getElementById("desc").value = "";
  document.getElementById("amount").value = "";
  document.getElementById("typeIncome").checked = true;
  document.getElementById("entryId").value = "";
  document.getElementById("addBtn").textContent = "Add Entry";
}

// Add or Edit an entry
function addOrUpdate(event) {
  event.preventDefault(); // stop refresh

  let desc = document.getElementById("desc").value;
  let amount = Number(document.getElementById("amount").value);
  let type = document.querySelector("input[name='type']:checked").value;
  let id = document.getElementById("entryId").value;

  // If id is empty, we add a NEW entry
  if (id === "") {
    let newEntry = {
      id: Date.now(),
      desc: desc,
      amount: amount,
      type: type,
    };

    entries.push(newEntry);
  }
  // Otherwise, we UPDATE an existing entry
  else {
    let entry = entries.find((e) => e.id == id);
    entry.desc = desc;
    entry.amount = amount;
    entry.type = type;
  }

  saveData();
  resetForm();
  render();
}

// Delete an entry
function deleteEntry(id) {
  entries = entries.filter((e) => e.id !== id);
  saveData();
  render();
}

// Edit an entry
function editEntry(id) {
  let entry = entries.find((e) => e.id === id);

  document.getElementById("desc").value = entry.desc;
  document.getElementById("amount").value = entry.amount;

  if (entry.type === "income") {
    document.getElementById("typeIncome").checked = true;
  } else {
    document.getElementById("typeExpense").checked = true;
  }

  document.getElementById("entryId").value = entry.id;
  document.getElementById("addBtn").textContent = "Save Changes";
}

// Change filter (all, income, expense)
function setFilter(value) {
  filter = value;
  render();
}

// Show entries and totals on screen
function render() {
  let list = document.getElementById("entryList");
  list.innerHTML = "";

  // Decide which entries to show
  let showList = entries.filter(
    (entry) => filter === "all" || entry.type === filter
  );

  // Create boxes for each entry
  showList.forEach((entry) => {
    let row = document.createElement("div");
    row.className = "flex justify-between p-3 border rounded mb-2 bg-gray-100";

    row.innerHTML = `
                    <div>
                        <p class="font-bold">${entry.desc}</p>
                        <p class="text-sm ${
                          entry.type === "income"
                            ? "text-green-600"
                            : "text-red-600"
                        }">
                            ${entry.type.toUpperCase()} - Rs. ${entry.amount}
                        </p>
                    </div>

                    <div class="flex gap-3">
                        <button onclick="editEntry(${
                          entry.id
                        })" class="text-blue-600">✏️</button>
                        <button onclick="deleteEntry(${
                          entry.id
                        })" class="text-red-600">🗑️</button>
                    </div>
                `;

    list.appendChild(row);
  });

  // Calculate totals
  let totalIncome = 0;
  let totalExpense = 0;

  entries.forEach((entry) => {
    if (entry.type === "income") {
      totalIncome += entry.amount;
    } else {
      totalExpense += entry.amount;
    }
  });

  // Update totals
  document.getElementById("totalIncome").textContent = totalIncome;
  document.getElementById("totalExpense").textContent = totalExpense;
  document.getElementById("netBalance").textContent = totalIncome - totalExpense;
}
