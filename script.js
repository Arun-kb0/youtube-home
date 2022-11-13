//video play on hover 
$(document).ready(function () {
  $('.video').each(function (el) {
    var _this = $(this);
    _this.on('mouseover', function (ev) {
      _this[0].src += "?&autoplay=1&mute=1";
      ev.preventDefault();
      //console.log(_this[0])

    });
    _this.on('mouseout', function (ev) {
      _this[0].src += "?autoplay=0"
      ev.preventDefault()
    })
  });
});

//sidebar 

$(document).ready(function () {
  let list = document.querySelectorAll('.list')
  console.log(list.length)
  for (let i = 0; i < list.length; i++) {
    //console.log(list[i])
    list[i].onclick = () => {
      let j = 0
      while (j < list.length) {
        list[j++].className = 'list'
      }
      list[i].className = 'list active'
      console.log(list[i])
    }
  }
})


//toggle btn
$(document).ready(function () {
  const menuToggle = document.querySelectorAll('.ham-btn')
  const navigation = document.querySelectorAll('.navigation')
  //console.log(navigation[0])
  menuToggle[0].onclick= function () {
    
    menuToggle[0].classList.toggle("active");
    navigation[0].classList.toggle('active')

    console.log(navigation)
    console.log(menuToggle)
  }
})

