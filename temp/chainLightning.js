import './lodash.js'

window.addEventListener('click', (event) => {
  const x = event.clientX;
  const y = event.clientY;

  _.range(5).forEach(() => {
    const node = document.createElement('div');
    node.classList.add('lightning-node');

    node.style.top = y + 'px';
    node.style.left = x + 'px';

    const angle = _.random(225 - 20, 225 + 20);
    const distance = _.random(30, 60);

    node.style.setProperty('--angle', angle + 'deg');
    node.style.setProperty('--distance', distance + 'px');

    document.body.appendChild(node)
  })
})