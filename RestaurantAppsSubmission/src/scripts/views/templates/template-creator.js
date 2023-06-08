import CONFIG from '../../globals/config';

const createRestoItemTemplate = (resto) => `
  <div class="list_resto" id="resto-item">
    <div class="card">
      <div class="card-img">
        <div class="city-label">
          <span class="city-label-text">
            ${resto.city}
          </span>
        </div>
        <img class="resto_img" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" crossorigin="anonymous">
      </div>
      <div class="card-body">
        <div class="rating">
          <span>RATING: ${resto.rating}</span>
        </div>
        <h3 class="card-title" id="resto-title">
          <a href="./#/detail/${resto.id}" title="halaman detail makanan">${resto.name}</a>
        </h3>
        <p class="card-text">${resto.description}</p>
      </div>
    </div>
  </div>
`;

const createRestoDetailTemplate = (resto) => `
  <div class="detail">
    <h1 class="title" id="resto-title">
      ${resto.name}
    </h1>
    <img class="lazyload" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" crossorigin="anonymous" />

    <div class="info">
      <h2>Information</h2>
      <ul>
        <li>
          <h3>Kota</h3>
          <p>${resto.city}</p>
        </li>
        <li>
          <h3>Alamat</h3>
          <p>${resto.address}</p>
        </li>
        <li>
          <h3>Rating</h3>
          <p>${resto.rating}</p>
        </li>
        <li>
          <h3>Menu Makanan</h3>
          <span id="food">
            <p>${resto.menus.foods.map((food) => food.name).join(', ')}</p>
          </span>
        </li>
        <li>
          <h3>Menu Minuman</h3>
          <span id="drink">
            <p>${resto.menus.drinks.map((drink) => drink.name).join(', ')}</p>
          </span>
        </li>
      </ul>
    </div>

    <div class="desc-resto">
      <h2>Description</h2>
      <p>${resto.description}</p>
    </div>
  </div>
`;

const createRestoReviewTemplate = (review) => `
  <div class="review">
    <p>
      <span class="name">${review.name}</span> &bull; <span class="date">${review.date}</span>
    </p>
    <p>${review.review}</p>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createRestoReviewTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
