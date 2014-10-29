$(document).ready(function(){
    var promo_fform=$("#promo_request_form"),
    checkRequired=function(f){
        var flag=!0;
        $(f).find("input[data-required=1]").each(function(){
            if(""==$(this).val()){
                flag=!1
            }
        }),
        0==flag?(f.find("button[type=submit]").attr("disabled","disabled"),f.find(".alert").slideDown("fast")):(f.find("button[type=submit]").removeAttr("disabled"),f.find(".alert").slideUp("fast"))
    };
    promo_fform.find("input[data-required=1]").keyup(function(){
        checkRequired(promo_fform)
    }),
    $(".promo-request-submit").click(function(){
        var yam;
        if(yam=window.yaCounter435475){
            yam.reachGoal("promoRequestSubmitPage")
        }
    }),
    checkRequired($(promo_fform))
});