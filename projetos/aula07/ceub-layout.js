/*
 * CEUB Pets — comportamento comum a todas as telas
 * Substitui o sb-admin-2.js (que não está no projeto): recolher a sidebar
 * e mostrar o botão de voltar ao topo.
 * Carregar depois de jquery.js e bootstrap_bundle.js.
 */
(function ($) {
    'use strict';

    $('#sidebarToggle, #sidebarToggleTop').on('click', function () {
        $('body').toggleClass('sidebar-toggled');
        $('.sidebar').toggleClass('toggled');
        if ($('.sidebar').hasClass('toggled')) {
            $('.sidebar .collapse').collapse('hide');
        }
    });

    $(window).on('resize', function () {
        if ($(window).width() < 768) {
            $('.sidebar .collapse').collapse('hide');
        }
        if ($(window).width() < 480 && !$('.sidebar').hasClass('toggled')) {
            $('body').addClass('sidebar-toggled');
            $('.sidebar').addClass('toggled');
            $('.sidebar .collapse').collapse('hide');
        }
    });

    $(document).on('scroll', function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });

})(jQuery);
