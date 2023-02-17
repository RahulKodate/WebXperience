
class chaining{
    firstFunction(){
        console.log("First function call");
        return this;
    }
    secondFunction(){
        console.log("Second function call");
        return this;
    }
    thirdFunction(){
        console.log("Third function call");
        return this;
    }
}

const obj =  new chaining();
obj.firstFunction().secondFunction().thirdFunction();