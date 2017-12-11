const moduleName = {
        initialize() {
            console.log('pouet','it works !');
            this.bindUI();
            this.setProperties();
            this.bindEvents();
        },

        bindUI() {
            this.ui = {};
        },

        setProperties() {
        },

        bindEvents() {
            //Example
            //this.ui.containerName.addEventListener('mouseover', this.onHover.bind(this));
        },

        onHover(e) {
        }
}

module.exports = moduleName;
