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