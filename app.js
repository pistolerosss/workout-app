const workouts = {
  day1: [
  {
    name: "Bench press",
    sets: 4,
    reps: "8–10",
    image: "./images/bench_press.png?v=1",
    tip: "Lopatky stáhni k sobě, nohy pevně na zemi."
  },
  {
    name: "Tlaky jednoruček na šikmé lavičce",
    sets: 3,
    reps: "10–12",
    image: "./images/incline_dumbbell_press.png?v=1",
    tip: "Pohyb kontrolovaný, ramena netahej k uším."
  },
  {
    name: "Peck-deck / rozpažky",
    sets: 3,
    reps: "12",
    image: "./images/pec_deck.png?v=1",
    tip: "Lokty lehce pokrčené, soustřeď se na hrudník."
  },
  {
    name: "Upažování",
    sets: 3,
    reps: "12–15",
    image: "./images/lateral_raise.png?v=1",
    tip: "Zvedej jen do výšky ramen, bez švihu."
  },
  {
    name: "Tlaky jednoruček nad hlavou",
    sets: 3,
    reps: "8–10",
    image: "./images/shoulder_press.png?v=1",
    tip: "Zpevni střed těla, neprohýbej se v bedrech."
  },
  {
    name: "Plank",
    sets: 3,
    reps: "45 s",
    image: "./images/plank.png?v=1",
    tip: "Rovná linie těla, břicho zatnuté."
  },
  {
    name: "Zkracovačky",
    sets: 3,
    reps: "15",
    image: "./images/crunch.png?v=1",
    tip: "Pohyb vychází z břicha, netahej hlavu."
  },
  {
    name: "Zvedání nohou",
    sets: 3,
    reps: "10–12",
    image: "./images/leg_raise.png?v=1",
    tip: "Bedra přitiskni k podložce, žádné houpání."
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

