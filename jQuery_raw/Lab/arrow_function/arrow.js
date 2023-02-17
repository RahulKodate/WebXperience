
let fnWithParam = (a, b) => console.log("fnWithParam: "+ (a+b));
fnWithParam(1,1);

let c=2;
let d=2;

let fnWithoutParam = () => {
    console.log("fnWithoutParam: " + (c+d));
};

fnWithoutParam();

