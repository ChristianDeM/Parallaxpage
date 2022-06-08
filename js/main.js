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
        [0, 50],
        [1, 0],
      ],
      translateY: [
        [0, 90],
        [0, 100],
      ],
    },
  });

  
lax.addElements(".welocome", {
  scrollY: {
    scrollY: {
      opacity: [
        [500, 600],
        [0, 1],
      ],
    },
  },
});


}
