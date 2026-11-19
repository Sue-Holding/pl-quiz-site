// Samlat quiz + Tenta-test. Ingen data sparas, allt slumpas när quizet startas.
const pl55 = COURSES.find(c => c.id === "pl55");

// Samlat quiz: perTopic frågor från varje ämne, utom de som listas i exclude.
pl55.combinedQuiz = {
  t: "Samlat quiz",
  passPercent: 80,
  perTopic: 2,
  exclude: ["Instuderingsfrågor inför tentan"]
};

// Tenta-test: size slumpade frågor enbart ur instuderingsfrågorna. 12 av 15 rätt = godkänt (80 %).
pl55.examQuiz = {
  t: "Tenta-test",
  topic: "Instuderingsfrågor inför tentan",
  size: 15,
  passPercent: 80
};