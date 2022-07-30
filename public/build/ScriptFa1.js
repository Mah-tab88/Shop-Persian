const btnAboutItems = document.querySelectorAll(".btn-about-item");
const descAboutItems = [...document.querySelectorAll(".desc-about-item")];
const btnsColor = document.querySelectorAll(".btn-color");
const filters = [...document.querySelectorAll(".filter")];
const tickBtns = [...document.querySelectorAll(".tick")];
const categories = [...document.querySelectorAll(".category")];
const btnAddToCart = document.querySelector(".btn-addToCart");
const itemsFooter = [...document.querySelectorAll(".item-footer")];

// Show description of About Item
btnAboutItems.forEach((item) => {
  item.addEventListener("click", () => {
    //change all btn to unclick
    btnAboutItems.forEach((btn) => {
      btn.classList.remove("bg-white", "text-slate-800", "shadow-md", "ring-1");
      btn.classList.add("text-gray-400", "hover:border-white");
    });
    //change all desc to  hidden
    descAboutItems.forEach((item) => {
      item.classList.add("hidden");
    });
    //add style to clicked btn
    item.classList.add("bg-white", "text-slate-800", "shadow-md");
    item.classList.remove("text-gray-400", "hover:border-white");
    //find desc relelated to clicked btn
    const selectdDesc = descAboutItems.find(
      (desc) => desc.dataset.btn == item.dataset.btn
    );
    //show dec related to clicked btn
    selectdDesc.classList.remove("hidden");
  });
});

// select color
btnsColor.forEach((btnColor) => {
  btnColor.addEventListener("click", (e) => {
    const ringColor = btnColor.dataset.ringColor;
    const color = btnColor.dataset.color;
    const textColor = btnColor.dataset.textColor;

    btnsColor.forEach((item) => {
      item.innerHTML = ``;
      item.classList.remove(
        "z-20",
        "z-50",
        "ring-1",
        "md:ring-2",
        "ring-2",
        ringColor
      );
      item.parentElement.previousElementSibling.lastElementChild.className = "";
    });
    btnColor.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-white" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
</svg>`;
    btnColor.parentElement.previousElementSibling.lastElementChild.innerText =
      color;
    btnColor.parentElement.previousElementSibling.lastElementChild.classList.add(
      textColor,
      "font-bold"
    );

    btnColor.classList.add("z-50");
    btnColor.classList.add(ringColor, "ring-2");
  });
});

//  show filter of each specification
filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    if (filter.nextElementSibling.classList.contains("flex")) {
      filter.nextElementSibling.classList.remove("flex");
      filter.nextElementSibling.classList.add("hidden");
      filter.firstElementChild.firstElementChild.classList.remove(
        "text-orange-600"
      );
      filter.firstElementChild.lastElementChild.classList.remove(
        "stroke-orange-600",
        "rotate-180"
      );
    } else {
      filter.nextElementSibling.classList.add("flex");
      filter.nextElementSibling.classList.remove("hidden");
      filter.firstElementChild.firstElementChild.classList.add(
        "text-orange-600"
      );
      filter.firstElementChild.lastElementChild.classList.add(
        "stroke-orange-600",
        "rotate-180"
      );
    }
  });
});

//select btn of each specification
tickBtns.forEach((tickbtn) => {
  tickbtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("border-gray-300")) {
      e.target.classList.remove(
        "border-gray-300",
        "hover:ring-gray-300",
        "hover:bg-gray-300"
      );
      e.target.classList.add(
        "border-white",
        "ring-1",
        "ring-orange-600",
        "bg-orange-600"
      );
    } else {
      e.target.classList.add(
        "border-gray-300",
        "hover:ring-gray-300",
        "hover:bg-gray-300"
      );
      e.target.classList.remove(
        "border-white",
        "ring-1",
        "ring-orange-600",
        "bg-orange-600"
      );
    }
  });
});

//select category
categories.forEach((category) => {
  category.addEventListener("click", () => {
    categories.forEach((category) => {
      category.lastElementChild.classList.remove("text-slate-800");
      category.lastElementChild.classList.add("text-gray-300");

      category.firstElementChild.classList.remove("stroke-slate-800");
      category.firstElementChild.classList.add("stroke-gray-300");
    });
    category.lastElementChild.classList.add("text-slate-800");
    category.lastElementChild.classList.remove("text-gray-300");

    category.firstElementChild.classList.add("stroke-slate-800");
    category.firstElementChild.classList.remove("stroke-gray-300");
  });
});

//style in add to cart btn
btnAddToCart.addEventListener("click", (e) => {
  e.target.innerText = "به سبد خرید اضافه شد";
  e.target.classList.remove(
    "text-white",
    "bg-orange-400",
    "hover:bg-white",
    "hover:text-orange-400",
    "hover:font-bold",
    "hover:border-2",
    "hover:border-orange-400"
  );
  e.target.classList.add(
    "bg-orange-100",
    "text-gray-600",
    "border-2",
    "border-orange-200"
  );
  console.log(e.target);
});

// show item footer mobile

itemsFooter.forEach((item) => {
  item.addEventListener("click", () => {
    itemsFooter.forEach((item) => {
      item.firstElementChild.firstElementChild.classList.remove(
        "fill-slate-800"
      );
      item.firstElementChild.firstElementChild.classList.add("fill-gray-400");

      item.lastElementChild.classList.add("hidden");
    });
    item.firstElementChild.firstElementChild.classList.remove("fill-gray-400");
    item.firstElementChild.firstElementChild.classList.add("fill-slate-800");
    item.lastElementChild.classList.remove("hidden");
  });
});
