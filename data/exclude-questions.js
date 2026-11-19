// Frågor som tas bort från quizen. Läraren har bekräftat att tentan inte kräver uträkning av timmar, lön eller kostnad.
// Frågorna matchas på början av frågetexten. Filen ska laddas EFTER förklaringsfilerna och instuderingsfragor.js.
// Vill du ha tillbaka en fråga: ta bort raden här (eller hela filen och script-raden i index.html).
(function () {
  const course = COURSES.find(c => c.id === "pl55");
  const remove = {
    "Förkalkyl": [
      "Utveckling och konfigurering: 180",      // 180 h x 700 kr
      "Utveckling 126 000",                     // personalkostnad
      "Licenser är 10 %",                       // licenskostnad
      "Personal 220 000"                        // total förkalkyl
    ],
    "Estimering, ny information och kapacitet": [
      "O = 2 h"                                 // trepunktsestimering (timmar)
      // Gränsfall, ta bort // framför raden om du vill ta bort frågan också:
      // , "5 personer × 4 h"                   // kapacitet: 20 − 5 = 15 timmar (frågar efter konsekvensen)
    ],
    "Tidplan, nätplan och kritisk linje": [
      // Gränsfall (dagar, inte timmar/lön/kostnad). Avkommentera för att ta bort:
      // "C väntar på A och B", "E ligger på kritiska linjen", "D har fyra dagars marginal"
    ],
    "Instuderingsfrågor inför tentan": [
      "Uppgiften planerades till 12 timmar"     // prognos i timmar
    ]
  };
  course.topics.forEach(topic => {
    const prefixes = remove[topic.t];
    if (prefixes && prefixes.length) topic.q = topic.q.filter(q => !prefixes.some(p => q[0].startsWith(p)));
  });
})();