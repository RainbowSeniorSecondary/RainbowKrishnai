 const h = document.querySelector('.hamburger');
        h.addEventListener('click', () => {
            navbar = document.querySelector(`.mynavbar`);
            navbar.classList.toggle('active');
            document.querySelector('.scrollingTextcontainer').classList.toggle("hidden");
        });

 