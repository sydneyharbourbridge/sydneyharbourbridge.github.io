(function($) {
  $(document).ready(function() {

    $('#pictures-demo').slippry({
      // general elements & wrapper
      slippryWrapper: '<div class="sy-box pictures-slider" />', // wrapper to wrap everything, including pager

      // options
      adaptiveHeight: false, // height of the sliders adapts to current slide
      captions: false, // Position: overlay, below, custom, false

      // pager
      pager: false,

      // controls
      controls: false,
      autoHover: false,

      // transitions
      transition: 'kenburns', // fade, horizontal, kenburns, false
      kenZoom: 140,
      speed: 14000 // time the transition takes (ms)
    });

  });
})(jQuery);
