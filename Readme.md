# pagina web Parallax efectr scroll

## Librerias

``lax.js``
``bootstrap@5.2.0-beta1``


## imports

`` <script href="node_modules/lax.js/lib/lax.min.js"></script> ``

## codes

**lectura de scrol en el navegadoresto nos ayuda a conocer la pocision para las animaciones**

```
window.onload=function(){
     window.addEventListener('scroll',(e)=>{
         console.log(window.screenY);
     })
}
```