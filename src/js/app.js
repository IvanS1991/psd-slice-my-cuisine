import Sammy from 'sammy';
import homeController from './controllers/home.js';
import menuController from './controllers/menu.js';
import postController from './controllers/post.js';
import locationController from './controllers/location.js';

const sammyApp = Sammy('#content', (app) => {
  app.get('#/', ($context) => {
    $context.redirect('#/home');
  });
  app.get('#/home', homeController);
  app.get('#/menu', menuController);
  app.get('#/post', postController);
  app.get('#/location', locationController);
});

sammyApp.run('#/');
