import Key from './modules/key.js';
import styles from './styles.scss';

let container = document.createElement('div');
container.classList.add('container');
document.body.append(container);
container.innerHTML = `
  <textarea class="textarea" name="textarea"></textarea>
  <div class="keyboard"></div>
`
let textarea = document.querySelector('.textarea');
let keyboard = document.querySelector('.keyboard');
let keysValue = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '|', 'Del',
  'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter',
  'Shift','|', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '↑', 'Shift',
  'Ctrl', 'EN', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→'
];


for (let i = 0; i < keysValue.length; i++) {
  const newKey = new Key(keysValue[i]);
  newKey.create();
}

keyboard.addEventListener('click', (event) => {
  if(event.target.classList.contains('key')) {
    textarea.active = true;
    textarea.textContent = textarea.textContent + event.target.textContent;
  }
})