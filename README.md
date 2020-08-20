# About this repo

This repo represents my attempt at learning to use Vue + Bootstrap Vue with Laravel.
I'm also trying to learn more about Laravel and use as much of Laravel's built in functionality as possible. Examples of what I will / would like to try and include:

 - [ ] Notifications / Broadcasting (Mixer)
 - [ ] Console Commands / Scheduler
 - [ ] Events
 - [ ] Eloquent
   - [ ] Pagination
   - [ ] Filtering
   - [ ] Searching
 - [x] Authentication
 - [x] Webpack / NPM / Sass
 - [ ] Unit testing
 - [X] Database Seeding / Migrations
 - [ ] Caching
 - [ ] Emails
 - [ ] File Storage (Maybe try AWS S3?)
 - [ ] Route "resources"
 - [ ] Requests for Validation)

# Using vue in laravel

```composer require laravel/ui```

```php artisan ui vue --auth```

```npm install && npm run dev```

# Using Bootstrap-vue

```npm i bootstrap-vue```

Add the following code to the app.js; before the ```new Vue``` block of code

```
import BootstrapVue from 'bootstrap-vue'  
Vue.use(BootstrapVue);
```

Add the following code to the app.scss at the end of the file
```
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';
```

Now you can use bootstrap-vue components, just create an element with the id of "app" and use vue components inside.

# Creating and using a component

Create a component under `resources/js/components`, you can use a sub folder if you want.

Load the component in the app.js file like this:

```
Vue.component('new-component', require('./components/NewComponent.vue').default);
```

Use the component inside the html, inside the newly created element with the id of "app"

```
<new-component></new-component>
```

# Third Party Attributes

 - [Laravel Docs for Vue](https://laravel.com/docs/7.x/frontend)
 - [Bootstrap Vue w/Laravel](https://stackoverflow.com/questions/55915329/how-to-include-bootstrap-vue-in-laravel)
 - [Bootstrap Vue Docs](https://bootstrap-vue.org/docs/)
 - [Vue Router](https://laravel-news.com/using-vue-router-laravel)
 - [Token Based Authentication w/Vue](https://dev.to/romanpaprotsky/vue-js-token-based-authentication-with-laravel-sanctum-3a84)
 - [Laravel CSRF JS](https://stackoverflow.com/a/45570448)