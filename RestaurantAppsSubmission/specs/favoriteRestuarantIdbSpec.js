/* eslint-disable no-undef */
import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantIdb.getAllRestaurant()).forEach(async (resto) => {
      await FavoriteRestaurantIdb.deleteRestaurant(resto.id);
    });
  });

  itActsAsFavoriteRestoModel(FavoriteRestaurantIdb);
});
