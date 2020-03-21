
function exampleData() {
    var data = [];
    var len = 10;
    var id = Math.round(Math.random() * 100);
    for (var i = 0; i < len; i++) {
        var name = Math.random()                        // 生成随机数字, eg: 0.123456
            .toString(36)           // 转化成36进制 : "0.4fzyo82mvyr"
            .slice(-8);// 截取最后八位 : "yo82mvyr"
        data.push({
            id: ++id,
            name: name,
            href: "#"
        });
    }
    data.unshift({
        id: ++id,
        name: "模板语法",
        href: "exercise/模板语法.html"
    });
    data.unshift({
        id: ++id,
        name: "hello world",
        href: "exercise/helloword.html"
    });
    return data;
}

function loadSensitiveTable(target) {
    target.bootstrapTable('destroy');
    var columns = [];
    // columns.push({checkbox: true, width: "5%"});
    columns.push({
        field: 'id', title: 'id', width: "10%"
    });
    columns.push({
        field: 'name', title: '名称', width: "10%"
    });
    columns.push({
        field: 'id', title: '链接', width: "50%", formatter: function (value, row, index) {
            var str = '<div class="btn-margin">';
            str += '<a class="btn btn-xs btn-success" target="_blank" href="' + row.href + '" ><i class="fa fa-search">例子</i></a>';
            str += "</div>";
            return str;
        }
    });

    var init = {
        searchAlign: 'left',
        search: true,   //显示隐藏搜索框
        showHeader: true,     //是否显示列头
        showLoading: true,
        undefinedText: '',
        pageNumber: 1,                       //初始化加载第一页，默认第一页
        pageSize: 10,                       //每页的记录行数（*）
        pageList: [2, 5, 10, 15],        //可供选择的每页的行数（*）
        showFullscreen: true,
        striped: true,                      //是否显示行间隔色
        cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
        pagination: true,                   //是否显示分页（*）
        strictSearch: true,
        showColumns: true,                  //是否显示所有的列
        showRefresh: false,                  //是否显示刷新按钮
        minimumCountColumns: 2,             //最少允许的列数
        clickToSelect: false,                //是否启用点击选中行
        //height: 680,                        //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
        uniqueId: "id",                     //每一行的唯一标识，一般为主键列
        showToggle: true,                   //是否显示详细视图和列表视图的切换按钮
        data: exampleData(),
        columns: columns
    };
    target.bootstrapTable(init);
}
