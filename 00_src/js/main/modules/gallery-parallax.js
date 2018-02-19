const Parallax = require('./classes/Parallax');

const galleryParallax = {
    initialize() {
        this.bindUI();
        this.setProperties();
        this.bindEvents();

        this.initParallax();
    },

    bindUI() {
        this.ui = {};

        this.ui.$parallaxContainer = document.querySelectorAll('.js-parallax');
        this.ui.$parallaxItems =  document.querySelectorAll('.js-parallax-item');
        this.ui.$parallaxItemsClass = '.js-parallax-item';
    },

    setProperties() {
        this.tabletWidth = 768;
        this.parallax = [];
        this.isParallaxEnabled = true;

        if (window.innerWidth < this.tabletWidth) {
            this.isParallaxEnabled = false;
        }
    },

    bindEvents() {
        window.addEventListener('resize', this.onResize.bind(this));
        window.addEventListener('zoom:active', this.disableParallax.bind(this));
        window.addEventListener('zoom:inactive', this.enableParallax.bind(this));

    },

    initParallax() {
        var parallax = this.isParallaxEnabled ? true : false;
        for (let i = 0, j = this.ui.$parallaxContainer.length; i < j; i++) {
            const parallaxContainer = this.ui.$parallaxContainer[i];

            this.parallax[i] = new Parallax(parallaxContainer, {
                scrollType: "scroll",
                parallax: parallax,
                opacity: false,
                scale: false,
                direction: "vertical",
                offset: "middle",
                speedRatio: .5,
                speedRatioSlow: .25,
                itemsClass: this.ui.$parallaxItemsClass
            });
        }
    },

    enableParallax() {
        this.isParallaxEnabled = true;
        for (let i = 0, j = this.ui.$parallaxContainer.length; i < j; i++) {
            this.parallax[i].enable();
            // console.log(this.parallax[i].parallax)
        }
    },

    disableParallax() {
        this.isParallaxEnabled = false;
        for (let i = 0, j = this.ui.$parallaxContainer.length; i < j; i++) {
            this.parallax[i].disable();
            // console.log(this.parallax[i].parallax)
        }
    },

    onResize() {
        if (window.innerWidth >= this.tabletWidth && !this.isParallaxEnabled) {
            this.enableParallax();
        } else if (window.innerWidth < this.tabletWidth && this.isParallaxEnabled){
            this.disableParallax();
        }
    }
}

module.exports = galleryParallax;
