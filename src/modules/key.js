/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
export default class Key {
  constructor(value, letter) {
    this.value = value;
    this.letter = letter;
  }

  create() {
    const textarea = document.querySelector('.textarea');
    const keyboard = document.querySelector('.keyboard');
    const key = document.createElement('div');
    key.classList.add('key');
    keyboard.append(key);
    key.innerText = this.value;
    document.addEventListener('keyup', (event) => {
      if (event.key.toLowerCase() === this.value.toLowerCase()) {
        key.style.backgroundColor = '#fd5ce2';
        setTimeout(() => { key.style.backgroundColor = ''; }, 500);
      }
    });
    key.addEventListener('click', () => {
      if (this.letter) {
        textarea.textContent += this.value;
      }
      if (this.value === 'Enter') {
        // eslint-disable-next-line quotes
        textarea.textContent += `\n`;
      }
      if (this.value === 'Backspace') {
        textarea.textContent = textarea.textContent.substring(0, textarea.textContent.length - 1);
      }
    });
  }
}
