const elements = document.querySelectorAll(".reveal-scroll");


const observer = new IntersectionObserver((entries) => {


    entries.forEach((entry) => {


        if (entry.isIntersecting) {

            entry.target.classList.add("active");

        }


    });


});


elements.forEach((element) => {

    observer.observe(element);

});


