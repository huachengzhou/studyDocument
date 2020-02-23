var navBarTool = {};

navBarTool.getHtml = function () {
    var text = "";
    text += "<div class=\"navbar-wrapper\">";
    text += "    <div class=\"container\" id=\"navcontainer\">";
    text += "        <nav class=\"navbar navbar-inverse navbar-fixed-top \" role=\"navigation\">";
    text += "            <div class=\"container\">";
    text += "                <div class=\"navbar-header\">";
    text += "                    <a class=\"navbar-brand\" onclick=\"window.open('index.html','_blank')\">个人数据</a>";
    text += "                </div>";
    text += "                <form class=\"navbar-form navbar-left\" role=\"search\">";
    text += "                    <div class=\"form-group\">";
    // text += "                        <input type=\"text\" class=\"form-control\" placeholder=\"Search\">";
    text += "                    </div>";
    text += "                    <button type=\"button\" class=\"btn btn-info\" onclick=\"navBarTool.regionFun(this)\"> <i class=\"fa fa-map\"></i> 区域</button>";
    text += "                    <button type=\"button\" class=\"btn btn-success\" onclick=\"navBarTool.calculatorFun(this)\">  <span class=\"fa fa-calculator\"></span> 计算</button>";
    text += "                    <button type=\"button\" class=\"btn btn-success\" onclick=\"navBarTool.threeColumnFun(this)\">  <span class=\"fa fa-tree\"></span>  学习树</button>";
    text += "                    <button type=\"button\" data-toggle=\"modal\" href=\"#modelDataAssetsAppraisalDic\"";
    text += "                            class=\"btn btn-default\" onclick=\"\" title=\"aes工具\"> ";
    text += "                        <span class=\"glyphicon glyphicon-asterisk\" aria-hidden=\"true\"></span>aes工具 ";
    text += "                    </button>";

    text += "                   <button type=\"button\" class=\"btn btn-info\" tilte=\"生活经验\" onclick=\"navBarTool.lifeTreeFun(this)\">";
    text += "                   <span class=\"glyphicon glyphicon-heart\"></span> 生活经验";
    text += "                   </button>";

    text += "                </form>";
    text += "                <div class=\"navbar-right\">";
    text += "                    <ul class=\"nav navbar-nav\">";
    text += "                        <li><a data-toggle=\"modal\" data-target=\"#signin\" >登录</a></li>";
    text += "                    </ul>";
    text += "                </div>";
    text += "            </div>";
    text += "        </nav>";
    text += "    </div>";
    text += "</div>";
    return text;
};

navBarTool.regionFun = function () {
    window.open("regionView.html", "_blank");
};

navBarTool.calculatorFun = function () {
    window.open("calculationView.html", "_blank");
};

navBarTool.threeColumnFun = function () {
    window.open("three-column.html", "_blank");
};

navBarTool.lifeTreeFun = function () {
    console.info("dhas");
    window.open("lifeTree.html", "_blank");
};