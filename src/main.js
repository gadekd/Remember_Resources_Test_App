import { createApp } from 'vue';

import App from './App.vue';
import LearningResource from './components/learning-resources/LearningResource.vue';
import BaseCard from './components/UI/BaseCard.vue';

const app = createApp(App);

app.component('learning-resource', LearningResource);
app.component('base-card', BaseCard);

app.mount('#app');
