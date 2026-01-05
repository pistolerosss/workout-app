const workouts = {
  day1: [
    {
      name: "Bench press",
      sets: 4,
      reps: "8–10",
      image: "./images/bench_press.gif?v=1",
      tip: "Lopatky stáhni k sobě, nohy pevně na zemi."
    },
    {
      name: "Tlaky jednoruček na šikmé lavičce",
      sets: 3,
      reps: "10–12",
      image: "./images/incline_dumbbell_press.gif?v=1",
      tip: "Pohyb kontrolovaný, ramena netahej k uším."
    },
    {
      name: "Upažování",
      sets: 3,
      reps: "12–15",
      image: "./images/lateral_raise.gif?v=1",
      tip: "Zvedej jen do výšky ramen, bez švihu."
    },
    {
      name: "Tlaky jednoruček nad hlavu",
      sets: 3,
      reps: "8–10",
      image: "./images/shoulder_press.gif?v=1",
      tip: "Zpevni střed těla, neprohýbej se v bedrech."
    },
    {
      name: "Plank",
      sets: 3,
      reps: "45 s",
      image: "./images/plank.gif?v=1",
      tip: "Rovná linie těla, břicho zatnuté."
    },
    {
      name: "Zkracovačky",
      sets: 3,
      reps: "15",
      image: "./images/crunch.gif?v=1",
      tip: "Pohyb vychází z břicha, netahej hlavu."
    },
    {
      name: "Zvedání nohou",
      sets: 3,
      reps: "10–12",
      image: "./images/leg_raise.gif?v=1",
      tip: "Bedra přitiskni k podložce."
    }
  ],

  day2: [
    {
      name: "Kliky",
      sets: 4,
      reps: "max",
      image: "./images/push_up.gif?v=1",
      tip: "Tělo rovně, lokty cca 45°."
    }
  ],

  day3: [
    {
      name: "Stahování kladky k hrudníku",
      sets: 4,
      reps: "8–10",
      image: "./images/lat_pulldown.gif?v=1",
      tip: "Táhni lokty dolů, ne za krk."
    }
  ],

  day5: [
    {
      name: "Hollow body hold",
      sets: 3,
      reps: "30 s",
      image: "./images/hollow_body.gif?v=1",
      tip: "Bedra přitiskni k zemi."
    }
  ]
};

function openDay(day) {
  const section = document.getElementById("workout");
  section.innerHTML = "";

  workouts[day].forEach((cvik, i) => {
    const key = `${day}_${i}`;
    const saved = JSON.parse(localStorage.getItem(key)) || [];

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
              onchange="saveSet('${key}', ${s}, this.checked)">
            série ${s + 1}
          </label>
        `).join("")}
      </div>
    `;

    section.appendChild(div);
  });
}

function saveSet(key, index, checked) {
  const data = JSON.parse(localStorage.getItem(key)) || [];
  data[index] = checked;
  localStorage.setItem(key, JSON.stringify(data));
}
