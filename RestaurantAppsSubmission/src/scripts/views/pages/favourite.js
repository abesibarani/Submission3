import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <h2>
      <span class="title-content">Your Favorite Restaurant</span>
    </h2>

    <div id="detail-restaurant" class="row-resto"></div>
      `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restoContainer = document.querySelector('#detail-restaurant');

    restaurants.forEach((restaurant) => {
      restoContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default Favorite;
