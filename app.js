const workouts = {
  day1: [
    {
      name: "Bench press",
      sets: 4,
      reps: "8–10",
      image: "./images/bench_press.png?v=2",
      tip: "Lopatky stáhni k sobě, nohy pevně na zemi."
    },
    {
      name: "Tlaky jednoruček na šikmé lavičce",
      sets: 3,
      reps: "10–12",
      image: "./images/incline_dumbbell_press.png?v=2",
      tip: "Pohyb kontrolovaný, ramena netahej k uším."
    },
    {
      name: "Peck-deck / rozpažky",
      sets: 3,
      reps: "12",
      image: "./images/pec_deck.png?v=2",
      tip: "Lokty lehce pokrčené, soustřeď se na hrudník."
    },
    {
      name: "Upažování",
      sets: 3,
      reps: "12–15",
      image: "./images/lateral_raise.png?v=2",
      tip: "Zvedej jen do výšky ramen, bez švihu."
    },
    {
      name: "Tlaky jednoruček nad hlavou",
      sets: 3,
      reps: "8–10",
      image: "./images/shoulder_press.png?v=2",
      tip: "Zpevni střed těla, neprohýbej se v bedrech."
    },
    {
      name: "Plank",
      sets: 3,
      reps: "45 s",
      image: "./images/plank.png?v=2",
      tip: "Rovná linie těla, břicho zatnuté."
    },
    {
      name: "Zkracovačky",
      sets: 3,
      reps: "15",
      image: "./images/crunch.png?v=2",
      tip: "Pohyb vychází z břicha, netahej hlavu."
    },
    {
      name: "Zvedání nohou",
      sets: 3,
      reps: "10–12",
      image: "./images/leg_raise.png?v=2",
      tip: "Bedra přitiskni k podložce, žádné houpání."
    }
  ],

  day2: [
    {
      name: "Kliky",
      sets: 4,
      reps: "max",
      image: "./images/push_up.png?v=2",
      tip: "Tělo rovně, lokty cca 45° od těla."
    },
    {
      name: "Diamantové kliky",
      sets: 3,
      reps: "6–10",
      image: "./images/diamond_push_up.png?v=2",
      tip: "Drž tělo pevné, klidně jdi na kolena."
    },
    {
      name: "Zkracovačky",
      sets: 3,
      reps: "20",
      image: "./images/crunch.png?v=2",
      tip: "Krátký, kontrolovaný pohyb."
    },
    {
      name: "Plank",
      sets: 3,
      reps: "45 s",
      image: "./images/plank.png?v=2",
      tip: "Kvalita důležitější než čas."
    }
  ],

  day3: [
    {
      name: "Stahování kladky k hrudníku",
      sets: 4,
      reps: "8–10",
      image: "./images/lat_pulldown.png?v=2",
      tip: "Táhni lokty dolů, ne za krk."
    },
    {
      name: "Veslování na stroji",
      sets: 3,
      reps: "10–12",
      image: "./images/seated_row.png?v=2",
      tip: "Rovná záda, lopatky stáhni k sobě."
    },
    {
      name: "Face pull",
      sets: 3,
      reps: "12–15",
      image: "./images/face_pull.png?v=2",
      tip: "Táhni k obličeji, lokty od sebe."
    },
    {
      name: "Bicepsový zdvih EZ",
      sets: 3,
      reps: "8–10",
      image: "./images/ez_curl.png?v=2",
      tip: "Lokty u těla, žádné houpání."
    }
  ],

  day5: [
    {
      name: "Hollow body hold",
      sets: 3,
      reps: "30 s",
      image: "./images/hollow_body.png?v=2",
      tip: "Bedra přitiskni k zemi."
    },
    {
      name: "Dead bug",
      sets: 3,
      reps: "10",
      image: "./images/dead_bug.png?v=2",
      tip: "Pomalý kontrolovaný pohyb."
    }
  ]
};

function openDay(day) {
  const section = document.getElementById("workout");
  section.innerHTML = "";

  workouts[day].forEach((cvik, i) => {
    const key = day + "_" + i;
    const saved = JSON.parse(localStorage.getItem(key)) || [];

    const div = document.createElement("div");
    div.className = "workout-card";

    div.innerHTML = `
      <h3>${cvik.name}</h3>
      <img src="${cvik.image}" class="exercise-img" alt="${cvik.name}">
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
