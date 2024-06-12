// example of static data type in class 
// static is continious memory
// 

class bingo{
    static x = 0;
    n=0
    constructor(){
        bingo.x = bingo.x+1;
        this.n = this.n+1;
    }

    print(){
        console.log(`s=${bingo.x} n=${this.n}`)
    }
}

// obj for class
const b1 = new bingo();
b1.print();
const b2 = new bingo();
b2.print();