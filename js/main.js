window.onload=function(){
    lax.init();
     window.addEventListener('scroll',(e)=>{
         console.log(window.screenY);
     });


lax.addDriver('scrollY',function(){
    return window.scrollY;
});

lax.addElements(".logo", {
    scrollY: {
      scale: [
        [0, 80],
        [1, 3],
      ],
      opacity: [
        [0, 50],
        [1, 0],
      ],
      translateY: [
        [0, 80],
        [0, 200],
      ],
    },
  });
}