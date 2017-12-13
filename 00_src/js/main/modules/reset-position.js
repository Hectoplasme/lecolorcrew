module.exports = function resetPosition() {

  window.addEventListener('resize', function() {
    if (window.pageXOffset > 0) {
      window.scrollTo(0, window.pageYOffset );
    }
  }, false);
}
