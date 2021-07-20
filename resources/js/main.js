$(document).ready(function(){
    // FOR DATA AOS
    AOS.init();


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
    var preventclass = document.querySelectorAll('.prevent-listener');
    
    function preventListener(e){
        this.style.color = "blue!important";
        // e.preventDefault();
        // alert("Hi");
    }

    // prevente listener FINISH


    // Owl carousel for Donor Sections
    $('#donor .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:2
            },
            520:{
                items:3
            },
            680:{
                items:4
            },
            768:{
                items:3
            },
            1024:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });

    // carousel for need-blood section
    $('#need-blood .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:2
            },
            520:{
                items:3
            },
            680:{
                items:3
            },
            768:{
                items:3
            },
            1025:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });


});


var mixer = mixitup('.filter-mixitup');
