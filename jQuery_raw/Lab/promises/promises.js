const p1 = new Promise((resolve, reject)=>{
    //setTimeout(() => {
        resolve("This is p1");
    //}, 1000);
});

const p2= new Promise((resolve, reject)=>{
    //setTimeout(() => {
        resolve("This is p2");
    //}, 1000);
});

const p3 = new Promise((resolve, reject)=>{
    // setTimeout(() => {
        resolve("This is p3");
    // }, 1000);
});

Promise.all([p1, p2, p3]).then(message => {
    alert(message);
    console.log(message);
});

// const p1 = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve("This is p1");
//     }, 1000);
// });