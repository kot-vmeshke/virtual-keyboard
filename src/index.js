/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */

import Key from './modules/key';
import keysValue from './modules/keysValue';
import styles from './styles.scss';

const container = document.createElement('div');
container.classList.add('container');
document.body.append(container);
container.innerHTML = `
  <textarea class="textarea" name="textarea"></textarea>
  <div class="keyboard"></div>
`;

// eslint-disable-next-line no-plusplus
for (let i = 0; i < keysValue.length; i++) {
  const newKey = new Key(keysValue[i].value, keysValue[i].letter);
  newKey.create();
}
