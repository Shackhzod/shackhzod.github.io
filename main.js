$(document).ready(function(){
    jQuery("#error").hide();
})
function insrt(num) {
    $('#display').val($('#display').val() + num);
}
function eql() {
    // let number = $("#display").val();
    // if(number){
    //     $("#error").show();
    // }
    $('#display').val(eval($('#display').val()));
}
function ac() {
    $('#display').val('');
}