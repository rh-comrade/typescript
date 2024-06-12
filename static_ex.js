// example of static data type in class 
// static is continious memory
// 
var bingo = /** @class */ (function () {
    function bingo() {
        this.n = 0;
        bingo.x = bingo.x + 1;
        this.n = this.n + 1;
    }
    bingo.prototype.print = function () {
        console.log("s=".concat(bingo.x, " n=").concat(this.n));
    };
    bingo.x = 0;
    return bingo;
}());

// obj for class
var b1 = new bingo();
b1.print();
var b2 = new bingo();
b2.print();
