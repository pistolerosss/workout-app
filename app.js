const workouts = {
  day1: [
    {
      name: "Bench press",
      sets: 4,
      reps: "8–10",
      image: "images/bench_press.png",
      tip: "Lopatky stáhni k sobě, nohy pevně na zemi."
    },
    {
      name: "Upažování",
      sets: 3,
      reps: "12–15",
      image: "images/lateral_raise.png",
      tip: "Zvedej jen do výšky ramen, bez švihu."
    }
  ]
};

function openDay(day) {
  const section = document.getElementById("workout");
  section.innerHTML = "";

  workouts[day].forEach((cvik, i) => {
    const saved = JSON.parse(localStorage.getItem(day + i)) || [];

    const div = document.createElement("div");
    div.className = "workout-card";

    div.innerHTML = `
      <h3>${cvik.name}</h3>

      <img src="${cvik.image}" alt="${cvik.name}" class="exercise-img">

      <p><strong>${cvik.sets}× ${cvik.reps}</strong></p>
      <p>👉 ${cvik.tip}</p>

      <div class="sets">
        ${Array.from({ length: cvik.sets }).map((_, s) => `
          <label>
            <input type="checkbox"
              ${saved[s] ? "checked" : ""}
              onchange="saveSet('${day}', ${i}, ${s}, this.checked)">
            série ${s + 1}
          </label>
        `).join("")}
      </div>
    `;

    section.appendChild(div);
  });
}

function saveSet(day, exerciseIndex, setIndex, checked) {
  const key = day + exerciseIndex;
  const data = JSON.parse(localStorage.getItem(key)) || [];
  data[setIndex] = checked;
  localStorage.setItem(key, JSON.stringify(data));
}
