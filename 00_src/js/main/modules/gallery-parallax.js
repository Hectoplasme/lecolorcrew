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
        this.ui.$parallaxItems = '.js-parallax-item';
    },

    setProperties() {
    },

    bindEvents() {},

    initParallax() {
        for (let i = 0, j = this.ui.$parallaxContainer.length; i < j; i++) {
            const parallaxContainer = this.ui.$parallaxContainer[i];

            this.parallax = new Parallax(parallaxContainer, {
                scrollType: "scroll",
                parallax: true,
                opacity: false,
                scale: false,
                direction: "vertical",
                offset: "middle",
                speedRatio: .5,
                speedRatioSlow: .25,
                itemsClass: this.ui.$parallaxItems
            });
        }
    }
}

module.exports = galleryParallax;
