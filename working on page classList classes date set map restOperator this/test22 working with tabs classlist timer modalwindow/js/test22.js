'use strict';

// changing tabs
window.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelectorAll('.tabheader__item');
    const tabsContent = document.querySelectorAll('.tabcontent');
    const tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => { //hiding tabs
            item.classList.add('hide'); // by adding class hide
            item.classList.remove('show', 'fade'); // and removing class show, and removing animation when you change tab
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active'); // removing active condition of header
        });
    };


    function showTabContent(i = 0) { // it shows a tab that you choose put as an argument 'i', 'i = 0' if you use function without argument it will load it with 0 as default
        tabsContent[i].classList.add('show', 'fade'); // 'fade' for animation of changing classes
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active'); // makes it active
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target; //easier to put event.target inside of target

        if(target && target.classList.contains('tabheader__item')) { // if you clicked on the tabs
            tabs.forEach((item, i) => { // it will go through them
                if(target == item) { // and if target equals to item that went through
                    hideTabContent(); // it will hide all content
                    showTabContent(i); // and then it will show tab with 'index' it became equal with
                }
            });
        }
    });

    //timer

    const deadline = '2022-06-11'; // our dead line

    function getTimeRemaining(endtime) { // getting all dates that we need
        let days, hours, minutes, seconds;
        const t = Date.parse(endtime) - Date.parse(new Date()); // end time minus time now
        if(t <= 0) { // checking for minus numbers or zero so when timer is done it wont work anymore
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else {
            days = Math.floor( (t/(1000*60*60*24)) ), // claculating hours days seconds and minutes
            seconds = Math.floor( (t/1000) % 60 ),
            minutes = Math.floor( (t/1000/60) % 60 ),
            hours = Math.floor( (t/(1000*60*60) % 24) );
        }
        

        return { // retrning an object with all the data that we need
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num){ // function for fixing time to make it beatiful '09' instead of '9'
        if (num >= 0 && num < 10) { 
            return '0' + num;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {

        const timer = document.querySelector(selector), // gettin element from the page
            days = timer.querySelector("#days"),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000); // setting interval with function that we made before that will update every second

        updateClock(); // calling it doesnt need to wait one second for udating clock when you update the page

        function updateClock() {
            const t = getTimeRemaining(endtime); // getting remaining time

            days.innerHTML = getZero(t.days); // we just change html code verywhere to put the right numbers
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) { // if it is less than zero we have to stop our timer
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);

    //modal window

    const modalTrigger = document.querySelectorAll('[data-modal]'); // getting all the buttons by atribute
    const modal = document.querySelector('.modal'); // modal window
    const modalCloseBtn = document.querySelector('[data-close]'); //  getting closing modal window by atribute

    
    modalTrigger.forEach(btn => { // for every button
        btn.addEventListener('click', openModal);
    });

    function openModal() {
            modal.classList.add('show');
            modal.classList.remove('hide');
            document.body.style.overflow = 'hidden'; // putting overflow to hide so we cant scroll window
            clearInterval(modalTimerId); // if user opened modal window before it will not open again
    };

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = ''; // make it possible to scroll
    };


    modalCloseBtn.addEventListener('click', closeModal); // it will happen only after click


    modal.addEventListener('click', (event) => { // if user click on space around our modal window it will close
        if(event.target === modal) {
            closeModal();
        }
    });


    document.addEventListener('keydown', (event) => { // "keydown" if you press a button
        if(event.code === "Escape" && modal.classList.contains('show')) { // .code for tracking button that you pressed and "Escape" the button that will be triggered to close modal window and it should be opened
            closeModal();
        }
    });

    const modalTimerId = setTimeout(openModal, 5000); // it will open modal window after some time

    function showModalByScroll() {
        if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) { // if we scrolled to the end of the page it will open modal window
            openModal();
            window.removeEventListener('scroll', showModalByScroll); // after it happened we remove listener from scroll so it will happen only once
        }
    };

    window.addEventListener('scroll', showModalByScroll); //listener for scrolling

    // Classes for cards

    class MenuCard { // creating a parent class for cards
        constructor(src, alt, title, descr, price, parentSelector, ...classes) { // source for image, alt for text if image doesnt work, title for name, description for text, price and ParentSelector where it will be pushed
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.transfer = 27;
            this.classes = classes; // using rest operator to get classes 
            this.changeToUAH();
            this.parent = document.querySelector(parentSelector);
        }

        changeToUAH() { // converting UAH to dollars
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');
            if(this.classes.length === 0) { // if classes are empty
                this.element = 'menu__item'; 
                element.classList.add(this.element); // we will add class by default
            } else { // if it is not :
                this.classes.forEach(className => element.classList.add(className)); // putting every new class into element
            }
            element.innerHTML = `
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
                `;
                this.parent.append(element); // putting element to the end of the parent div
        }
    }

    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Menu"Fitness',
        "DADADDAADADDAADDADADAADDADAADAADADADADADADADADADADADDA",
        9,
        '.menu .container',
        'menu__item',
        'big'
    ).render();

    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Menu"Fitness',
        "DADADDAADADDAADDADADAADDADAADAADADADADADADADADADADADDA",
        9,
        '.menu .container'
    ).render();

    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Menu"Fitness',
        "DADADDAADADDAADDADADAADDADAADAADADADADADADADADADADADDA",
        9,
        '.menu .container',
        'menu__item'
    ).render();
    
});




