import BaseApp from './_app';

const root = document.querySelector('#app') as HTMLElement;

document.addEventListener('DOMContentLoaded', () => new BaseApp(root));
