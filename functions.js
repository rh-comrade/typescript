function test_23(msg) {
    console.log("message from test: ".concat(msg));
}
test_23('welcome to ts function');
// arrow function
var test_11 = function (n1, n2) {
    return n1 + n2;
};
console.log(test_11(10, 20));
// callbacks
var HOF = function (cb, msg) {
    return cb(msg);
};
HOF(test_23, 'HOF callbacks');
// optinal parameter for function
var goAhead = function (u1, u2) {
    console.log("hello ".concat(u1, " and ").concat(u2 ? u2 : 'test'));
};
goAhead('u1');
