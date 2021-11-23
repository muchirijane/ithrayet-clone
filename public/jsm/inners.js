var audioPrefMute = localStorage.getItem("audio_pref");
var firstIntr = localStorage.getItem("first_int");
var showLoader = localStorage.getItem("show_loader");

var page = $("body").attr("id"),
  pageLang = $("html").attr("lang"),
  scrollVal = 0,
  width = window.innerWidth,
  height = window.innerHeight,
  tabsTL = [],
  menuTL,
  menuScroll,
  isMenu,
  isSafari,
  isMobile,
  cdTL,
  edTL,
  Sketch,
  curTL1,
  curTL2,
  cursor,
  audio,
  isAudio = audioPrefMute ? false : true,
  isMuted = audioPrefMute ? true : false,
  firstInteract = firstIntr ? true : false,
  curX,
  curY,
  circle = $(".circle_set"),
  foucsTO,
  loaderTL,
  isFirstMove = false,
  isLeaveing = false,
  isFocus = true,
  isFired = false,
  isRender = false,
  ThreeLoaded = false,
  isDragging = false,
  isPageLoaded = false,
  hasColorMode = $("#site").hasClass("has-color-mode"),
  threeINT;

$.fn.isInViewport = function () {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

jQuery.cachedScript = function (url, options) {
  options = $.extend(options || {}, {
    dataType: "script",
    cache: true,
    url: url,
  });

  return jQuery.ajax(options);
};

$(window).on("load", function () {
  $.ready.then(function () {
    $(".input_set input,.input_set textarea")
      .not('[type="checkbox"], [type="radio"]')
      .on({
        focus: (e) => {
          const self = $(e.currentTarget);
          self.closest(".input_set").addClass("active");
        },
        blur: (e) => {
          const self = $(e.currentTarget);

          if (self.hasClass("hasDatepicker")) {
            setTimeout(() => {
              if (self.val() !== "") {
                self.closest(".input_set").addClass("active");
              } else {
                self.closest(".input_set").removeClass("active");
              }
            }, 100);
          } else {
            if (self.val() !== "") {
              self.closest(".input_set").addClass("active");
            } else {
              self.closest(".input_set").removeClass("active");
            }
          }
        },
      })
      .trigger("blur");
    isPageLoaded = true;

    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge|maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
        navigator.userAgent
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        navigator.userAgent.substr(0, 4)
      )
    ) {
      isMobile = true;
    }

    if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      isSafari = true;
    } else {
      isSafari = false;
    }

    if (isMobile == true) {
      $("body").addClass("isMobile");
    } else {
      $("body").addClass("isDesktop");
    }

    window.onblur = function () {
      if (foucsTO) {
        clearTimeout(foucsTO);
      }

      foucsTO = setTimeout(function () {
        isFocus = false;
      }, 250);

      if (scroll && scroll.stop) {
        scroll.stop();
      }

      if (isAudio && !isMuted) {
        audio.pause();
        $(".equalizer").addClass("muted");
      }
    };

    window.onfocus = function () {
      if (foucsTO) {
        clearTimeout(foucsTO);
      }

      isFocus = true;

      if (Sketch && !isRender) {
        isRender = true;
        Sketch.render();
      }

      if (scroll && scroll.start) {
        scroll.start();
      }

      if (isAudio && !isMuted) {
        audio.play();
        $(".equalizer").removeClass("muted");
      }
    };

    window.setTimeout(function () {
      console.log(isAudio);
      if (audioPrefMute === null && isAudio) {
        audio.play();
        window.clearTimeout();
        $(".equalizer").removeClass("muted");
      }
    }, 1000);

    $("body").addClass("progress");

    $(".equalizer").addClass("muted");
    if (showLoader == null) {
      $("#loader_logo").fadeIn().addClass("animated");
      localStorage.setItem("show_loader", true);
    } else {
      $("#loader_logo").addClass("animated");
      $("#loader_logo").hide();
    }

    siteIntrvl = setInterval(function () {
      if (isPageLoaded) {
        clearInterval(siteIntrvl);

        $("head").append(
          $('<link rel="stylesheet" type="text/css"/>').attr(
            "href",
            "/css/inners_" + pageLang + ".css"
          )
        );

        $.cachedScript("/jsm/vendor.js").done(function (script, textStatus) {
          gsap.config({
            nullTargetWarn: false,
          });

          if (!isMobile) {
            curTL1 = new TimelineMax({ paused: true });
            curTL2 = new TimelineMax({ paused: true });

            curTL1
              .to(
                ".cur i",
                0.5,
                { scale: 2, autoAlpha: 1, ease: Back.easeInOut },
                0
              )

              .to(
                ".cur strong",
                0.5,
                { autoAlpha: 1, ease: Power3.easeInOut },
                0
              );

            curTL2.to(".cur", 0.3, { scale: 2.5, ease: Power3.easeInOut });

            $("._curTL1")
              .mouseenter(function () {
                var title = $(this).attr("data-title");

                curTL1.play();

                if (title) {
                  $(".cur strong").text(title);
                }
              })
              .mouseleave(function () {
                curTL1.reverse();
              });

            $(
              "a, ._curTL2, .tab.flex, .filters_toggle, .equalizer, .circle_set, .audio_circle, ._link, .filter_head, .letters span, .option, .select_set, .form_btn, .circle_mag, .filters_close, .circle_btn, .font_circ:not(.disabled)"
            )
              .mouseenter(function () {
                if (
                  !$(this).hasClass("active") &&
                  !$(this).hasClass("_curTL1")
                ) {
                  curTL2.play();
                }
              })
              .mouseleave(function () {
                if (
                  !$(this).hasClass("active") &&
                  !$(this).hasClass("_curTL1")
                ) {
                  curTL2.reverse();
                }
              });

            $(window).on("mousemove", function (e) {
              var x = e.clientX;
              var y = e.clientY;

              if (!isFirstMove) {
                isFirstMove = true;

                TweenMax.to(".cur", 1, { autoAlpha: 1, ease: Power3.easeOut });
              }

              TweenMax.to(".cur", 0.4, {
                x: x - 8,
                y: y - 8,
                ease: Power3.easeOut,
              });
            });
          }

          if (preloadIMGSrc.length != 0) {
            TweenMax.to(".ld_perc", 0.5, { autoAlpha: 1 });

            $.cachedScript("/jsm/three.min.js").done(function (
              script,
              textStatus
            ) {
              ThreeLoaded = true;
            });

            preloadIMGSrc.each(function (i) {
              var t = $(this),
                s = t.attr("data-img");

              t.attr("src", s).removeAttr("data-img");

              $('<img crossorigin="anonymous" src="' + s + '">').on(
                "load",
                function () {
                  LoadingPerc = (getLoaded + 1) / preloadIMGSrc.length;

                  TweenMax.to(cont, 0.3, {
                    val: LoadingPerc * 100,
                    roundProps: "val",
                    onUpdate: function () {
                      $(".ld_perc").html(cont.val + "%");
                    },
                  });

                  getLoaded++;

                  if (preloadIMGSrc.length - 1 == i) {
                    threeINT = setInterval(function () {
                      if (ThreeLoaded) {
                        clearInterval(threeINT);

                        fire();

                        webGL();
                      }
                    }, 50);
                  }
                }
              );
            });
          } else {
            fire();
          }
        });
      }
    }, 50);
  });
});

function music() {
  audio = new Audio("/music/main.mp3");
  audio.loop = true;
  audio.volume = 0.4;

  $(".equalizer").on("click", function () {
    if (!$(this).hasClass("muted")) {
      $(this).addClass("muted");

      audio.pause();

      isMuted = true;
      localStorage.setItem("audio_pref", true);
    } else {
      $(this).removeClass("muted");

      audio.play();

      isMuted = false;
      localStorage.removeItem("audio_pref");
    }
  });

  $("body").on("click", function () {
    if (!firstInteract) {
      firstInteract = true;
      localStorage.setItem("first_int", true);
      $(".equalizer").removeClass("muted");
      audio.play();
      isMuted = false;
      isAudio = true;
    }
  });
}

function fire() {
  loaderTL = new TimelineMax();

  if (showLoader == null) {
    $("#loader_logo").removeClass("animated");
  }

  music();
  loaderTL

    .to(".site_loader", 0.3, { autoAlpha: 0, ease: Power3.easeIn }, 0.2)

    .to("#site", 1, { autoAlpha: 1, ease: Power3.easeInOut })

    .call(function () {
      $(".ld_perc").remove();

      $(".site_loader").add("#loader_logo").hide();

      isFired = true;

      $("body").removeClass("progress");
    });

  var pageHead = $(".page_head_set h1, body:not(#editions) .section_head h1"),
    headSplit1,
    headSplit1Target;

  if (pageHead.length != 0) {
    if (pageLang == "en") {
      headSplit1 = new SplitText(pageHead, {
        type: "chars",
        charsClass: "SplitClass",
      });
      headSplit1Target = headSplit1.chars;
    } else {
      headSplit1 = new SplitText(pageHead, {
        type: "words",
        wordsClass: "SplitClass",
      });
      headSplit1Target = headSplit1.words;
    }

    TweenMax.staggerFrom(
      headSplit1Target,
      1,
      {
        x: pageLang == "en" ? 100 : -100,
        autoAlpha: 0,
        ease: Power3.easeOut,
        delay: 0.8,
      },
      0.05,
      function () {
        headSplit1.revert();
      }
    );
  }

  if (page == "editions") {
    buildEditions();
  }

  buildScroll();

  globalFunc();

  TweenMax.to("._mainElement, ._curTL2, ._show", 1, { autoAlpha: 1 });

  let aniUP = $("._aniUp");

  if (aniUP.length != 0) {
    $.each(aniUP, function (i, element) {
      let tl = new TimelineMax({ paused: true }),
        $this = $(this),
        split = new SplitText($this, {
          type: "words",
          wordsClass: "SplitClass",
        }),
        words = split.words;

      tl.staggerTo(
        words,
        0.3,
        { y: -10, autoAlpha: 0, ease: Power3.easeIn },
        0.05
      )

        .set(words, { y: 10 })

        .staggerTo(
          words,
          0.3,
          { y: 0, autoAlpha: 1, ease: Power3.easeOut },
          0.05
        );

      element.animation = tl;
    });

    if (!isMobile) {
      aniUP.bind("mouseenter", function () {
        this.animation.restart();
      });
    }
  }
}

function buildEditions() {
  $(".tab_section").each(function (i) {
    let $thisTab = $(this),
      wrapImgs = $thisTab.find("img");

    if (wrapImgs.length != 0) {
      wrapImgs.wrap('<div class="fluid_img"></div>');

      $thisTab
        .find(".fluid_img")
        .wrapAll('<div class="fluid_imgs flex"></div>');
    }

    if (i % 2 == 0) {
      $thisTab
        .find(".fluid_img")
        .eq(1)
        .add($thisTab.find(".fluid_img").eq(2))
        .wrapAll($("<div/>", { class: "fluid_imgs_row flex" }));
      $thisTab
        .find(".fluid_img")
        .eq(4)
        .add($thisTab.find(".fluid_img").eq(5))
        .wrapAll($("<div/>", { class: "fluid_imgs_row flex" }));
    } else {
      $thisTab
        .find(".fluid_img")
        .eq(0)
        .add($thisTab.find(".fluid_img").eq(1))
        .wrapAll($("<div/>", { class: "fluid_imgs_row flex" }));
      $thisTab
        .find(".fluid_img")
        .eq(4)
        .add($thisTab.find(".fluid_img").eq(5))
        .wrapAll($("<div/>", { class: "fluid_imgs_row flex" }));
    }
  });
}

function buildScroll() {
  scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    scrollFromAnywhere: true,
    getDirection: true,
    smartphone: {
      smooth: true,
      lerp: 0,
    },
    tablet: {
      smooth: true,
      lerp: 0,
    },
  });

  scroll.on("scroll", (func, speed) => {
    pageScroll(func);
  });

  $(document).on("click", ".scrollTO", function (e) {
    var href = $(this).attr("data-href"),
      before = 0;

    if ($(this).hasClass("tab").length != 0) {
      before = $(".tab").innerHeight() + 20;
    }

    if (scroll) {
      scroll.scrollTo("#" + href, {
        offset: -before,
        duration: 400,
      });
    }

    return false;
  });
}

let preloadIMGSrc = $(".preloadIMG"),
  cont = { val: 0 },
  LoadingPerc = 0,
  getLoaded = 0,
  pageIMGS = [];

let tabsCarousel,
  tabsWrap = $(".multiple"),
  tabs = tabsWrap.find(".tab"),
  item = $(".fixed_item:not(.forced)"),
  pageProg = $(".page_progress"),
  isForceTab = false,
  cursResized = false,
  tagsCarousel,
  tagSelector = $(".sub-menu ul"),
  tagSection = $(".tag_section"),
  getTagsH,
  currentTab = 0,
  lastTab = 0,
  isTagsFlickity = false,
  currentEd = 0,
  lastScrollVal = 0,
  lastEd = 0;

var isWrapped = false,
  current = tagSection,
  isPlaying = [];

function pageScroll(val) {
  scrollVal = val.scroll.y;

  if (Sketch && Sketch.materials) {
    Sketch.setPosition(0);

    Sketch.imageStore.forEach((o) => {
      o.img.crossOrigin = "anonymous";
      let bounds = o.img.getBoundingClientRect();

      if (
        o.mesh.material.uniforms.uMouseMoveStrength.value > -1 &&
        lastScrollVal != scrollVal &&
        $.inArray(o, isPlaying) == -1
      ) {
        isPlaying.push(o);

        let tl = new TimelineMax();

        tl.to(o.mesh.material.uniforms.uMouseMoveStrength, 1, {
          value: -1,
          ease: Power3.easeOut,
        })

          .to(o.mesh.material.uniforms.uMouseMoveStrength, 1, {
            value: 0,
            ease: Back.easeInOut,
          })

          .call(function () {
            isPlaying.splice($.inArray(o, isPlaying), 1);
          });
      }
    });
  }

  lastScrollVal = scrollVal;

  item.each(function () {
    let $this = $(this),
      getItemY = $this.position().top;

    getItemY >= 1
      ? $this.addClass("full-width")
      : $this.removeClass("full-width");

    if ($this.hasClass("has_background")) {
      $this.hasClass("filters") ? (isWrapped = true) : (isWrapped = false);

      if (width > 960 && !tagSelector.parent().hasClass("static")) {
        getItemY >= 1 ? tagsFlic(1, isWrapped) : tagsFlic(0);
      }

      tagsAdj();
    }
  });

  refreshTabs();

  $(".tab_section").each(function (i) {
    let getScrollID = $(this).attr("data-scroll-id");

    if (typeof val.currentElements[getScrollID] === "object") {
      let progress =
        ((height - $(val.currentElements[getScrollID].el).offset().top) * 100) /
        $(val.currentElements[getScrollID].el).innerHeight();

      $(".tab[data-id=" + getScrollID + "]").addClass("active");

      currentTab = getScrollID;

      tabsTL[i].progress(progress / 100);
    } else {
      if (tabsTL[i].progress() <= 0.5 && val.direction == "up") {
        $(".tab[data-id=" + getScrollID + "]").removeClass("active");

        tabsTL[i].progress(0);
      }
    }
  });

  if (currentTab != lastTab) {
    lastTab = currentTab;
    changeEdition(currentTab);
  }

  $(".cover_set").each(function (i) {
    if ($(this).isInViewport() && $(this).offset().top < height / 3) {
      currentEd = $(this).index();
    }
  });

  if (currentEd != lastEd) {
    lastEd = currentEd;
    changeTitle(currentEd);
  }

  if (pageProg.length != 0) {
    TweenMax.set(pageProg, {
      scaleX: (height + scrollVal) / $("main").innerHeight(),
    });
  }

  let form = $(".form_set");
  let innerFooter = $("#inner-footer");

  if (form.length != 0) {
    form.each(function () {
      let $this = $(this);

      if ($this.isInViewport() && !$this.hasClass("ready")) {
        $this.addClass("ready");

        showForm($this);
      }
    });
  }

  let sign = $(".sign"),
    signStroke = sign.find(".stroke-an");

  if (sign.length != 0) {
    if (sign.isInViewport() && !sign.hasClass("ready")) {
      sign.addClass("ready");

      TweenMax.staggerFromTo(
        signStroke,
        1,
        { drawSVG: "0%" },
        { drawSVG: "100%", ease: Power3.easeInOut },
        0.2
      );
    }
  }

  let signs = $(".sign_set");

  if (signs.length != 0) {
    signs.each(function () {
      let $this = $(this),
        signsStroke = $this.find("svg *");

      if ($this.isInViewport() && !$this.hasClass("ready")) {
        $this.addClass("ready");

        TweenMax.staggerFromTo(
          signsStroke,
          1,
          { drawSVG: "0%" },
          { drawSVG: "100%", ease: Power3.easeInOut },
          0.2
        );
      }
    });
  }

  if (innerFooter.length != 0) {
    if (innerFooter.isInViewport() && !innerFooter.hasClass("ready")) {
      innerFooter.addClass("ready");

      TweenMax.set(innerFooter, { autoAlpha: 1 });
    }
  }

  if ($(".text_circle").length != 0) {
    TweenMax.set(".text_circle svg", { rotation: scrollVal * 0.2 });
  }

  if ($(".line_shape").length != 0 && scrollVal > 10) {
    $(".line_shape").each(function () {
      let $this = $(this);

      if ($this.isInViewport() && !$this.hasClass("ready")) {
        $this.addClass("ready");

        TweenMax.to($this, 1, { opacity: 1, ease: Power3.easeOut });

        TweenMax.fromTo(
          $this.find("path"),
          4,
          { drawSVG: "0%" },
          { drawSVG: "100%", ease: Power3.easeOut }
        );
      }
    });
  }
}

function showForm(target) {
  let tl = new TimelineMax({ delay: 0.5 });

  tl.set(target, { autoAlpha: 1 }, 0)

    .staggerFrom(
      target.find("._ele"),
      0.5,
      { y: 20, autoAlpha: 0, ease: Power3.easeOut },
      0.2,
      0
    )

    .staggerFromTo(
      target.find(".input_border line"),
      0.5,
      { drawSVG: "0%" },
      { drawSVG: "100%", ease: Power3.easeOut },
      0.05,
      0
    )

    .fromTo(
      target.find(".inline_submit i"),
      0.5,
      { scaleY: 0, transformOrigin: "100% 100%" },
      { scaleY: 1, ease: Power3.easeOut },
      0.5
    )

    .staggerFromTo(
      target.find(".input_set label, .inline_submit span"),
      1,
      { y: 20, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, ease: Power3.easeOut },
      0.05,
      0.5
    );
}

function tagsAdj() {
  if (tagSelector.length != 0) {
    getTagsH = tagSelector.innerHeight();

    if ($(".has_background.filters").length == 0) {
      tagSection.each(function (i) {
        let $this = $(this);

        if ($this.isInViewport() && !isForceTab) {
          $this.addClass("active");

          current = $(".tag_section.active:last");
        } else {
          $this.removeClass("active");
        }
      });

      let id = current.attr("id");

      if (
        tagSelector.find("a:not([data-href=" + id + "])").hasClass("active")
      ) {
        tagSelector.find("a:not([data-href=" + id + "])").removeClass("active");
      }

      if (!tagSelector.find("a[data-href=" + id + "]").hasClass("active")) {
        tagSelector.find("a[data-href=" + id + "]").addClass("active");
      }

      if (isTagsFlickity) {
        if (width > 640) {
          if (
            !tagSelector
              .find("a.active:last")
              .closest("li")
              .hasClass("is-selected")
          ) {
            tagsCarousel.flickity(
              "select",
              tagSelector.find("a.active:last").closest("li").index()
            );
          }
        } else {
          tagsCarousel.flickity(
            "select",
            tagSelector.find("a.active:last").closest("li").index(),
            false,
            true
          );
        }
      }
    }
  }
}

function tagsFlic(val, isWrapped) {
  if (tagSelector.length != 0) {
    if (val == 1) {
      if (isTagsFlickity == false) {
        isTagsFlickity = true;

        if (tagSelector.parent().hasClass("static")) {
          tagsCarousel = tagSelector.flickity({
            percentPosition: false,
            prevNextButtons: false,
            contain: true,
            accessibility: false,
            pageDots: false,
            groupCells: isWrapped,
            selectedAttraction: 0.2,
            friction: 1,
            rightToLeft: pageLang == "ar" ? true : false,
            cellAlign: pageLang == "ar" ? "right" : "left",
          });
        } else {
          tagsCarousel = tagSelector.flickity({
            percentPosition: false,
            prevNextButtons: false,
            contain: true,
            accessibility: false,
            pageDots: false,
            groupCells: isWrapped,
            selectedAttraction: 0.2,
            friction: 1,
            rightToLeft: pageLang == "ar" ? true : false,
          });
        }

        tagsCarousel.on("settle.flickity", function (event, index) {
          isDragging = false;

          if (!isMenu && scroll) {
            scroll.start();
          }
        });

        tagsCarousel.on("dragStart.flickity", function (event, pointer) {
          isDragging = true;

          if (scroll) {
            scroll.stop();
          }
        });

        if (width > 960) {
          $("#sections").css(
            "padding-top",
            getTagsH - tagSelector.innerHeight()
          );
        } else {
          $("#sections").css("padding-top", 0);
        }

        if (!isMenu && scroll) {
          scroll.update();
        }
      }
    } else {
      if (isTagsFlickity == true) {
        $("#sections").css("padding-top", 0);

        isTagsFlickity = false;

        tagsCarousel.flickity("destroy");

        if (!isMenu && scroll) {
          scroll.update();
        }
      }
    }
  }
}

function changeTitle(id) {
  var active = $(".cover_set").eq(id),
    title = active.attr("data-name"),
    url = active.attr("data-url"),
    getTitle = $("#getName"),
    headSplit;

  $(".cover_set").removeClass("active");

  active.addClass("active");

  $("#getURL").attr("href", url);

  clearTimeout($.data(this, "ed_Timer"));

  $.data(
    this,
    "ed_Timer",
    setTimeout(function () {
      if (edTL) {
        edTL.kill();
      }

      edTL = new TimelineMax();

      if (pageLang == "en") {
        split = new SplitText(getTitle, {
          type: "chars",
          charsClass: "SplitClass",
        });

        headSplit = split.chars;
      } else {
        split = new SplitText(getTitle, {
          type: "words",
          wordsClass: "SplitClass",
        });

        headSplit = split.words;
      }

      edTL
        .staggerTo(
          headSplit,
          0.8,
          { x: -90, autoAlpha: 0, ease: Power3.easeIn },
          0.025,
          0
        )

        .call(function () {
          getTitle.html(title);

          if (edTL) {
            edTL.kill();
          }

          edTL = new TimelineMax();

          if (pageLang == "en") {
            split = new SplitText(getTitle, {
              type: "chars",
              charsClass: "SplitClass",
            });

            headSplit = split.chars;
          } else {
            split = new SplitText(getTitle, {
              type: "words",
              wordsClass: "SplitClass",
            });

            headSplit = split.words;
          }

          edTL.staggerFrom(
            headSplit,
            0.8,
            { x: 90, autoAlpha: 0, ease: Power3.easeOut },
            0.025,
            0
          );
        });
    }, 100)
  );
}

if (page == "edition" || page == "article") {
  dataBg = $(".background-color");

  if (dataBg.length) {
    const dataColor = dataBg.attr("data-color");
    const dataColorText = dataBg.attr("data-tcolor");
    console.log(dataColor);
    if (dataColor && dataColorText) {
      $("main").css({ backgroundColor: dataColor, color: dataColorText });
      $("main section").css({ color: dataColorText });
      $(".has_background").css({
        backgroundColor: dataColor,
        color: dataColorText,
      });
    }
  }
}

function changeEdition(id) {
  if (page == "editions") {
    var split, headSplit;

    let head = $(".section_head"),
      active = $(".tab[data-id=" + id + "]"),
      sub = active.find(".f_16").text(),
      url = active.attr("data-url"),
      getTitle = head.find("h1"),
      getSub = head.find(".f_30"),
      tags = [],
      tagsColors = [],
      tagsURLS = [],
      dataColor = active.attr("data-color"),
      dataColorText = active.attr("data-tcolor"),
      getTags = active.attr("data-tags"),
      getTagsColors = active.attr("data-tags-color"),
      getTagsURLS = active.attr("data-tags-url");

    if (dataColor) {
      TweenMax.to("main", 0.5, {
        backgroundColor: dataColor,
        color: dataColorText,
      });
    } else {
      TweenMax.to("main", 0.5, { backgroundColor: "transparent" });
    }
    if (getTags) {
      tags.push(getTags.split(","));

      if (getTagsColors) {
        tagsColors.push(getTagsColors.split(","));
      }

      if (getTagsURLS) {
        tagsURLS.push(getTagsURLS.split(","));
      }

      $(".tags").html("");

      TweenMax.to(".tags", 0.5, { autoAlpha: 1 });

      tags[0].forEach(function (i, o) {
        let title = i;

        $(".tags").append(
          '<a href="' +
            tagsURLS[0][o] +
            '" style="color:' +
            tagsColors[0][o] +
            ';">' +
            i +
            "</a>"
        );
      });
    } else {
      TweenMax.to(".tags", 0.5, { autoAlpha: 0 });
    }

    getSub.html(sub);

    circle.attr("data-url", url);

    clearTimeout($.data(this, "cd_Timer"));

    $.data(
      this,
      "cd_Timer",
      setTimeout(function () {
        if (cdTL) {
          cdTL.kill();
        }

        cdTL = new TimelineMax();

        if (pageLang == "en") {
          split = new SplitText(getTitle, {
            type: "chars",
            charsClass: "SplitClass",
          });

          headSplit = split.chars;
        } else {
          split = new SplitText(getTitle, {
            type: "words",
            wordsClass: "SplitClass",
          });

          headSplit = split.words;
        }

        cdTL
          .staggerTo(
            headSplit,
            0.8,
            { x: -90, autoAlpha: 0, ease: Power3.easeIn },
            0.025,
            0
          )

          .call(function () {
            let title = active.find(".f_40").text();

            getTitle.html(title);

            if (cdTL) {
              cdTL.kill();
            }

            cdTL = new TimelineMax();

            if (pageLang == "en") {
              split = new SplitText(getTitle, {
                type: "chars",
                charsClass: "SplitClass",
              });

              headSplit = split.chars;
            } else {
              split = new SplitText(getTitle, {
                type: "words",
                wordsClass: "SplitClass",
              });

              headSplit = split.words;
            }

            cdTL.staggerFrom(
              headSplit,
              0.8,
              { x: 90, autoAlpha: 0, ease: Power3.easeOut },
              0.025,
              0
            );
          });
      }, 100)
    );
  }
}

function refreshTabs() {
  if (tabsCarousel) {
    tabsCarousel.flickity("resize");
    if (!isForceTab) {
      if (width > 640) {
        tabsCarousel.flickity("select", $(".tab.active:last").index());
      } else {
        tabsCarousel.flickity(
          "select",
          $(".tab.active:last").index(),
          false,
          true
        );
      }
    }
  }
}

function buildMenuScroll(val) {
  if (val == 1) {
    $(document).find("nav ul li").wrapAll('<div id="wrap1">');

    menuScroll = true;

    toggleBind();
  } else {
    $(document).find("#wrap1").parent().html($(document).find("#wrap1").html());

    menuScroll = false;
  }
}

var menuElements, menuBG;

function toggleBind() {
  menuElements = $(document).find("nav ul li, .inner_modes_set");
  menuBG = $(document).find("nav i");

  if (!menuTL) {
    menuTL = new TimelineMax({ paused: true });

    menuTL
      .set("nav", { autoAlpha: 1 }, 0)

      .set(menuBG, { autoAlpha: 1, scaleY: 0 }, 0)

      .set(menuElements, { y: 40, autoAlpha: 0 }, 0)

      .to(menuBG, 0.5, { scaleY: 1, ease: Power3.easeInOut }, 0)

      .call(function () {
        if (isMenu) {
          $("footer").stop().delay(800).fadeIn();
        }
      })

      .staggerTo(
        menuElements,
        0.5,
        { y: 0, autoAlpha: 1, ease: Power3.easeOut },
        0.1,
        0.5
      );
  }
}

function openLink(url) {
  isLeaveing = true;

  $(".site_loader").show();

  loaderTL.kill();

  loaderTL = new TimelineMax();

  loaderTL

    .to(".site_loader", 0.5, { autoAlpha: 1, ease: Power3.easeIn }, 0)

    .call(function () {
      window.location.href = url;
    });
}

function globalFunc() {
  if ($(".nf_line").length != 0) {
    TweenMax.to(".nf_line", 8, { x: -465, repeat: -1, ease: Power0.easeNone });
  }

  if ($(".audio_circle").length != 0) {
    $(".audio_circle").on("click", function () {
      let $this = $(this),
        selector = $(this).attr("data-id"),
        type = $this.attr("data-type"),
        audioUrl = $this.attr("data-audio"),
        audio = null,
        isRead = type === "read";
      if (!isRead) {
        audio = new Audio(audioUrl);
      }

      // console.log(audio);

      if (!$this.hasClass("read")) {
        $this.addClass("read");
        if (isRead) {
          responsiveVoice.speak(
            document.getElementsByClassName(selector)[0].textContent,
            pageLang == "en" ? "UK English Male" : "Arabic Male",
            {
              onstart: function () {
                $this.add("." + selector).addClass("playing");
              },
              onend: function () {
                $this.add("." + selector).removeClass("read playing");
              },
            }
          );
        } else {
          audio.play();
        }
      } else {
        $(".audio_circle")
          .add("." + selector)
          .removeClass("read playing");
        if (isRead) {
          responsiveVoice.cancel();
        } else {
          audio.pause();
        }
      }
    });
  }

  $("#increase")
    .parent(".font_circ")
    .click(function () {
      if (!$(this).hasClass("disabled")) {
        $(this).addClass("disabled");

        $("#decrease").parent(".font_circ").removeClass("disabled");

        $("body").addClass("plus");
      }
    });

  $("#decrease")
    .parent(".font_circ")
    .click(function () {
      if (!$(this).hasClass("disabled")) {
        $(this).addClass("disabled");

        $("#increase").parent(".font_circ").removeClass("disabled");

        $("body").removeClass("plus");
      }
    });

  $(".text_side, .side_img").each(function () {
    let f80 = $(this).find(".f_80");

    if (f80.length != 0) {
      if ($(this).children().length == 1) {
        f80.addClass("no-margin");
      }
    }
  });

  let circleWrap = circle.find(".crc_wrap"),
    circleBorder = circle.find(".stroke-an"),
    isHolding = false;
  isHoldEnd = false;

  if (circle.length != 0) {
    let holdTL = new TimelineMax({ paused: true });

    holdTL
      .fromTo(
        circleWrap,
        1,
        { scale: 1 },
        { scale: 1.1, ease: Power3.easeInOut },
        0
      )

      .fromTo(
        circleBorder,
        1,
        { drawSVG: "0%" },
        { drawSVG: "100%", ease: Power3.easeInOut },
        0
      )

      .call(function () {
        $(".circle_mag").removeClass("mg");

        let url = circle.attr("data-url");

        isHoldEnd = true;

        isHolding = false;

        openLink(url);
      });

    circle
      .on("mousedown touchstart", function () {
        isHolding = true;

        if (scroll) {
          scroll.stop();
        }

        holdTL.play();
      })
      .on("mouseup touchend", function () {
        if (!isHoldEnd && isHolding) {
          if (scroll) {
            scroll.start();
          }

          holdTL.reverse();
        }
      })
      .on("mouseleave", function () {
        if (isHolding) {
          holdTL.reverse();
        }
      });
  }

  let teamSet = $(".team_set"),
    teamCircle = $(".crv_circle"),
    circTL,
    teamCarousel,
    lastCirc;

  if (teamSet.length != 0) {
    teamCarousel = teamSet.flickity({
      percentPosition: false,
      prevNextButtons: false,
      contain: true,
      accessibility: false,
      freeScroll: true,
      wrapAround: true,
      pageDots: false,
      rightToLeft: pageLang == "ar" ? true : false,
      on: {
        ready: function () {},
      },
    });

    teamCarousel.on("dragStart.flickity", function (event, pointer) {
      isDragging = true;
    });

    teamCarousel.on("settle.flickity", function (event, progress) {
      isDragging = false;
    });

    teamCircle.each(function (i, element) {
      let border = $(this).find(".crv_stroke .stroke-an"),
        name = $(this).find(".crv_name"),
        circSplit = new SplitText(name, {
          type: "words",
          wordsClass: "SplitClass",
        });

      $(this).attr("data-index", i);

      if (border.length != 0) {
        let tl = new TimelineMax({ paused: true });

        tl.fromTo(
          border,
          1,
          { drawSVG: "0%" },
          { drawSVG: "100%", ease: Power3.easeInOut },
          0
        ).staggerFrom(
          circSplit.words,
          1,
          { y: 20, autoAlpha: 0, ease: Power3.easeInOut },
          0.1,
          0
        );

        element.animation = tl;
      }
    });

    teamCircle
      .on("mousemove touchstart", function () {
        let index = $(this).attr("data-index");

        if (index != lastCirc && !$("body").hasClass("progress")) {
          lastCirc = index;

          $(".crv_circle").css("z-index", 9);

          $(this).css("z-index", 99);
        }

        if (this.animation) {
          this.animation.timeScale(1.5).play();
        }
      })
      .on("mouseleave touchend", function () {
        if (this.animation) {
          this.animation.timeScale(1.5).reverse();
        }
      });
  }

  if (tabsWrap.length != 0) {
    tabsCarousel = tabsWrap.flickity({
      percentPosition: false,
      prevNextButtons: false,
      contain: true,
      accessibility: false,
      pageDots: false,
      selectedAttraction: 0.2,
      friction: 1,
      rightToLeft: pageLang == "ar" ? true : false,
      on: {
        ready: function () {},
      },
    });

    tabsCarousel.on("settle.flickity", function (event, index) {
      isDragging = false;

      if (!isMenu && scroll) {
        scroll.start();
      }
    });

    tabsCarousel.on("dragStart.flickity", function (event, pointer) {
      isDragging = true;

      if (!isMenu && scroll) {
        scroll.stop();
      }
    });

    tabs.each(function (i) {
      let $this = $(this),
        sectionHeight = $(".tab_section").eq(i).innerHeight();
      tabsProgress = $this.find("i");

      if (tabsTL[i]) {
        tabsTL[i].kill();
      }

      tabsTL[i] = new TimelineMax({ paused: true });

      tabsTL[i]

        .fromTo(tabsProgress, 0.01, { scaleX: 0 }, { scaleX: 1 }, 0)

        .call(function () {
          isForceTab = false;
        });
    });

    tabs.click(function () {
      if (!isDragging) {
        isForceTab = true;

        let id = $(this).attr("data-id"),
          sectionOffset =
            $("section[data-scroll-id=" + id + "]").offset().top + scrollVal,
          before = tabsWrap.innerHeight();

        if ($(".has_background.filters").length != 0) {
          before =
            tagSelector.closest(".sub-menu").innerHeight() -
            parseInt(tagSelector.closest(".sub-menu").css("padding-top")) +
            tabsWrap.innerHeight();
        }

        scroll.scrollTo(sectionOffset, {
          offset: -before,
        });
      }
    });
  }

  if (tagSelector.length != 0) {
    tagSelector.find("a").on("click", function (e) {
      let $this = $(this),
        href = $this.attr("data-href"),
        before = $(".fixed_item").innerHeight(),
        page = $this.closest(".sub-menu").attr("data-page");

      if (!isDragging) {
        isForceTab = true;

        tagSelector.find("a").removeClass("active");

        $this.addClass("active");

        if (isTagsFlickity) {
          if (width > 640) {
            tagsCarousel.flickity("select", $this.closest("li").index());
          } else {
            tagsCarousel.flickity(
              "select",
              $this.closest("li").index(),
              false,
              true
            );
          }
        }

        if ($(".has_background.filters").length == 0) {
          if (scroll) {
            scroll.scrollTo("#" + href, {
              offset: -before + 2,
              callback: function () {
                isForceTab = false;
              },
            });
          }
        }
      }
    });
  }

  let gallerySet = $(".gallery_set"),
    galleryBlock = $(".gallery_block"),
    galleryCarousel;

  if (gallerySet.length != 0) {
    galleryCarousel = gallerySet.flickity({
      percentPosition: false,
      prevNextButtons: false,
      contain: true,
      accessibility: false,
      freeScroll: true,
      wrapAround: true,
      pageDots: false,
      rightToLeft: pageLang == "ar" ? true : false,
      on: {
        ready: function () {
          TweenMax.set(".gallery_block", { autoAlpha: 1 });

          TweenMax.staggerFrom(
            ".is-selected .gallery_block",
            1,
            {
              autoAlpha: 0,
              x: pageLang == "en" ? 300 : -300,
              ease: Power3.easeOut,
              delay: 1.5,
            },
            0.05,
            function () {
              if (!isMobile) {
                galleryInt();
              }
              if (scroll) {
                scroll.update();
              }
            }
          );
        },
      },
    });

    var popupItems = $.map(
      galleryCarousel.find(".gallery_img a"),
      function (link) {
        return {
          src: `<div class="gallery-popup--image"><img src="${link.href}"/><a href="${link.dataset.article}" target="_blank">Visit</a></div>`,
          type: "inline",
          // src: link.href,
          // type: $(link).attr("data-popup-type") || "image",
        };
      }
    );

    console.log(popupItems);

    galleryCarousel.on("click", ".gallery_img a", function (event) {
      event.preventDefault();
      event.stopPropagation();
      clickedIndex = parseInt($(this).attr("data-cell-index"));
      $.magnificPopup.open({
        items: popupItems,
        gallery: {
          enabled: true,
        },
        callbacks: {
          open: function () {
            console.log($.magnificPopup.instance);
            $.magnificPopup.instance.goTo(clickedIndex);
          },
        },
      });
    });

    galleryCarousel.on("settle.flickity", function (event, index) {
      isDragging = false;
    });

    galleryCarousel.on("dragStart.flickity", function (event, pointer) {
      event.stopPropagation();
      isDragging = true;
    });

    function galleryInt() {
      function scale(number, inMin, inMax, outMin, outMax) {
        return (
          ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
        );
      }
      function limitNumberWithinRange(num, min, max) {
        const MIN = min || 0;
        const MAX = max || 3;
        const parsed = parseFloat(num);
        return Math.min(Math.max(parsed, MIN), MAX);
      }

      $(document).on("mousemove", function (e) {
        let getX = e.clientX,
          getY = e.clientY;

        galleryBlock.each(function (i) {
          let $this = $(this),
            offsetLeft = $this.offset().left,
            offsetTop = $this.offset().top,
            dist = Math.floor(
              Math.sqrt(
                Math.pow(getX - (offsetLeft + $this.width() / 2), 2) +
                  Math.pow(getY - (offsetTop + $this.height() / 2), 2)
              )
            );
          zIndexVal = scale(
            Math.abs(
              Math.floor(Math.pow(getX - (offsetLeft + $this.width() / 2), 1))
            ),
            0,
            Math.abs(Math.floor(Math.pow(offsetLeft + $this.width() / 2, 1))),
            3,
            0
          ).toFixed(2);
          scaleVal = scale(dist, 0, 300, 3, 0).toFixed(2);

          TweenMax.to($this, 1, {
            zIndex: limitNumberWithinRange(zIndexVal * 100, 0, 999),
            ease: Power3.easeOut,
          });
          TweenMax.to($this.find(".gallery_img"), 1, {
            z: limitNumberWithinRange(scaleVal, 0, 3),
            ease: Power3.easeOut,
          });
        });
      });
    }
  }

  window.addEventListener("resize", onWindowResize, false);
  window.addEventListener("orientationchange", onOrientationChange, false);

  function onWindowResize() {
    width = window.innerWidth;
    height = window.innerHeight;
    vh = height * 0.01;

    $("body").addClass("progress");

    width <= 800 ? (tOval = -50) : (tOval = -100);

    clearTimeout($.data(this, "resizeTimer"));

    $.data(
      this,
      "resizeTimer",
      setTimeout(function () {
        if (isFired) {
          $("body").removeClass("progress");
        }

        if (!isMenu && scroll) {
          scroll.update();
        }
      }, 500)
    );

    document.documentElement.style.setProperty("--vh", `${vh}px`);

    if (width > 1260) {
      $(document).find("nav, nav i, nav ul li").removeAttr("style");

      if (!isMenu) {
        if (menuTL) {
          menuTL.kill();
          menuTL = false;
        }
      }

      if (menuScroll) {
        buildMenuScroll(0);
      }
    } else {
      if (!menuScroll) {
        buildMenuScroll(1);
      }

      if (isMenu) {
        TweenMax.set(["nav, nav i"], { autoAlpha: 1 });
      }
    }

    item.each(function () {
      let $this = $(this);

      if ($this.hasClass("has_background")) {
        if (width <= 960) {
          $this.hasClass("filters") ? (isWrapped = true) : (isWrapped = false);

          tagsFlic(1, isWrapped);
        } else {
          tagsFlic(0);
        }
      }
    });

    tagsAdj();
  }
  onWindowResize();

  function onOrientationChange() {
    clearTimeout($.data(this, "orientationTimer"));

    $.data(
      this,
      "orientationTimer",
      setTimeout(function () {
        onWindowResize();
      }, 250)
    );
  }

  var modeTL = new TimelineMax({ paused: true }),
    curMode = "dark";
  const curSavedMode = hasColorMode ? "color" : localStorage.getItem("in_mode");
  curMode = curSavedMode ? curSavedMode : "dark";
  modeTL
    .set(".modes_helpers", { autoAlpha: 1 }, 0)

    .to(".shines", 0.5, { opacity: 0 }, 0.3)

    .to(".lightPath", 0.5, { morphSVG: ".darkPath" }, 0.3)

    .to(
      ".modes_helpers .a",
      0.5,
      { scaleY: 1, ease: Power3.easeInOut, transformOrigin: "100% 100%" },
      0
    )

    .to(
      ".modes_helpers .b",
      0.5,
      { scaleY: 1, ease: Power3.easeInOut, transformOrigin: "100% 100%" },
      0.3
    )

    .to(
      ".mode_toggle span i",
      0.8,
      { y: -20, autoAlpha: 0, ease: Power3.easeIn },
      0
    )

    .set(".mode_toggle span i", { y: 20 }, 0.8)

    .set(".modes_helpers .a", { scaleY: 0, transformOrigin: "0 0" }, 0.8)

    .call(function () {
      if (curMode == "light") {
        TweenMax.set("#site", { className: "light" });

        $(".mode_toggle span i").text(
          $(".mode_toggle span").attr("data-title2")
        );
      } else {
        TweenMax.set("#site", { className: "" });

        $(".mode_toggle span i").text(
          $(".mode_toggle span").attr("data-title1")
        );
      }
    })

    .to(
      ".mode_toggle span i",
      0.5,
      { y: 0, autoAlpha: 1, ease: Power3.easeOut },
      0.8
    )

    .to(
      ".modes_helpers .b",
      0.5,
      { scaleY: 0, ease: Power3.easeOut, transformOrigin: "0 0" },
      0.8
    );
  var $el = $("#fixed-bar");
  var color = $el.data("color");
  var textColor = $el.data("tcolor");

  if (hasColorMode) {
    $(".svg-fill").css("fill", textColor);
  }

  $(".reset_mode").click(function (e) {
    e.stopPropagation();
    $(this).removeClass("active");
    $el.find(".page_bar").css("background-color", `${color}CC`);
    $el.find(".tab_content").css("color", textColor);

    $("main, main section").css("color", textColor);
    $("main").css("background-color", color);

    $("#site").removeClass("light dark");
    $(".svg-fill").css("fill", textColor);
  });

  if ($el && !hasColorMode) {
    $el
      .find(".page_bar")
      .css(
        "background-color",
        `${curMode == "dark" ? "#000000" : "#ffffff"}CC`
      );
    $el
      .find(".tab_content")
      .css("color", curMode == "dark" ? "#ffffff" : "#000000");
  }

  $(".mode_set").click(function (e) {
    e.stopPropagation();

    $(".svg-fill").css("fill", "");

    $("main, main section").attr("style", function (i, style) {
      return (
        style &&
        style.replace(/background-color[^;]+;?/g, "") &&
        style.replace(/color[^;]+;?/g, "")
      );
    });
    $(".has_background").attr("style", function (i, style) {
      return (
        style &&
        style.replace(/background-color[^;]+;?/g, "") &&
        style.replace(/color[^;]+;?/g, "")
      );
    });

    if ($(".reset_mode").length) {
      $(".reset_mode").addClass("active");
    }

    if ($el) {
      $el
        .find(".page_bar")
        .css(
          "background-color",
          `${curMode == "dark" ? "#000000" : "#ffffff"}CC`
        );
      $el
        .find(".tab_content")
        .css("color", curMode == "dark" ? "#ffffff" : "#000000");
    }
    if (curMode == "dark") {
      curMode = "light";
      localStorage.setItem("in_mode", curMode);
      modeTL.play();
    } else {
      curMode = "dark";
      localStorage.setItem("in_mode", curMode);
      modeTL.reverse();
    }
  });
  if (curSavedMode) {
    modeTL.play();
  }
  $(".in_mode").click(function (e) {
    if (!$(this).hasClass("active")) {
      $(".in_mode").removeClass("active");

      $(this).addClass("active");

      let getMode = $(this).attr("data-id");

      if (getMode == "light") {
        curMode = "light";
        localStorage.setItem("in_mode", curMode);
        modeTL.play();
      } else {
        curMode = "dark";
        localStorage.setItem("in_mode", curMode);
        modeTL.reverse();
      }
    }
  });

  toggleBind();

  $(".toggle").on("click", function (e) {
    if (!isMenu) {
      $("header").addClass("opened");

      isMenu = true;

      if (scroll) {
        scroll.stop();
      }

      menuTL.timeScale(1).play();
    } else {
      $("header").removeClass("opened");

      isMenu = false;

      if (scroll) {
        scroll.start();
        scroll.update();
      }

      $("footer")
        .stop()
        .fadeOut(function () {
          $("footer").removeAttr("style");
        });

      menuTL.timeScale(1.3).reverse();
    }
  });

  if (!isMobile) {
    cerchio = document.querySelectorAll(".mg");

    cerchio.forEach(function (elem) {
      $(document).on("mousemove", function (e) {
        magnetize(elem, e);
      });
    });

    function magnetize(el, e) {
      var mX = e.pageX,
        mY = e.pageY;
      const item = $(el);

      const customDist = item.data("dist") * 20 || 120;
      const centerX = item.offset().left + item.width() / 2;
      const centerY = item.offset().top + item.height() / 2;

      var deltaX = Math.floor(centerX - mX) * -0.45;
      var deltaY = Math.floor(centerY - mY) * -0.45;

      var distance = calculateDistance(item, mX, mY);

      if (distance < customDist) {
        if (item.hasClass("mg")) {
          TweenMax.to(item, 0.5, { y: deltaY, x: deltaX, scale: 1.1 });
          item.addClass("magnet");
        }
      } else {
        TweenMax.to(item, 0.6, { y: 0, x: 0, scale: 1 });
        item.removeClass("magnet");
      }
    }

    function calculateDistance(elem, mouseX, mouseY) {
      return Math.floor(
        Math.sqrt(
          Math.pow(mouseX - (elem.offset().left + elem.width() / 2), 2) +
            Math.pow(mouseY - (elem.offset().top + elem.height() / 2), 2)
        )
      );
    }

    function lerp(a, b, n) {
      return (1 - n) * a + n * b;
    }
  }

  $(document).on("click", "a:not(.exclude_link), ._link", function (e) {
    if (!isDragging) {
      var href = $(this).attr("href"),
        target = $(this).attr("target");

      if (!href) {
        href = $(this).attr("data-href");
      }

      if (target != "_blank" && href.indexOf("#") != 0) {
        openLink(href);

        return false;
      }
    } else {
      return false;
    }
  });

  appendImgs();

  if ($(".cover_set").length != 0) {
    changeTitle(0);
  }

  if ($(".list").length != 0) {
    let listTL = new TimelineMax({ paused: true });

    listTL
      .staggerTo(
        ".list i",
        0.3,
        { y: -20, autoAlpha: 0, ease: Power3.easeIn },
        0.03
      )

      .set(".list i", { y: 20 })

      .staggerTo(
        ".list i",
        0.3,
        { y: 0, autoAlpha: 1, ease: Power3.easeOut },
        0.03
      );

    $(".view_shape_set").on("mouseenter", function () {
      listTL.restart();

      console.log("ss");
    });
  }

  if ($(".filters_wrap").length != 0) {
    let filtersTL = new TimelineMax({ paused: true }),
      fCircleTL = new TimelineMax({ paused: true });

    filtersTL
      .set(".filters_wrap", { autoAlpha: 1 }, 0)

      .to(".mode_set, footer", 0.5, { autoAlpha: 0, ease: Power3.easeInOut }, 0)

      .from(
        ".filters_set",
        0.5,
        { x: pageLang == "en" ? "100%" : "-100%", ease: Power3.easeInOut },
        0
      )

      .from(
        ".filters_wrap > i",
        0.5,
        { autoAlpha: 0, ease: Power3.easeInOut },
        0
      )

      .staggerFrom(
        ".filters_set ._ele",
        0.5,
        { y: 50, autoAlpha: 0, ease: Power3.easeOut },
        0.05,
        0.5
      );

    $(document).on("click", ".filters_toggle", function (e) {
      filtersTL.play();

      if (scroll) {
        scroll.stop();
      }
    });

    fCircleTL
      .staggerTo(
        ".filters_circle i",
        0.3,
        { y: -10, autoAlpha: 0, ease: Power3.easeIn },
        0.05
      )

      .set(".filters_circle i", { y: 10 })

      .staggerTo(
        ".filters_circle i",
        0.3,
        { y: 0, autoAlpha: 1, ease: Power3.easeOut },
        0.05
      );

    $(document).on("mouseenter", ".filters_toggle", function (e) {
      fCircleTL.restart();
    });

    $(document).on("click", ".filters_set", function (e) {
      e.stopPropagation();
    });

    $(document).on("click", "#filters_close, .filters_wrap > i", function (e) {
      filtersTL.reverse();

      if (scroll) {
        scroll.start();
      }
    });

    $(document).on("click", ".filter_head", function (e) {
      let target = $(this).closest(".filter_block");

      if (!target.hasClass("selected")) {
        $(".filter_block").removeClass("selected");

        target.addClass("selected");
      } else {
        target.removeClass("selected");
      }
    });

    let alphabetArr = [],
      writerArr = [],
      catArr = [];

    $(document).on("click", ".letters span", function (e) {
      let $this = $(this),
        $parent = $this.closest(".filter_block"),
        input = $(`input[name=${$parent.attr("id")}]`),
        val = $this.text();
      console.log($parent);
      if (!$this.hasClass("active")) {
        $this.addClass("active");

        alphabetArr.push(val);
      } else {
        $this.removeClass("active");

        alphabetArr.splice($.inArray(val, alphabetArr), 1);
      }

      input.val(alphabetArr);

      let optionsWrap = $this.closest(".filter_block"),
        countWrap = optionsWrap.find(".filter_count"),
        totalSelected = optionsWrap.find(".letters span.active").length;

      countWrap.html(totalSelected);

      if (totalSelected > 0) {
        TweenMax.to(countWrap, 0.5, { autoAlpha: 1, ease: Power3.easeOut });
      } else {
        TweenMax.to(countWrap, 0.5, { autoAlpha: 0, ease: Power3.easeOut });
      }
    });

    $(document).on("click", ".option.single", function (e) {
      let $this = $(this),
        id = $this.closest(".filter_block").attr("id"),
        input = $("input[name=" + id + "]"),
        val = $this.find(".option_side:first-child").attr("data-id");
      // console.log(isSingle);

      $this.siblings().removeClass("active");
      $this.addClass("active");

      input.val(val);

      let optionsWrap = $this.closest(".filter_block"),
        countWrap = optionsWrap.find(".filter_count"),
        totalSelected = optionsWrap.find(".option.active").length;

      countWrap.html(totalSelected);

      if (totalSelected > 0) {
        TweenMax.to(countWrap, 0.5, { autoAlpha: 1, ease: Power3.easeOut });
      } else {
        TweenMax.to(countWrap, 0.5, { autoAlpha: 0, ease: Power3.easeOut });
      }
    });

    $(document).on("click", ".option:not(.single)", function (e) {
      let $this = $(this),
        id = $this.closest(".filter_block").attr("id"),
        input = $("input[name=" + id + "]"),
        val = $this.find(".option_side:first-child").attr("data-id"),
        isSingle = $this.hasClass("single");

      if (!$this.hasClass("active")) {
        $this.addClass("active");

        id == "writer" ? writerArr.push(val) : catArr.push(val);
      } else {
        $this.removeClass("active");

        id == "writer"
          ? writerArr.splice($.inArray(val, writerArr), 1)
          : catArr.splice($.inArray(val, catArr), 1);
      }

      if (isSingle) {
        $this.siblings().removeClass("active");
        $this.addClass("active");
      }

      input.val(id == "writer" ? writerArr : catArr);

      let optionsWrap = $this.closest(".filter_block"),
        countWrap = optionsWrap.find(".filter_count"),
        totalSelected = optionsWrap.find(".option.active").length;

      countWrap.html(totalSelected);

      if (totalSelected > 0) {
        TweenMax.to(countWrap, 0.5, { autoAlpha: 1, ease: Power3.easeOut });
      } else {
        TweenMax.to(countWrap, 0.5, { autoAlpha: 0, ease: Power3.easeOut });
      }
    });

    $(document).on("change", ".select_set select", function (e) {
      let monthFrom = $("#monthFrom").val(),
        monthTo = $("#monthTo").val(),
        yearFrom = $("#yearFrom").val(),
        yearTo = $("#yearTo").val();

      $("input[name=dateFrom]").val(yearFrom + "-" + monthFrom + "-01");
      $("input[name=dateTo]").val(yearTo + "-" + monthTo + "-31");
    });

    $(document).on("click", ".form_btn", function (e) {
      let form = $(this).closest(".filters_action").find("form");

      isLeaveing = true;

      $(".site_loader").show();

      loaderTL.kill();

      loaderTL = new TimelineMax();

      loaderTL

        .to(".site_loader", 0.5, { autoAlpha: 1, ease: Power3.easeIn }, 0)

        .call(function () {
          form.submit();
        });
    });
  }

  if (!isMobile) {
    let menuLinks = $("nav a, .sub_footer a, ._up");

    $.each(menuLinks, function (i, element) {
      var tl = new TimelineMax({ paused: true }),
        $this = $(this),
        Split,
        chars;

      if (pageLang == "ar") {
        Split = new SplitText($this, {
          type: "words",
          wordsClass: "SplitClass",
        });
        Chars = Split.words;
      } else {
        Split = new SplitText($this, {
          type: "chars",
          charsClass: "SplitClass",
        });
        Chars = Split.chars;
      }

      tl.staggerTo(
        Chars,
        0.3,
        { y: -5, autoAlpha: 0, ease: Power3.easeIn },
        0.01
      )

        .set(Chars, { y: 5 })

        .staggerTo(
          Chars,
          0.3,
          { y: 0, autoAlpha: 1, ease: Power3.easeOut },
          0.01
        );

      element.animation = tl;
    });

    menuLinks.bind("mouseenter", function () {
      if (!isLeaveing && !this.animation.isActive()) {
        this.animation.restart();
      }
    });
  }

  tagSelector.find("li a").click(function () {
    let page = $(this).closest(".sub-menu").attr("data-page"),
      id = $(this).attr("data-id");

    if (page) {
      scroll.scrollTo("#fixed-bar", {
        duration: 400,
        offset: 2,
      });

      TweenMax.to("#getContent", {
        autoAlpha: 0,
        ease: Power3.easeOut,
        onComplete: function () {
          $.ajax({
            type: "POST",
            url: page + "?id=" + id,
            success: function (data) {
              $("#getContent").html(data);

              var preloadIMGSrc = $("#getContent").find(".preloadIMG");

              init();

              appendImgs();

              function init() {
                if (scroll) {
                  scroll.update();
                }

                TweenMax.to("#getContent", {
                  autoAlpha: 1,
                  ease: Power3.easeOut,
                });
              }
            },
          });
        },
      });
    }
  });

  canAnimateMS = true;

  $(".mstones_content ul li").click(function () {
    if (!$(this).hasClass("active") && canAnimateMS) {
      canAnimateMS = false;

      var tl = new TimelineMax();

      let $this = $(this),
        id = $this.attr("data-id"),
        title = $this.attr("data-title"),
        h1 = $(".mstones_content h1"),
        titleWrap = $(".team_text .f_14"),
        textWrap = $(".team_text .f_20"),
        text = $this.attr("data-text");

      var headSplit,
        headTarget,
        titleSplit = new SplitText(titleWrap, {
          type: "words",
          wordsClass: "SplitClass",
        }),
        paraSplit = new SplitText(textWrap, {
          type: "lines",
          linesClass: "SplitClass",
        });

      if (pageLang == "en") {
        headSplit = new SplitText(h1, {
          type: "chars",
          charsClass: "SplitClass",
        });
        headTarget = headSplit.chars;
      } else {
        headSplit = new SplitText(h1, {
          type: "words",
          wordsClass: "SplitClass",
        });
        headTarget = headSplit.words;
      }

      $(".mstones_content ul li").removeClass("active");

      $this.addClass("active");

      tl.staggerFromTo(
        ".mstones_images.active .mstones_img",
        0.5,
        { y: 0, autoAlpha: 1 },
        { y: -50, autoAlpha: 0, ease: Power3.easeIn },
        0.05,
        0
      )

        .set(
          headTarget,
          { transformOrigin: "center center " + tOval + "px" },
          0
        )

        .staggerTo(
          headTarget,
          0.5,
          { rotationX: 90, autoAlpha: 0, ease: Power3.easeIn },
          0.05,
          0.1
        )

        .staggerTo(
          titleSplit.words,
          0.5,
          { y: -20, autoAlpha: 0, ease: Power3.easeIn },
          0.01,
          0
        )

        .staggerTo(
          paraSplit.lines,
          0.5,
          { y: -20, autoAlpha: 0, ease: Power3.easeIn },
          0.05,
          0
        )

        .call(function () {
          let newM = $(".mstones_images#" + id);

          $(".mstones_images").removeClass("active");

          newM.addClass("active");

          h1.html(id);

          titleWrap.html(title);

          textWrap.html(text);

          if (pageLang == "en") {
            headSplit = new SplitText(h1, {
              type: "chars",
              charsClass: "SplitClass",
            });
            headTarget = headSplit.chars;
          } else {
            headSplit = new SplitText(h1, {
              type: "words",
              wordsClass: "SplitClass",
            });
            headTarget = headSplit.words;
          }
          titleSplit = new SplitText(titleWrap, {
            type: "words",
            wordsClass: "SplitClass",
          });
          paraSplit = new SplitText(textWrap, {
            type: "lines",
            linesClass: "SplitClass",
          });

          tl.kill();

          tl = new TimelineMax();

          tl.set(
            headTarget,
            { transformOrigin: "center center " + tOval + "px" },
            0
          )

            .staggerFrom(
              titleSplit.words,
              1,
              { y: 20, autoAlpha: 0, ease: Power3.easeOut },
              0.05,
              0
            )

            .staggerFrom(
              headTarget,
              1,
              { rotationX: -90, autoAlpha: 0, ease: Power3.easeOut },
              0.05,
              0.1
            )

            .staggerFrom(
              paraSplit.lines,
              1,
              { y: 20, autoAlpha: 0, ease: Power3.easeOut },
              0.1,
              0.5
            )

            .staggerFromTo(
              newM.find(".mstones_img"),
              1,
              { y: 100, autoAlpha: 0 },
              { y: 0, autoAlpha: 1, ease: Power3.easeOut },
              0.05,
              0
            )

            .call(function () {
              headSplit.revert();
              titleSplit.revert();
              paraSplit.revert();

              canAnimateMS = true;
            });
        });
    }
  });
}

function appendImgs() {
  var appendBGs = $("body").find(".load_bg"),
    appendIMGs = $("body").find(".load_img");

  appendIMGs.each(function (i) {
    var t = $(this),
      s = t.attr("data-src");

    t.removeAttr("data-src").attr("src", s).removeClass("load_img");

    $('<img crossorigin="anonymous" src="' + s + '">').on("load", function () {
      clearTimeout($.data(this, "imgsTimer"));

      $.data(
        this,
        "imgsTimer",
        setTimeout(function () {
          if (scroll) {
            scroll.update();
          }

          if (articleColWrap.length != 0) {
            if (articleCarousel) {
              articleColWrap.each(function (i) {
                articleCarousel[i].flickity("resize");
              });
            }
          }
        }, 400)
      );
    });
  });

  appendBGs.each(function (i) {
    var t = $(this),
      s = t.attr("data-src");

    t.removeAttr("data-src")
      .css({ "background-image": "url(" + s + ")" })
      .removeClass("load_bg");
  });

  if ($(".table_set.has_cards").length != 0) {
    tablesJS();
  }

  if ($(".row_logo_set").length != 0) {
    var isHover = true;

    $(".table_set:not(.has_cards)")
      .mouseenter(function () {
        isHover = true;
      })
      .mouseleave(function () {
        isHover = false;
      });

    $(document).on("mousemove touchstart touchmove", function (e) {
      var getX = e.clientX,
        getY = e.clientY;

      if (isMobile) {
        if (e.touches) {
          getX = e.touches[0].clientX;
          getY = e.touches[0].clientY;
        }
      }

      let plus = $(".row_logo_set");

      if (plus.length != 0 && isHover) {
        plus.each(function () {
          let $this = $(this);
          wrap = $this.closest(".table_row");

          let plusBounds = {
              w: $this.innerWidth() / 2,
              h: $this.innerHeight() / 2,
              x: $this.position().left,
              y: $this.position().top,
            },
            getMouse = {
              x: getX - wrap.offset().left,
              y: getY - wrap.offset().top,
            };

          TweenMax.to($this.find(".row_logo_an"), 0.3, {
            x: getMouse.x - plusBounds.w - plusBounds.x,
            y: getMouse.y - plusBounds.h - plusBounds.y,
          });
        });
      }
    });
  }

  var isSearch = false,
    searchTL = new TimelineMax({ paused: true });

  searchTL
    .to(".search_wrap", 0.5, { autoAlpha: 1, ease: Power3.easeInOut }, 0)

    .staggerFromTo(
      ".search_wrap ._el",
      0.5,
      { x: 100, autoAlpha: 0 },
      { x: 0, autoAlpha: 1, ease: Power3.easeOut },
      0.1,
      0.5
    );

  $(document).on("click", ".search-btn", function (e) {
    if (!isSearch) {
      isSearch = true;

      searchTL.play();

      return false;
    }
  });

  $(document).on("click", "#search_close", function (e) {
    if (isSearch) {
      isSearch = false;

      searchTL.reverse();
    }
  });

  $(".inner_circle_set").click(function () {
    isLeaveing = true;

    $(".site_loader").show();

    loaderTL.kill();

    loaderTL = new TimelineMax();

    loaderTL

      .to(".site_loader", 0.5, { autoAlpha: 1, ease: Power3.easeIn }, 0)

      .call(function () {
        $("#form_search").submit();
      });
  });

  var articleColWrap = $(".cs_set"),
    articleCarousel = [];

  if (articleColWrap.length != 0) {
    articleColWrap.each(function (i) {
      let $this = $(this),
        arrowNext = $this.closest("section").find(".next"),
        arrowPrev = $this.closest("section").find(".prev");

      articleCarousel[i] = $this.flickity({
        percentPosition: false,
        prevNextButtons: false,
        contain: true,
        accessibility: false,
        pageDots: false,
        groupCells: true,
        selectedAttraction: 0.2,
        friction: 1,
        rightToLeft: pageLang == "ar" ? true : false,
      });

      arrowNext.on("click", function () {
        articleCarousel[i].flickity("next", true);
      });

      arrowPrev.on("click", function () {
        articleCarousel[i].flickity("previous", true);
      });
    });
  }

  if ($("#scratch").length != 0) {
    var canvas = document.getElementById("js-canvas"),
      canvasWidth = canvas.width,
      canvasHeight = canvas.height,
      ctx = canvas.getContext("2d"),
      image = new Image(),
      brush = new Image(),
      isDrawing,
      lastPoint;

    brush.src =
      "data:image/png;base64,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";
    image.src =
      "data:image/png;base64,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";

    image.onload = function () {
      ctx.drawImage(image, 0, 0);
    };

    canvas.addEventListener("mousedown", handleMouseDown, false);
    canvas.addEventListener("touchstart", handleMouseDown, false);
    canvas.addEventListener("mousemove", handleMouseMove, false);
    canvas.addEventListener("touchmove", handleMouseMove, false);
    canvas.addEventListener("mouseup", handleMouseUp, false);
    canvas.addEventListener("touchend", handleMouseUp, false);

    function distanceBetween(point1, point2) {
      return Math.sqrt(
        Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2)
      );
    }

    function angleBetween(point1, point2) {
      return Math.atan2(point2.x - point1.x, point2.y - point1.y);
    }

    function getFilledInPixels(stride) {
      if (!stride || stride < 1) {
        stride = 1;
      }

      var pixels = ctx.getImageData(0, 0, canvasWidth, canvasHeight),
        pdata = pixels.data,
        l = pdata.length,
        total = l / stride,
        count = 0;

      for (var i = (count = 0); i < l; i += stride) {
        if (parseInt(pdata[i]) === 0) {
          count++;
        }
      }

      return Math.round((count / total) * 100);
    }

    function getMouse(e, canvas) {
      var offsetX = 0,
        offsetY = 0,
        mx,
        my;

      if (canvas.offsetParent !== undefined) {
        do {
          offsetX += canvas.offsetLeft;
          offsetY += canvas.offsetTop;
        } while ((canvas = canvas.offsetParent));
      }

      mx = (e.pageX || e.touches[0].clientX) - offsetX;
      my = (e.pageY || e.touches[0].clientY) - offsetY + scrollVal;

      return { x: mx, y: my };
    }

    function handlePercentage(filledInPixels) {
      filledInPixels = filledInPixels || 0;
      if (filledInPixels >= 80) {
        isDrawing = false;
        TweenMax.to(".canvas", 0.5, {
          autoAlpha: 0,
          ease: Power3.easeOut,
          onComplete: function () {
            canvas.parentNode.removeChild(canvas);
          },
        });
      }
    }

    function handleMouseDown(e) {
      isDrawing = true;
      lastPoint = getMouse(e, canvas);
      if ($(".scratch_tip").length != 0) {
        TweenMax.to(".scratch_tip", 1, {
          autoAlpha: 0,
          ease: Power3.easeOut,
          onComplete: function () {
            $(".scratch_tip").remove();
          },
        });
      }
    }

    function handleMouseMove(e) {
      if (!isDrawing) {
        return;
      }

      e.preventDefault();

      var currentPoint = getMouse(e, canvas),
        dist = distanceBetween(lastPoint, currentPoint),
        angle = angleBetween(lastPoint, currentPoint),
        x,
        y;

      for (var i = 0; i < dist; i++) {
        x = lastPoint.x + Math.sin(angle) * i - 25;
        y = lastPoint.y + Math.cos(angle) * i - 25;
        ctx.globalCompositeOperation = "destination-out";
        ctx.drawImage(brush, x, y);
      }

      lastPoint = currentPoint;
      handlePercentage(getFilledInPixels(32));
    }

    function handleMouseUp(e) {
      isDrawing = false;
    }
  }
}

var imgTL,
  cardIMG,
  cardActive,
  firstTime = false,
  notFirstTime = true,
  oldID,
  oldIMG;

function tablesJS() {
  if (!isMobile) {
    $(document).mousemove(function (e) {
      curX = e.pageX;
      curY = e.pageY;
      animateCard();
    });

    $(".table_row").each(function (i) {
      let img = $(this).attr("data-img");

      $(this).attr("data-id", i);

      $(".table_set").append('<div class="image" id="' + i + '"><i></i></div>');

      $(".image")
        .eq(i)
        .find("i")
        .css({ "background-image": "url(" + img + ")" });

      if (i == 0) {
        $(".image").eq(i).addClass("active");
      }
    });

    $(".image").wrapAll('<div class="images"></div>');

    cardIMG = $(".image");
    cardActive = $(".image.active");

    oldIMG = $(".table_row").eq(0).attr("data-img");

    $(".table_row")
      .mouseenter(function () {
        let id = $(this).attr("data-id"),
          img = $(this).attr("data-img");

        $(".table_row").removeClass("selected");

        $(this).addClass("selected");

        $(".table_row").each(function (i) {
          if (!$(this).hasClass("selected")) {
            let img = $(this).attr("data-img");

            $(".image")
              .eq(i)
              .find("i")
              .css({ "background-image": "url(" + img + ")" });
          }
        });

        $(".image")
          .eq(id)
          .find("i")
          .css({ "background-image": "url(" + oldIMG + ")" });

        $(".image").removeClass("old");

        if ($(".image").eq(oldID).hasClass("active")) {
          $(".image").eq(oldID).addClass("old");

          oldID = id;

          oldIMG = img;

          firstTime = false;
        }

        cardActive.find("i").css({ "background-image": "url(" + img + ")" });
      })
      .click(function () {
        $(this).addClass("hover");
      });

    $(".table_set")
      .mousemove(function () {
        TweenMax.to(cardIMG, 0.6, { autoAlpha: 1, ease: Power3.easeOut });
      })
      .mouseleave(function () {
        if (!isLeaveing) {
          TweenMax.to(cardIMG, 0.6, {
            autoAlpha: 0,
            ease: Power3.easeOut,
            delay: 0.2,
          });
        }
      });
  } else {
    $(".table_row").each(function (i) {
      let img = $(this).attr("data-img");

      $(this).attr("data-id", i);

      $(this)
        .find(".table_col:first-child")
        .prepend('<div class="col_image"><i class="full_bg"></i></div>');

      $(this)
        .find(".col_image")
        .find("i")
        .css({ "background-image": "url(" + img + ")" });
    });
  }
}

function animateCard() {
  var cardWidth = cardIMG.innerWidth(),
    cardHeight = cardIMG.innerHeight(),
    ofY;

  $(".table_row.selected").length != 0
    ? (ofY = $(".table_row.selected").offset().top)
    : (ofY = 0);

  let xPos = curX - cardWidth / 2,
    yPos = curY - cardHeight / 2 + scrollVal,
    imgX =
      (curX - $(".table_set").offset().left - width / 2 + cardWidth / 2) * -0.2,
    imgY = (curY - ofY - height / 2 + cardHeight / 2) * -0.4;

  var cardIMGActive = $(".image.active"),
    cardIMGNotActive = $(".image:not(.active)");

  TweenMax.to(cardIMGActive, 0.3, { x: xPos, y: yPos, ease: Power3.easeOut });

  if (firstTime) {
    TweenMax.to(cardIMGActive.find("i"), 0.3, {
      x: imgX,
      y: imgY,
      ease: Power3.easeOut,
      onComplete: function () {
        notFirstTime = true;
      },
    });
  } else {
    if (notFirstTime) {
      TweenMax.set(cardIMGActive.find("i"), { x: imgX, y: imgY });
    }
  }

  TweenMax.staggerTo(cardIMGNotActive, 0.5, {
    x: xPos,
    y: yPos,
    ease: Power3.easeOut,
    delay: function (index, target) {
      return -target.id * 0.001;
    },
  });
}
function webGL() {
  if ($("#container").length == 0) {
    $("main").prepend('<div id="container"></div>');

    Sketch = {
      init: function (options) {
        this.mesh;
        this.created = false;
        this.time = 0;
        this.RF;
        this.container = options.dom;
        this.scene = new THREE.Scene();
        this.clock = new THREE.Clock();

        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;

        this.camera = new THREE.PerspectiveCamera(
          70,
          this.width / this.height,
          100,
          2000
        );
        this.camera.position.z = 600;
        this.camera.lookAt(this.scene.position);
        this.camera.fov =
          2 * Math.atan(this.height / 2 / 600) * (180 / Math.PI);

        this.renderer = new THREE.WebGLRenderer({
          antialias: true,
          alpha: true,
        });
        if (!isSafari) {
          this.renderer.setPixelRatio(window.devicePixelRatio);
        }
        this.container.appendChild(this.renderer.domElement);
        this.images = [...document.querySelectorAll(".preloadIMG")];

        const preloadImages = new Promise((resolve, reject) => {
          imagesLoaded(
            document.querySelectorAll(".preloadIMG"),
            { background: true },
            resolve
          );
        });

        let allDone = [preloadImages];
        this.currentScroll = 0;
        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();

        Promise.all(allDone).then(() => {
          this.addImages();
          this.resize();
          this.setupResize();
          this.setPosition();
          this.render();
        });
      },

      setupResize: function () {
        window.addEventListener("resize", this.resize.bind(this));
      },

      resize: function () {
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;
        this.renderer.setSize(this.width, this.height);
        this.camera.aspect = this.width / this.height;
        this.camera.updateProjectionMatrix();
      },

      addImages: function () {
        this.material = new THREE.ShaderMaterial({
          uniforms: {
            uTime: { value: 0 },
            uTexture: { value: 0 },
            percent: { value: 1 },
            uMousePosition: {
              value: new THREE.Vector2(0, 0),
            },
            uResolution: {
              value: new THREE.Vector2(
                window.devicePixelRatio * 2,
                window.devicePixelRatio * 1
              ),
            },
            uMouseMoveStrength: { value: 0 },
          },
          vertexShader: `
						uniform vec2 uResolution;
						uniform vec2 uMousePosition;
						uniform float uTime;
						uniform float uMouseMoveStrength;

						varying vec2 vUv;
						varying vec3 vVertexPosition;


						void main() {
							vUv = uv;
							vec3 vertexPosition = position;

							float resolution = uResolution.x / uResolution.y;
							float distanceFromMouse = distance(uMousePosition, vec2(vertexPosition.x * resolution, vertexPosition.y));

							float waveSinusoid = cos(5. * (distanceFromMouse - uTime));

							float distanceStrength = (0.4 / (distanceFromMouse + 0.4));

							float distortionEffect = distanceStrength * waveSinusoid * uMouseMoveStrength;

							vertexPosition.z += distortionEffect / 15.0;
							vertexPosition.x += distortionEffect / 15.0 * (uMousePosition.x - vertexPosition.x);
							vertexPosition.y += distortionEffect / 15.0 * (uMousePosition.y - vertexPosition.y);

							gl_Position = projectionMatrix * modelViewMatrix * vec4( vertexPosition, 1.0 );

							vVertexPosition = vertexPosition;
						}
					`,
          fragmentShader: `
						uniform sampler2D uTexture;
						uniform float percent;

						varying vec2 vUv;
						varying vec3 vVertexPosition;

						void main() {
							vec4 color = texture2D(uTexture,vUv);
							color.rgb -= clamp(-vVertexPosition.z, 0.0, 1.0);

							color.rgb += clamp(vVertexPosition.z, 0.0, 1.0);

							color = vec4(color.rgb * color.a, percent);
							
							gl_FragColor = color;
						}
					`,
          transparent: true,
        });
        this.materials = [];

        this.imageStore = this.images.map((img) => {
          let bounds = img.getBoundingClientRect();

          let geometry = new THREE.PlaneBufferGeometry(1, 1, 10, 10);
          let texture = new THREE.Texture(img);
          texture.needsUpdate = true;

          let material = this.material.clone();
          material.needsUpdate = true;

          this.materials.push(material);

          material.uniforms.uTexture.value = texture;
          material.uniforms.uResolution.value.x =
            window.devicePixelRatio * bounds.width;
          material.uniforms.uResolution.value.y =
            window.devicePixelRatio * bounds.height;

          this.mesh = new THREE.Mesh(geometry, material);

          this.scene.add(this.mesh);

          return {
            img: img,
            mesh: this.mesh,
            top: bounds.top,
            left: bounds.left,
            width: bounds.width,
            height: bounds.height,
          };
        });
      },

      setPosition: function (val) {
        if (this.imageStore) {
          this.imageStore.forEach((o) => {
            o.img.crossOrigin = "anonymous";
            let bounds = o.img.getBoundingClientRect();
            o.mesh.scale.set(bounds.width, bounds.height, 1);
            o.mesh.position.y =
              val * 2 + (-bounds.top + this.height / 2 - bounds.height / 2);
            o.mesh.position.x = bounds.left - this.width / 2 + bounds.width / 2;
            if ($(".list").length != 0) {
              if (o.img.parentNode.classList.contains("active")) {
                TweenMax.to(o.mesh.material.uniforms.percent, 1, {
                  value: 1,
                  ease: Power3.easeOut,
                });
              } else {
                TweenMax.to(o.mesh.material.uniforms.percent, 1, {
                  value: 0.3,
                  ease: Power3.easeOut,
                });
              }
            }
            if (o.img.parentNode.classList.contains("cover_image")) {
              TweenMax.to(o.mesh.material.uniforms.percent, 1, {
                value: 0.8,
                ease: Power3.easeOut,
              });
            }
          });
        }
      },

      render: function () {
        this.time = (this.time ? this.time : 0) + this.clock.getDelta();

        if (this.materials) {
          this.materials.forEach((m) => {
            m.uniforms.uTime.value = this.time;
          });
        }

        this.renderer.render(this.scene, this.camera);

        if (isFocus) {
          this.RF = requestAnimationFrame(this.render.bind(this));
        } else {
          isRender = false;

          window.cancelAnimationFrame(this.RF);
        }
      },
    };
  }

  Sketch.init({ dom: document.getElementById("container") });
}

$(document).ready(function () {
  var open = false;
  $(".share_circ").on("click", function () {
    if (open === false) {
      // $(this).animate(
      //   {
      //     height: "+=10px",
      //     width: "+=10px",
      //   },
      //   300
      // );

      $(".outer-icons").addClass("active");
      // $(".icon").fadeOut();
      // $(this).html("<i class = 'icon fa fa-times' style='display: none'> </i>");
      // $(".icon").fadeIn();

      open = true;
    } else {
      // $(this).animate(
      //   {
      //     height: "-=10px",
      //     width: "-=10px",
      //   },
      //   200
      // );

      // $(".outer-icons").animate(
      //   {
      //     opacity: 0,
      //   },
      //   300
      // );

      $(".outer-icons").removeClass("active");

      $(".icon").fadeOut();
      // $(this).html("<i class = 'icon fa fa-bars' style='display: none'> </i>");
      $(".icon").fadeIn();

      open = false;
    }
  });
});
