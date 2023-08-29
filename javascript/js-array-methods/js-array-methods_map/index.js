console.clear();

const cards = [
  {
    id: "1",
    isBookmarked: false,
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next", "advanced"],
  },
];

// const lowerCaseAnswers = null; // ['as often as you like.', ...]
const lowerCaseAnswers = cards.map((card) => {
  return card.answer.toLowerCase();
});
console.log(lowerCaseAnswers);

// const questionsAndAnswersTogether = null; // ["How often can I use <header>? - As often as you like.", ...]
const questionsAndAnswersTogether = cards.map((card) => {
  return `${card.question} - ${card.answer}`;
});
console.log(questionsAndAnswersTogether);

// const questionAndAnswer = null; // [{ question: 'How often can I use <header>?', answer: 'As often as you like.'}, {...}]

const questionAndAnswer = cards.map((card) => {
  const newObject = {
    question: card.question,
    answer: card.answer,
  };
  return newObject;

  console.log(Object.keys(cards));
});
console.log(questionAndAnswer);


//Additional:

//to get all keys in an array of objects
// cards.map(card => Object.keys(card)).forEach(keys => console.log(keys));

// to get all the values in an array of objects
// 


// to get all keys and values in an array of objects
// cards.map(card => Object.entries(card)).forEach(entry => console.log(entry));
//  or:
// const allKeysAndValues = cards.map((card) => {
//   for (let key in cards) {
//     console.log(cards[key]);
//   }
// });
export { lowerCaseAnswers, questionsAndAnswersTogether, questionAndAnswer };
