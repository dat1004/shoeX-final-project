// Toggle menu/showcase
const menuToggle = document.querySelector(".toggle");
const showCase = document.querySelector(".showcase");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  showCase.classList.toggle("active");
});

// Toggle cart
const cartToggle = document.querySelector(".cart");
const cartOverlayToggle = document.querySelector(".cart-overlay");
const cartMenu = document.querySelector(".cart-menu");
const addToCartBtn = document.querySelector(".add-to-cart");

addToCartBtn.addEventListener("click", () => {
  cartOverlayToggle.classList.toggle("active");
  cartToggle.classList.toggle("active");
});

cartMenu.addEventListener("click", () => {
  cartOverlayToggle.classList.toggle("active");
  cartToggle.classList.toggle("active");
});

//close cart
const cartClose = document.querySelector(".close-cart");
cartClose.addEventListener("click", () => {
  cartOverlayToggle.classList.toggle("active");
  cartToggle.classList.toggle("active");
});

//variables
const cartBtn = document.querySelector(".cart-menu");
const closeCartBtn = document.querySelector;
(".close-cart");
const clearCartBtn = document.querySelector(".clear-cart");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const productsDOM = document.querySelector(".porfolio");
const productDetail = document.querySelector(".container-product");

//Cart
let cart = [];

//getting the products
class Products {
  async getProducts() {
    try {
      let result = await fetch("products.json");
      let data = await result.json();
      let products = data.items;
      products = products.map((item) => {
        const { brand, title, price, style, color, date } = item.fields;
        const { id } = item.sys;
        const image = item.fields.image.fields.file.url;
        return { brand, title, price, id, image, style, color, date };
      });
      console.dir(products);
      return products;
    } catch (error) {
      console.log(error);
    }
  }
}

//UI product
class UI {
  //Display products in porfolio
  displayProducts(products) {
    let result = "";
    products.forEach((product) => {
      result += `
          <div class="item">
            <img
              src=${product.image}
              alt="porfolio-item1"
            />
            <div class="product">
              <div class="product-brand">${product.brand}</div>
              <a class="product-name" href=#
                >${product.title}</a
              >
              <div class="product-price">${product.price}vnd</div>
            </div>
            <div class="action" data-id=${product.id}>
              <a href="product_01.html">Shop Now</a>
            </div>
          </div>
      `;
    });
    productsDOM.innerHTML = result;
  }

  //Display product in product-detail
  displayProductDetail(products) {
    let detail = "";
    products.forEach((product) => {
      detail += `
      <img
          src=${product.image}
          alt=""
        />
        <div class="product-detail">
          <h2>${product.title}</h2>
          <h3>${product.price}vnd</h3>
          <br />
          <br />
          <ul class="product-description">
            <h4>Description</h4>
            <br />
            <li>Style: ${product.style}</li>
            <li>Color: ${product.color}</li>
            <li>Release Date: ${product.date}</li>
          </ul>
          <button class="add-to-cart" data-id=${product.id} type="submit">
            <span>Add to Cart</span>
          </button>
        </div>
        `;
    });
    productDetail.innerHTML = detail;
  }
}

//local Storage
class Storage {}

//event listener when DOM loaded
document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  const products = new Products();
  //Ger all products
  products.getProducts().then((products) => ui.displayProducts(products));
});

// Get product detail when click on action
// setTimeout(function () {
//   let shopNowBtn = document.querySelectorAll("[data-id]");
//   console.log(shopNowBtn);

//   for (i = 0; i < shopNowBtn.length; i++) {
//     shopNowBtn[i].addEventListener("click", function () {
//       displayProductDetail(products);
//     });
//   }
// }, 3000);

// setTimeout(function () {
//   let shopNowBtn = document.getElementsByClassName("action");
//   console.log(shopNowBtn);

//   for (i = 0; i < shopNowBtn.length; i++) {
//     shopNowBtn[i].addEventListener("click", function () {
//       const ui = new UI();
//       const products = new Products();
//       products
//         .getProducts()
//         .then((products) => ui.displayProductDetail(products));
//     });
//   }
// }, 3000);

setTimeout(function () {
  let shopNowBtn = document.querySelectorAll(".action");
  shopNowBtn.forEach((shopNowBtn) => {
    let id = shopNowBtn.dataset.id;
    console.log(id);
  });
}, 3000);

function getSearchParameters() {
  var prmstr = window.location.search.substr(1);
  return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {};
}

function transformToAssocArray(prmstr) {
  var params = {};
  var prmarr = prmstr.split("&");
  for (var i = 0; i < prmarr.length; i++) {
    var tmparr = prmarr[i].split("=");
    params[tmparr[0]] = tmparr[1];
  }
  return params;
}

var params = getSearchParameters();
