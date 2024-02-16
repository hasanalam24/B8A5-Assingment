const cards = document.getElementsByClassName('card');

let titleCount = 1;
let sumTotal = 0;

for (const card of cards) {
  card.addEventListener('click', function () {
    const title = card.querySelector('h3').innerText;
    // console.log(title)

    // get the value
    const price = card.querySelector('span').innerText;
    const singlePricePrice = price.split(' ')[1];
    const convertPrice = parseFloat(singlePricePrice)
    // console.log(typeof convertPrice);

    // show the title and price in display

    const titleContainer = document.getElementById('title-container');
    console.log(titleContainer)

    // create a p tag in title container

    const p = document.createElement('p')
    p.innerText = titleCount + '. ' + title;

    titleContainer.appendChild(p);

    titleCount++;

    const totalPrice = document.getElementById('totalPrice');
    // console.log(totalPrice)

    sumTotal = sumTotal + convertPrice;
    totalPrice.innerText = sumTotal;




  })
}

const btnApply = document.getElementById('apply-btn');
btnApply.addEventListener('click', function () {

  // get the value in input field
  const discountPrice = document.getElementById('discountPrice')
  const inputField = document.getElementById('input-field').value.toLowerCase();
  // console.log(inputField)
  document.getElementById('input-field').value = '';

  if (sumTotal <= 199) {
    alert('Buy atleast $200')
  }

  else {
    if (inputField === 'sell200') {
      discountPrice.innerText = sumTotal * 20 / 100;
    }
    else {
      alert('Invalid Coupon')
    }
  }


  const afterDiscountPrice = document.getElementById('total')
  afterDiscountPrice.innerText = sumTotal - discountPrice.innerText;

})

















