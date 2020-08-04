(
    function(){
        function _setHtml(dom, h) {
            dom.innerHTML = h;
        }
        function _ajaxReq(repoEle, repo) {
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
                    _renderGitHubWidget(repoEle, xmlhttp.responseText);
                } else {
                }
            };
            xmlhttp.open('GET', 'https://api.github.com/repos/' + repo, true);
            xmlhttp.send();
        }
        
    }
)();