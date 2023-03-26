console.log("javascript");

//alert dialog box
//console.log(window.alert("hello"));

//confirm dialog box
//window.confirm("are you sure you want to exit?");
//console.log(answer);

//prompt dialog box
//  let answer=window.prompt("what is the capital of nepal");
//  if(answer=="Kathmandu"){
//     window.alert("you are correct");
//  }
//  console.log(answer);

//document
//window.document.body.style.backgroundColor="grey";
document.body.style.fontFamily="sans-serif";
// //document.body.innerHTML="<h1> css </h1>";
// let movies=document.getElementByID("movies");
// movies.style.backgroundColor="cyan";

//class selector
// let movies=document.getElementsByClassName("movielist");
// console.log(movie);

// //query selector. # is id, . is class
// let movie=document.querySelector("#movie")
// let movie=document.querySelector(".movie")
// let movie=document.querySelector(".movielist");
// movie.classList.add("big-red");
// movie.classList.remove("big-red");
// movie.classList.toggle("big-red");

// //query selector all
// let movie1=document.querySelectorAll(".movielist");
// movie1[1].style.backgroundColor="blue"

// //event listener
// button.addEventListener("click",function() {
//     window.alert("you clicked");
// });
let button=document.querySelector(".click");
button.addEventListener("click",function(){
    document.body.classList.toggle("dark");
    if(button.textContent=="dark mode"){
        button.textContent="light mode";
    }
    else{
        button.textContent="dark mode";
    }
    
});