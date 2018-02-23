const fixedPresentation = {
    initialize() {
        console.log('pouet','it works !');
        this.bindUI();
        this.setProperties();

        this.initStyles();
        this.onScroll();

        this.bindEvents();
    },

    bindUI() {
        this.ui = {};

        this.ui.header = document.querySelector('.js-header');
        this.ui.$presentation = document.querySelector('.js-presentation');
        this.ui.$post = document.querySelector('.js-homepage-post');
    },

    setProperties() {
        this.opacity = 1;
        this.ui.$presentation.style.opacity = this.opacity;
    },

    bindEvents() {
        window.addEventListener('scroll', this.onScroll.bind(this));
        window.addEventListener('resize', this.onResize.bind(this));
        window.addEventListener('zoom:active', this.onZoom.bind(this));
    },

    onZoom() {
        this.ui.$presentation.classList.add('is-hidden');
        this.onResize();
    },

    onScroll() {
        this.offsetTop = this.ui.$post.getBoundingClientRect().top - this.marginTop/3;
        this.opacity = 0 + (2 - 0) * (this.offsetTop - 0) / ( this.marginTop - 0);
        this.opacity = this.opacity < 0 ? 0 : this.opacity;

        this.ui.$presentation.style.opacity = this.opacity;


        if(this.opacity === 0 && window.innerWidth < 768) {
            this.ui.header.classList.add('is-scrolling');
            this.ui.$presentation.classList.add('is-hidden');
        } else if (this.opacity === 0 ) {
            this.ui.$presentation.classList.add('is-hidden');
        } else {
            this.ui.header.classList.remove('is-scrolling');
        }
    },

    onResize() {

        this.initStyles();
        this.onScroll();

    },

    initStyles() {
        this.offsetTop = this.ui.$post.getBoundingClientRect.top;
        this.marginTop = this.ui.$presentation.offsetHeight;
        this.ui.$post.style.marginTop = this.marginTop + 'px';

    }
}

module.exports = fixedPresentation;
