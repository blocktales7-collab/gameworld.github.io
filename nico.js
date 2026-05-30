       const burgerBtn = document.getElementById('burgerBtn');
        const navMenu = document.getElementById('navMenu');

        burgerBtn.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            burgerBtn.classList.toggle('active');
        });
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                
                if (window.innerWidth <= 768) {
                    navMenu.classList.remove('open');
                }
            });
        });
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                navMenu.classList.remove('open');
            }
        });