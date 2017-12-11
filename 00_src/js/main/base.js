// IE Specifics
require('es5-shim');
require('es6-shim');

//import modules
const pouet = require('../libs/pouet.js');
const utils = require('../libs/utils.js');
//const moduleName = require('./modules/module-name.js');

(function ($, pouet, win) {
    $(function () {
        const app = {
            initialize() {
                this.bindUI();
                this.bindEvents();
                this.pouet.initialize(this);
                utils.initialize();

                if (!pouet.utils.isMobileTablet) {
                    this.initDesktopOnlyModules();
                } else {
                    this.initMobileOnlyModules();
                }

                this.initCommonModules();
            },

            bindUI() {
                this.ui = {};
                this.ui.$html = $('html');
                this.ui.$body = $('body');
                this.ui.$win = $(window);
            },

            bindEvents() {
            },

            initDesktopOnlyModules() {
                // Example
                //this.pouet.conditionalLoad('.js-module-class', moduleName.initialize.bind(moduleName));

            },

            initMobileOnlyModules() {
                // Example
                //this.pouet.conditionalLoad('.js-module-class', moduleName.initialize.bind(moduleName));
            },

            initCommonModules() {
                // Example
                //this.pouet.conditionalLoad('.js-module-class', moduleName.initialize.bind(moduleName));
            },

            pouet: {
                ctx: null,

                initialize(ctx) {
                    this.ctx = ctx;

                    this.initModules();
                    this.initVariables();
                    this.checkBrowsers();
                },

                initModules() {
                    pouet.utils.externalLinks();
                },

                initVariables() {
                    pouet.utils.$body = this.ctx.ui.$body;
                    pouet.utils.$html = this.ctx.ui.$html;
                    pouet.utils.$win = this.ctx.ui.$win;
                },

                checkBrowsers() {
                    /*@cc_on
                        if (/^10/.test(@_jscript_version)) {
                            window.isIE10 = true;
                            window.isIE = true;

                            pouet.utils.$body.addClass('is-ie10');
                        }
                    @*/

                    if (navigator.userAgent.indexOf("Trident") !== -1 && navigator.userAgent.indexOf("rv:11") !== -1) {
                        window.isIE11 = true;
                        window.isIE = true;

                        pouet.utils.$body.addClass('is-ie11');
                    }

                    if (!!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/)) {
                        window.isSafari = true;

                        pouet.utils.$body.addClass('is-safari');
                    }
                },

                conditionalLoad(selector, callback) {
                    if (document.querySelectorAll(selector).length) {
                        callback();
                    }
                }
            }
        };

        $(window).on('load', () => {
            app.initialize();
        });
    });

})(jQuery, pouet, window);
