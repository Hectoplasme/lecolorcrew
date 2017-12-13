const moduleName = {
        initialize() {
            console.log('pouet','it works !');
            this.bindUI();
            this.setProperties();
            this.bindEvents();
        },

        bindUI() {
            this.ui = {};

            this.ui.header = document.querySelector('.js-header');
            this.ui.menuBtn = document.querySelector('.js-menu-toggler');
        },

        setProperties() {
            this.isOpen = false;
        },

        bindEvents() {
            this.ui.menuBtn.addEventListener('click', this.onClick.bind(this));
        },

        onClick(e) {
            if (this.isOpen) {
                this.close();
            } else {
                this.open();
            }
        },

        close() {
            this.isOpen = false;
            this.ui.header.classList.remove('is-open');
        },

        open() {
            this.isOpen = true;
            this.ui.header.classList.add('is-open');

        }
}

module.exports = moduleName;
