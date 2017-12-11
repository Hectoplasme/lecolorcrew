const pouet = {
    utils : {},
    modules : {},
    libs : {}
};

const pouetModule = (($, pouet) => {

    let utils = pouet.utils || (pouet['utils'] = {}),
        $body = $('body'),
        $html = $('html');

    // pouet.utils.hasJs
    // on load page, remove html Class "no-js" and add class "has-js"
    utils.hasJs = () => {
        $('html').removeClass('no-js').addClass('has-js');
    };

    // pouet.utils.goToTop
    // Scroll to top on class="gototop" links
    utils.goToTop = (speed) => {
        const s = speed || 240;

        $('.backtotop').on('click',(e) => {
            e.preventDefault();
            $('html,body').stop().animate({scrollTop : 0}, s);
        });
    };

    // pouet.utils.goTo
    // Scroll to offset passed in params
    utils.goTo = (offsetY, speed) => {
        $('html,body').stop().animate({ scrollTop:offsetY || 0 }, speed || 240);
    };

    //pouet.utils.externalLinks
    utils.externalLinks = (target) => {
        $body.on('click', 'a[rel="external"]', (e) => {
            e.preventDefault();
            window.open($(this).attr('href'), target || '_blank');
        });
    };

    // pouet.utils.cls
    // generic classes names
    utils.class = {
        hide: 'hidden',
        ishidden: 'is-hidden',
        active: 'is-active',
        fixed: 'is-fixed',
        visible: 'is-visible',
        invisible: 'is-invisible'
    };

    // pouet.utils.detectPlatform
    // @param fn {function} : callback with the platform
    utils.detectPlatform = (fn) => {
        const cb = fn || function() {};
        let platform;

        if(navigator.userAgent.match(/Android/i)){
            platform = "android";
        }

        if(navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i)){
            platform = "ios";
        }

        if(navigator.userAgent.match(/webOS/i)){
            platform = "webos";
        }

        if(navigator.userAgent.match(/windows phone/i)){
            platform = "windowsphone";
        }

        if(navigator.userAgent.match(/BlackBerry/i)){
            platform = "blackberry";
        }

        fn(platform);
    }

    // pouet.utils.isMobileTablet
    // @return {bpouetlean}
    utils.isMobileTablet = (
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/windows phone/i) ||
        navigator.userAgent.match(/BlackBerry/i)
    ) ? true : false;

    utils.isMobile = (
        (navigator.userAgent.match(/Android/i) && navigator.userAgent.indexOf('Mobile') > -1) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/windows phone/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/BB10/i)
    ) ? true : false;

    utils.isTablet = (
        (navigator.userAgent.match(/Android/i) && navigator.userAgent.indexOf('Mobile') == -1) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPad/i)
    ) ? true : false;

    return pouet;

})(jQuery, (pouet || {}) );

//Export pouet
module.exports = pouet;
