const facts = [
  "Сонце містить 99,86% маси всієї Сонячної системи.",
  "На Місяці немає атмосфери, тому там завжди тиша.",
  "Одна доба на Венері довша, ніж її рік.",
  "У космосі немає звуку, бо там вакуум."
];

function showFact() {
  const fact = facts[Math.floor(Math.random() * facts.length)];
  document.getElementById('fact').textContent = fact;
}
