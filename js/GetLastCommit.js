(
    function(){
        function _setHtml(dom, h) {
            dom.innerHTML = h;
        }
        function _ajaxReq(repo) {
            var xmlhttp;
            if (window.XMLHttpRequest) {
                //code for IE7,firefox chrome and above
                xmlhttp = new XMLHttpRequest();
            } else {
                //code for Internet Explorer
                xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
            }
            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    var repo = JSON.parse(xmlhttp.responseText);
                    document.getElementById("UpdateDate").innerHTML ='更新时间：'+
                    repo.pushed_at.substring(0,10) + ' ' + repo.pushed_at.substring(11,19) + ' UTC';
                } else {
                }
            };
            xmlhttp.open('GET', 'https://api.github.com/repos/' + repo, true);
            xmlhttp.send();
        }
        _ajaxReq("LogCreative/LaTeXSparkle");
    }
)();