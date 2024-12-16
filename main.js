(function() {
  function createCake(){
    const velas = document.querySelectorAll(".flame");
    velas.forEach(vela => vela.addEventListener("click", () => vela.style.display = "none"));
    
    let contador = 0;    
    velas.forEach(vela => {
      vela.addEventListener('click', () => {
        contador++;
        if (contador === velas.length) {
          setTimeout(() => { 
            alert("🎉 Feliz Cumpleaños! Pide un deseo!")
            velas.forEach(vela => vela.removeAttribute("style"));
          }, 500);
        }
      });
    });
  }

  window.onload = function(){
    createCake();
  };
})();


