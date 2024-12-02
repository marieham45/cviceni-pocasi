const predpoved = [
  {
    den: "Pondělí",
    datum: "2023-10-02",
    denni_teplota: 20,
    ranni_teplota: 15,
    odpoledni_teplota: 23,
    vecerni_teplota: 18,
    stav_pocasi: "Zataženo",
    tlak: 1015,
    rychlost_vetru: 10,
    popis_pocasi:
      "Pondělí bude zataženo s teplotami mezi 15°C ráno a 23°C odpoledne. Očekávají se mírné dešťové srážky, a proto byste měli mít s sebou deštník. Rychlost větru dosáhne 10 km/h a atmosférický tlak bude 1015 hPa.",
  },
  {
    den: "Úterý",
    datum: "2023-10-03",
    denni_teplota: 22,
    ranni_teplota: 16,
    odpoledni_teplota: 25,
    vecerni_teplota: 20,
    stav_pocasi: "Polojasno",
    tlak: 1012,
    rychlost_vetru: 12,
    popis_pocasi:
      "Úterý bude polojasno s teplotami mezi 16°C ráno a 25°C odpoledne. Očekává se několik oblaků na obloze, ale převážně slunečné počasí. Rychlost větru dosáhne 12 km/h a atmosférický tlak bude 1012 hPa.",
  },
  {
    den: "Středa",
    datum: "2023-10-04",
    denni_teplota: 18,
    ranni_teplota: 13,
    odpoledni_teplota: 20,
    vecerni_teplota: 15,
    stav_pocasi: "Deštivo",
    tlak: 1008,
    rychlost_vetru: 15,
    popis_pocasi:
      "Středa bude deštivá s teplotami mezi 13°C ráno a 20°C odpoledne. Očekává se celodenní déšť s oblačnou oblohou. Rychlost větru dosáhne 15 km/h a atmosférický tlak bude 1008 hPa.",
  },
  {
    den: "Čtvrtek",
    datum: "2023-10-05",
    denni_teplota: 16,
    ranni_teplota: 11,
    odpoledni_teplota: 18,
    vecerni_teplota: 13,
    stav_pocasi: "Deštivo",
    tlak: 1010,
    rychlost_vetru: 14,
    popis_pocasi:
      "Čtvrtek bude opět deštivý s teplotami mezi 11°C ráno a 18°C odpoledne. Očekávají se déšť a sníh se zhoršující se viditelností. Rychlost větru dosáhne 14 km/h a atmosférický tlak bude 1010 hPa.",
  },
  {
    den: "Pátek",
    datum: "2023-10-06",
    denni_teplota: 19,
    ranni_teplota: 14,
    odpoledni_teplota: 22,
    vecerni_teplota: 17,
    stav_pocasi: "Oblačno",
    tlak: 1013,
    rychlost_vetru: 11,
    popis_pocasi:
      "Pátek bude převážně oblačný s teplotami mezi 14°C ráno a 22°C odpoledne. Můžeme očekávat zataženou oblohu s občasnými projevy slunečního svitu. Rychlost větru dosáhne 11 km/h a atmosférický tlak bude 1013 hPa.",
  },
  {
    den: "Sobota",
    datum: "2023-10-07",
    denni_teplota: 21,
    ranni_teplota: 17,
    odpoledni_teplota: 24,
    vecerni_teplota: 19,
    stav_pocasi: "Polojasno",
    tlak: 1015,
    rychlost_vetru: 13,
    popis_pocasi:
      "Sobota bude polojasná s teplotami mezi 17°C ráno a 24°C odpoledne. Převládne slunečné počasí s mírnými oblačnými intervaly. Rychlost větru dosáhne 13 km/h a atmosférický tlak bude 1015 hPa.",
  },
  {
    den: "Neděle",
    datum: "2023-10-08",
    denni_teplota: 23,
    ranni_teplota: 18,
    odpoledni_teplota: 26,
    vecerni_teplota: 20,
    stav_pocasi: "Slunečno",
    tlak: 1017,
    rychlost_vetru: 9,
    popis_pocasi:
      "Neděle bude krásný slunečný den s teplotami mezi 18°C ráno a 26°C odpoledne. Nebude žádná oblačnost, a tak můžete očekávat celodenní slunečné počasí. Rychlost větru dosáhne 9 km/h a atmosférický tlak bude 1017 hPa.",
  },
];

const mainElement = document.querySelector("#main");

// nepovinné formátování data - vrací formát DD. MM. YYYY. Pro zájemce dokumentace k práci s objektem Date: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
predpoved.forEach((day) => {
  mainElement.innerHTML += `
    <h1>${day.den}</h1>
    <p>Datum: ${new Date(day.datum).toLocaleDateString()}</p>
    <p>Denní teplota: ${day.denni_teplota} °C</p>
    <p>Stav počasí: ${day.stav_pocasi}</p>
    <a href="detail.html#${day.datum}">Detailní předpověď</a>
    `;
});

// jako "id" pro url adresu jsem zvolila datum, protože je unikátní. Název dne je s diakritikou a to pro url adresu není nejvhodnější :-)
