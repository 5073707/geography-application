var data = [{
    "question": "",
    "answers": ["", "", "", ""],
    "answer": "",
    "wieght": 1
}, {
    "question": "",
    "answers": ["", "", "", ""],
    "answer": "",
    "wieght": 1
}, {
    "question": "",
    "answers": ["", "", "", ""],
    "answer": "",
    "wieght": 1
}, {
    "question": "",
    "answers": ["", "", "", ""],
    "answer": "",
    "wieght": 1
}, {
    "question": "",
    "answers": ["", "", "", ""],
    "answer": "",
    "wieght": 1
}, {
    "question": "",
    "answers": ["", "", "", ""],
    "answer": "",
    "wieght": 1
}, {
    "question": "",
    "answers": ["", "", "", ""],
    "answer": "",
    "wieght": 1
}, {
    "question": "",
    "answers": ["", "", "", ""],
    "answer": "",
    "wieght": 1
}, {
    "question": "",
    "answers": ["", "", "", ""],
    "answer": "",
    "wieght": 1
}, {
    "question": "",
    "answers": ["", "", "", ""],
    "answer": "",
    "wieght": 1
}, {
    "question": "",
    "answers": ["", "", "", ""],
    "answer": "",
    "wieght": 1
}, {
    "question": "",
    "answers": ["", "", "", ""],
    "answer": "",
    "wieght": 1
}, {
    "question": "",
    "answers": ["", "", "", ""],
    "answer": "",
    "wieght": 1
}, {
    "question": "",
    "answers": ["", "", "", ""],
    "answer": "",
    "wieght": 1
}, {
    "question": "",
    "answers": ["", "", "", ""],
    "answer": "",
    "wieght": 1
}, {
    "question": "",
    "answers": ["", "", "", ""],
    "answer": "",
    "wieght": 1
}, {
    "question": "",
    "answers": ["", "", "", ""],
    "answer": "",
    "wieght": 1
}, {
    "question": "",
    "answers": ["", "", "", ""],
    "answer": "",
    "wieght": 1
}, {
    "question": "",
    "answers": ["", "", "", ""],
    "answer": "",
    "wieght": 1
}, {
    "question": "",
    "answers": ["", "", "", ""],
    "answer": "",
    "wieght": 1
}, {
    "question": "",
    "answers": ["", "", "", ""],
    "answer": "",
    "wieght": 1
}, {
    "question": "",
    "answers": ["", "", "", ""],
    "answer": "",
    "wieght": 1
}, {
    "question": "",
    "answers": ["", "", "", ""],
    "answer": "",
    "wieght": 1
}, {
    "question": "",
    "answers": ["", "", "", ""],
    "answer": "",
    "wieght": 1
}, {
    "question": "",
    "answers": ["", "", "", ""],
    "answer": "",
    "wieght": 1
}, {
    "question": "",
    "answers": ["", "", "", ""],
    "answer": "",
    "wieght": 1
}, {
    "question": "",
    "answers": ["", "", "", ""],
    "answer": "",
    "wieght": 1
}, {
    "question": "",
    "answers": ["", "", "", ""],
    "answer": "",
    "wieght": 1
}, {
    "question": "",
    "answers": ["", "", "", ""],
    "answer": "",
    "wieght": 1
}, {
    "question": "",
    "answers": ["", "", "", ""],
    "answer": "",
    "wieght": 1
}, {
    "question": "",
    "answers": ["", "", "", ""],
    "answer": "",
    "wieght": 1
}, {
    "question": "",
    "answers": ["", "", "", ""],
    "answer": "",
    "wieght": 1
}, {
    "question": "",
    "answers": ["", "", "", ""],
    "answer": "",
    "wieght": 1
}, {
    "question": "",
    "answers": ["", "", "", ""],
    "answer": "",
    "wieght": 1
}, {
    "question": "",
    "answers": ["", "", "", ""],
    "answer": "",
    "wieght": 1
}, {
    "question": "",
    "answers": ["", "", "", ""],
    "answer": "",
    "wieght": 1
}, {
    "question": "",
    "answers": ["", "", "", ""],
    "answer": "",
    "wieght": 1
}, {
    "question": "",
    "answers": ["", "", "", ""],
    "answer": "",
    "wieght": 1
}, {
    "question": "",
    "answers": ["", "", "", ""],
    "answer": "",
    "wieght": 1
}, {
    "question": "",
    "answers": ["", "", "", ""],
    "answer": "",
    "wieght": 1
}, {
    "question": "",
    "answers": ["", "", "", ""],
    "answer": "",
    "wieght": 1
}, {
    "question": "",
    "answers": ["", "", "", ""],
    "answer": "",
    "wieght": 1
}, {
    "question": "",
    "answers": ["", "", "", ""],
    "answer": "",
    "wieght": 1
}, {
    "question": "",
    "answers": ["", "", "", ""],
    "answer": "",
    "wieght": 1
}, {
    "question": "",
    "answers": ["", "", "", ""],
    "answer": "",
    "wieght": 1
}, {
    "question": "",
    "answers": ["", "", "", ""],
    "answer": "",
    "wieght": 1
}, ];

var user = process.env.MONGO_INITDB_ROOT_USERNAME;
var pswd = process.env.MONGO_INITDB_ROOT_PASSWORD;

db.auth(user, pswd);
db.questions.insertMany(data);