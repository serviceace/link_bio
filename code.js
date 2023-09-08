const cajitaFlotante = document.getElementById('cajitaFlotante');
const avatar__cajitaFlotatne = document.querySelector('#avatar__cajitaFlotatne');
const titulo__cajitaFlotante = document.querySelector('#titulo__cajitaFlotante');
const btnShare__cajitaFlotante = document.querySelector('#btnShare__cajitaFlotante');
const hidePoint = document.querySelector('#hidePoint');

 
function ocultarCajitaFlotante() {

    const scroll__position = window.scrollY;
    const hidePoint_position = hidePoint.getBoundingClientRect().top;     // la posición del elemento con clase "titulo"

    if (scroll__position > hidePoint_position) {
        cajitaFlotante.classList.remove('cajitaInvisible');
        avatar__cajitaFlotatne.classList.remove('avatarcitoInvisible');
        titulo__cajitaFlotante.classList.remove('ramdogInvisible');
        
        cajitaFlotante.classList.add('cajitaFlotanteVisible');
        avatar__cajitaFlotatne.classList.add('avatarcitoVisible');
        titulo__cajitaFlotante.classList.add('ramdogFlotanteActivo');
    } else {
        
    }
}


 
 function compartirURL() {
  if (navigator.share) {
      navigator.share({
          title: 'Ramdog Dibujo',
          text: 'Ramdog, retatos personalizados de tus mascotas.',
          url: window.location.href // La URL actual del sitio
      })
      .then(() => {
          console.log('URL compartida con éxito');
      })
      .catch((error) => {
          console.error('Error al compartir URL:', error);
      });
  } else {
      alert('Tu navegador no admite la función de compartir.');
  }
}


window.addEventListener('scroll', ocultarCajitaFlotante); // event listener para detectar el scroll
btnShare__cajitaFlotante.addEventListener('click', compartirURL); // event listener para llamar a la función cuando se haga clic en el botón share