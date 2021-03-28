const menu= document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.navbar_menu');
    const navLogo = document.querySelector('#navbar_logo');
    //Display Menu
    const mobileMenu = () => 
    {
        //active v. not active toggle
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    }
    menu.addEventListener('click', mobileMenu);
    //Function to show active menu when scrolling
    const highlightMenu = () =>
    {
        const element = document.querySelector('.highlight');
        const homeMenu = document.querySelector('#home-page');
        const aboutMenu = document.querySelector('#about-page');
        const servicesMenu = document.querySelector('#services-page');
        let scrollPos = window.scrollY;
        console.log(scrollPos);
        //adding bottom highlight to menu items when user scrolls
        if(window.innerWidth > 960 && scrollPos < 600) //home menu highlight
        {
            homeMenu.classList.add('highlight');
            aboutMenu.classList.remove('highlight');
            return;
        }
        else if(window.innerWidth > 960 && scrollPos < 1400) //about menu highlight
        {
            aboutMenu.classList.add('highlight');
            homeMenu.classList.remove('highlight');
            servicesMenu.classList.remove('highlight');
            return;
        }
        else if(window.innerWidth > 970 && scrollPos < 2345) //service menu highlight
        {
            servicesMenu.classList.add('highlight');
            aboutMenu.classList.remove('highlight');
            return;
        }
        if(element && window.innerWidth < 960 && scrollPos < 600 || element)
        {
            element.classList.remove('highlight');
        }
    }
    //calling the function
    window.addEventListener('scroll', highlightMenu);
    window.addEventListener('click', highlightMenu);