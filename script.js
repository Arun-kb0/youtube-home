
$(document).ready(function() {
    $('.video').each(function(el){
      var _this = $(this);
      _this.on('mouseover', function(ev) {
        _this[0].src += "?&autoplay=1&mute=1";
        ev.preventDefault();
        console.log(_this[0])
  
      });
      _this.on('mouseout',function(ev){
        _this[0].src+="?autoplay=0"
        ev.preventDefault()
      })
    });
  });