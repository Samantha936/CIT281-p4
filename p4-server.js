const http = require('http');
const fs = require('fs');
const fastify = require("fastify")();
const hostname = '127.0.0.1';
const port = 8080;
const {data} = require("./p4-data.js");

//fastify
fastify.get("/", (request, reply) => {
reply
.code(200)
.header("Content-Type", "text/html; charset=utf-8")
.send(<h1>Project 4</h1>);
});

// fastify question
fastify.get("/cit/question", (request, reply) => {
const questions = getQuestions();
const q = {
    error: '',
    statusCode: 200,
    questions: questions
}
reply
.code(200)
.header("Content-Type", "application/json; charset=utf-8")
.send(JSON.stringify(q));
});

// fastify answer
fastify.get("/cit/answer", (request, reply) => {
    const answers = getAnswers();
    const a = {
        error: "",
        statusCode: 200,
        answers: answers
    }
    reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(JSON.stringify(a));
    });

    // fastify question answer
fastify.get("/cit/questionanswer", (request, reply) => {
    const data = getQuestionsAnswers();
    const qa = {
        error: "",
        statusCode: 200,
        question_answers: data
    }
    reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(JSON.stringify(qa));
    });

fastify.get("/cit/question/:number", (request, reply) => {
    const questionNumber = getQuestion();
    const q2 = {
        error: questionNumber.error,
        statusCode: 200,
        question: questionNumber,
        number: 1
        }

    reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(JSON.stringify(q2));
    });  

    fastify.get("/cit/answer/:number", (request, reply) => {
        const answerNumber = getAnswer();
        const a2 = {
            error: answerNumber.error,
            statusCode: 200,
            answer: answerNumber,
            number: 2
            }
            
        reply
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send(JSON.stringify(a2));
        }); 

     fastify.get("/cit/questionanswer/:number", (request, reply) => {
        const questionanswerNumber = getQuestionAnswer();
        const qa2 = {
            error: questionanswerNumber.error,
            statusCode: 200,
            question: questionNumber,
            answer:answerNumber,
            number: 3
            }
                
         reply
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send(JSON.stringify(qa2));
        });  
        
        //unmatched
    fastify.get("*", (request, reply) => {
        const error = {
        error: 'Route not found',
        statusCode: 404
    };

    reply
     .code(200)
     .header("Content-Type", "application/json; charset=utf-8")
     .send(response);
}); 

// Start server and listen to requests using Fastify
const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
if (err) {
console.log(err);
process.exit(1);
}
console.log(`Server listening on ${address}`);
});