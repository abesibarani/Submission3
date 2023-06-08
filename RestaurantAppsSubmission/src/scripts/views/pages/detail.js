import restaurantData from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import { createRestoDetailTemplate, createRestoReviewTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
    <h2>
      <span class="title-content">Detail Restaurant</span>
    </h2>

    <div id="detail-restaurant" class="row-resto"></div>
    <div id="likeButtonContainer"></div>

    <h2>Reviews</h2>
    <div id="review-restaurant"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detail = await restaurantData.detailResto(url.id);
    const restoContainer = document.querySelector('#detail-restaurant');

    restoContainer.innerHTML = createRestoDetailTemplate(detail);

    const restoReview = document.querySelector('#review-restaurant');
    detail.customerReviews.forEach((review) => {
      restoReview.innerHTML += createRestoReviewTemplate(review);
    });

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      likeRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: detail.id,
        name: detail.name,
        city: detail.city,
        description: detail.description,
        pictureId: detail.pictureId,
        rating: detail.rating,
      },
    });
  },
};

export default Detail;
