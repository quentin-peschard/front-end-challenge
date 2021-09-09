const listElement = document.querySelector('.list-div');

fetch("https://teclead.de/recruiting/radios")
  .then(resp => resp.json())
  .then(data => {
    const radios = data.radios;
    radios.map(radio => {
      const radioContent = `<div class='radios-list'>
        <p>${radio.name}</p>
        <p><strong>${radio.frequency}</strong></p>
      </div>`;
      const imageContent = `<div class='radios-image'>
        <img src='${radio.image}'>
      </div>`
      listElement.insertAdjacentHTML("beforeend", radioContent);
      const eachRadio = document.querySelector('.radios-list');
      const event = eachRadio.addEventListener('click', (event) => {
        console.log(event);
      });
    });
  });
;
