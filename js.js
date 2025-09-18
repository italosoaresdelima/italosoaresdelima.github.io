document.addEventListener('DOMContentLoaded', () => {
    const typed = new Typed('.typing-effect', {
        strings: [
            'Desenvolvedor em formação.',
            'Estudante de Engenharia de Software.',
            'Entusiasta de Tecnologia.'
        ],
        typeSpeed: 70,
        backSpeed: 60,
        loop: true
    });
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    const sections = document.querySelectorAll('section');
    sections.forEach(sec => sec.classList.add('reveal')); 

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        
    });

    document.querySelectorAll('.reveal').forEach(element => {
        revealObserver.observe(element);
    });

    const navLinks = document.querySelectorAll('.navbar a');

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, {
        rootMargin: '-50% 0px -50% 0px' 
    });

    sections.forEach(section => {
        navObserver.observe(section);
    });

});
