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
            this.ui.$carousel = document.querySelector('.js-carousel');
            this.ui.$clone = document.querySelector('.js-carousel-clone-container');
            this.ui.$close = this.ui.$carousel.querySelector('.js-carousel-close');
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
            this.itemActive;

        },

        bindEvents() {
            for (let item of this.ui.$galleryItems) {
                item.addEventListener('click', this.onClick.bind(this));
            }
            this.ui.$close.addEventListener('click', this.unzoomItem.bind(this));
            // window.addEventListener('parallax:disabled', this.zoomItem.bind(this));
        },

        onClick(e) {
            if (!this.isZoomed) {
                this.itemActive = e.target;
                this.resetProperties(this.itemActive.querySelector('img'));
                this.zoomItem(this.itemActive);
                this.disableParallax();
            }
        },

        enableParallax() {
            //disable the parallax
            var evt = new CustomEvent('zoom:inactive');
            window.dispatchEvent(evt);
        },

        disableParallax() {
            //disable the parallax
            var evt = new CustomEvent('zoom:active');
            window.dispatchEvent(evt);
        },

        resetProperties(item) {
            this.position.itemX = item.getBoundingClientRect().left;
            this.position.itemY = item.getBoundingClientRect().top;

            this.position.itemWidth = item.offsetWidth;
            this.position.itemHeight = item.offsetHeight;

            this.position.itemCenterY = this.position.itemY - this.position.itemHeight / 2;
            this.position.itemCenterX = this.position.itemX - this.position.itemWidth / 2;

            this.ratio = this.position.windowHeight / this.position.windowWidth < this.position.itemHeight / this.position.itemWidth ?
                this.position.windowHeight * 0.85 / this.position.itemHeight
                : this.position.windowWidth * 0.85 / this.position.itemWidth;
        },

        zoomItem(item) {
            item = item.querySelector('img');

            var imgSrcUrl = item.getAttribute('src');
            var imgSrc = document.createElement('img');

            imgSrc.src = imgSrcUrl;
            this.ui.$clone.appendChild(imgSrc);

            this.ui.$clone.style.top = this.position.itemY + 'px';
            this.ui.$clone.style.left = this.position.itemX + 'px';
            this.ui.$clone.style.height = this.position.itemHeight + 'px';
            this.ui.$clone.style.width = this.position.itemWidth + 'px';

            this.ui.$carousel.classList.add('is-zoomed');

            setTimeout(() => {
                document.body.style.overflow = 'hidden';
                this.ui.$clone.style.height = this.position.itemHeight * this.ratio + 'px';
                this.ui.$clone.style.width = this.position.itemWidth * this.ratio + 'px';
                this.ui.$clone.style.top = this.position.windowY - this.position.itemHeight * this.ratio / 2 + 'px';
                this.ui.$clone.style.left = this.position.windowX - this.position.itemWidth *this.ratio / 2  + 'px';
            }, 250)

            this.isZoomed = true;
        },

        unzoomItem(item) {
            this.isZoomed = false;

            this.ui.$clone.style.top = this.position.itemY + 'px';
            this.ui.$clone.style.left = this.position.itemX + 'px';
            this.ui.$clone.style.height = this.position.itemHeight + 'px';
            this.ui.$clone.style.width = this.position.itemWidth + 'px';

            setTimeout(() => {
                this.ui.$carousel.classList.remove('is-zoomed');
                document.body.style.removeProperty('overflow');
            }, 250)
            setTimeout(() => {
                this.ui.$clone.innerHTML = '';
                this.ui.$clone.style.removeProperty('top');
                this.ui.$clone.style.removeProperty('left');
                this.ui.$clone.style.removeProperty('height');
                this.ui.$clone.style.removeProperty('width');
                this.enableParallax();
            }, 500)
        }


}

module.exports = homeCarousel;
