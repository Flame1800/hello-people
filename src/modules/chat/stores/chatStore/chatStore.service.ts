import axios from 'axios';

type dialog = {
  id: string,
  name: string,
  date: string,
};

const service = {
    getDialogs(): Promise<dialog[]> {
        return axios.get('http://localhost/dialogs');
    }
};

export default service;