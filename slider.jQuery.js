(function($){

$.fn.swipeslider = function(){

var element = this;

$(element).load(function(){

changeCss();


});

function changeCss(){

    var imageHeight = $(element).height();
    console.log('hi')
    var imageWidth = $(element).width();
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();

    $(element).css({
        "position" : "absolute",
        "left" : windowWidth / 2 - imageWidth / 2,
        "top" : windowHeight /2 - imageHeight / 2
    });
};
});

};

})(jQuery);