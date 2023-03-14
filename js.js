let $ = document

$.querySelector(".first-header").onmousemove = (e) => {
      let x = (window.innerWidth - e.pageX * 10) / 90;
      let y = (window.innerHeight - e.pageY * 10) / 90;
    
      $.querySelector(
        ".bean1"
      ).style.transform = `translateX(${y}px) translateY(${x}px)`;
      $.querySelector(
        ".bean2"
      ).style.transform = `translateX(${y}px) translateY(${x}px)`;
    };
    
$.querySelector(".first-header").onmouseleave = () => {
      $.querySelector(
        ".bean1"
      ).style.transform = `translateX(0px) translateY(0px)`;
      $.querySelector(
        ".bean2"
      ).style.transform = `translateX(0px) translateY(0px)`;
    };


    // loader

const loaderElem = document.querySelector(".loader-container");
window.onload = ()=> loaderElem.classList.add('hidden')
