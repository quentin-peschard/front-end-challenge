const listElement = document.querySelector('.list-div');
const footerElement = document.querySelector('.radios-footer');

fetch("https://teclead.de/recruiting/radios")
  .then(resp => resp.json())
  .then(data => {
    const radios = data.radios;
    radios.forEach(radio => {
      const radioContent = `<div class='radios-list'>
        <div class='radios-info'>
          <p>${radio.name}</p>
          <p><strong>${radio.frequency}</strong></p>
        </div>
        <div class='radios-image hidden'>
          <i class="fas fa-plus-circle"></i>
          <img src='${radio.image}'>
          <i class="fas fa-minus-circle"></i>
        </div>
      </div>`;

      listElement.insertAdjacentHTML("beforeend", radioContent);
      const imageElement = document.querySelector('.radios-image');
      document.querySelectorAll('.radios-list').forEach( item => {
        item.addEventListener('click', event => {
          imageElement.classList.remove('hidden');
          const footerContent = `<p>${radio.name}</p>`
          footerElement.insertAdjacentHTML("beforeend", footerContent);
        })
      })
    });
  });
;
