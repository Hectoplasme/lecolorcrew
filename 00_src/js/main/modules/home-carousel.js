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
            // window.addEventListener('parallax:disabled', this.zoomItem.bind(this));
        },

        onClick(e) {
            console.log('what?');
            if (!this.isZoomed) {
                console.log('what?');
                this.zoomItem(e.target);
                // this.itemActive = e.target;
                this.disableParallax();
            }
        },

        disableParallax() {
            //disable the parallax
            var evt = new CustomEvent('zoom:active');
            window.dispatchEvent(evt);
        },

        zoomItem(item) {
            var imgSrcUrl = item.getAttribute('src');
            var imgSrc = document.createElement('img');
            var imgClone = this.ui.$clone;

            imgSrc.src = imgSrcUrl;
            imgClone.appendChild(imgSrc);

            this.position.itemX = item.getBoundingClientRect().left;
            this.position.itemY = item.getBoundingClientRect().top;
            this.position.itemWidth = item.offsetWidth;
            this.position.itemHeight = item.offsetHeight;
            this.position.itemCenterY = this.position.itemY - this.position.itemHeight / 2;
            this.position.itemCenterX = this.position.itemX - this.position.itemWidth / 2;

            imgClone.style.top = this.position.itemY + 'px';
            imgClone.style.left = this.position.itemX + 'px';
            imgClone.style.height = this.position.itemHeight + 'px';
            imgClone.style.width = this.position.itemWidth + 'px';

            imgClone.classList.add('is-zoomed');

            setTimeout(() => {
                this.ratio = this.position.windowHeight / this.position.windowWidth < this.position.itemHeight / this.position.itemWidth ?
                    this.position.windowHeight * 0.9 / this.position.itemHeight
                    : this.position.windowWidth * 0.9 / this.position.itemWidth;
                imgClone.style.height = this.position.itemHeight * this.ratio + 'px';
                imgClone.style.width = this.position.itemWidth * this.ratio + 'px';
                imgClone.style.top = this.position.windowY - this.position.itemHeight * this.ratio / 2 + 'px';
                imgClone.style.left = this.position.windowX - this.position.itemWidth *this.ratio / 2  + 'px';
                // console.log(ratio);
                // if (this.position.itemHeight > this.position.itemWidth) {
                //
                // }
            }, 250)

            this.isZoomed = true;
        }


}

module.exports = homeCarousel;
