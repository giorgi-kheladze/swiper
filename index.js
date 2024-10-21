let http = new XMLHttpRequest();
http.open("get", "frame56.json", true);
http.send();

http.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        let cardblog = JSON.parse(this.responseText);
        let output = "";

        for(let item of cardblog){
            output+=`
              <div class="card swiper-slide">
                <img class="image" src="${item.image}">
                <p class="title">${item.title}</p>
                <p class="name">${item.name}</p>
                <p class="description">${item.description}</p>
              </div>  
            `
        }
        document.querySelector(".swiper-wrapper").innerHTML = output;
    }
}

new Swiper('.swiper', {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 3, // Display 3 slides at a time

  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.buttonM, .btn2',
      prevEl: '.buttonM, .btn1',
    },

    breakpoints: {
      0:{
        slidesPerView: 1
      },
      780: {
        slidesPerView: 3
      }
    }
  
  });

var countDate = new Date("Nov 16, 2024 00:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 *24));
    var hours = Math.floor((distance % (1000 * 60 *60 * 24)) /  (1000 * 60 *60));
    var minutes = Math.floor((distance % (1000 * 60 *60)) /  (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if(distance < 0) {
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    }
}, 1000);