const controller = require('../controllers/user.controllers');

module.exports = (app) => {
    app.get('/', controller.home);
    app.get('/about', controller.about);
    app.get('/contact', controller.contact);
};