# 📘 Income & Expense Calculator

A simple web app that helps you track your money coming in (income) and money going out (expense).
You can add, edit, delete, and filter your entries easily.
The app also shows your total income, total expense, and net balance.

This project is made using **HTML**, **Tailwind CSS**, and **JavaScript**.

---

## ⭐ Features

### ✔ Add Entries

You can add a new income or expense by typing a description and amount.

### ✔ Edit Entries

You can update any entry using the ✏️ edit button.

### ✔ Delete Entries

Remove any entry using the 🗑️ delete button.

### ✔ Filter

Show only:

* **All**
* **Income**
* **Expense**

### ✔ Totals

The app shows:

* Total Income
* Total Expense
* Net Balance (Income − Expense)

### ✔ LocalStorage

The app remembers your data even if you close the browser.

### ✔ Responsive

Works on both **mobile** and **desktop** screens.

---

## 🛠️ Technologies Used

* **HTML** – structure of the page
* **TailwindCSS** – simple styling
* **JavaScript** – app logic (add, edit, delete, filter)

---

## 🚀 How to Use

1. Open **index.html** in your browser.
2. Type:

   * Description (e.g., “Pocket Money”)
   * Amount (e.g., “500”)
3. Choose:

   * **Income** (money received)
   * **Expense** (money spent)
4. Click **Add Entry**.
5. Use filters to view only Income or Expense.
6. Use ✏️ to edit any entry.
7. Use 🗑️ to delete an entry.
8. Totals update automatically at the top.

---

## 📂 File Structure

```
project-folder/
│
├── index.html      (main project file)
├── script.js       (main js file)
└── README.md       (this documentation file)
```

---

## 📘 Code Explanation (Simple)

* The app stores all entries in an array called **entries**.
* Each entry has:

  * id
  * description
  * amount
  * type (income or expense)
* JavaScript updates the screen whenever something changes.
* Data is saved inside **localStorage** so it stays even after closing the browser.

---

## 🎯 Who Is This For?

* School students
* Beginners learning HTML, CSS, and JavaScript
* Anyone who wants a simple money tracking app
* Teachers giving basic web development assignments

---

## 📝 Future Improvements (Optional)

You can add:

* Dark mode
* Categories (Food, Travel, Shopping, etc.)
* Graphs (using Chart.js)
* Export data as CSV
* Monthly filtering

---

## ❤️ Thank You!

If you need help, improvements, or a more advanced version, feel free to ask!
