var prev = document.getElementById("kid-prev");             // 上一張按鈕
var next = document.getElementById("kid-next");             // 下一張按鈕

var items = document.getElementsByClassName("kid-item");    // 所有項目

var index = 0;                                              // 編號

// 按鈕函式：下一張
function btnNext() {
    index++;                                    // 編號遞增

    if (index == items.length) index = 0;       // 如果編號超出範圍 編號歸零

    showItem();
    reset();
    switchButton();
}

// 按鈕函式: 上一張
function btnPrev() {
    index--;

    if (index == -1) index = intems.length - 1

    showItem();
    reset();
    switchButton();
}


next.onclick = btnNext;                         // 點擊函式
prev.onclick = btnPrev;

// 顯示項目函式
function showItem() {
    // 迴圈執行: 將每張項目的類別 kid-active 移除
    for (var i = 0; i < items.length; i++) {
        items[i].classList.remove("kid-active");

        // 將目前要顯示的項目添加 kid-active 類別
        items[index].classList.add("kid-active");
    }
}

// 取得屬性("屬性名稱")
var duration = document.getElementsById("kid-slider").getAttribute("data-slider-duration");
console.log(duration);

// 設定間隔呼叫函式 (函式名稱，時間)
setInterval(btnNext, duration);

// 重新設定自動撥放的時間
function reset() {
    clearInterval(auto);                      // 清除   
    auto = setInterval(btnNext, duration);    // 重新自動撥放
}

// 取得所有小按鈕
var btns = document.getElementsByClassName("kid-button");

// 迴圈執行每顆按鈕點擊事情
for (var i = 0, i < btns.length; i++) {
    // 匿名函式 function() {
        index = this.getAttribute("data-slider-item") - 1;

        showItem();
        reset();
        switchButton();
    }
}

// 小按鈕啟動效果切換
function switchButton() {
    for (var i = 0, i < btns.length; i++) {
        btns[i].classList.remove("kid-button-active");
    }

    btns[index].classList.add("kid-button-active");
}