var tabNavItem = document.querySelectorAll(".tab_nav>li");
var tabBoxItem = document.querySelectorAll(".tab_box>li");
var tabNavActive = document.querySelector(".tabNav_active");
var tabBoxActive = document.querySelector(".tabBox_active");

var tabCode = document.getElementById('tab_code');
var tabGraph = document.getElementById('tab_graph');

var fileNameList = ['line','mark','scatter','bar','area2','surf','coutour2','hist','boxplot'];

tabNavItem.forEach(function (item,index){
    item.onmouseenter = function(){
        tabNavActive.className = "";
        this.className = "tabNav_active";
        tabNavActive = this;

        tabBoxActive.className = "";
        tabBoxItem[index].className = "tabBox_active";      // index 相等对应
        tabBoxActive = tabBoxItem[index];

        tabCode.src = "../../doc/CH06/pic/txt/" + fileNameList[index] + ".txt";
        // 使用 CDN 加快加载进度
        tabGraph.src = "https://cdn.jsdelivr.net/gh/LogCreative/LaTeXSparkle/doc/CH06/pic/svg/" + fileNameList[index] + ".svg";
        // tabGraph.src = "../../doc/CH06/pic/svg/" + fileNameList[index] + ".svg";
    }
});