const observer = new IntersectionObserver((entries) => {
    entries.forEach((entries) => {
        console.log(entries);
        if(entries.isIntersecting){
            entries.target.classList.add('show');
        }
        else{
            entries.target.classList.remove('show');
        }
    });
});

const hiddenElems = document.querySelectorAll('.hidden');
hiddenElems.forEach((el) => observer.observe(el));