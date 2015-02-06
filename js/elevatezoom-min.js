/* jQuery elevateZoom 3.0.8 - Demo's and documentation: - www.elevateweb.co.uk/image-zoom - Copyright (c) 2013 Andrew Eades - www.elevateweb.co.uk - Dual licensed under the LGPL licenses. - http://en.wikipedia.org/wiki/MIT_License - http://en.wikipedia.org/wiki/GNU_General_Public_License */
"function" !== typeof Object.create && (Object.create = function (e) {
    function t() {
    }

    t.prototype = e;
    return new t
});
(function (e, t, n, r) {
    var i = {init: function (t, n) {
        var r = this;
        r.elem = n;
        r.$elem = e(n);
        r.imageSrc = r.$elem.data("zoom-image") ? r.$elem.data("zoom-image") : r.$elem.attr("src");
        r.options = e.extend({}, e.fn.elevateZoom.options, t);
        r.options.tint && (r.options.lensColour = "none", r.options.lensOpacity = "1");
        "inner" == r.options.zoomType && (r.options.showLens = !1);
        r.$elem.parent().removeAttr("title").removeAttr("alt");
        r.zoomImage = r.imageSrc;
        r.refresh(1);
        e("#" + r.options.gallery + " a").click(function (t) {
            r.options.galleryActiveClass && (e("#" + r.options.gallery + " a").removeClass(r.options.galleryActiveClass), e(this).addClass(r.options.galleryActiveClass));
            t.preventDefault();
            e(this).data("zoom-image") ? r.zoomImagePre = e(this).data("zoom-image") : r.zoomImagePre = e(this).data("image");
            r.swaptheimage(e(this).data("image"), r.zoomImagePre);
            return!1
        })
    }, refresh: function (e) {
        var t = this;
        setTimeout(function () {
            t.fetch(t.imageSrc)
        }, e || t.options.refresh)
    }, fetch: function (e) {
        var t = this, n = new Image;
        n.onload = function () {
            t.largeWidth = n.width;
            t.largeHeight = n.height;
            t.startZoom();
            t.currentImage = t.imageSrc;
            t.options.onZoomedImageLoaded(t.$elem)
        };
        n.src = e
    }, mobilecheck: function () {
        var e = false;
        (function (t) {
            if (/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4)))e = true
        })(navigator.userAgent || navigator.vendor || window.opera);
        return e
    }, startZoom: function () {
        var t = this;
        t.nzWidth = t.$elem.width();
        t.nzHeight = t.$elem.height();
        t.isWindowActive = !1;
        t.isLensActive = !1;
        t.isTintActive = !1;
        t.overWindow = !1;
        t.options.imageCrossfade && (t.zoomWrap = t.$elem.wrap('<div style="height:' + t.nzHeight + "px;width:" + t.nzWidth + 'px;" class="zoomWrapper" />'), t.$elem.css("position", "absolute"));
        t.zoomLock = 1;
        t.scrollingLock = !1;
        t.changeBgSize = !1;
        t.currentZoomLevel = t.options.zoomLevel;
        t.nzOffset = t.$elem.offset();
        t.widthRatio = t.largeWidth / t.currentZoomLevel / t.nzWidth;
        t.heightRatio = t.largeHeight / t.currentZoomLevel / t.nzHeight;
        "window" == t.options.zoomType && (t.zoomWindowStyle = "overflow: hidden;background-position: 0px 0px;text-align:center;background-color: " + String(t.options.zoomWindowBgColour) + ";width: " + String(t.options.zoomWindowWidth) + "px;height: " + String(t.options.zoomWindowHeight) + "px;float: left;background-size: " + t.largeWidth / t.currentZoomLevel + "px " + t.largeHeight / t.currentZoomLevel + "px;display: none;z-index:100;border: " + String(t.options.borderSize) + "px solid " + t.options.borderColour + ";background-repeat: no-repeat;position: absolute;");
        if ("inner" == t.options.zoomType) {
            var n = t.$elem.css("border-left-width");
            t.zoomWindowStyle = "overflow: hidden;margin-left: " + String(n) + ";margin-top: " + String(n) + ";background-position: 0px 0px;width: " + String(t.nzWidth) + "px;height: " + String(t.nzHeight) + "px;float: left;display: none;cursor:" + t.options.cursor + ";px solid " + t.options.borderColour + ";background-repeat: no-repeat;position: absolute;"
        }
        "window" == t.options.zoomType && (lensHeight = t.nzHeight < t.options.zoomWindowWidth / t.widthRatio ? t.nzHeight : String(t.options.zoomWindowHeight / t.heightRatio), lensWidth = t.largeWidth < t.options.zoomWindowWidth ? t.nzWidth : t.options.zoomWindowWidth / t.widthRatio, t.lensStyle = "background-position: 0px 0px;width: " + String(t.options.zoomWindowWidth / t.widthRatio) + "px;height: " + String(t.options.zoomWindowHeight / t.heightRatio) + "px;float: right;display: none;overflow: hidden;z-index: 999;-webkit-transform: translateZ(0);opacity:" + t.options.lensOpacity + ";filter: alpha(opacity = " + 100 * t.options.lensOpacity + "); zoom:1;width:" + lensWidth + "px;height:" + lensHeight + "px;background-color:" + t.options.lensColour + ";cursor:" + t.options.cursor + ";border: " + t.options.lensBorderSize + "px solid " + t.options.lensBorderColour + ";background-repeat: no-repeat;position: absolute;");
        t.tintStyle = "display: block;position: absolute;background-color: " + t.options.tintColour + ";filter:alpha(opacity=0);opacity: 0;width: " + t.nzWidth + "px;height: " + t.nzHeight + "px;";
        t.lensRound = "";
        "lens" == t.options.zoomType && (t.lensStyle = "background-position: 0px 0px;float: left;display: none;border: " + String(t.options.borderSize) + "px solid " + t.options.borderColour + ";width:" + String(t.options.lensSize) + "px;height:" + String(t.options.lensSize) + "px;background-repeat: no-repeat;position: absolute;");
        "round" == t.options.lensShape && (t.lensRound = "border-top-left-radius: " + String(t.options.lensSize / 2 + t.options.borderSize) + "px;border-top-right-radius: " + String(t.options.lensSize / 2 + t.options.borderSize) + "px;border-bottom-left-radius: " + String(t.options.lensSize / 2 + t.options.borderSize) + "px;border-bottom-right-radius: " + String(t.options.lensSize / 2 + t.options.borderSize) + "px;");
        t.zoomContainer = e('<div class="zoomContainer" style="-webkit-transform: translateZ(0);position:absolute;left:' + t.nzOffset.left + "px;top:" + t.nzOffset.top + "px;height:" + t.nzHeight + "px;width:" + t.nzWidth + 'px;"></div>');
        e("body").append(t.zoomContainer);
        t.options.containLensZoom && "lens" == t.options.zoomType && t.zoomContainer.css("overflow", "hidden");
        "inner" != t.options.zoomType && (t.zoomLens = e("<div class='zoomLens' style='" + t.lensStyle + t.lensRound + "'>&nbsp;</div>").appendTo(t.zoomContainer).click(function () {
            t.$elem.trigger("click")
        }), t.options.tint && (t.tintContainer = e("<div/>").addClass("tintContainer"), t.zoomTint = e("<div class='zoomTint' style='" + t.tintStyle + "'></div>"), t.zoomLens.wrap(t.tintContainer), t.zoomTintcss = t.zoomLens.after(t.zoomTint), t.zoomTintImage = e('<img style="position: absolute; left: 0px; top: 0px; max-width: none; width: ' + t.nzWidth + "px; height: " + t.nzHeight + 'px;" src="' + t.imageSrc + '">').appendTo(t.zoomLens).click(function () {
            t.$elem.trigger("click")
        })));
        isNaN(t.options.zoomWindowPosition) ? t.zoomWindow = e("<div style='z-index:999;left:" + t.windowOffsetLeft + "px;top:" + t.windowOffsetTop + "px;" + t.zoomWindowStyle + "' class='zoomWindow'>&nbsp;</div>").appendTo("body").click(function () {
            t.$elem.trigger("click")
        }) : t.zoomWindow = e("<div style='z-index:999;left:" + t.windowOffsetLeft + "px;top:" + t.windowOffsetTop + "px;" + t.zoomWindowStyle + "' class='zoomWindow'>&nbsp;</div>").appendTo(t.zoomContainer).click(function () {
            t.$elem.trigger("click")
        });
        t.zoomWindowContainer = e("<div/>").addClass("zoomWindowContainer").css("width", t.options.zoomWindowWidth);
        t.zoomWindow.wrap(t.zoomWindowContainer);
        "lens" == t.options.zoomType && t.zoomLens.css({backgroundImage: "url('" + t.imageSrc + "')"});
        "window" == t.options.zoomType && t.zoomWindow.css({backgroundImage: "url('" + t.imageSrc + "')"});
        "inner" == t.options.zoomType && t.zoomWindow.css({backgroundImage: "url('" + t.imageSrc + "')"});
        if (!t.options.showOnMobile && t.mobilecheck()) {
            return
        } else {
            t.$elem.bind("touchmove", function (e) {
                e.preventDefault();
                t.setPosition(e.originalEvent.touches[0] || e.originalEvent.changedTouches[0])
            });
            t.zoomContainer.bind("touchmove", function (e) {
                "inner" == t.options.zoomType && t.showHideWindow("show");
                e.preventDefault();
                t.setPosition(e.originalEvent.touches[0] || e.originalEvent.changedTouches[0])
            });
            t.zoomContainer.bind("touchend", function (e) {
                t.showHideWindow("hide");
                t.options.showLens && t.showHideLens("hide");
                t.options.tint && "inner" != t.options.zoomType && t.showHideTint("hide")
            });
            t.$elem.bind("touchend", function (e) {
                t.showHideWindow("hide");
                t.options.showLens && t.showHideLens("hide");
                t.options.tint && "inner" != t.options.zoomType && t.showHideTint("hide")
            });
            t.options.showLens && (t.zoomLens.bind("touchmove", function (e) {
                e.preventDefault();
                t.setPosition(e.originalEvent.touches[0] || e.originalEvent.changedTouches[0])
            }), t.zoomLens.bind("touchend", function (e) {
                t.showHideWindow("hide");
                t.options.showLens && t.showHideLens("hide");
                t.options.tint && "inner" != t.options.zoomType && t.showHideTint("hide")
            }));
            t.$elem.bind("mousemove", function (e) {
                !1 == t.overWindow && t.setElements("show");
                if (t.lastX !== e.clientX || t.lastY !== e.clientY)t.setPosition(e), t.currentLoc = e;
                t.lastX = e.clientX;
                t.lastY = e.clientY
            });
            t.zoomContainer.bind("mousemove", function (e) {
                !1 == t.overWindow && t.setElements("show");
                if (t.lastX !== e.clientX || t.lastY !== e.clientY)t.setPosition(e), t.currentLoc = e;
                t.lastX = e.clientX;
                t.lastY = e.clientY
            });
            "inner" != t.options.zoomType && t.zoomLens.bind("mousemove", function (e) {
                if (t.lastX !== e.clientX || t.lastY !== e.clientY)t.setPosition(e), t.currentLoc = e;
                t.lastX = e.clientX;
                t.lastY = e.clientY
            });
            t.options.tint && "inner" != t.options.zoomType && t.zoomTint.bind("mousemove", function (e) {
                if (t.lastX !== e.clientX || t.lastY !== e.clientY)t.setPosition(e), t.currentLoc = e;
                t.lastX = e.clientX;
                t.lastY = e.clientY
            });
            "inner" == t.options.zoomType && t.zoomWindow.bind("mousemove", function (e) {
                if (t.lastX !== e.clientX || t.lastY !== e.clientY)t.setPosition(e), t.currentLoc = e;
                t.lastX = e.clientX;
                t.lastY = e.clientY
            });
            t.zoomContainer.add(t.$elem).mouseenter(function () {
                !1 == t.overWindow && t.setElements("show")
            }).mouseleave(function () {
                t.scrollLock || t.setElements("hide")
            });
            "inner" != t.options.zoomType && t.zoomWindow.mouseenter(function () {
                t.overWindow = !0;
                t.setElements("hide")
            }).mouseleave(function () {
                t.overWindow = !1
            });
            t.minZoomLevel = t.options.minZoomLevel ? t.options.minZoomLevel : 2 * t.options.scrollZoomIncrement;
            t.options.scrollZoom && t.zoomContainer.add(t.$elem).bind("mousewheel DOMMouseScroll MozMousePixelScroll", function (n) {
                t.scrollLock = !0;
                clearTimeout(e.data(this, "timer"));
                e.data(this, "timer", setTimeout(function () {
                    t.scrollLock = !1
                }, 250));
                var r = n.originalEvent.wheelDelta || -1 * n.originalEvent.detail;
                n.stopImmediatePropagation();
                n.stopPropagation();
                n.preventDefault();
                0 < r / 120 ? t.currentZoomLevel >= t.minZoomLevel && t.changeZoomLevel(t.currentZoomLevel - t.options.scrollZoomIncrement) : t.options.maxZoomLevel ? t.currentZoomLevel <= t.options.maxZoomLevel && t.changeZoomLevel(parseFloat(t.currentZoomLevel) + t.options.scrollZoomIncrement) : t.changeZoomLevel(parseFloat(t.currentZoomLevel) + t.options.scrollZoomIncrement);
                return!1
            })
        }
    }, setElements: function (e) {
        if (!this.options.zoomEnabled)return!1;
        "show" == e && this.isWindowSet && ("inner" == this.options.zoomType && this.showHideWindow("show"), "window" == this.options.zoomType && this.showHideWindow("show"), this.options.showLens && this.showHideLens("show"), this.options.tint && "inner" != this.options.zoomType && this.showHideTint("show"));
        "hide" == e && ("window" == this.options.zoomType && this.showHideWindow("hide"), this.options.tint || this.showHideWindow("hide"), this.options.showLens && this.showHideLens("hide"), this.options.tint && this.showHideTint("hide"))
    }, setPosition: function (e) {
        if (!this.options.zoomEnabled)return!1;
        this.nzHeight = this.$elem.height();
        this.nzWidth = this.$elem.width();
        this.nzOffset = this.$elem.offset();
        this.options.tint && "inner" != this.options.zoomType && (this.zoomTint.css({top: 0}), this.zoomTint.css({left: 0}));
        this.options.responsive && !this.options.scrollZoom && this.options.showLens && (lensHeight = this.nzHeight < this.options.zoomWindowWidth / this.widthRatio ? this.nzHeight : String(this.options.zoomWindowHeight / this.heightRatio), lensWidth = this.largeWidth < this.options.zoomWindowWidth ? this.nzWidth : this.options.zoomWindowWidth / this.widthRatio, this.widthRatio = this.largeWidth / this.nzWidth, this.heightRatio = this.largeHeight / this.nzHeight, "lens" != this.options.zoomType && (lensHeight = this.nzHeight < this.options.zoomWindowWidth / this.widthRatio ? this.nzHeight : String(this.options.zoomWindowHeight / this.heightRatio), lensWidth = this.options.zoomWindowWidth < this.options.zoomWindowWidth ? this.nzWidth : this.options.zoomWindowWidth / this.widthRatio, this.zoomLens.css("width", lensWidth), this.zoomLens.css("height", lensHeight), this.options.tint && (this.zoomTintImage.css("width", this.nzWidth), this.zoomTintImage.css("height", this.nzHeight))), "lens" == this.options.zoomType && this.zoomLens.css({width: String(this.options.lensSize) + "px", height: String(this.options.lensSize) + "px"}));
        this.zoomContainer.css({top: this.nzOffset.top});
        this.zoomContainer.css({left: this.nzOffset.left});
        this.mouseLeft = parseInt(e.pageX - this.nzOffset.left);
        this.mouseTop = parseInt(e.pageY - this.nzOffset.top);
        "window" == this.options.zoomType && (this.Etoppos = this.mouseTop < this.zoomLens.height() / 2, this.Eboppos = this.mouseTop > this.nzHeight - this.zoomLens.height() / 2 - 2 * this.options.lensBorderSize, this.Eloppos = this.mouseLeft < 0 + this.zoomLens.width() / 2, this.Eroppos = this.mouseLeft > this.nzWidth - this.zoomLens.width() / 2 - 2 * this.options.lensBorderSize);
        "inner" == this.options.zoomType && (this.Etoppos = this.mouseTop < this.nzHeight / 2 / this.heightRatio, this.Eboppos = this.mouseTop > this.nzHeight - this.nzHeight / 2 / this.heightRatio, this.Eloppos = this.mouseLeft < 0 + this.nzWidth / 2 / this.widthRatio, this.Eroppos = this.mouseLeft > this.nzWidth - this.nzWidth / 2 / this.widthRatio - 2 * this.options.lensBorderSize);
        0 >= this.mouseLeft || 0 > this.mouseTop || this.mouseLeft > this.nzWidth || this.mouseTop > this.nzHeight ? this.setElements("hide") : (this.options.showLens && (this.lensLeftPos = String(this.mouseLeft - this.zoomLens.width() / 2), this.lensTopPos = String(this.mouseTop - this.zoomLens.height() / 2)), this.Etoppos && (this.lensTopPos = 0), this.Eloppos && (this.tintpos = this.lensLeftPos = this.windowLeftPos = 0), "window" == this.options.zoomType && (this.Eboppos && (this.lensTopPos = Math.max(this.nzHeight - this.zoomLens.height() - 2 * this.options.lensBorderSize, 0)), this.Eroppos && (this.lensLeftPos = this.nzWidth - this.zoomLens.width() - 2 * this.options.lensBorderSize)), "inner" == this.options.zoomType && (this.Eboppos && (this.lensTopPos = Math.max(this.nzHeight - 2 * this.options.lensBorderSize, 0)), this.Eroppos && (this.lensLeftPos = this.nzWidth - this.nzWidth - 2 * this.options.lensBorderSize)), "lens" == this.options.zoomType && (this.windowLeftPos = String(-1 * ((e.pageX - this.nzOffset.left) * this.widthRatio - this.zoomLens.width() / 2)), this.windowTopPos = String(-1 * ((e.pageY - this.nzOffset.top) * this.heightRatio - this.zoomLens.height() / 2)), this.zoomLens.css({backgroundPosition: this.windowLeftPos + "px " + this.windowTopPos + "px"}), this.changeBgSize && (this.nzHeight > this.nzWidth ? ("lens" == this.options.zoomType && this.zoomLens.css({"background-size": this.largeWidth / this.newvalueheight + "px " + this.largeHeight / this.newvalueheight + "px"}), this.zoomWindow.css({"background-size": this.largeWidth / this.newvalueheight + "px " + this.largeHeight / this.newvalueheight + "px"})) : ("lens" == this.options.zoomType && this.zoomLens.css({"background-size": this.largeWidth / this.newvaluewidth + "px " + this.largeHeight / this.newvaluewidth + "px"}), this.zoomWindow.css({"background-size": this.largeWidth / this.newvaluewidth + "px " + this.largeHeight / this.newvaluewidth + "px"})), this.changeBgSize = !1), this.setWindowPostition(e)), this.options.tint && "inner" != this.options.zoomType && this.setTintPosition(e), "window" == this.options.zoomType && this.setWindowPostition(e), "inner" == this.options.zoomType && this.setWindowPostition(e), this.options.showLens && (this.fullwidth && "lens" != this.options.zoomType && (this.lensLeftPos = 0), this.zoomLens.css({left: this.lensLeftPos + "px", top: this.lensTopPos + "px"})))
    }, showHideWindow: function (e) {
        "show" != e || this.isWindowActive || (this.options.zoomWindowFadeIn ? this.zoomWindow.stop(!0, !0, !1).fadeIn(this.options.zoomWindowFadeIn) : this.zoomWindow.show(), this.isWindowActive = !0);
        "hide" == e && this.isWindowActive && (this.options.zoomWindowFadeOut ? this.zoomWindow.stop(!0, !0).fadeOut(this.options.zoomWindowFadeOut) : this.zoomWindow.hide(), this.isWindowActive = !1)
    }, showHideLens: function (e) {
        "show" != e || this.isLensActive || (this.options.lensFadeIn ? this.zoomLens.stop(!0, !0, !1).fadeIn(this.options.lensFadeIn) : this.zoomLens.show(), this.isLensActive = !0);
        "hide" == e && this.isLensActive && (this.options.lensFadeOut ? this.zoomLens.stop(!0, !0).fadeOut(this.options.lensFadeOut) : this.zoomLens.hide(), this.isLensActive = !1)
    }, showHideTint: function (e) {
        "show" != e || this.isTintActive || (this.options.zoomTintFadeIn ? this.zoomTint.css({opacity: this.options.tintOpacity}).animate().stop(!0, !0).fadeIn("slow") : (this.zoomTint.css({opacity: this.options.tintOpacity}).animate(), this.zoomTint.show()), this.isTintActive = !0);
        "hide" == e && this.isTintActive && (this.options.zoomTintFadeOut ? this.zoomTint.stop(!0, !0).fadeOut(this.options.zoomTintFadeOut) : this.zoomTint.hide(), this.isTintActive = !1)
    }, setLensPostition: function (e) {
    }, setWindowPostition: function (t) {
        var n = this;
        if (isNaN(n.options.zoomWindowPosition))n.externalContainer = e("#" + n.options.zoomWindowPosition), n.externalContainerWidth = n.externalContainer.width(), n.externalContainerHeight = n.externalContainer.height(), n.externalContainerOffset = n.externalContainer.offset(), n.windowOffsetTop = n.externalContainerOffset.top, n.windowOffsetLeft = n.externalContainerOffset.left; else switch (n.options.zoomWindowPosition) {
            case 1:
                n.windowOffsetTop = n.options.zoomWindowOffety;
                n.windowOffsetLeft = +n.nzWidth;
                break;
            case 2:
                n.options.zoomWindowHeight > n.nzHeight && (n.windowOffsetTop = -1 * (n.options.zoomWindowHeight / 2 - n.nzHeight / 2), n.windowOffsetLeft = n.nzWidth);
                break;
            case 3:
                n.windowOffsetTop = n.nzHeight - n.zoomWindow.height() - 2 * n.options.borderSize;
                n.windowOffsetLeft = n.nzWidth;
                break;
            case 4:
                n.windowOffsetTop = n.nzHeight;
                n.windowOffsetLeft = n.nzWidth;
                break;
            case 5:
                n.windowOffsetTop = n.nzHeight;
                n.windowOffsetLeft = n.nzWidth - n.zoomWindow.width() - 2 * n.options.borderSize;
                break;
            case 6:
                n.options.zoomWindowHeight > n.nzHeight && (n.windowOffsetTop = n.nzHeight, n.windowOffsetLeft = -1 * (n.options.zoomWindowWidth / 2 - n.nzWidth / 2 + 2 * n.options.borderSize));
                break;
            case 7:
                n.windowOffsetTop = n.nzHeight;
                n.windowOffsetLeft = 0;
                break;
            case 8:
                n.windowOffsetTop = n.nzHeight;
                n.windowOffsetLeft = -1 * (n.zoomWindow.width() + 2 * n.options.borderSize);
                break;
            case 9:
                n.windowOffsetTop = n.nzHeight - n.zoomWindow.height() - 2 * n.options.borderSize;
                n.windowOffsetLeft = -1 * (n.zoomWindow.width() + 2 * n.options.borderSize);
                break;
            case 10:
                n.options.zoomWindowHeight > n.nzHeight && (n.windowOffsetTop = -1 * (n.options.zoomWindowHeight / 2 - n.nzHeight / 2), n.windowOffsetLeft = -1 * (n.zoomWindow.width() + 2 * n.options.borderSize));
                break;
            case 11:
                n.windowOffsetTop = n.options.zoomWindowOffety;
                n.windowOffsetLeft = -1 * (n.zoomWindow.width() + 2 * n.options.borderSize);
                break;
            case 12:
                n.windowOffsetTop = -1 * (n.zoomWindow.height() + 2 * n.options.borderSize);
                n.windowOffsetLeft = -1 * (n.zoomWindow.width() + 2 * n.options.borderSize);
                break;
            case 13:
                n.windowOffsetTop = -1 * (n.zoomWindow.height() + 2 * n.options.borderSize);
                n.windowOffsetLeft = 0;
                break;
            case 14:
                n.options.zoomWindowHeight > n.nzHeight && (n.windowOffsetTop = -1 * (n.zoomWindow.height() + 2 * n.options.borderSize), n.windowOffsetLeft = -1 * (n.options.zoomWindowWidth / 2 - n.nzWidth / 2 + 2 * n.options.borderSize));
                break;
            case 15:
                n.windowOffsetTop = -1 * (n.zoomWindow.height() + 2 * n.options.borderSize);
                n.windowOffsetLeft = n.nzWidth - n.zoomWindow.width() - 2 * n.options.borderSize;
                break;
            case 16:
                n.windowOffsetTop = -1 * (n.zoomWindow.height() + 2 * n.options.borderSize);
                n.windowOffsetLeft = n.nzWidth;
                break;
            default:
                n.windowOffsetTop = n.options.zoomWindowOffety, n.windowOffsetLeft = n.nzWidth
        }
        n.isWindowSet = !0;
        n.windowOffsetTop += n.options.zoomWindowOffety;
        n.windowOffsetLeft += n.options.zoomWindowOffetx;
        n.zoomWindow.css({top: n.windowOffsetTop});
        n.zoomWindow.css({left: n.windowOffsetLeft});
        "inner" == n.options.zoomType && (n.zoomWindow.css({top: 0}), n.zoomWindow.css({left: 0}));
        n.windowLeftPos = String(-1 * ((t.pageX - n.nzOffset.left) * n.widthRatio - n.zoomWindow.width() / 2));
        n.windowTopPos = String(-1 * ((t.pageY - n.nzOffset.top) * n.heightRatio - n.zoomWindow.height() / 2));
        n.Etoppos && (n.windowTopPos = 0);
        n.Eloppos && (n.windowLeftPos = 0);
        n.Eboppos && (n.windowTopPos = -1 * (n.largeHeight / n.currentZoomLevel - n.zoomWindow.height()));
        n.Eroppos && (n.windowLeftPos = -1 * (n.largeWidth / n.currentZoomLevel - n.zoomWindow.width()));
        n.fullheight && (n.windowTopPos = 0);
        n.fullwidth && (n.windowLeftPos = 0);
        if ("window" == n.options.zoomType || "inner" == n.options.zoomType)1 == n.zoomLock && (1 >= n.widthRatio && (n.windowLeftPos = 0), 1 >= n.heightRatio && (n.windowTopPos = 0)), n.largeHeight < n.options.zoomWindowHeight && (n.windowTopPos = 0), n.largeWidth < n.options.zoomWindowWidth && (n.windowLeftPos = 0), n.options.easing ? (n.xp || (n.xp = 0), n.yp || (n.yp = 0), n.loop || (n.loop = setInterval(function () {
            n.xp += (n.windowLeftPos - n.xp) / n.options.easingAmount;
            n.yp += (n.windowTopPos - n.yp) / n.options.easingAmount;
            n.scrollingLock ? (clearInterval(n.loop), n.xp = n.windowLeftPos, n.yp = n.windowTopPos, n.xp = -1 * ((t.pageX - n.nzOffset.left) * n.widthRatio - n.zoomWindow.width() / 2), n.yp = -1 * ((t.pageY - n.nzOffset.top) * n.heightRatio - n.zoomWindow.height() / 2), n.changeBgSize && (n.nzHeight > n.nzWidth ? ("lens" == n.options.zoomType && n.zoomLens.css({"background-size": n.largeWidth / n.newvalueheight + "px " + n.largeHeight / n.newvalueheight + "px"}), n.zoomWindow.css({"background-size": n.largeWidth / n.newvalueheight + "px " + n.largeHeight / n.newvalueheight + "px"})) : ("lens" != n.options.zoomType && n.zoomLens.css({"background-size": n.largeWidth / n.newvaluewidth + "px " + n.largeHeight / n.newvalueheight + "px"}), n.zoomWindow.css({"background-size": n.largeWidth / n.newvaluewidth + "px " + n.largeHeight / n.newvaluewidth + "px"})), n.changeBgSize = !1), n.zoomWindow.css({backgroundPosition: n.windowLeftPos + "px " + n.windowTopPos + "px"}), n.scrollingLock = !1, n.loop = !1) : (n.changeBgSize && (n.nzHeight > n.nzWidth ? ("lens" == n.options.zoomType && n.zoomLens.css({"background-size": n.largeWidth / n.newvalueheight + "px " + n.largeHeight / n.newvalueheight + "px"}), n.zoomWindow.css({"background-size": n.largeWidth / n.newvalueheight + "px " + n.largeHeight / n.newvalueheight + "px"})) : ("lens" != n.options.zoomType && n.zoomLens.css({"background-size": n.largeWidth / n.newvaluewidth + "px " + n.largeHeight / n.newvaluewidth + "px"}), n.zoomWindow.css({"background-size": n.largeWidth / n.newvaluewidth + "px " + n.largeHeight / n.newvaluewidth + "px"})), n.changeBgSize = !1), n.zoomWindow.css({backgroundPosition: n.xp + "px " + n.yp + "px"}))
        }, 16))) : (n.changeBgSize && (n.nzHeight > n.nzWidth ? ("lens" == n.options.zoomType && n.zoomLens.css({"background-size": n.largeWidth / n.newvalueheight + "px " + n.largeHeight / n.newvalueheight + "px"}), n.zoomWindow.css({"background-size": n.largeWidth / n.newvalueheight + "px " + n.largeHeight / n.newvalueheight + "px"})) : ("lens" == n.options.zoomType && n.zoomLens.css({"background-size": n.largeWidth / n.newvaluewidth + "px " + n.largeHeight / n.newvaluewidth + "px"}), n.largeHeight / n.newvaluewidth < n.options.zoomWindowHeight ? n.zoomWindow.css({"background-size": n.largeWidth / n.newvaluewidth + "px " + n.largeHeight / n.newvaluewidth + "px"}) : n.zoomWindow.css({"background-size": n.largeWidth / n.newvalueheight + "px " + n.largeHeight / n.newvalueheight + "px"})), n.changeBgSize = !1), n.zoomWindow.css({backgroundPosition: n.windowLeftPos + "px " + n.windowTopPos + "px"}))
    }, setTintPosition: function (e) {
        this.nzOffset = this.$elem.offset();
        this.tintpos = String(-1 * (e.pageX - this.nzOffset.left - this.zoomLens.width() / 2));
        this.tintposy = String(-1 * (e.pageY - this.nzOffset.top - this.zoomLens.height() / 2));
        this.Etoppos && (this.tintposy = 0);
        this.Eloppos && (this.tintpos = 0);
        this.Eboppos && (this.tintposy = -1 * (this.nzHeight - this.zoomLens.height() - 2 * this.options.lensBorderSize));
        this.Eroppos && (this.tintpos = -1 * (this.nzWidth - this.zoomLens.width() - 2 * this.options.lensBorderSize));
        this.options.tint && (this.fullheight && (this.tintposy = 0), this.fullwidth && (this.tintpos = 0), this.zoomTintImage.css({left: this.tintpos + "px"}), this.zoomTintImage.css({top: this.tintposy + "px"}))
    }, swaptheimage: function (t, n) {
        var r = this, i = new Image;
        r.options.loadingIcon && (r.spinner = e("<div style=\"background: url('" + r.options.loadingIcon + "') no-repeat center;height:" + r.nzHeight + "px;width:" + r.nzWidth + 'px;z-index: 2000;position: absolute; background-position: center center;"></div>'), r.$elem.after(r.spinner));
        r.options.onImageSwap(r.$elem);
        i.onload = function () {
            r.largeWidth = i.width;
            r.largeHeight = i.height;
            r.zoomImage = n;
            r.zoomWindow.css({"background-size": r.largeWidth + "px " + r.largeHeight + "px"});
            r.zoomWindow.css({"background-size": r.largeWidth + "px " + r.largeHeight + "px"});
            r.swapAction(t, n)
        };
        i.src = n
    }, swapAction: function (t, n) {
        var r = this, i = new Image;
        i.onload = function () {
            r.nzHeight = i.height;
            r.nzWidth = i.width;
            r.options.onImageSwapComplete(r.$elem);
            r.doneCallback()
        };
        i.src = t;
        r.currentZoomLevel = r.options.zoomLevel;
        r.options.maxZoomLevel = !1;
        "lens" == r.options.zoomType && r.zoomLens.css({backgroundImage: "url('" + n + "')"});
        "window" == r.options.zoomType && r.zoomWindow.css({backgroundImage: "url('" + n + "')"});
        "inner" == r.options.zoomType && r.zoomWindow.css({backgroundImage: "url('" + n + "')"});
        r.currentImage = n;
        if (r.options.imageCrossfade) {
            var s = r.$elem, o = s.clone();
            r.$elem.attr("src", t);
            r.$elem.after(o);
            o.stop(!0).fadeOut(r.options.imageCrossfade, function () {
                e(this).remove()
            });
            r.$elem.width("auto").removeAttr("width");
            r.$elem.height("auto").removeAttr("height");
            s.fadeIn(r.options.imageCrossfade);
            r.options.tint && "inner" != r.options.zoomType && (s = r.zoomTintImage, o = s.clone(), r.zoomTintImage.attr("src", n), r.zoomTintImage.after(o), o.stop(!0).fadeOut(r.options.imageCrossfade, function () {
                e(this).remove()
            }), s.fadeIn(r.options.imageCrossfade), r.zoomTint.css({height: r.$elem.height()}), r.zoomTint.css({width: r.$elem.width()}));
            r.zoomContainer.css("height", r.$elem.height());
            r.zoomContainer.css("width", r.$elem.width());
            "inner" != r.options.zoomType || r.options.constrainType || (r.zoomWrap.parent().css("height", r.$elem.height()), r.zoomWrap.parent().css("width", r.$elem.width()), r.zoomWindow.css("height", r.$elem.height()), r.zoomWindow.css("width", r.$elem.width()))
        } else r.$elem.attr("src", t), r.options.tint && (r.zoomTintImage.attr("src", n), r.zoomTintImage.attr("height", r.$elem.height()), r.zoomTintImage.css({height: r.$elem.height()}), r.zoomTint.css({height: r.$elem.height()})), r.zoomContainer.css("height", r.$elem.height()), r.zoomContainer.css("width", r.$elem.width());
        r.options.imageCrossfade && (r.zoomWrap.css("height", r.$elem.height()), r.zoomWrap.css("width", r.$elem.width()));
        r.options.constrainType && ("height" == r.options.constrainType && (r.zoomContainer.css("height", r.options.constrainSize), r.zoomContainer.css("width", "auto"), r.options.imageCrossfade ? (r.zoomWrap.css("height", r.options.constrainSize), r.zoomWrap.css("width", "auto"), r.constwidth = r.zoomWrap.width()) : (r.$elem.css("height", r.options.constrainSize), r.$elem.css("width", "auto"), r.constwidth = r.$elem.width()), "inner" == r.options.zoomType && (r.zoomWrap.parent().css("height", r.options.constrainSize), r.zoomWrap.parent().css("width", r.constwidth), r.zoomWindow.css("height", r.options.constrainSize), r.zoomWindow.css("width", r.constwidth)), r.options.tint && (r.tintContainer.css("height", r.options.constrainSize), r.tintContainer.css("width", r.constwidth), r.zoomTint.css("height", r.options.constrainSize), r.zoomTint.css("width", r.constwidth), r.zoomTintImage.css("height", r.options.constrainSize), r.zoomTintImage.css("width", r.constwidth))), "width" == r.options.constrainType && (r.zoomContainer.css("height", "auto"), r.zoomContainer.css("width", r.options.constrainSize), r.options.imageCrossfade ? (r.zoomWrap.css("height", "auto"), r.zoomWrap.css("width", r.options.constrainSize), r.constheight = r.zoomWrap.height()) : (r.$elem.css("height", "auto"), r.$elem.css("width", r.options.constrainSize), r.constheight = r.$elem.height()), "inner" == r.options.zoomType && (r.zoomWrap.parent().css("height", r.constheight), r.zoomWrap.parent().css("width", r.options.constrainSize), r.zoomWindow.css("height", r.constheight), r.zoomWindow.css("width", r.options.constrainSize)), r.options.tint && (r.tintContainer.css("height", r.constheight), r.tintContainer.css("width", r.options.constrainSize), r.zoomTint.css("height", r.constheight), r.zoomTint.css("width", r.options.constrainSize), r.zoomTintImage.css("height", r.constheight), r.zoomTintImage.css("width", r.options.constrainSize))))
    }, doneCallback: function () {
        this.options.loadingIcon && this.spinner.hide();
        this.nzOffset = this.$elem.offset();
        this.nzWidth = this.$elem.width();
        this.nzHeight = this.$elem.height();
        this.currentZoomLevel = this.options.zoomLevel;
        this.widthRatio = this.largeWidth / this.nzWidth;
        this.heightRatio = this.largeHeight / this.nzHeight;
        "window" == this.options.zoomType && (lensHeight = this.nzHeight < this.options.zoomWindowWidth / this.widthRatio ? this.nzHeight : String(this.options.zoomWindowHeight / this.heightRatio), lensWidth = this.options.zoomWindowWidth < this.options.zoomWindowWidth ? this.nzWidth : this.options.zoomWindowWidth / this.widthRatio, this.zoomLens && (this.zoomLens.css("width", lensWidth), this.zoomLens.css("height", lensHeight)))
    }, getCurrentImage: function () {
        return this.zoomImage
    }, getGalleryList: function () {
        var t = this;
        t.gallerylist = [];
        t.options.gallery ? e("#" + t.options.gallery + " a").each(function () {
            var n = "";
            e(this).data("zoom-image") ? n = e(this).data("zoom-image") : e(this).data("image") && (n = e(this).data("image"));
            n == t.zoomImage ? t.gallerylist.unshift({href: "" + n + "", title: e(this).find("img").attr("title")}) : t.gallerylist.push({href: "" + n + "", title: e(this).find("img").attr("title")})
        }) : t.gallerylist.push({href: "" + t.zoomImage + "", title: e(this).find("img").attr("title")});
        return t.gallerylist
    }, changeZoomLevel: function (e) {
        this.scrollingLock = !0;
        this.newvalue = parseFloat(e).toFixed(2);
        newvalue = parseFloat(e).toFixed(2);
        maxheightnewvalue = this.largeHeight / (this.options.zoomWindowHeight / this.nzHeight * this.nzHeight);
        maxwidthtnewvalue = this.largeWidth / (this.options.zoomWindowWidth / this.nzWidth * this.nzWidth);
        "inner" != this.options.zoomType && (maxheightnewvalue <= newvalue ? (this.heightRatio = this.largeHeight / maxheightnewvalue / this.nzHeight, this.newvalueheight = maxheightnewvalue, this.fullheight = !0) : (this.heightRatio = this.largeHeight / newvalue / this.nzHeight, this.newvalueheight = newvalue, this.fullheight = !1), maxwidthtnewvalue <= newvalue ? (this.widthRatio = this.largeWidth / maxwidthtnewvalue / this.nzWidth, this.newvaluewidth = maxwidthtnewvalue, this.fullwidth = !0) : (this.widthRatio = this.largeWidth / newvalue / this.nzWidth, this.newvaluewidth = newvalue, this.fullwidth = !1), "lens" == this.options.zoomType && (maxheightnewvalue <= newvalue ? (this.fullwidth = !0, this.newvaluewidth = maxheightnewvalue) : (this.widthRatio = this.largeWidth / newvalue / this.nzWidth, this.newvaluewidth = newvalue, this.fullwidth = !1)));
        "inner" == this.options.zoomType && (maxheightnewvalue = parseFloat(this.largeHeight / this.nzHeight).toFixed(2), maxwidthtnewvalue = parseFloat(this.largeWidth / this.nzWidth).toFixed(2), newvalue > maxheightnewvalue && (newvalue = maxheightnewvalue), newvalue > maxwidthtnewvalue && (newvalue = maxwidthtnewvalue), maxheightnewvalue <= newvalue ? (this.heightRatio = this.largeHeight / newvalue / this.nzHeight, this.newvalueheight = newvalue > maxheightnewvalue ? maxheightnewvalue : newvalue, this.fullheight = !0) : (this.heightRatio = this.largeHeight / newvalue / this.nzHeight, this.newvalueheight = newvalue > maxheightnewvalue ? maxheightnewvalue : newvalue, this.fullheight = !1), maxwidthtnewvalue <= newvalue ? (this.widthRatio = this.largeWidth / newvalue / this.nzWidth, this.newvaluewidth = newvalue > maxwidthtnewvalue ? maxwidthtnewvalue : newvalue, this.fullwidth = !0) : (this.widthRatio = this.largeWidth / newvalue / this.nzWidth, this.newvaluewidth = newvalue, this.fullwidth = !1));
        scrcontinue = !1;
        "inner" == this.options.zoomType && (this.nzWidth > this.nzHeight && (this.newvaluewidth <= maxwidthtnewvalue ? scrcontinue = !0 : (scrcontinue = !1, this.fullwidth = this.fullheight = !0)), this.nzHeight > this.nzWidth && (this.newvaluewidth <= maxwidthtnewvalue ? scrcontinue = !0 : (scrcontinue = !1, this.fullwidth = this.fullheight = !0)));
        "inner" != this.options.zoomType && (scrcontinue = !0);
        scrcontinue && (this.zoomLock = 0, this.changeZoom = !0, this.options.zoomWindowHeight / this.heightRatio <= this.nzHeight && (this.currentZoomLevel = this.newvalueheight, "lens" != this.options.zoomType && "inner" != this.options.zoomType && (this.changeBgSize = !0, this.zoomLens.css({height: String(this.options.zoomWindowHeight / this.heightRatio) + "px"})), "lens" == this.options.zoomType || "inner" == this.options.zoomType) && (this.changeBgSize = !0), this.options.zoomWindowWidth / this.widthRatio <= this.nzWidth && ("inner" != this.options.zoomType && this.newvaluewidth > this.newvalueheight && (this.currentZoomLevel = this.newvaluewidth), "lens" != this.options.zoomType && "inner" != this.options.zoomType && (this.changeBgSize = !0, this.zoomLens.css({width: String(this.options.zoomWindowWidth / this.widthRatio) + "px"})), "lens" == this.options.zoomType || "inner" == this.options.zoomType) && (this.changeBgSize = !0), "inner" == this.options.zoomType && (this.changeBgSize = !0, this.nzWidth > this.nzHeight && (this.currentZoomLevel = this.newvaluewidth), this.nzHeight > this.nzWidth && (this.currentZoomLevel = this.newvaluewidth)));
        this.setPosition(this.currentLoc)
    }, closeAll: function () {
        self.zoomWindow && self.zoomWindow.hide();
        self.zoomLens && self.zoomLens.hide();
        self.zoomTint && self.zoomTint.hide()
    }, changeState: function (e) {
        "enable" == e && (this.options.zoomEnabled = !0);
        "disable" == e && (this.options.zoomEnabled = !1)
    }};
    e.fn.elevateZoom = function (t) {
        return this.each(function () {
            var n = Object.create(i);
            n.init(t, this);
            e.data(this, "elevateZoom", n)
        })
    };
    e.fn.elevateZoom.options = {zoomActivation: "hover", zoomEnabled: !0, preloading: 1, zoomLevel: 1, scrollZoom: !1, scrollZoomIncrement: .1, minZoomLevel: !1, maxZoomLevel: !1, easing: !1, easingAmount: 12, lensSize: 200, zoomWindowWidth: 400, zoomWindowHeight: 400, zoomWindowOffetx: 0, zoomWindowOffety: 0, zoomWindowPosition: 1, zoomWindowBgColour: "#fff", lensFadeIn: !1, lensFadeOut: !1, debug: !1, zoomWindowFadeIn: !1, zoomWindowFadeOut: !1, zoomWindowAlwaysShow: !1, zoomTintFadeIn: !1, zoomTintFadeOut: !1, borderSize: 4, showLens: !0, borderColour: "#888", lensBorderSize: 1, lensBorderColour: "#000", lensShape: "square", zoomType: "window", containLensZoom: !1, lensColour: "white", lensOpacity: .4, lenszoom: !1, tint: !1, tintColour: "#333", tintOpacity: .4, gallery: !1, galleryActiveClass: "zoomGalleryActive", imageCrossfade: !1, constrainType: !1, constrainSize: !1, loadingIcon: !1, cursor: "default", showOnMobile: !1, responsive: !0, onComplete: e.noop, onZoomedImageLoaded: function () {
    }, onImageSwap: e.noop, onImageSwapComplete: e.noop}
})(jQuery, window, document)