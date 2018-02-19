const homeCarousel = {
        initialize() {
            console.log('pouet','it works !');
            this.bindUI();
            this.setProperties();
            this.bindEvents();
        },

        bindUI() {
            this.ui = {};

            this.ui.$galleryContainer = document.querySelectorAll('.js-gallery');
            this.ui.$galleryItems =  document.querySelectorAll('.js-gallery-item');
        },

        setProperties() {
            this.position = {
                windowX : window.innerWidth / 2,
                windowY : window.innerHeight / 2,
                windowWidth : window.innerWidth,
                windowHeight : window.innerHeight,
                itemX : 0,
                itemY : 0,
                itemCenterX: 0,
                itemCenterY: 0,
                itemWidth : 0,
                itemHeight : 0
            }
            this.padding = 50;
            this.isZoomed = false;

        },

        bindEvents() {
            for (let item of this.ui.$galleryItems) {
                item.addEventListener('click', this.onClick.bind(this));
            }
            window.addEventListener('parallax:disabled', this.zoomItem.bind(this));
        },

        onClick(e) {
            if (!this.isZoomed) {
                // this.zoomItem(e.target);
                this.itemActive = e.target;
                this.disableParallax();
            }
        },

        disableParallax() {
            //disable the parallax
            var evt = new CustomEvent('zoom:active');
            window.dispatchEvent(evt);
        },

        zoomItem() {
            console.log('zoom');

            this.isZoomed = true;
        }


}

module.exports = homeCarousel;
