class Card {
  constructor(code, primaryImageUrl, title, priceGold, priceRetail, assocProducts, unitAlt, unit, productId, priceGoldAlt) {
    this.cardElement = this.create(code, primaryImageUrl, title, priceGold, priceRetail, assocProducts, unitAlt, unit, productId, priceGoldAlt);
  }

  create(codeValue, primaryImageUrlValue, titleValue, priceGoldValue, priceRetailValue, assocProductsValue, unitAltValue, unitValue, productIdValue, priceGoldAltValue) {
    const element = document.createRange().createContextualFragment(`<div class="products_page pg_0">
    <div class="product product_horizontal">
        <span class="product_code">Код: ${codeValue}</span>
        <div class="product_status_tooltip_container">
            <span class="product_status">Наличие</span>
        </div>
        <div class="product_photo">
            <a href="#" class="url--link product__link">
                <img src=${primaryImageUrlValue}>
            </a>
        </div>
        <div class="product_description">
            <a href="#" class="product__link">${titleValue}</a>
        </div>
        <div class="product_tags hidden-sm">
            <p>Могут понадобиться:</p>
            <a href="#" class="url--link">${assocProductsValue}</a>
        </div>
        <div class="product_units">
            <div class="unit--wrapper">
                <div class="unit--select unit--active">
                    <p class="ng-binding">За ${unitAltValue}</p>
                </div>
                <div class="unit--select">
                    <p class="ng-binding">За ${unitValue}</p>
                </div>
            </div>
        </div>
        <p class="product_price_club_card">
            <span class="product_price_club_card_text">По карте<br>клуба</span>
            <span class="goldPrice">${priceGoldValue}</span>
            <span class="rouble__i black__i">
                <svg version="1.0" id="rouble__b" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="30px" height="22px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">
                   <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rouble_black"></use>
                </svg>
             </span>
        </p>
        <p class="product_price_default">
            <span class="retailPrice">${priceRetailValue}</span>
            <span class="rouble__i black__i">
                <svg version="1.0" id="rouble__g" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="30px" height="22px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">
                   <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rouble_gray"></use>
                </svg>
             </span>
        </p>
        <div class="product_price_points">
            <p class="ng-binding">Можно купить за ${priceGoldAltValue} балла</p>
        </div>
        <div class="list--unit-padd"></div>
        <div class="list--unit-desc">
            <div class="unit--info">
                <div class="unit--desc-i"></div>
                <div class="unit--desc-t">
                    <p>
                        <span class="ng-binding">Продается упаковками:</span>
                        <span class="unit--infoInn">1 упаковка = 2.47 ${unitAltValue} </span>
                    </p>
                </div>
            </div>
        </div>
        <div class="product__wrapper">
            <div class="product_count_wrapper">
                <div class="stepper">
                    <input id="buttonCountNumber" class="product__count stepper-input" type="text" value="1">
                    <span id="buttonCountPlus" class="stepper-arrow up"></span>
                    <span id="buttonCountMinus" class="stepper-arrow down"></span>
                </div>
            </div>
            <span class="btn btn_cart" data-url="/cart/" data-product-id="9bf0afd7-5190-11e5-b9a9-00259036a192">
                <svg class="ic ic_cart">
                   <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart"></use>
                </svg>
                <span class="ng-binding" data-product-id=${productIdValue}>В корзину</span>
            </span>
        </div>
      </div>
    </div>`)
    return element;
  }
}

class CardList {
  constructor(container) {
    this.container = container;
  }

  render(cards) {
    cards.forEach(element => {
      console.log(element);
      this.addCard(element.code,
        element.primaryImageUrl,
        element.title,
        element.priceGold,
        element.priceRetail,
        element.assocProducts,
        element.unitAlt,
        element.unit,
        element.productId,
        element.priceGoldAlt);
    });
  }

  addCard(code, primaryImageUrl, title, priceGold, priceRetail, assocProducts, unitAlt, unit, productId, priceGoldAlt) {
    const { cardElement } = new Card(code,
      primaryImageUrl,
      title,
      priceGold,
      priceRetail,
      assocProducts,
      unitAlt,
      unit,
      productId,
      priceGoldAlt);
    this.container.appendChild(cardElement);
  }
}

const cardlist = new CardList(document.getElementById('products_section'));
const card = new Card();

window.addEventListener('load',function()
{
  fetch('./products.json')
  .then(response => response.json())
  .then((obj) => {
    console.log(obj);
    return cardlist.render(obj);
  })
})
