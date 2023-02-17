const movies = [
    {
        title:"Movie one",
        body:"Nice"
    },
    {
        title:"Movie two",
        body:"Okies"
    }
];
function getMovies(){
    setTimeout(() => {
        movies.forEach((movie,index) => {
            console.log("Movies By Title" + movie.title);
        });
    }, 1000);
}
function createMovies(movie){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            movies.push(movie);
            const err = false;
            if(!err){
                resolve("Resolved");
            }else{
                reject("Something is wrong!");
            }
        }, 3000);
    });
}
async function init(){
    console.log("Inside async function call");
    await createMovies({title:"New Movies", body:"Super"});
    getMovies();
}
init();