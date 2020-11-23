var $win = $(window),
  w = 0,
  h = 0,
  rgb = [],
  getWidth = function() {
    w = $win.width();
  };

$win.resize(getWidth).mousemove(function(e) {

  var cursorplacement = Math.round(e.pageX / w * 2000) - 1000;

  $('#glyph').attr("style", "font-variation-settings: 'wght'" + cursorplacement);

}).resize();

function update(e) {
  var x = e.clientX || e.touches[0].clientX
  var y = e.clientY || e.touches[0].clientY

  document.documentElement.style.setProperty('--cursorX', x + 'px')
  document.documentElement.style.setProperty('--cursorY', y + 'px')
}

document.addEventListener('mousemove', update)
document.addEventListener('touchmove', update)
