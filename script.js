const habitGrid = document.getElementById("habitGrid");
const addHabitBtn = document.getElementById("addHabitBtn");
const habitInput = document.getElementById("habitInput");
const emptyState = document.getElementById("emptyState");

const prevWeekBtn = document.getElementById("prevWeek");
const nextWeekBtn = document.getElementById("nextWeek");
const todayBtn = document.getElementById("todayBtn");

let habits = JSON.parse(localStorage.getItem("habits")) || [];
let completions = JSON.parse(localStorage.getItem("completions")) || {};

let currentWeekStart = getStartOfWeek(new Date());

function saveData() {
  localStorage.setItem("habits", JSON.stringify(habits));
  localStorage.setItem("completions", JSON.stringify(completions));
}

function getStartOfWeek(date) {
  const d = new Date(date);

  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);

  d.setDate(diff);

  d.setHours(0,0,0,0);

  return d;
}

function formatDate(date) {
  return date.toISOString().split("T")[0];
}

function getWeekDays(startDate) {
  const days = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);

    days.push(date);
  }

  return days;
}

function isToday(date) {
  const today = new Date();

  return formatDate(today) === formatDate(date);
}

function calculateStreak(habitId) {
  let streak = 0;

  const current = new Date();

  while (true) {
    const key = formatDate(current);

    if (
      completions[key] &&
      completions[key][habitId]
    ) {
      streak++;
      current.setDate(current.getDate() - 1);
    } else {
      break;
    }
  }

  return streak;
}

function toggleCompletion(habitId, dateKey) {

  if (!completions[dateKey]) {
    completions[dateKey] = {};
  }

  completions[dateKey][habitId] =
    !completions[dateKey][habitId];

  saveData();

  render();
}

function render() {

  if (habits.length === 0) {
    emptyState.style.display = "block";
    habitGrid.style.display = "none";
    return;
  }

  emptyState.style.display = "none";
  habitGrid.style.display = "flex";

  habitGrid.innerHTML = "";

  const weekDays = getWeekDays(currentWeekStart);

  const header = document.createElement("div");
  header.className = "grid-header";

  header.innerHTML = `
    <div>Habit</div>
    ${weekDays.map(day => `
      <div class="day-header ${isToday(day) ? "today-column" : ""}">
        ${day.toLocaleDateString("en-US", {
          weekday: "short"
        })}
        <br>
        ${day.getDate()}
      </div>
    `).join("")}
    <div>Rename</div>
    <div>Delete</div>
  `;

  habitGrid.appendChild(header);

  habits.forEach(habit => {

    const row = document.createElement("div");
    row.className = "habit-row";

    row.innerHTML = `
      <div class="habit-name">
        ${habit.name}
        <span class="streak">
          🔥 ${calculateStreak(habit.id)}
        </span>
      </div>

      ${weekDays.map(day => {

        const key = formatDate(day);

        const checked =
          completions[key] &&
          completions[key][habit.id];

        return `
          <button
            class="cell ${checked ? "checked" : ""}"
            data-habit="${habit.id}"
            data-date="${key}"
          >
            ${checked ? "✓" : ""}
          </button>
        `;

      }).join("")}

      <button
        class="action-btn rename-btn"
        data-rename="${habit.id}"
      >
        Rename
      </button>

      <button
        class="action-btn delete-btn"
        data-delete="${habit.id}"
      >
        Delete
      </button>
    `;

    habitGrid.appendChild(row);
  });

  document.querySelectorAll(".cell")
    .forEach(btn => {

      btn.addEventListener("click", () => {

        toggleCompletion(
          btn.dataset.habit,
          btn.dataset.date
        );

      });

    });

  document.querySelectorAll(".rename-btn")
    .forEach(btn => {

      btn.addEventListener("click", () => {

        const id = btn.dataset.rename;

        const habit = habits.find(h => h.id === id);

        const newName = prompt(
          "Rename habit:",
          habit.name
        );

        if (newName && newName.trim()) {

          habit.name = newName.trim();

          saveData();

          render();
        }

      });

    });

  document.querySelectorAll(".delete-btn")
    .forEach(btn => {

      btn.addEventListener("click", () => {

        const id = btn.dataset.delete;

        habits = habits.filter(h => h.id !== id);

        saveData();

        render();
      });

    });
}

addHabitBtn.addEventListener("click", () => {

  const name = habitInput.value.trim();

  if (!name) return;

  habits.push({
    id: crypto.randomUUID(),
    name
  });

  habitInput.value = "";

  saveData();

  render();
});

habitInput.addEventListener("keypress", (e) => {

  if (e.key === "Enter") {
    addHabitBtn.click();
  }

});

prevWeekBtn.addEventListener("click", () => {

  currentWeekStart.setDate(
    currentWeekStart.getDate() - 7
  );

  currentWeekStart =
    new Date(currentWeekStart);

  render();
});

nextWeekBtn.addEventListener("click", () => {

  currentWeekStart.setDate(
    currentWeekStart.getDate() + 7
  );

  currentWeekStart =
    new Date(currentWeekStart);

  render();
});

todayBtn.addEventListener("click", () => {

  currentWeekStart =
    getStartOfWeek(new Date());

  render();
});

render();