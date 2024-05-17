import { App } from 'vue';
import TestComponent from './packages/test-component.vue';

export { TestComponent };

export default {
  install(app: App): void {
    app.component('TestComponent', TestComponent);
  }
};
