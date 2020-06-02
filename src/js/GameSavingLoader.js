/* eslint-disable no-unused-vars */
import json from './JSON';
import read from './Read';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      resolve(read());
    }).then((saveData) => json(saveData));
  }
}
