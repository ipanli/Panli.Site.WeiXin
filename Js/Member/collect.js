function ValidForm() {
    var _this;
    var oldval, inputval;
    var toAllow = true;
    $('form input.h').each(function () {
        _this = $(this);
        oldval = _this.val();
        _this.triggerHandler("focus");
        inputval = _this.val();
        if ($.trim(inputval).length == 0) {
            _this.triggerHandler("blur");
            toAllow = false;
            //alert(oldval);
            $("div.ErrorText").text(oldval);
            return false;
        }
    });
    return toAllow;
}

$(function () {
    $("input[name=btnRegister]").click(function () {
        location.href = "/member/register";
    });
});