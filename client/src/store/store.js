import {
  createStore
} from 'easy-peasy';

const storeModel = {
  RequestLinks: {
    login: 'http://localhost:5000/auth/login',
  },
  PageName: {
    login: 'Login',
  },
};

const store = createStore(storeModel);

export default store