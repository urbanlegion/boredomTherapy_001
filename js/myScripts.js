
$(window).load(function() {
    $("body").removeClass("preload");
});
var main = function () {
    $('.flexpanel').flexpanel({
        animation: 'slide',
        direction: 'right',
        maxWidth: '1025'
    });
};
main();