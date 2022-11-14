//video play on hover 
$(document).ready(function () {
  var url=""
  $('.video').each(function (el) {
    var _this = $(this);
    var  url = ""
    _this.on('mouseover', function (ev) {
       if(url.length >0){
        tmp  = url.replace("?&autoplay=0","?&autoplay=1&mute=1")
        _this[0].src= url
       }else{
        _this[0].src += "?&autoplay=1&mute=1";
        url = _this[0].src
       }
     
      console.log("mouse in")
      console.log(_this[0])

    });
    _this.on('mouseout', function (ev) {
      ev.preventDefault()
      //_this[0].src += "?&autoplay=0"
      //_this[0].src = url+"?&autoplay=0"
       var tmp  = url.replace("?&autoplay=1&mute=1","?&autoplay=0")
      _this[0].src=tmp
      console.log("mouse out")
  
      console.log(_this[0])


      
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
  const showMore = document.querySelectorAll(".showmore")
  const showLess= document.querySelectorAll('shrink')
  const secEnd = document.querySelectorAll("#showmore-secEnd")
  
 
  menuToggle[0].onclick= function (e) {
    e.preventDefault()
    
    menuToggle[0].classList.toggle("active");
    navigation[0].classList.toggle('active')

    console.log(navigation)
    console.log(menuToggle)
  }

  
  showMore[0].onclick= (e)=>{
    e.preventDefault()
    showMore[0].classList.toggle("active")
    secEnd[0].classList.toggle("active")
    console.log(secEnd)
    
  }

  showLess[0].onclick=(e)=>{
    e.preventDefault()
    showMore[0].classList.toggle("")
    console.log(showLess)

  }

  
})

