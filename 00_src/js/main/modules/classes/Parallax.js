/**
 * @file Module to make parallax.
 * @author Arnaud Pinot <http://spintank.fr/>
 * @version 1.0
 */


/** Require TweenLite to make smooth effect */
const TweenLite = require('gsap');

/**
 * Object to make parallax on your website
 * @param {object} element - Parent element who contain elements on which apply parallax effect
 * @param {object} options - parallax {string}, speedRatio {number}, speedRatioSlow {number}, offset {number/string}
 * @constructor
 */
const Sptkparallax = function (element, options) {

    // Check if options object is empty
    options || (options = {});

    // Get options
    this.$container = element; //Get container
    this.scrollType = options.scrollType || 'scroll'; // Scroll by default
    this.direction =  options.direction || 'vertical';
    this.parallax = options.parallax || false; // If parallax is active
    this.opacity = options.opacity || false; // Opacity false by default
    this.speedRatio = options.speedRatio || .5; // Scroll speed
    this.speedRatioSlow = options.speedRatioSlow || .25; // Scroll speed (slower)
    this.offset = options.offset || "middle"; // Offset default
    this.itemsClass = options.itemsClass || ".sptk_parallax";

    // Do method if $container isn't empty
    if (this.$container) {
        this.setup();
    }

};


/** This method read what parallax method you want to call */
Sptkparallax.prototype.setup = function setup() {

    // Isolate this (refer to Sptkparallax Object)
    const self = this;

    // Scroll parallax method
    if (self.scrollType === "scroll" || self.scrollType === "scroll-reverse") {
        self.scroll();
    }

};


/** This method allows you make parallax effect on scroll  */
Sptkparallax.prototype.scroll = function scroll() {

    ////////////////
    // Set variables
    ///////////////

    // Isolate this (refer to Sptkparallax Object)
    const self = this;

    // Fallbacks to get widow height
    var w = window;
    var e = document.documentElement;
    var g = document.getElementsByTagName('body')[0];
    var wHeight = w.innerHeight||e.clientHeight||g.clientHeight;
    var containerHeight = self.$container.offsetHeight;


    // Get options
    var scrollType = self.scrollType;
    var direction = self.direction;
    var parallax = self.parallax;
    var opacity = self.opacity;
    var elContainer = self.$container;
    var ratio = self.speedRatio;
    var ratioSlow = self.speedRatioSlow;
    var screenOffset = self.offset;

    if (screenOffset === "top") {
        screenOffset = 0;
    } else if (screenOffset === "middle") {
        screenOffset = wHeight/2;
    } else if (screenOffset === "bottom" ) {
        screenOffset = wHeight;
    } else {
        screenOffset = self.offset;
    }

    // Find .sptk_parallax class in ParentElement
    var elements = elContainer.querySelectorAll(self.itemsClass);

    // ON SCROLL EVENT
    window.addEventListener("scroll", function () {
        // Calc scrollTop of body and ParentElement
        var scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;

        var elRect = elContainer.getBoundingClientRect();
        var elTop = elRect.top + scrollTop;

        // Calc parallax starting based on ParentElement ScrollTop and Window Height
        var startTop = elTop - screenOffset;

        // Calc distance to move parallax item
        var dist = scrollTop - startTop;

        // For each elements
        Array.prototype.forEach.call(elements, function(el, i) {

            var elDist = (dist > 0) ? - dist : dist;
            var elRatio = el.getAttribute('data-ratio') * 1 || ratio;

            //Check if I have a classic scroll or a reverse scroll
            if (scrollType === "scroll") {
                var pixelsMoved = elDist * elRatio;
            } else if (scrollType === "scroll-reverse") {
                var pixelsMoved = elDist * - elRatio;
            }

            //Check if I have a classic opacity or a reverse opacity
            if (opacity === "show" && direction === "vertical") {
                var currentOpacity = ((pixelsMoved / containerHeight) * 2) * -1;
            } else if (opacity === "show" && direction === "horizontal") {
                var currentOpacity = 1 - ((pixelsMoved / containerHeight) * 4) * -1;
            } else if (opacity === "hide" && direction === "vertical") {
                var currentOpacity = 1 - ((pixelsMoved / containerHeight) * 2) * -1;
            } else if (opacity === "hide" && direction === "horizontal") {
                var currentOpacity = 1 - ((pixelsMoved / containerHeight) * 4) * -1;
            }


            //ANIMATE
            if (scrollTop > startTop && scrollTop > 5) {
                // Check direction
                if (direction === "vertical") {
                    if (parallax === true) {
                        //When I Scroll do Parallax
                        TweenLite.to(el, 0.8, {y: pixelsMoved+"px",force3D: true,overwrite: false});
                    }

                    if (opacity != false) {
                        //When I Scroll do Opacity
                        TweenLite.to(el, 0.5, {opacity: currentOpacity, overwrite: false});
                    }


                } else if (direction === "horizontal") {
                    if (parallax === true) {
                        //When I Scroll do Parallax
                        TweenLite.to(el, 0.8, {x: -pixelsMoved+"px",force3D: true,overwrite: false});
                    }

                    if (opacity != false) {
                        //When I Scroll do Opacity
                        TweenLite.to(el, 0.5, {opacity: currentOpacity, overwrite: false});
                    }

                }

                // DON'T ANIMATE
            } else {
                //When user scroll on top of document
                TweenLite.to(el, 0.8, {y: 0+"px", x: 0+"px", force3D: true,overwrite: true});
                if (opacity === "show") {
                    TweenLite.to(el, 0.5, {opacity: 0, overwrite: false});
                } else if (opacity === "hide") {
                    TweenLite.to(el, 0.5, {opacity: 1, overwrite: false});
                }
            }

        });

    });
};


module.exports = Sptkparallax;
