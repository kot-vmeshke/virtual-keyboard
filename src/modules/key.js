export default class Key {
  constructor(value, span) {
    this.value = value;
  }

  create() {
    let customKey = document.createElement('div');
    customKey.classList.add('key');
    document.querySelector('.keyboard').append(customKey);
    customKey.innerText = this.value;
  }

}