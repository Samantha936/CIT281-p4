// Project 4

const {data} = require("./p4-data.js");

function getQuestions() {
    let questions = data.map(theQuestions => theQuestions.question)
    return questions;
}
//Returns an array of strings where each array element is a question.

function getAnswers() {
  const answers = data.map(theAnswers => theAnswers.answer)
  return answers;
}
//Returns an array of strings where each array element is an answer.

function getQuestionsAnswers() {
  return data;
}

// get question number function

function getQuestion(number = "") {
   const questionNumber = {
    error:'',  
    question: '',
    number: number
   };

   if (number != "") {
    questionNumber.error = "Question number must be a number"
  } else if (number <= "0") {
   questionNumber.error = "Question number must be >= 1"
  } else if (number >= 4) {
    questionNumber.error = "Question number must be less than the number of questions(3)"
    return questionNumber
}};


function getAnswer(number = ""){
  const answerNumber = {
    answer:'',
    number: number,
    error: ''
  };

    if (number != "") {
      answerNumber.error = "Question number must be a number"
    } else if (number <= "0") {
      answerNumber.error = "Question number must be >= 1"
    } else if (number >= 4) {
      answerNumber.error = "Question number must be less than the number of questions(3)"
      return answerNumber
  }};

function getQuestionAnswer(number = "") {
  const questionanswerNumber = {
    question: '',
    answer: '',
    error: '',
    number: number
  };

if (number != "") {
  questionanswerNumber.error = "Question number must be a number"
} else if (number <= "0") {
  questionanswerNumber.error = "Question number must be >= 1"
} else if (number >= 4) {
  questionanswerNumber.error = "Question number must be less than the number of questions(3)"
  return questionanswerNumber 
}};


module.exports = {
  getQuestions,
  getAnswers,
  getQuestionAnswer,
  getQuestion,
  getAnswer,
  getQuestionAnswer
};


/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
    console.log(`\n** Testing ${category} **`);
    console.log("-------------------------------");
    for (const o of args) {
      console.log(`-> ${category}${o.d}:`);
      console.log(o.f);
    }
  }
  
  // Set a constant to true to test the appropriate function
  const testGetQs = false;
  const testGetAs = false;
  const testGetQsAs = false;
  const testGetQ = false;
  const testGetA = false;
  const testGetQA = false;
  const testAdd = false;      // Extra credit
  const testUpdate = false;   // Extra credit
  const testDelete = false;   // Extra credit

// getQuestions()
if (testGetQs) {
  testing("getQuestions", { d: "()", f: getQuestions() });
}

// getAnswers()
if (testGetAs) {
  testing("getAnswers", { d: "()", f: getAnswers() });
}

// getQuestionsAnswers()
if (testGetQsAs) {
  testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
}

// getQuestion()
if (testGetQ) {
  testing(
    "getQuestion",
    { d: "()", f: getQuestion() },      // Extra credit: +1
    { d: "(0)", f: getQuestion(0) },    // Extra credit: +1
    { d: "(1)", f: getQuestion(1) },
    { d: "(4)", f: getQuestion(4) }     // Extra credit: +1
  );
}

// getAnswer()
if (testGetA) {
  testing(
    "getAnswer",
    { d: "()", f: getAnswer() },        // Extra credit: +1
    { d: "(0)", f: getAnswer(0) },      // Extra credit: +1
    { d: "(1)", f: getAnswer(1) },
    { d: "(4)", f: getAnswer(4) }       // Extra credit: +1
  );
}

// getQuestionAnswer()
if (testGetQA) {
  testing(
    "getQuestionAnswer",
    { d: "()", f: getQuestionAnswer() },    // Extra credit: +1
    { d: "(0)", f: getQuestionAnswer(0) },  // Extra credit: +1
    { d: "(1)", f: getQuestionAnswer(1) },
    { d: "(4)", f: getQuestionAnswer(4) }   // Extra credit: +1
  );
}

  console.log(getQuestions());
  console.log(getAnswer());
  console.log(getQuestionAnswer());
  
  console.log(getQuestion());
  console.log(getQuestion('yes'));
  console.log(getQuestion('1'));
