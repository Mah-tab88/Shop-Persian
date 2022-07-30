const itemsFooter = [...document.querySelectorAll(".item-footer")];
let btnsRemove = [...document.querySelectorAll(".btn-remove")];
const listProduct = document.querySelector(".list-product");
const sectionPrice = document.querySelector(".section-price");
const btnsPlus = document.querySelectorAll(".btn-plus");
const btnsMinus = document.querySelectorAll(".btn-minus");
const finalPrice = document.querySelector(".final-price");
const totalPrice = document.querySelector(".total-price");
const priceOff = document.querySelector(".price-off");
const btnSale = document.querySelector(".btn-off");

class Shopping {
  //remove product
  removeProduct() {
    btnsRemove.forEach((btnRemove) => {
      btnRemove.addEventListener("click", (e) => {
        // update add to cart section
        btnRemove.parentElement.parentElement.parentElement.parentElement.remove();
        this.updateCart();

        btnsRemove = [...document.querySelectorAll(".btn-remove")];
        if (btnsRemove.length == 0) {
          listProduct.innerText = " سبد خرید شما خالی می‌باشد.";
          listProduct.classList.add("pr-3");
          sectionPrice.remove();
        }
      });
    });
  }

  //increase product
  increaseProduct() {
    btnsPlus.forEach((btnPlus) => {
      btnPlus.addEventListener("click", () => {
        let enBtnPlus = this.convertNumberToEnglish(
          btnPlus.nextElementSibling.innerText
        );

        enBtnPlus = Number(enBtnPlus) + 1;
        btnPlus.nextElementSibling.innerText = this.convertNumberToPersian(
          String(enBtnPlus)
        );
        console.log(enBtnPlus);

        this.updateCart();
      });
    });
  }

  //deacrease product
  decreaseProduct() {
    btnsMinus.forEach((btnMinus) => {
      btnMinus.addEventListener("click", () => {
        const enNumberOfProduct = this.convertNumberToEnglish(
          btnMinus.previousElementSibling.innerText
        );
        if (Number(enNumberOfProduct) > 1) {
          btnMinus.previousElementSibling.innerText =
            this.convertNumberToPersian(String(Number(enNumberOfProduct) - 1));
          //update cart
          this.updateCart();
        } else {
          btnMinus.parentElement.parentElement.parentElement.parentElement.remove();
          //update cart
          this.updateCart();

          btnsRemove = [...document.querySelectorAll(".btn-remove")];
          if (btnsRemove.length == 0) {
            listProduct.innerText = "سبد خرید شما خالی می‌باشد.";
            listProduct.classList.add("pr-3");
            sectionPrice.remove();
          }
        }
      });
    });
  }
  //update cart
  updateCart() {
    let totalPriceOfSgopping = 0;
    let numberOfAllProducts = 0;
    let numberOfProducts = "";
    const priceProducts = [...document.querySelectorAll(".price-product")];
    priceProducts.forEach((priceProduct) => {
      numberOfProducts =
        priceProduct.parentElement.nextElementSibling.firstElementChild
          .nextElementSibling.innerText;
      let enNumberOfProducts = this.convertNumberToEnglish(numberOfProducts);

      numberOfAllProducts += Number(enNumberOfProducts);

      totalPriceOfSgopping +=
        Number(this.convertNumberToEnglish(priceProduct.innerText)) *
        Number(enNumberOfProducts);
    });

    totalPrice.innerText = this.convertNumberToPersian(
      String(totalPriceOfSgopping)
    );
    if (priceOff.innerText != "۰") {
      priceOff.innerText = this.convertNumberToPersian(
        String(Number(numberOfAllProducts) * 500000)
      );
      finalPrice.innerText = this.convertNumberToPersian(
        String(
          Number(totalPriceOfSgopping) - Number(numberOfAllProducts) * 500000
        )
      );
    } else {
      finalPrice.innerText = this.convertNumberToPersian(
        String(totalPriceOfSgopping)
      );
    }
  }

  // footer
  ShowItemFooter() {
    itemsFooter.forEach((item) => {
      item.addEventListener("click", () => {
        itemsFooter.forEach((item) => {
          item.firstElementChild.firstElementChild.classList.remove(
            "fill-slate-800"
          );
          item.firstElementChild.firstElementChild.classList.add(
            "fill-gray-400"
          );

          item.lastElementChild.classList.add("hidden");
        });
        item.firstElementChild.firstElementChild.classList.remove(
          "fill-gray-400"
        );
        item.firstElementChild.firstElementChild.classList.add(
          "fill-slate-800"
        );
        item.lastElementChild.classList.remove("hidden");
      });
    });
  }

  sale() {
    btnSale.addEventListener("click", () => {
      if (btnSale.previousElementSibling.value == "1a2b3x") {
        const quantityOfProduct = [
          ...document.querySelectorAll(".quantity-product"),
        ];

        let totalQuantity = 0;
        quantityOfProduct.forEach((product) => {
          totalQuantity += Number(
            this.convertNumberToEnglish(product.innerText)
          );
        });
        priceOff.innerText = this.convertNumberToPersian(
          String(totalQuantity * 500000)
        );

        console.log(totalQuantity * 500000);

        finalPrice.innerText = this.convertNumberToPersian(
          String(
            Number(this.convertNumberToEnglish(totalPrice.innerText)) -
              Number(this.convertNumberToEnglish(priceOff.innerText))
          )
        );
      } else {
        btnSale.nextElementSibling.value = "Invalid";
      }
    });
  }

  // convert persian number to english number
  convertNumberToEnglish(number) {
    const persianNumber = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    let arrayNumber = number.split("");
    arrayNumber = arrayNumber.filter((i) => i != ",");

    let convertedNumber = "";
    arrayNumber.forEach((i) => {
      //In persianNumber Array the index of element is equall to persian number
      const pIndex = persianNumber.indexOf(i);
      convertedNumber += pIndex;
    });
    return convertedNumber;
    // console.log(convertedNumber)
  }

  // convert english number to persian number
  convertNumberToPersian(number) {
    const persianNumber = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    const englishNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let arrayNumber = number.split("");
    arrayNumber = arrayNumber.filter((i) => i != ",");
    let convertedNumber = "";
    arrayNumber.forEach((i) => {
      let enIndex = Number(i);
      convertedNumber += persianNumber[enIndex];
    });

    // put "," in numbers
    let persianNum = [];
    if (convertedNumber.length > 4) {
      console.log(convertedNumber);
      const splitNumber = convertedNumber.split("");
      console.log(splitNumber.length);
      let n = 0;
      for (let i = splitNumber.length - 1; i >= 0; i--) {
        n++;
        persianNum.unshift(splitNumber[i]);
        if (n % 3 == 0) {
          persianNum.unshift(",");
        }
      }
      convertedNumber = "";
      persianNum.forEach((n) => {
        convertedNumber += n;
      });
    }

    return convertedNumber;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const shopping = new Shopping();
  shopping.ShowItemFooter();
  shopping.removeProduct();
  shopping.increaseProduct();
  shopping.decreaseProduct();
  shopping.sale();
});
