// // dropdown menu
// var drpItems = document.querySelector("#dropdown-items");
// function dropdown(){
    
//     if(drpItems.style.display === "block"){
//         drpItems.style.display = "none";
//     }else{
//         drpItems.style.display = "block";
//     }
// }

// // dropdown menu ends
    
// navigation  item close/open button
    var navbar = document.querySelector('.navbar');
    var navItems = document.querySelector(".nav-items");
    function closeNav(){
        navItems.style.left = "-100%";
        navbar.style.backdropFilter = "blur(1rem)";
    }
    function openNav(){
        navItems.style.left = "0";
        navbar.style.backdropFilter = "initial";
    }

// navigation  item close button ends

document.querySelector('.logo-text').style.textShadow ="0 0 0.2rem black";

// navigate to other section 
var navLink = document.querySelectorAll('nav a');
for(var i=5; i<=16;i++){
    navLink[2].addEventListener('click', function(){
        navItems.style.left = "-100%";
        navbar.style.backdropFilter = "blur(1rem)";
    });
    navLink[i].addEventListener('click', function(){
        navItems.style.left = "-100%";
        navbar.style.backdropFilter = "blur(1rem)";
    })
}
// navigate to other section 

// prevente listener
var prevenclass = document.querySelectorAll('.prevent-listener');
prevenclass[0].addEventListener("click", function(e){
    e.preventDefault();
});
prevenclass[1].addEventListener("click", function(e){
    e.preventDefault();
});
// prevente listener FINISH


