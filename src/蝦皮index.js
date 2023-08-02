import "./index.scss";
import "bootstrap/js/dist/carousel";
import "bootstrap/js/dist/offcanvas";
import "bootstrap/js/dist/collapse";
import "bootstrap/js/dist/modal";
import { doc } from "prettier";

function collapsePCHandler() {
  const collapse = document.getElementById("pc-filter-collapse-btn");
  const text = document.getElementById("pc-filter-collapse-text");
  const icon = document.getElementById("filter-icon");

  collapse.addEventListener("click", () => {
    if (text.innerText == "收起") {
      text.innerText = "顯示更多";
      icon.classList.remove("transform-rotate-180");
    } else {
      text.innerText = "收起";
      icon.classList.add("transform-rotate-180");
    }
  });
}

function collapseH5Handler() {
  const collapse = document.getElementById("mobile-filter-collapse-btn");
  const text = document.getElementById("mobile-filter-collapse-text");
  const icon = document.getElementById("mobile-filter-icon");

  collapse.addEventListener("click", () => {
    if (text.innerText == "收起") {
      text.innerText = "顯示更多";
      icon.classList.remove("transform-rotate-180");
    } else {
      text.innerText = "收起";
      icon.classList.add("transform-rotate-180");
    }
  });
}

function renderItems() {
  const list = document.getElementById("list");

  for (let i = 0; i < 20; i++) {
    // 建立20個<div class="col">
    const colItem = document.createElement("div");
    colItem.classList.add("col");

    colItem.innerHTML = `
            <div class="card mt-4">
                <img src="https://bruce-fe-ec.web.app/images/item.png" class="card-img-top">
                <div class="card-body p-2">
                    <h5 class="card-title text-primary">$2000</h5>
                    <p class="card-text fs-7">這是一罐沐浴乳這是一罐沐浴乳這是一罐沐浴乳這是一罐</p>
                    <p class="card-text text-end fs-7">已售出 62</p>
                </div>
                <span class="badge bg-primary position-absolute end-0">雙11優惠</span>
            </div>
        `;

    list.appendChild(colItem);
  }
}

function searchHandler() {
  const searchBtn = document.getElementById("search-btn");
  const spinner = document.getElementById("spinner");
  const spinnerRemove = document.getElementById("spinner-no");

  searchBtn.addEventListener("click", () => {
    spinner.classList.remove("d-none");
    spinnerRemove.classList.add("d-none");

    setTimeout(() => {
      spinner.classList.add("d-none");
      spinnerRemove.classList.remove("d-none");
    }, 1500);
  });
}

collapsePCHandler();
collapseH5Handler();
renderItems();
searchHandler();
