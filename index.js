const abrirModal = () => {
    const modal = document.getElementById('modal');
    const icone = document.getElementById('icone');

    if (modal.style.display === 'none' || modal.style.display === '') {
      icone.innerHTML = '<i class="fa-solid fa-x"></i>';
      modal.style.display = 'block';
    } else {
      icone.innerHTML = '<i class="fa-solid fa-bars"></i>';
      modal.style.display = 'none';
    }
  };