var tabNavItem = document.querySelectorAll(".tab_nav>li");
var tabBoxItem = document.querySelectorAll(".tab_box>li");
var tabNavActive = document.querySelector(".tabNav_active");
var tabBoxActive = document.querySelector(".tabBox_active");

tabNavItem.forEach(function (item,index){
    item.onmouseenter = function(){
        tabNavActive.className = "";
        this.className = "tabNav_active";
        tabNavActive = this;

        tabBoxActive.className = "";
        tabBoxItem[index].className = "tabBox_active";      // index 相等对应
        tabBoxActive = tabBoxItem[index];
    }
});