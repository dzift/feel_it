/*!
* Start Bootstrap - Agency v7.0.4 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // // Navbar shrink function
    // var navbarShrink = function () {
    //     const navbarCollapsible = document.body.querySelector('#mainNav');
    //     if (!navbarCollapsible) {
    //         return;
    //     }
    //     if (window.scrollY === 0) {
    //         navbarCollapsible.classList.remove('navbar-shrink')
    //     } else {
    //         navbarCollapsible.classList.add('navbar-shrink')
    //     }

    // };

    // // Shrink the navbar 
    // navbarShrink();

    var $card1 = document.getElementById("feelCard_1");
    var $card2 = document.getElementById("feelCard_2");
    var $card3 = document.getElementById("feelCard_3");
    var a = randomInteger(1, 32)
    var b = randomInteger(1, 32)
    var c = randomInteger(1, 32)

    var html1 = `<img class="img-fluid d-block mx-auto" src="assets/img/card/card/1 (${a}).png" alt="..." />
    <p><strong>Вспомогательные вопросы для работы с картой:</strong></p>
    <p> Что я чувствую, глядя на карту? Что на карте привлекло мое внимание?
        Почему? Какие эмоции у меня возникают?
        В каких ситуациях, которые происходили ранее были похожие эмоции?
        Как чувствует себя персонаж на картинке? Что персонаж (или персонажи) будет делать
        дальше?
        Как я к этому отношусь? Вижу ли я на картинке себя?
        В какой роли я здесь выступаю? Что я не хочу видеть? Почему?
        Как то, что изображено на карте, говорит мне о моем запросе? </p>
    <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal"
        type="button">
        <i class="fas fa-times me-1"></i>
        ЗАКРЫТЬ
    </button>`

    var html2 = `<img class="img-fluid d-block mx-auto" src="assets/img/card/card/1 (${b}).png" alt="..." />
    <p><strong>Вспомогательные вопросы для работы с картой:</strong></p>
    <p> Что я чувствую, глядя на карту? Что на карте привлекло мое внимание?
        Почему? Какие эмоции у меня возникают?
        В каких ситуациях, которые происходили ранее были похожие эмоции?
        Как чувствует себя персонаж на картинке? Что персонаж (или персонажи) будет делать
        дальше?
        Как я к этому отношусь? Вижу ли я на картинке себя?
        В какой роли я здесь выступаю? Что я не хочу видеть? Почему?
        Как то, что изображено на карте, говорит мне о моем запросе? </p>
    <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal"
        type="button">
        <i class="fas fa-times me-1"></i>
        ЗАКРЫТЬ
    </button>`

    var html3 = `<img class="img-fluid d-block mx-auto" src="assets/img/card/card/1 (${c}).png" alt="..." />
    <p><strong>Вспомогательные вопросы для работы с картой:</strong></p>
    <p> Что я чувствую, глядя на карту? Что на карте привлекло мое внимание?
        Почему? Какие эмоции у меня возникают?
        В каких ситуациях, которые происходили ранее были похожие эмоции?
        Как чувствует себя персонаж на картинке? Что персонаж (или персонажи) будет делать
        дальше?
        Как я к этому отношусь? Вижу ли я на картинке себя?
        В какой роли я здесь выступаю? Что я не хочу видеть? Почему?
        Как то, что изображено на карте, говорит мне о моем запросе? </p>
    <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal"
        type="button">
        <i class="fas fa-times me-1"></i>
        ЗАКРЫТЬ
    </button>`
    $card1.insertAdjacentHTML("beforeBegin", html1);
    $card2.insertAdjacentHTML("beforeBegin", html2);
    $card3.insertAdjacentHTML("beforeBegin", html3);
    



    // // Shrink the navbar when page is scrolled
    // document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});



    function randomInteger(min, max) {
        // случайное число от min до (max+1)
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
      }
      