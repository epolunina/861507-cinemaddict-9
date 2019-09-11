import {createCard} from './components/card.js';
import {createSearch} from './components/search.js';
import {createButtonShowmore} from './components/showmore.js';
import {createUserRank} from './components/userrank.js';
import {createMenu} from './components/menu.js';
import {createPopup} from './components/popup.js';

// Функция для рендеринга компонент
const render = (container, template, place) => {
    container.insertAdjacentHTML(place, template);
  };

const header = document.querySelector(`.header`);
const main = document.querySelector(`.main`);
const footer = document.querySelector(`.footer`);
const extra = document.querySelector(`.filmListExtra`);

//отрисовка элементов
render(header, createSearch(), `beforeend`);
render(header, createUserRank(), `beforeend`);



render(main, createMenu(), `beforeend`);
render(main, createSortingLing(), `beforeend`);
render(main, createContent(), `beforeend`);
render(main, createButtonShowmore(), `beforeend`);

//Отрисовка карточки 5 раз
for (let i = 0; i < 5; i++) {
  render(filmContainer, createCard(), `beforeend`);
}


  for (let i = 0; i < 2; i++) {
    render(extraListContainer, createCard(), `beforeend`);
  }

render(main, createCard(), `beforeend`);


render(footer, createPopup(), `afterend`);