// card.js
import { tokens } from './tokens.js';
import Button from './button.js';

class Card {
  constructor(id, title, content) {
    this.card = document.createElement('div');
    this.card.className = 'card';
    this.card.id = id;
    this.applyStyles();

    const cardTitle = document.createElement('h2');
    cardTitle.className = 'card-title';
    cardTitle.innerText = title;

    const cardContent = document.createElement('p');
    cardContent.className = 'card-content';
    cardContent.innerText = content;

    const button = new Button('cardButton', 'Click Me', () => alert('Button in card clicked!'));

    this.card.appendChild(cardTitle);
    this.card.appendChild(cardContent);
    this.card.appendChild(button.render());
  }

  applyStyles() {
    this.card.style.backgroundColor = tokens.getCard('backgroundColor');
    this.card.style.padding = tokens.getCard('padding');
    this.card.style.borderRadius = tokens.getCard('borderRadius');
    this.card.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    this.card.style.fontFamily = tokens.getTypography('fontFamily');
  }

  render() {
    return this.card;
  }
}

export default Card;

