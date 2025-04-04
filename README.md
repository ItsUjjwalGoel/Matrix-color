# 🟩 3x3 Interactive Matrix Grid (React + Tailwind CSS)

A fun and interactive 3x3 matrix built using **React** and **Tailwind CSS**, where boxes change color based on user clicks.

---

## 📌 Features

- ✅ 3x3 grid layout using Tailwind
- ✅ Clicking any box turns it **green**
- ✅ When the **last box (bottom-right corner)** is clicked:
  - All previously clicked boxes turn **orange**
  - Boxes change color **in the order they were clicked** with a delay

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/3x3-matrix-grid.git
cd 3x3-matrix-grid
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the dev server

```bash
npm run dev
```

> Make sure you have `vite` if you're using it:
> ```bash
> npm create vite@latest
> ```

---

## 🧠 How It Works

### State Used:

- `clickedOrder`: Stores the order in which boxes were clicked.
- `finalClicked`: Boolean that becomes `true` once the last box is clicked (to disable further clicks).
- `colors`: Array of 9 values representing Tailwind color classes for each box.

### Main Logic:

- When a box is clicked:
  - If not clicked before and the final box hasn’t been clicked → mark it green.
  - If it’s the last box (index 8):
    - Trigger a sequence of color changes for previously clicked boxes → orange.
    - Uses `setTimeout` to delay each change, creating an animated effect.

---

## 📂 File Structure

```bash
src/
├── components/
│   └── Matrix.jsx     # Core grid logic
├── App.jsx
├── main.jsx
```

---
## 💡 Possible Improvements

- Add a reset button
- Prevent duplicate clicks
- Add sounds or animations for clicks
- Store clicked history in local storage

---

## 🪪 License

This project is open-source and available under the [MIT License](LICENSE).
