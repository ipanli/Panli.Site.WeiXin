var RecieveRedPackage = {

    Recieve: function (mylinkKey, linkKey) {
        
        $.ajax({
            type: "post",
            url: "/script/AddRedPackage.json",
            contentType: "application/json;utf-8",
            dataType: "json",
            data: "{'mylinkKey':'" + mylinkKey + "','linkKey':'" + linkKey + "'}",
            error: function () {
                alert("网络错误，请重试！");
                return false;
            },
            success: function (e) {
                if (!e.Success) {
                    alert("领取失败！");
                    return false;
                }
                alert("领取成功！" + e.Amount + "元");
                window.location.reload();
                return false;
            }
        });
        return false;
    }

};