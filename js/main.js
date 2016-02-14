jQuery(function($){

    $('.menu-hover').hover(function(){
        $(this)
            .siblings('ul')
            .toggleClass('active');
    });

    $('.menu-click').on('click', function(){
        $('.click-links').removeClass('active');
        $(this)
            .siblings('ul')
            .toggleClass('active');
    });

    $('.modal-link').on('click', function(){
        $('.modal-wrap, .modal-overlay').addClass('modal-open');
    });

    $('.modal-close').on('click', function(){
        $('.modal-wrap, .modal-overlay').removeClass('modal-open');
    });

    $('.modal-overlay').on('click', function(){
        $('.modal-wrap, .modal-overlay').removeClass('modal-open');
    });

});