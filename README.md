# JavaScript-slider-practice
JavaScript-slider-practice

# 範例
https://naichang.github.io/JavaScript-slider-practice/

#使用說明

## CDN

```
    <!-- <head>裡 -->
    <link rel="stylesheet" href="https://naichang.github.io/JavaScript-slider-practice/style.css">

    <!-- </body>上方 -->
    <script src="https://naichang.github.io/JavaScript-slider-practice/script.js"></script>
```

## 架構

```
    <!--  data-slider-duration 自動輪播速度 -->
    <div id="kid-slider" data-slider-duration="3000">

        <!-- 輪播圖項目: 根據需求複製貼上 active 只有一組 -->
        <div class="kid-item kid-active">
            <img src="..." alt="">
            <h1>...</h1>
        </div>

        <div class="kid-item">
            <img src="..." alt="">
            <h1>...</h1>
        </div>

        <div class="kid-item">
            <img src="..." alt="">
            <h1>...</h1>
        </div>

        <!-- 大顆按扭區塊 -->
        <div id="kid-prev"></div>
        <div id="kid-next"></div>

        <!-- 小顆按扭區塊 根據需求複製貼上 active 只有一組 -->
        <div id="kid-buttons">
            <div class="kid-button kid-button-active" data-slider-item="1"></div>
            <div class="kid-button" data-slider-item="2"></div>
            <div class="kid-button" data-slider-item="3"></div>
        </div>
    </div>
```