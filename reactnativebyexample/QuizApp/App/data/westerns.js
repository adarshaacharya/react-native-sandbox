/////////////////////////////////////////////////////////////////////
// This file contains a JSON object which contains a list of westerns
// questions and their answers
const questions = [
  {
    question:
      "In the Roy Rogers - Dale Evans Museum, you will find Roy and Dales stuffed horses. Roy's horse was named Trigger, which was Dales horse?",
    answers: [
      { id: "1", text: "Buttermilk", correct: true },
      { id: "2", text: "Daisy" },
      { id: "3", text: "Scout" },
      { id: "4", text: "Tulip" }
    ]
  },
  {
    question: 'What weapon has become known as "the gun that won the west"?',
    answers: [
      { id: "1", text: "Smith & Wesson Revolver" },
      { id: "2", text: "Colt Peacemaker", correct: true },
      { id: "3", text: "Winchester Revolver" },
      { id: "4", text: "Sharps Derringer" }
    ]
  }
];

// Export the questions JSON object
export default questions;
