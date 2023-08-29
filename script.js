/**
 * Order 1
 */

const order1Section = document.querySelector('section');
const order1Biscuits = order1Section.querySelector('.biscuits .count');
const order1Donuts = order1Section.querySelector('.donuts .count');
const order1Pancakes = order1Section.querySelector('.pancakes .count');
const order1Status = order1Section.querySelector('.status dd');

order1Biscuits.textContent = order1Section.getAttribute('data-biscuits');
order1Donuts.textContent = order1Section.getAttribute('data-donuts');
order1Pancakes.textContent = order1Section.getAttribute('data-pancakes');
order1Status.textContent = order1Section.getAttribute('data-delivered') === 'true' ? 'Delivered' : 'Pending';

/**
 * Order 2
 */

const order2Section = order1Section.nextElementSibling;
const order2Biscuits = order2Section.querySelector('.biscuits .count');
const order2Donuts = order2Section.querySelector('.donuts .count');
const order2Pancakes = order2Section.querySelector('.pancakes .count');
const order2Status = order2Section.querySelector('.status dd');

order2Biscuits.textContent = order2Section.getAttribute('data-biscuits');
order2Donuts.textContent = order2Section.getAttribute('data-donuts');
order2Pancakes.textContent = order2Section.getAttribute('data-pancakes');
order2Status.textContent = order2Section.getAttribute('data-delivered') === 'true' ? 'Delivered' : 'Pending';

/**
 * Order 3
 */

const order3Section = order2Section.nextElementSibling;
const order3Biscuits = order3Section.querySelector('.biscuits .count');
const order3Donuts = order3Section.querySelector('.donuts .count');
const order3Pancakes = order3Section.querySelector('.pancakes .count');
const order3Status = order3Section.querySelector('.status dd');

order3Biscuits.textContent = order3Section.getAttribute('data-biscuits');
order3Donuts.textContent = order3Section.getAttribute('data-donuts');
order3Pancakes.textContent = order3Section.getAttribute('data-pancakes');
order3Status.textContent = order3Section.getAttribute('data-delivered') === 'true' ? 'Delivered' : 'Pending';