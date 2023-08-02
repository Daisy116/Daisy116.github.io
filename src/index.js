import "./index.scss";
import "bootstrap/js/dist/carousel";
import "bootstrap/js/dist/offcanvas";
import "bootstrap/js/dist/collapse";
import "bootstrap/js/dist/modal";
import { doc } from "prettier";

 const btn1 = document.getElementById("plus-btn");
 const btn2 = document.getElementById("msg-btn");
 const btn3 = document.getElementById("notifi-btn");
 const btn4 = document.getElementById("more-btn");
 const block1 = document.getElementById("plus-block");
 const block2 = document.getElementById("msg-block");
 const block3 = document.getElementById("notifi-block");
 const block4 = document.getElementById("more-block");

 const blocks = [block1, block2, block3, block4];


function openBlock(index) {
	blocks.forEach((item, idx) => {
		// 點到的按鈕，將其block顯示
		if (index === idx) {
			item.classList.remove("d-none");
			return;
		}

		// 其他沒被點擊的按鈕，blobk都隱藏！！
		item.classList.add("d-none");
	});
}

window.addEventListener("click", ()=>{
	// 因為永遠不可能等於-1，所以會將所有block都隱藏起來！！！
	openBlock(-1);
});

btn1.addEventListener("click", (event) => {
	// 不要往上(window)傳遞冒泡事件
	event.stopPropagation();

	openBlock(0);
});
block1.addEventListener("click", (event) => {
	// 不要往上(window)傳遞冒泡事件
	event.stopPropagation();
});
btn2.addEventListener("click", (event) => {
	event.stopPropagation();

	openBlock(1);
});
block2.addEventListener("click", (event) => {
	// 不要往上(window)傳遞冒泡事件
	event.stopPropagation();
});
btn3.addEventListener("click", (event) => {
	event.stopPropagation();

	openBlock(2);
});
block3.addEventListener("click", (event) => {
	// 不要往上(window)傳遞冒泡事件
	event.stopPropagation();
});
btn4.addEventListener("click", (event) => {
	event.stopPropagation();

	openBlock(3);
});
block4.addEventListener("click", (event) => {
	// 不要往上(window)傳遞冒泡事件
	event.stopPropagation();
});


