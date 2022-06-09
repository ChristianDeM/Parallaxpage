window.onload=function(){
  window.addEventListener("scroll", (e) => {
    console.log(window.scrollY);
  });

lax.init();
lax.addDriver("scrollY", function () {
  return window.scrollY;
}); 


lax.addElements(".logo", {
    scrollY: {
      scale: [
        [0, 90],
        [1, 3],
      ],
      opacity: [
        [0, 90],
        [1, 0],
      ],
      translateY: [
        [0, 90],
        [0, 110],
      ],
    },
  });

  
  lax.addElements(".esfera1", {
    scrollY: {
       translateY: [
         [90, 240],
         [-90, -200],
       ],
      translateX: [
        [90, 240],
        [-650, 150],
      ],
      scale: [
        [90, 240],
        [-1, 1.1],
      ],
    },
  });

  lax.addElements(".esfera2", {
    scrollY: {
      translateX: [
        [180, 270],
        [1650, 1050],
      ],
       translateY: [
         [180, 270],
         [-90, 200],
       ],
     
      scale: [
        [90, 240],
        [-1, 1.1],
      ],
    },
  });


}
