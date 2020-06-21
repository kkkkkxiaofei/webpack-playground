export const routes = {
  app: '/app',
  product: '/product'
};

export const util = () => {
  import('./util').then(module => console.log(module, module.default()));
};

export default () => routes;