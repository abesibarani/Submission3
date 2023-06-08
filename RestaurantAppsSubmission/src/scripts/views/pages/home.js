import restaurantData from '../../data/restaurant-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <section class="content">
        <div class="exp-content">
            <h1>Explore Restaurant</h1>
            <div class="list" id="exp-resto"></div>
        </div>
      </section>
      `;
  },

  async afterRender() {
    const restaurants = await restaurantData.listResto();
    const restaurantsContainer = document.querySelector('#exp-resto');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default Home;
