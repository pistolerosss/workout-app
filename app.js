const workouts = {
  day1: [
    { name: "Bench press", sets: "4× 8–10", tip: "Lopatky stáhni k sobě, nohy pevně na zemi." },
    { name: "Upažování", sets: "3× 12–15", tip: "Zvedej jen do výšky ramen, bez švihu." },
    { name: "Plank", sets: "3× 45 s", tip: "Tělo v jedné linii, břicho zatnuté." }
  ],
  day2: [
    { name: "Kliky", sets: "4× max", tip: "Tělo rovně, lokty cca 45°." },
    { name: "Zkracovačky", sets: "3× 20", tip: "Pohyb z břicha, netahej hlavu." }
  ],
  day3: [
    { name: "Stahování kladky", sets: "4× 8–10", tip: "Táhni lokty dolů, ne za krk." }
  ],
  day5: [
    { name: "Hollow body hold", sets: "3× 30 s", tip: "Bedra přitiskni k zemi." }
  ]
};

function openDay(day) {
  const section = document.getElementById("workout");
  section.innerHTML = "";

  workouts[day].forEach(cvik => {
    const div = document.createElement("div");
    div.className = "workout-card";
    div.innerHTML = `
      <h3>${cvik.name}</h3>
      <p><strong>${cvik.sets}</strong></p>
      <p>👉 ${cvik.tip}</p>
    `;
    section.appendChild(div);
  });
}
