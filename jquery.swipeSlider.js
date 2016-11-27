(function($) {
    $.fn.swipeSlider = function() {
        var element = this;
        var imgEle = element.find('img');
        var txtEle = element.find(".slider");
        var txtwidth = txtEle.width();

        $(imgEle).load(function() {
            var imageWidth = imgEle.width();
            var imageHeight = imgEle.height();
            element.css('width', imageWidth);
            element.find('.after').css('width', imageWidth / 2);
            txtEle.css('left', imageWidth / 2 - txtwidth / 2 + "px");
            element.bind('touchmove mousemove', function(e) {
                txtEle.css('display', 'none');
                var currentY = e.originalEvent.touches ? e.originalEvent.touches[0].pageY : e.pageY;
                var currentX = e.originalEvent.touches ? e.originalEvent.touches[0].pageX : e.pageX;
                var x = currentX - this.offsetLeft;
                var y = currentY - this.offsetTop;
                element.find(".after").css("width", x);
                //   console.log(x)
                if (x >= 10 && x <= imageWidth - 10) {
                    element.find('.after').addClass("addborder");
                } else {
                    element.find('.after').removeClass("addborder");
                    element.find('.after').css("border", "none");
                }
            });
        });


    };
})(jQuery);