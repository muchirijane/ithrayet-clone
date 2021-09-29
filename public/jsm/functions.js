var audioPrefMute = localStorage.getItem("audio_pref");
var musicAccept = localStorage.getItem("music_accept");
if (musicAccept) {
  $(".music_tip").css({ display: "none" });
}
var page = $("body").attr("id"),
  pageLang = $("html").attr("lang"),
  animCircle = $(".animated_circle"),
  width = window.innerWidth,
  height = window.innerHeight,
  activeSection = 0,
  LoadingPerc = 0,
  totalScripts = 0,
  oldSection = 0,
  startAnimation = false,
  isPageLoaded = false,
  canHover = true,
  isFirstMove = false,
  isCircle = false,
  isViewBtn = false,
  isArrow = false,
  isSiteReady = false,
  audio,
  isAudio = false,
  isMuted = audioPrefMute ? true : false,
  isMusicAccepted = musicAccept ? true : false,
  isMenu = false,
  isFired = false,
  menuScroll = false,
  canScroll = false,
  isMouseOutCircle = false,
  canAnimate = false,
  isSearch = false,
  isFocus = true,
  stopped = false,
  curTL,
  cont = { val: 0 },
  preloadPictures,
  loaderTL,
  menuTL,
  $carousel,
  splitA,
  splitB,
  splitC,
  splitD,
  siteIntrvl,
  cursor,
  curX,
  curY,
  foucsTO,
  loadingIntrvl,
  vh,
  isMobile,
  isSafari,
  cerchio;

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

    var siteIMGS = [];

    $(".preloadIMG").each(function () {
      var img = $(this).attr("data-img");

      siteIMGS.push(img);
    });

    siteIntrvl = setInterval(function () {
      if (isPageLoaded) {
        clearInterval(siteIntrvl);

        $(".equalizer").addClass("muted");

        music();

        window.onblur = function () {
          if (foucsTO) {
            clearTimeout(foucsTO);
          }

          foucsTO = setTimeout(function () {
            isFocus = false;
          }, 250);

          if (isAudio && !isMuted) {
            audio.pause();
          }
        };

        window.onfocus = function () {
          if (foucsTO) {
            clearTimeout(foucsTO);
          }

          isFocus = true;

          if (isAudio && !isMuted) {
            audio.play();
          }
        };

        $.cachedScript("/jsm/three.min.js").done(function (script, textStatus) {
          $("head").append(
            $('<link rel="stylesheet" type="text/css"/>').attr(
              "href",
              "/css/" + pageLang + ".css"
            )
          );

          $("head").append(
            $('<link rel="stylesheet" type="text/css"/>').attr(
              "href",
              "/css/main.css"
            )
          );

          totalScripts += 1;

          $.cachedScript("/jsm/vendor.js").done(function (script, textStatus) {
            totalScripts += 1;

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
                  { scale: 1, autoAlpha: 1, ease: Back.easeInOut },
                  0
                )

                .to(
                  ".cur strong",
                  0.5,
                  { autoAlpha: 1, ease: Power3.easeInOut },
                  0
                );

              curTL2.to(".cur", 0.3, { scale: 2, ease: Power3.easeInOut });

              $("._curTL1")
                .mouseenter(function () {
                  curTL1.play();
                })
                .mouseleave(function () {
                  curTL1.reverse();
                });

              $("._curTL2")
                .mouseenter(function () {
                  if (!$(this).hasClass("active")) {
                    curTL2.play();
                  }
                })
                .mouseleave(function () {
                  curTL2.reverse();
                });

              $(window).on("mousemove", function (e) {
                var x = e.clientX;
                var y = e.clientY;

                if (!isFirstMove) {
                  isFirstMove = true;

                  TweenMax.to(".cur", 1, {
                    autoAlpha: 1,
                    ease: Power3.easeOut,
                  });
                }

                TweenMax.to(".cur", 0.4, {
                  x: x - 8,
                  y: y - 8,
                  ease: Power3.easeOut,
                });
              });
            }

            TweenMax.to("._show", 1, { autoAlpha: 1, ease: Power3.easeOut });

            globalFunc();

            $(".loader_bg").each(function (i) {
              var t = $(this),
                s = t.attr("data-src");

              t.css({ "background-image": "url(" + s + ")" });
            });

            if (isMusicAccepted && totalScripts == 2) {
              runLoader();
            }
          });
        });

        $("body").click(function () {
          if (!isMusicAccepted && totalScripts == 2) {
            isMusicAccepted = true;
            localStorage.setItem("music_accept", true);
            runLoader();
          }
        });
      }
    }, 50);
    function runLoader() {
      $(".equalizer").removeClass("muted");

      audio.play();

      isMuted = false;

      isAudio = true;

      var loaderImgsTL = new TimelineMax({ repeat: -1 }),
        loaderVal = { count: 0 },
        shapesTL = new TimelineMax({ paused: true, repeat: -1 }),
        totalIMGs = $(".loader_bg").length - 1,
        activeIMG = 0;

      loaderTL = new TimelineMax();

      loaderImgsTL
        .call(function () {
          activeIMG != totalIMGs
            ? (activeIMG = activeIMG + 1)
            : (activeIMG = 0);

          $(".loader_bg").removeClass("active");

          $(".loader_bg").eq(activeIMG).addClass("active");

          loaderVal = { count: 0 };
        })

        .to(loaderVal.count, 2, { val: 1 });

      shapesTL.to(".loader_shapes", 5, {
        rotate: 360,
        ease: Power0.easeNone,
      });

      loaderTL
        .to(
          ".music_tip",
          0.5,
          { autoAlpha: 0, scale: 0.9, ease: Power3.easeIn },
          0
        )

        .to(".equalizer", 0.5, { autoAlpha: 1, ease: Power3.easeOut }, 0)

        .call(function () {
          $(".music_tip").remove();

          shapesTL.play();
        })

        .to(".loader_wrap", 0.5, { autoAlpha: 1, ease: Power3.easeOut }, 0)

        .staggerFrom(
          "._ele",
          1,
          { scale: 1.2, autoAlpha: 0, ease: Back.easeOut },
          0.1,
          0.5
        )

        .call(function () {
          preloadPictures(siteIMGS, function (e, i) {
            loadingIntrvl = setInterval(function () {
              if (LoadingPerc == 1) {
                clearInterval(loadingIntrvl);

                shapesTL.pause();

                loaderImgsTL.pause();

                var theArray = [
                  31, 58, 88, 121, 148, 178, 208, 238, 273, 300, 331, 0,
                ];
                var shapesArray = [8, 7, 6, 5, 4, 3, 2, 1, 0, 11, 10, 9];

                var goal = calculateAngle(
                  document.querySelector(".loader_shapes")
                );
                var closest = null;

                TweenMax.to(".loader_select", 1, {
                  scaleY: 1,
                  ease: Power3.easeOut,
                });

                loaderTL
                  .to(".loader_shapes", 1, {
                    rotate: getVal(theArray, goal),
                    ease: Power3.easeOut,
                  })

                  .call(function () {
                    appendImgs();

                    isFired = true;

                    homeFunction();

                    TweenMax.to(".ld_tube, .ld_perc", 1, {
                      autoAlpha: 0,
                      ease: Power3.easeOut,
                    });
                  })

                  .staggerTo(
                    "._ele",
                    1,
                    { scale: 0.8, autoAlpha: 0, ease: Back.easeInOut },
                    0.2
                  )

                  .call(function () {
                    $(".loader").remove();

                    var fireTL = new TimelineMax();

                    splitA = new SplitText(".main_heading h3", {
                      type: "lines",
                      wordsClass: "SplitClass",
                    });
                    splitB = new SplitText(".main_heading p", {
                      type: "lines",
                      wordsClass: "SplitClass",
                    });

                    $("#main").addClass("active");

                    fireTL
                      .staggerFromTo(
                        [splitB.lines, splitA.lines],
                        1,
                        { y: 120, autoAlpha: 0 },
                        { y: 0, autoAlpha: 1, ease: Power3.easeOut },
                        0.1,
                        0
                      )

                      .staggerFrom(
                        "article",
                        1,
                        {
                          y: function (index, target) {
                            return height + target.offsetTop + 200;
                          },
                          ease: Power3.easeOut,
                        },
                        0.05,
                        0.5
                      )

                      .call(function () {
                        $("#main").addClass("ready progress");

                        $("article").removeAttr("style");

                        startAnimation = true;
                      });
                  });

                $(
                  "#shape-" +
                    shapesArray[theArray.indexOf(getVal(theArray, goal))]
                ).addClass("active");
              }
            }, 10);
          });
        });
    }
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
}
var waitForFinalEvent = (function () {
  var timers = {};
  return function (callback, ms, uniqueId) {
    if (!uniqueId) {
      uniqueId = "Don't call this twice without a uniqueId";
    }
    if (timers[uniqueId]) {
      clearTimeout(timers[uniqueId]);
    }
    timers[uniqueId] = setTimeout(callback, ms);
  };
})();

jQuery.cachedScript = function (url, options) {
  options = $.extend(options || {}, {
    dataType: "script",
    cache: true,
    url: url,
  });

  return jQuery.ajax(options);
};

preloadPictures = function (pictureUrls, callback) {
  var i,
    j,
    loaded = 0;

  for (i = 0, j = pictureUrls.length; i < j; i++) {
    (function (img, src) {
      img.crossOrigin = "";
      img.onload = function () {
        if (++loaded == pictureUrls.length && callback) {
          callback();
        } else {
          if (!isFired) {
            LoadingPerc = (loaded + 1) / pictureUrls.length;

            TweenMax.to(cont, 0.3, {
              val: LoadingPerc * 100,
              roundProps: "val",
              onUpdate: function () {
                $(".ld_perc").html(cont.val + "%");
              },
            });

            TweenMax.to(".ld_tube i.vert", 0.5, {
              scaleY: LoadingPerc,
              ease: Power0.easeNone,
            });
            TweenMax.to(".ld_tube i.hori", 0.5, {
              scaleX: LoadingPerc,
              ease: Power0.easeNone,
            });
          }
        }
      };

      if (!isFired) {
        $("article").each(function (i) {
          var title = $(this).attr("data-title"),
            img = $(this).attr("data-img");

          if (img) {
            $(this)
              .find("i")
              .append(
                '<img crossorigin="anonymous" src="' +
                  img +
                  '" alt="' +
                  title +
                  '">'
              );

            $(this).removeAttr("data-img");
          }
        });
      }

      img.src = src;

      img.onerror = function () {
        console.log("Images Loading Error");
      };
    })(new Image(), pictureUrls[i]);
  }
};

function getVal(array, val, dir) {
  for (var i = 0; i < array.length; i++) {
    if (dir == true) {
      if (array[i] > val) {
        return array[i - 1] || 0;
      }
    } else {
      if (array[i] >= val) {
        return array[i];
      }
    }
  }
}

function calculateAngle(element) {
  var tr = window
      .getComputedStyle(element, null)
      .getPropertyValue("-webkit-transform"),
    values = tr.split("(")[1],
    values = values.split(")")[0],
    values = values.split(","),
    a = values[0],
    b = values[1],
    c = values[2],
    d = values[3],
    radians = Math.atan2(b, a);
  if (radians < 0) {
    radians += 2 * Math.PI;
  }
  return Math.round(radians * (180 / Math.PI));
}

function homeFunction() {
  // Section 1
  var mHeadTL, articlesIntrvl;

  class Sketch {
    constructor(options) {
      this.mesh;
      this.created = false;
      this.time = 0;
      this.container = options.dom;
      this.scene = new THREE.Scene();

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

      this.camera.fov = 2 * Math.atan(this.height / 2 / 600) * (180 / Math.PI);

      this.renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      this.renderer.setPixelRatio(window.devicePixelRatio);

      this.container.appendChild(this.renderer.domElement);
      this.images = [...document.querySelectorAll(".article_content img")];

      const preloadImages = new Promise((resolve, reject) => {
        imagesLoaded(
          document.querySelectorAll(".article_content img"),
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
        this.setPosition();

        this.mouseMovement();
        this.resize();
        this.setupResize();
        this.render();
      });
    }

    mouseMovement() {
      window.addEventListener(
        "mousemove",
        (event) => {
          this.mouse.x = (event.clientX / this.width) * 2 - 1;
          this.mouse.y = -(event.clientY / this.height) * 2 + 1;

          let posX = (event.clientX - window.innerWidth / 2) * -0.1;
          let posY = (event.clientY - window.innerHeight / 2) * -0.1;

          var centerX = window.innerWidth * 0.5;
          var centerY = window.innerHeight * 0.5;

          if (canAnimate) {
            this.camera.position.x = (event.clientX - centerX) * -0.1;
            this.camera.position.y = (event.clientY - centerY) * 0.1;

            this.camera.lookAt(this.scene.position);
          }

          this.raycaster.setFromCamera(this.mouse, this.camera);

          const intersects = this.raycaster.intersectObjects(
            this.scene.children
          );

          if (intersects.length > 0) {
            let obj = intersects[0].object;
          }
        },
        false
      );
    }

    setupResize() {
      window.addEventListener("resize", this.resize.bind(this));
    }

    resize() {
      this.width = this.container.offsetWidth;
      this.height = this.container.offsetHeight;
      this.renderer.setSize(this.width, this.height);
      this.camera.aspect = this.width / this.height;
      this.camera.updateProjectionMatrix();
    }

    addImages() {
      this.material = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          percent: { value: 1 },
          uImage: { value: 0 },
          hover: { value: new THREE.Vector2(0.5, 0.5) },
          hoverState: { value: 0 },
        },
        side: THREE.DoubleSide,
        fragmentShader: document.getElementById("fragment").textContent,
        vertexShader: document.getElementById("vertex").textContent,
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

        img.addEventListener("mouseenter", () => {
          if (canAnimate) {
            TweenMax.to(material.uniforms.hoverState, 1, {
              value: 0.5,
              ease: Power3.easeOut,
            });
            TweenMax.to(material.uniforms.percent, 1, {
              value: 0.9,
              ease: Power3.easeOut,
            });
          }
        });

        img.addEventListener("mouseout", () => {
          if (canAnimate) {
            TweenMax.to(material.uniforms.hoverState, 1, {
              value: 0,
              ease: Power3.easeOut,
            });
            TweenMax.to(material.uniforms.percent, 1, {
              value: 0.3,
              ease: Power3.easeOut,
            });
          }
        });

        this.materials.push(material);

        material.uniforms.uImage.value = texture;

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
    }

    setPosition() {
      this.imageStore.forEach((o) => {
        let bounds = o.img.closest("i").getBoundingClientRect();
        o.mesh.scale.set(bounds.width, bounds.height, 1);
        o.mesh.position.y = -bounds.top + this.height / 2 - bounds.height / 2;
        o.mesh.position.x = bounds.left - this.width / 2 + bounds.width / 2;
        if (!stopped) {
          o.mesh.position.z = o.img.closest("article").getAttribute("id") * 10;
        } else {
          if (
            o.mesh.position.z ==
            o.img.closest("article").getAttribute("id") * 10
          ) {
            TweenMax.to(o.mesh.position, 1, { z: 0, ease: Power3.easeInOut });
          }
        }
      });
    }

    render() {
      this.time += 0.05;
      this.setPosition();
      this.materials.forEach((m) => {
        m.uniforms.time.value = this.time;
      });

      this.renderer.render(this.scene, this.camera);
      window.requestAnimationFrame(this.render.bind(this));

      this.camera.lookAt(this.scene.position);

      if (startAnimation) {
        startAnimation = false;

        this.materials.forEach((m) => {
          TweenMax.to(m.uniforms.percent, 1, {
            value: 0.3,
            ease: Power3.easeOut,
            delay: 0.5,
          });

          TweenMax.to(m.uniforms.hoverState, 1, {
            onStart: function () {
              stopped = true;
            },
            value: 0.5,
            ease: Power3.easeIn,
            onComplete: function () {
              TweenMax.to(m.uniforms.hoverState, 1, {
                value: 0,
                ease: Power3.easeOut,
              });

              $("body").addClass("animationEnd");

              $("#main").removeClass("progress");

              isSiteReady = true;

              setCircle("css");

              isCircle = true;

              TweenMax.to([animCircle, "._mainElement"], 1, { autoAlpha: 1 });

              canAnimate = true;

              canScroll = true;
            },
          });
        });
      }
    }
  }

  new Sketch({
    dom: document.getElementById("container"),
  });

  $("article").click(function (e) {
    if (!isMobile) {
      let getURL = $(this).attr("data-url");
      window.location.href = getURL;
    }
  });

  $("article").mouseenter(function (e) {
    var $this = $(this);

    if (!$this.hasClass("active") && canAnimate) {
      $("article").removeClass("active");

      $this.addClass("active");

      if (articlesIntrvl) {
        clearInterval(articlesIntrvl);
      }

      articlesIntrvl = setInterval(function () {
        if (canHover) {
          canHover = false;

          canScroll = false;

          clearInterval(articlesIntrvl);

          var getTitle = $this.attr("data-title"),
            getSubTitle = $this.attr("data-sub"),
            getURL;
          if (!isMobile) {
            getURL = $("#main").attr("data-url");
          } else {
            getURL = $this.attr("data-url");
          }

          $(".view_btn").attr("href", getURL);
          animCircle.attr("data-url", getURL);
          if (mHeadTL) {
            mHeadTL.kill();
          }

          mHeadTL = new TimelineMax();

          mHeadTL
            .staggerFromTo(
              [splitB.lines, splitA.lines],
              0.5,
              { y: 0, autoAlpha: 1 },
              { y: -50, autoAlpha: 0, ease: Power3.easeIn },
              0.1,
              0
            )

            .call(function () {
              $(".main_heading h3").html(getTitle);

              $(".main_heading p").html(getSubTitle);

              splitA = new SplitText(".main_heading h3", {
                type: "lines",
                wordsClass: "SplitClass",
              });

              splitB = new SplitText(".main_heading p", {
                type: "lines",
                wordsClass: "SplitClass",
              });

              TweenMax.staggerFrom(
                [splitB.lines, splitA.lines],
                1,
                { y: 100, autoAlpha: 0, ease: Power3.easeOut },
                0.1,
                function () {
                  canHover = true;

                  canScroll = true;
                }
              );
            });
        }
      }, 50);
    }
  });

  // Section 2
  var lastX = 0,
    lastY = 0,
    container = document.getElementById("drawings"),
    editionsHover = false,
    canDraw = true,
    isDrawing = false,
    newClass,
    elementDIV,
    drawTimeout,
    toAppend,
    cardTL,
    cardSelector = $(".cards span"),
    cardFaceFront = $(".cardFace.front"),
    cardFaceBack = $(".cardFace.back"),
    totalCards = cardSelector.length - 1,
    svgShape = cardSelector.eq(0).attr("data-shape"),
    prevActiveCard = totalCards,
    activeCard = -1,
    nextActiveCard = 1,
    nextCardReady = false,
    nextCardSelector,
    prevCardSelector,
    split1,
    split2,
    dirVal;

  gsap.set(".cardWrapper", { perspective: 800 });

  gsap.set(".card", {
    transformStyle: "preserve-3d",
    transformOrigin: "center",
  });

  gsap.set(cardFaceBack, { rotationY: -180 });

  if (isMobile || isSafari) {
    gsap.set([cardFaceFront, cardFaceBack], { backfaceVisibility: "hidden" });
  }

  function getCard(val, type) {
    nextCardReady = false;

    if (val == "next") {
      dirVal = 1;

      activeCard != totalCards
        ? (activeCard = activeCard + 1)
        : (activeCard = 0);
    } else {
      dirVal = -1;

      activeCard != 0
        ? (activeCard = activeCard - 1)
        : (activeCard = totalCards);
    }

    activeCard != totalCards
      ? (nextActiveCard = activeCard + 1)
      : (nextActiveCard = 0);

    activeCard != 0
      ? (prevActiveCard = activeCard - 1)
      : (prevActiveCard = totalCards);

    $(".cards span").removeClass("active").eq(activeCard).addClass("active");

    cardSelector = $(".cards span.active");
    nextCardSelector = $(".cards span").eq(nextActiveCard);
    prevCardSelector = $(".cards span").eq(prevActiveCard);

    var getTitle = cardSelector.attr("data-title"),
      getBigTitle = cardSelector.attr("data-big-title"),
      getDate = cardSelector.attr("data-date"),
      getURL = cardSelector.attr("data-url"),
      THIS_getCover = cardSelector.attr("data-cover"),
      NEXT_getCover = nextCardSelector.attr("data-cover"),
      PREV_getCover = prevCardSelector.attr("data-cover"),
      getSub1 = cardSelector.attr("data-img1"),
      getSub2 = cardSelector.attr("data-img2");

    svgShape = cardSelector.attr("data-shape");
    cardFaceBack.html(
      '<img crossorigin="anonymous" src="' +
        THIS_getCover +
        '" alt="' +
        getTitle +
        '">'
    );
    $(".ed_sub_image")
      .eq(0)
      .html(
        '<img crossorigin="anonymous" src="' +
          getSub1 +
          '" alt="' +
          getTitle +
          '">'
      );
    $(".ed_sub_image")
      .eq(1)
      .html(
        '<img crossorigin="anonymous" src="' +
          getSub2 +
          '" alt="' +
          getTitle +
          '">'
      );

    if (cardTL) {
      cardTL.kill();
    }

    cardTL = new TimelineMax();

    if (type == "css") {
      prepCard();

      fillCard();
    } else {
      split1 = new SplitText($("._fill_card"), {
        type: "words",
        wordsClass: "SplitClass",
      });
      split2 = new SplitText($(".section_head span"), {
        type: "words",
        wordsClass: "SplitClass",
      });
      cardTL

        .set(".ed_sub_images", { autoAlpha: 0 }, 0)

        .staggerTo(
          split1.words,
          0.5,
          { y: -20 * dirVal, autoAlpha: 0, ease: Power3.easeIn },
          0.08 * dirVal,
          0
        )

        .call(function () {
          fillCard();

          split1 = new SplitText($("._fill_card"), {
            type: "words",
            wordsClass: "SplitClass",
          });

          TweenMax.staggerFrom(
            split1.words,
            0.5,
            { y: 20 * dirVal, autoAlpha: 0, ease: Power3.easeOut },
            0.08 * dirVal
          );
        })
        .staggerTo(
          split2.words,
          0.5,
          { y: -20 * dirVal, autoAlpha: 0, ease: Power3.easeIn },
          0.08 * dirVal,
          0
        )
        .call(function () {
          $(".section_head span").html(getBigTitle);
          split2 = new SplitText($(".section_head span"), {
            type: "words",
            wordsClass: "SplitClass",
          });
          TweenMax.staggerFrom(
            split2.words,
            0.5,
            { y: 20 * dirVal, autoAlpha: 0, ease: Power3.easeOut },
            0.08 * dirVal
          );
        })
        .fromTo(
          ".card",
          1,
          { rotationY: 0 },
          { rotationY: -180 * dirVal, ease: Back.easeInOut },
          0
        )

        .to(
          ".card",
          0.5,
          { scale: 1.3, rotationX: 10 * (dirVal * -1), ease: Power3.easeIn },
          0
        )

        .to(".card", 0.5, { scale: 1, rotationX: 0, ease: Power3.easeOut }, 0.5)

        .call(function () {
          prepCard();

          TweenMax.set(".ed_sub_images", { autoAlpha: 1 });
        });
    }

    function prepCard() {
      cardFaceFront.html(
        '<img crossorigin="anonymous" src="' +
          THIS_getCover +
          '" alt="' +
          getTitle +
          '">'
      );

      preloadPictures(
        [NEXT_getCover, PREV_getCover, getSub1, getSub2],
        function () {
          nextCardReady = true;
        }
      );
    }

    function fillCard() {
      $(".section_label h3").html(getTitle);
      $(".section_label p").html(getDate);
      $(".view_btn").attr("href", getURL);
      $(".ed_image").attr("data-href", getURL);
    }
  }
  getCard("next", "css");

  function makeid() {
    var text = "",
      possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  $(".ed_image")
    .on("mouseenter", function (e) {
      editionsHover = true;
    })
    .on("mouseleave", function (e) {
      editionsHover = false;
    });

  // Section 3
  var groupTL,
    circTL,
    groupSelector = $(".circles_group"),
    name = $(".cr_name h3"),
    circlesSelector,
    activeGroup = 0,
    totalGroups = groupSelector.length - 1,
    arrowDir,
    lastCirc = 0,
    circSplit;

  $(".crv_circle").each(function (i, element) {
    var sign_a = $(this).find(".sign_a .stroke-an"),
      sign_b = $(this).find(".sign_b .stroke-an"),
      border = $(this).find(".crv_stroke .stroke-an");

    if (sign_a.length != 0 && sign_b.length != 0 && border.length != 0) {
      var tl = new TimelineMax({ paused: true });

      tl.staggerFromTo(
        sign_a,
        1,
        { drawSVG: "0%" },
        { drawSVG: "100%", ease: Power3.easeInOut },
        0.5,
        0
      )

        .staggerFromTo(
          sign_b,
          1,
          { drawSVG: "0%" },
          { drawSVG: "100%", ease: Power3.easeInOut },
          0.5,
          0
        )

        .fromTo(
          border,
          2,
          { drawSVG: "0%" },
          { drawSVG: "100%", ease: Power3.easeInOut },
          0
        );

      element.animation = tl;
    }
  });

  $(".crv_circle").each(function (i) {
    $(this).attr("data-index", i);
  });

  $(".crv_circle")
    .on("mousemove touchstart", function () {
      var getName = $(this).attr("data-name"),
        getURL = $(this).attr("data-url"),
        index = $(this).attr("data-index");

      if (index != lastCirc && !$("body").hasClass("progress")) {
        lastCirc = index;

        if (circTL) {
          circTL.pause().kill();
        }

        if (!circSplit) {
          circSplit = new SplitText(name, {
            type: "words",
            wordsClass: "SplitClass",
          });
        }

        $(".crv_circle").css("z-index", 9);

        $(this).css("z-index", 99);

        circTL = new TimelineMax();

        circTL
          .staggerTo(
            circSplit.words,
            0.5,
            { y: -20, autoAlpha: 0, ease: Power3.easeIn },
            0.1,
            0
          )

          .call(function () {
            name.html(getName);

            circSplit = new SplitText(name, {
              type: "words",
              wordsClass: "SplitClass",
            });

            circTL.staggerFrom(
              circSplit.words,
              0.5,
              { y: 20, autoAlpha: 0, ease: Power3.easeOut },
              0.1,
              1
            );
          });

        $(".view_btn").attr("href", getURL);
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

  // Section 5
  var flkty,
    $imgs = $(".jn_circles span");

  function parallax(progress) {
    flkty = $carousel.data("flickity");

    flkty.slides.forEach(function (slide, i) {
      var img = $imgs[i];
      var x;

      pageLang == "en"
        ? (x = ((slide.target + flkty.x) * -1) / 3)
        : (x = ((slide.target + flkty.x) * 1) / 3);

      img.style.transform = "translateX( " + x + "px)";
    });
  }

  $carousel = $(".jn_circles").flickity({
    imagesLoaded: true,
    percentPosition: false,
    prevNextButtons: false,
    contain: true,
    accessibility: false,
    pageDots: false,
    selectedAttraction: 0.2,
    friction: 1,
    groupCells: true,
    rightToLeft: pageLang == "ar" ? true : false,
    on: {
      ready: function () {
        siteIntrvl = setInterval(function () {
          if ($carousel) {
            clearInterval(siteIntrvl);

            if ($(!isMobile)) {
              $(".jn_circle.is-selected").addClass("new");
            }

            carouselColor();

            carouselTitle("in");

            parallax(0);
          }
        }, 50);
      },
    },
  });

  $carousel.on("scroll.flickity", function (event, progress) {
    parallax(progress);
  });

  $carousel.on("dragStart.flickity", function (event, pointer) {
    if ($(!isMobile)) {
      canScroll = false;

      $(".jn_circle").removeClass("is-selected new");
    }

    carouselTitle("out");
  });

  $carousel.on("dragEnd.flickity", function (event, index) {
    carouselColor();
  });

  $carousel.on("settle.flickity", function (event, index) {
    canScroll = true;

    if ($(!isMobile)) {
      $(".jn_circle").removeClass("new");

      if (!isMouseOutCircle) {
        isMouseOutCircle = true;

        $(".jn_circle.is-selected").addClass("new");
      }
    }

    carouselColor();

    carouselTitle("in");
  });

  function carouselColor() {
    var activeEle = $(".jn_circle.is-selected"),
      getColor = activeEle.attr("data-color");

    $(".section-side > i").css("background", getColor);
  }

  function carouselTitle(type) {
    var activeEle = $(".jn_circle.is-selected"),
      getTitle = activeEle.attr("data-title"),
      getURL = activeEle.attr("data-href"),
      split;

    if (type == "in") {
      $(".jn_title h3").html(getTitle);

      split = new SplitText($(".jn_title h3"), {
        type: "words",
        wordsClass: "SplitClass",
      });

      if (activeSection == 4) {
        TweenMax.staggerFrom(
          split.words,
          0.5,
          { y: 20, autoAlpha: 0, ease: Power3.easeOut },
          0.1
        );
      }

      $(".view_btn").attr("href", getURL);
    } else {
      split = new SplitText($(".jn_title h3"), {
        type: "words",
        wordsClass: "SplitClass",
      });

      TweenMax.staggerTo(
        split.words,
        0.5,
        { y: -20, autoAlpha: 0, ease: Power3.easeIn },
        0.1
      );
    }
  }

  // Main Interactions
  var indVal = 0,
    ts,
    mainTimeout,
    scrollTimeout;

  if (!isMobile) {
    $(window).on("mousewheel DOMMouseScroll", function (e) {
      if (canScroll) {
        canScroll = false;

        var direction = (function () {
          var delta =
            e.type === "DOMMouseScroll"
              ? e.originalEvent.detail * -40
              : e.originalEvent.wheelDelta;

          return delta > 0 ? 0 : 1;
        })();

        if (direction === 1) {
          getSection("next");
        }

        if (direction === 0) {
          getSection("prev");
        }
      }
    });
  } else {
    $(window).on("touchstart", function (e) {
      if (canScroll) {
        ts = e.originalEvent.touches[0].clientY;
      }
    });

    $(window).on("touchend", function (e) {
      if (canScroll) {
        var te = e.originalEvent.changedTouches[0].clientY;

        if (ts > te + 25) {
          canScroll = false;

          getSection("next");
        } else if (ts < te - 25) {
          canScroll = false;

          getSection("prev");
        }
      }
    });
  }

  function getSection(val) {
    if (val == "next") {
      activeSection != 5
        ? (activeSection = activeSection + 1)
        : (activeSection = 0);
    } else {
      activeSection != 0
        ? (activeSection = activeSection - 1)
        : (activeSection = 5);
    }

    $("body").addClass("progress");

    indVal = activeSection * 0.2;

    callBack(oldSection, activeSection);

    oldSection = activeSection;
  }

  var sectionTL, elementsTL;

  function indicator() {
    isMobile
      ? TweenMax.to(".indicator_set > i.hori", 1, { scaleX: indVal })
      : TweenMax.to(".indicator_set > i.vert", 1, { scaleY: indVal });
  }

  function callBack(o, n) {
    if (sectionTL) {
      sectionTL.kill();
    }

    sectionTL = new TimelineMax();

    sectionElements("out", o);

    if (o == 0) {
      canAnimate = false;

      sectionTL
        .staggerFromTo(
          [splitB.lines, splitA.lines],
          0.5,
          { y: 0, autoAlpha: 1 },
          { y: -20, autoAlpha: 0, ease: Power3.easeIn },
          0.1,
          0
        )

        .to("#container", 0.5, { autoAlpha: 0, ease: Power3.easeIn }, 0)

        .call(function () {
          newSection(n, o);
        });

      setCircle("animation");
    } else if (o == 1) {
      sectionTL
        .to(".ed_image", 0.5, { autoAlpha: 0, ease: Power3.easeIn }, 0)

        .staggerFromTo(
          splitC.words,
          0.5,
          { y: 0, autoAlpha: 1 },
          { y: -20, autoAlpha: 0, ease: Power3.easeIn },
          0.05,
          0
        )

        .call(function () {
          splitC.revert();

          newSection(n, o);
        });

      setCircle("animation");
    } else if (o == 2) {
      $(".crv_cont").removeClass("mg");

      var circlesSelector = $(".circles_group.active").find(".crv_circle");

      sectionTL
        .to(".crv_cont", 0.5, { y: 0, x: 0, scale: 1, ease: Power3.easeOut }, 0)

        .staggerTo(
          circlesSelector,
          0.5,
          { autoAlpha: 0, ease: Power3.easeIn },
          0.05,
          0
        )

        .call(function () {
          newSection(n, o);
        });

      setCircle("animation");
    } else if (o == 3) {
      if (!splitD) {
        splitD = new SplitText("#stories ._lines", {
          type: "lines",
          wordsClass: "SplitClass",
        });
      }

      sectionTL

        .staggerFromTo(
          [splitD.lines, "#stories ._secEle"],
          0.5,
          { y: 0, autoAlpha: 1 },
          { y: -20, autoAlpha: 0, ease: Power3.easeIn },
          0.05,
          0
        )

        .call(function () {
          splitD.revert();

          newSection(n, o);

          setCircle("animation");
        });
    } else if (o == 4) {
      sectionTL
        .staggerFromTo(
          "#join ._secEle, .jn_circle, .jn_title",
          0.5,
          { y: 0, autoAlpha: 1 },
          { y: -20, autoAlpha: 0, ease: Power3.easeIn },
          0.05,
          0
        )

        .fromTo(
          ".adjustable > i",
          1,
          { scaleY: 1, transformOrigin: "0% 0%" },
          { scaleY: 0, ease: Power3.easeIn },
          0.35
        )

        .call(function () {
          $(".jn_circle").removeClass("new");

          $carousel.flickity("select", 0, false, true);

          carouselColor();

          carouselTitle("in");

          newSection(n, o);
        });

      setCircle("animation");
    } else if (o == 5) {
      sectionTL
        .fromTo(
          ".inline_submit i",
          0.5,
          { scaleY: 1, transformOrigin: "0% 0%" },
          { scaleY: 0, ease: Power3.easeIn },
          0
        )

        .staggerFromTo(
          ".input_set label, .inline_submit span",
          0.5,
          { y: 0, autoAlpha: 1 },
          { y: -20, autoAlpha: 0, ease: Power3.easeIn },
          0.05,
          0
        )

        .staggerFromTo(
          ".input_border line",
          0.5,
          { drawSVG: "100%" },
          { drawSVG: "0%", ease: Power3.easeIn },
          -0.05,
          0.5
        )

        .call(function () {
          newSection(n, o);

          setCircle("animation");
        });
    }
  }

  function newSection(n, o) {
    if (elementsTL) {
      elementsTL.kill();
    }

    elementsTL = new TimelineMax();

    $("section").removeClass("active").eq(activeSection).addClass("active");

    sectionElements("in", n);

    indicator();

    if (n == 0) {
      elementsTL
        .staggerFromTo(
          [splitB.lines, splitA.lines],
          0.5,
          { y: 20, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, ease: Power3.easeOut },
          0.1,
          0
        )

        .to("#container", 0.5, { autoAlpha: 1, ease: Power3.easeOut }, 0)

        .call(function () {
          canAnimate = true;

          enableScroll();
        });
    } else if (n == 1) {
      $("body").addClass("in");

      splitC = new SplitText(".section_head h1", {
        type: "words",
        wordsClass: "SplitClass",
      });

      elementsTL
        .staggerFromTo(
          splitC.words,
          0.5,
          { y: 20, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, ease: Power3.easeOut },
          0.05,
          0
        )

        .fromTo(
          ".ed_image",
          1,
          { y: 100, autoAlpha: 0, skewY: 20, transformOrigin: "0 0" },
          { skewY: 0, y: 0, autoAlpha: 1, ease: Power3.easeOut },
          0.5
        )

        .call(function () {
          $("body").removeClass("in");

          enableScroll();
        });
    } else if (n == 2) {
      var circlesSelector = $(".circles_group.active").find(".crv_circle");

      elementsTL
        .staggerFromTo(
          circlesSelector,
          1,
          { y: 100, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, ease: Power3.easeOut },
          0.05,
          0
        )

        .call(function () {
          $(".crv_cont").addClass("mg");

          enableScroll();
        });
    } else if (n == 3) {
      splitD = new SplitText("#stories ._lines", {
        type: "lines",
        wordsClass: "SplitClass",
      });

      elementsTL
        .staggerFromTo(
          splitD.lines,
          0.5,
          { y: 20, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, ease: Power3.easeOut },
          0.1,
          0
        )

        .staggerFromTo(
          "#stories ._secEle",
          1,
          { y: 100, autoAlpha: 0, skewY: 20, transformOrigin: "0 0" },
          { skewY: 0, y: 0, autoAlpha: 1, ease: Power3.easeOut },
          0.1,
          0
        )

        .call(function () {
          enableScroll();
        });
    } else if (n == 4) {
      resizeCars();

      $("body").addClass("in");

      elementsTL
        .staggerFromTo(
          "#join ._secEle",
          0.5,
          { y: 100, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, ease: Power3.easeOut },
          0.05,
          0
        )

        .staggerFromTo(
          ".jn_circle",
          1,
          { y: height, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, ease: Power3.easeOut },
          0.1,
          0
        )

        .fromTo(
          ".adjustable > i",
          1,
          { scaleY: 0, transformOrigin: "100% 100%" },
          { scaleY: 1, ease: Power3.easeInOut },
          0.5
        )

        .call(function () {
          $("body").removeClass("in");

          enableScroll();
        });
    } else if (n == 5) {
      elementsTL
        .staggerFromTo(
          ".input_border line",
          0.5,
          { drawSVG: "0%" },
          { drawSVG: "100%", ease: Power3.easeOut },
          0.1,
          0
        )

        .fromTo(
          ".inline_submit i",
          0.5,
          { scaleY: 0, transformOrigin: "100% 100%" },
          { scaleY: 1, ease: Power3.easeOut }
        )

        .staggerFromTo(
          ".input_set label, .inline_submit span",
          1,
          { y: 20, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, ease: Power3.easeOut },
          0.05,
          0.8
        )

        .call(function () {
          enableScroll();
        });
    }
  }

  function enableScroll() {
    canScroll = true;

    $("body").removeClass("progress");
  }

  function sectionElements(val, c) {
    var ele = $("section").eq(c).find("._inOut");

    if (ele.length != 0) {
      if (val == "in") {
        TweenMax.staggerFromTo(
          ele,
          0.5,
          { y: 20, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, ease: Power3.easeOut },
          0.1
        );
      } else {
        TweenMax.staggerFromTo(
          ele,
          0.5,
          { y: 0, autoAlpha: 1 },
          { y: -20, autoAlpha: 0, ease: Power3.easeIn },
          0.1
        );
      }
    }
  }

  function getGroup(val) {
    canScroll = false;

    if (val == "next") {
      activeGroup != totalGroups
        ? (activeGroup = activeGroup + 1)
        : (activeGroup = 0);

      dirVal = 1;
    } else {
      activeGroup != 0
        ? (activeGroup = activeGroup - 1)
        : (activeGroup = totalGroups);

      dirVal = -1;
    }

    circlesSelector = $(".circles_group.active").find(".crv_circle");

    TweenMax.to(".crv_cont", 1, {
      y: 0,
      x: 0,
      scale: 1,
      ease: Power3.easeInOut,
    });

    $(".crv_cont").removeClass("mg");

    if (groupTL) {
      groupTL.kill();
    }

    groupTL = new TimelineMax();

    groupTL

      .staggerFromTo(
        circlesSelector,
        1,
        {
          x: 0,
        },
        {
          x: function (index, target) {
            var element = document.querySelector(".crv_circles"),
              wrapWidth = element.getBoundingClientRect().width,
              getWidth = target.getBoundingClientRect().width,
              getScale = wrapWidth / element.offsetWidth,
              getOffset = target.offsetLeft,
              ofVal;
            return (
              -(getWidth / getScale) -
              getOffset +
              (wrapWidth - width) / 2 / getScale
            );
          },
          ease: Power3.easeIn,
        },
        0.1
      )

      .call(function () {
        groupSelector.removeClass("active").eq(activeGroup).addClass("active");

        circlesSelector = $(".circles_group.active").find(".crv_circle");

        groupTL
          .staggerFromTo(
            circlesSelector,
            1,
            {
              x: function (index, target) {
                var element = document.querySelector(".crv_circles"),
                  wrapWidth = element.getBoundingClientRect().width,
                  getWidth = target.getBoundingClientRect().width,
                  getScale = wrapWidth / element.offsetWidth,
                  getOffset = target.offsetLeft;
                return (
                  (wrapWidth - width) / 2 / getScale +
                  width / getScale -
                  getOffset
                );
              },
            },
            {
              x: 0,
              ease: Power3.easeOut,
            },
            0.1
          )

          .call(function () {
            if (!isMenu) {
              canScroll = true;
            }

            $(".crv_cont").addClass("mg");
          });

        $(".crv_cont").addClass("mg");
      });
  }

  $(".animated_arrow").click(function (e) {
    $(this).hasClass("prev") ? (arrowDir = "previous") : (arrowDir = "next");

    if (activeSection == 1) {
      getCard(arrowDir, "animate");
    } else if (activeSection == 2) {
      getGroup(arrowDir);
    } else if (activeSection == 4) {
      isMouseOutCircle = false;

      if ($(!isMobile)) {
        $(".jn_circle").removeClass("new");
      }

      $carousel.flickity(arrowDir, true);

      if ($(!isMobile)) {
        $(".jn_circle.is-selected").addClass("new");
      }

      carouselTitle("out");

      carouselColor();
    }
  });

  $(".jn_circle").on("mouseleave", function (e) {
    if ($(!isMobile)) {
      isMouseOutCircle = true;

      $(".jn_circle").removeClass("new");
    }
  });

  $(window).on("mousemove", function (e) {
    var x = e.clientX;
    var y = e.clientY;

    if (!isMenu && !isSearch) {
      let speedX;

      if (activeSection == 0 && canAnimate) {
        width <= 640 ? (speedX = width * 4) : (speedX = width / 2);

        let mW = (((width / 2 - event.pageX) * speedX) / width).toFixed(3) - 50;
        let mH =
          (((height / 2 - event.pageY) * height) / height).toFixed(3) - 50;

        TweenMax.to(".main_wrap_animated", 3, {
          x: mW,
          y: mH,
          ease: Power3.easeOut,
        });
      } else if (
        (activeSection == 3 || activeSection == 1) &&
        !isMobile &&
        !$("body").hasClass("in")
      ) {
        let xPos = x / $(window).width() - 0.5;
        let yPos = y / $(window).height() - 0.5;
        let prx = $("section").eq(activeSection).find(".prx");

        TweenMax.to(prx, 0.6, {
          rotationY: -25 * xPos,
          rotationX: 25 * yPos,
          ease: Power3.easeOut,
          transformPerspective: 800,
          transformOrigin: "center",
        });

        if (activeSection == 1) {
          if (
            canDraw &&
            (x >= lastX + 50 ||
              x <= lastX - 50 ||
              y >= lastY + 50 ||
              y <= lastY - 50) &&
            !editionsHover
          ) {
            if (!isDrawing) {
              isDrawing = true;

              newClass = makeid();
            }

            toAppend = document.getElementsByClassName("loader-container")[0];
            elementDIV = document.createElement("div");

            elementDIV.className = "loader-container " + newClass;
            elementDIV.innerHTML = svgShape;
            elementDIV.style.left = e.clientX - 50 + "px";
            elementDIV.style.top = e.clientY - 50 + "px";

            container.appendChild(elementDIV);

            if ($(".loader-container." + newClass).length != 0) {
              TweenMax.to(".loader-container." + newClass, 0.5, {
                autoAlpha: 1,
                ease: Power3.easeOut,
              });
            }

            lastX = x;
            lastY = y;

            $("body").addClass("drawing");
          }

          waitForFinalEvent(function () {
            isDrawing = false;
            canDraw = false;

            if ($(".loader-container." + newClass).length != 0 && !isDrawing) {
              TweenMax.to(".loader-container." + newClass, 0.5, {
                autoAlpha: 0,
                ease: Power3.easeOut,
                onComplete: function () {
                  $(".loader-container." + newClass).remove();

                  canDraw = true;
                },
              });

              $("body").removeClass("drawing");
            }
          }, 100);

          if (!canDraw) {
            waitForFinalEvent(function () {
              if (activeSection == 1) {
                canDraw = true;
              }
            }, 150);
          }
        }
      }
    }
  });
}

function resizeCars() {
  if (width <= 800) {
    var title = $("#join .section_title"),
      posTop = title.offset().top + title.innerHeight(),
      createH = $(".side-content").position().top - posTop;

    TweenMax.set(".adjustable", { y: posTop, height: createH });

    TweenMax.set(".jn_circles, .jn_circle", {
      width: createH - (createH * 20) / 100 - 20,
      height: createH - (createH * 20) / 100 - 20,
    });
  } else {
    TweenMax.set(".adjustable", { y: 0, height: "auto" });

    $(".jn_circles, .jn_circle").css({ width: "", height: "" });
  }

  if ($carousel) {
    $carousel.flickity("resize");
  }
}

function setCircle(type) {
  var animArrowNext = $(".animated_arrow.next"),
    animArrowPrev = $(".animated_arrow.prev"),
    activeCircle = $("section").eq(activeSection).find(".circle_set"),
    activeArrowNext = $("section").eq(activeSection).find(".arrow_set.next"),
    activeArrowPrev = $("section").eq(activeSection).find(".arrow_set.prev"),
    circleW = $(".circle_set").innerWidth(),
    circleH = $(".circle_set").innerHeight(),
    arrowW = activeArrowNext.outerWidth(),
    arrowH = activeArrowNext.outerHeight(),
    circleTXT,
    circleURL,
    circleX,
    circleY,
    arrowPrevX,
    arrowNextX,
    arrowY;

  if (isSiteReady) {
    if (activeSection != 0 && activeSection != 3 && activeSection != 5) {
      if (!isViewBtn) {
        isViewBtn = true;

        TweenMax.set(".view_btn", { scale: 1.2 });

        TweenMax.to(".view_btn", 1, {
          autoAlpha: 1,
          scale: 1,
          ease: Power3.easeOut,
        });
      }
    } else {
      isViewBtn = false;

      if (!$(".view_btn").css("visibility", "hidden")) {
        TweenMax.to(".view_btn", 1, {
          autoAlpha: 0,
          scale: 0.8,
          ease: Power3.easeOut,
        });
      }
    }

    animCircle.css({ width: circleW, height: circleH });

    if (activeArrowNext.length != 0) {
      arrowNextX = activeArrowNext.offset().left;
      arrowPrevX = activeArrowPrev.offset().left;
      arrowY = activeArrowNext.offset().top;

      animArrowNext.add(animArrowPrev).show();

      if (type == "css") {
        animArrowNext.add(animArrowPrev).css({ width: arrowW, height: arrowH });

        TweenMax.set([animArrowNext, animArrowPrev], { y: arrowY });

        TweenMax.set(animArrowNext, { x: arrowNextX });

        TweenMax.set(animArrowPrev, { x: arrowPrevX });
      } else {
        if (!isArrow) {
          isArrow = true;

          TweenMax.set([animArrowNext, animArrowPrev], {
            autoAlpha: 0,
            width: arrowW,
            height: arrowH,
            y: arrowY,
            scale: 1.2,
          });

          TweenMax.set(animArrowNext, { x: arrowNextX });

          TweenMax.set(animArrowPrev, { x: arrowPrevX });

          TweenMax.to([animArrowNext, animArrowPrev], 1, {
            autoAlpha: 1,
            scale: 1,
            ease: Power3.easeOut,
          });
        } else {
          TweenMax.to([animArrowNext, animArrowPrev], 1, {
            width: arrowW,
            height: arrowH,
            y: arrowY,
            ease: Power3.easeInOut,
          });

          TweenMax.to(animArrowNext, 1, {
            x: arrowNextX,
            ease: Power3.easeInOut,
          });

          TweenMax.to(animArrowPrev, 1, {
            x: arrowPrevX,
            ease: Power3.easeInOut,
          });
        }
      }
    } else {
      TweenMax.to([animArrowNext, animArrowPrev], 0.5, {
        autoAlpha: 0,
        scale: 0.8,
        ease: Power3.easeOut,
      });

      isArrow = false;
    }

    if (activeCircle.length != 0) {
      circleX = activeCircle.offset().left;
      circleY = activeCircle.offset().top;
      circleTXT = activeCircle.html();
      circleURL = $("section").eq(activeSection).attr("data-url");

      if (isMobile) {
        if (activeSection == 0 || activeSection == 3) {
          excute();
        } else {
          hideCircle();
        }
      } else {
        excute();
      }

      function excute() {
        if (type == "css") {
          animCircle.attr("data-url", circleURL).find("strong").html(circleTXT);

          TweenMax.set(animCircle, { x: circleX, y: circleY });
        } else {
          if (!isCircle) {
            isCircle = true;

            animCircle
              .attr("data-url", circleURL)
              .find("strong")
              .html(circleTXT);

            var split = new SplitText(animCircle.find("strong"), {
              type: "words",
              wordsClass: "SplitClass",
            });

            TweenMax.staggerFrom(
              split.words,
              0.5,
              { y: 10, autoAlpha: 0, ease: Power3.easeOut },
              0.1,
              function () {
                split.revert();
              }
            );

            TweenMax.set(animCircle, {
              autoAlpha: 0,
              x: circleX,
              y: circleY,
              scale: 1.2,
            });

            TweenMax.to(animCircle, 1, {
              autoAlpha: 1,
              scale: 1,
              ease: Power3.easeOut,
            });
          } else {
            var split = new SplitText(animCircle.find("strong"), {
              type: "words",
              wordsClass: "SplitClass",
            });

            TweenMax.staggerTo(
              split.words,
              0.5,
              { y: -10, autoAlpha: 0, ease: Power3.easeIn },
              0.1,
              function () {
                animCircle
                  .attr("data-url", circleURL)
                  .find("strong")
                  .html(circleTXT);

                split = new SplitText(animCircle.find("strong"), {
                  type: "words",
                  wordsClass: "SplitClass",
                });

                TweenMax.staggerFrom(
                  split.words,
                  0.5,
                  { y: 10, autoAlpha: 0, ease: Power3.easeOut },
                  0.1,
                  function () {
                    split.revert();
                  }
                );
              }
            );

            TweenMax.to(animCircle, 1, {
              x: circleX,
              y: circleY,
              ease: Power3.easeInOut,
            });
          }
        }
      }
    } else {
      hideCircle();
    }

    function hideCircle() {
      TweenMax.to(animCircle, 1, {
        autoAlpha: 0,
        scale: 0.8,
        ease: Power3.easeOut,
        onComplete: function () {
          animCircle.find("strong").html("");
        },
      });

      isCircle = false;
    }
  }
}

function appendImgs() {
  var appendBGs = $("body").find(".load_bg"),
    appendIMGs = $("body").find(".load_img");

  appendBGs.each(function (i) {
    var t = $(this),
      s = t.attr("data-src");

    t.css({ "background-image": "url(" + s + ")" });
  });

  appendIMGs.each(function (i) {
    var t = $(this),
      s = t.attr("data-src");

    t.append('<img crossorigin="anonymous" src="' + s + '" alt="">');
  });
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
        let ac = $("section").eq(activeSection);

        if (isMenu) {
          canScroll = false;

          TweenMax.to(ac, 1, { autoAlpha: 0, ease: Power3.easeOut });

          $("footer").stop().delay(800).fadeIn();
        } else {
          canScroll = true;

          TweenMax.to(ac, 1, { autoAlpha: 1, ease: Power3.easeOut });
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

function globalFunc() {
  window.addEventListener("resize", onWindowResize, false);
  window.addEventListener("orientationchange", onOrientationChange, false);
  if (!isMobile) {
    let menuLinks = $("nav a, .sub_footer a");
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
      if (!this.animation.isActive()) {
        this.animation.restart();
      }
    });
  }
  function onWindowResize() {
    width = window.innerWidth;
    height = window.innerHeight;
    vh = height * 0.01;

    document.documentElement.style.setProperty("--vh", `${vh}px`);

    if (splitD) {
      splitD.revert();

      splitD = null;
    }

    function fillDiv(div, proportional) {
      var currentWidth = div.outerWidth();
      var currentHeight = div.outerHeight();

      var availableHeight = window.innerHeight;
      var availableWidth = window.innerWidth;

      var scaleX = availableWidth / currentWidth;
      var scaleY = availableWidth / currentWidth;

      if (proportional) {
        scaleX = Math.min(scaleX, scaleY);
        scaleY = scaleX;
      }

      var translationX = Math.round(
        (availableWidth - currentWidth * scaleX) / 2
      );
      var translationY = Math.round(
        (availableHeight - currentHeight * scaleY) / 2
      );

      if (width > 960) {
        div.css({
          "-webkit-transform":
            "translate(-50%, -50%) scale3d(" + scaleX + ", " + scaleY + ", 1)",
          "-webkit-transform-origin": "center center",
        });
      } else {
        div.css({
          "-webkit-transform": "translate(-50%, -50%) scale3d(0.6, 0.6, 1)",
          "-webkit-transform-origin": "center center",
        });
      }
    }

    var div = $(".scale");
    fillDiv(div, true);

    setCircle("css");

    resizeCars();

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

    if (activeSection == 0) {
      TweenMax.to(".main_wrap_animated", 1, {
        x: 0,
        y: 0,
        ease: Power3.easeOut,
      });
    }
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

  var modeTL = new TimelineMax({ paused: true });

  const curSavedMode = localStorage.getItem("in_mode");
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

      canScroll = true;
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

  if (curSavedMode) {
    modeTL.play();
  }
  $(".mode_set").click(function (e) {
    e.stopPropagation();

    canScroll = false;

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

      menuTL.timeScale(1).play();
    } else {
      $("header").removeClass("opened");

      isMenu = false;

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

  $(document).on("click", "a, ._link", function (e) {
    var href = $(this).attr("href"),
      target = $(this).attr("target");

    if (!href) {
      href = $(this).attr("data-href");
    }

    if (target != "_blank" && href.indexOf("#") != 0) {
      openLink(href);
      return false;
    }
  });

  let circleWrap = animCircle.find(".crc_wrap"),
    circleBorder = animCircle.find(".stroke-an"),
    isHolding = false;
  isHoldEnd = false;

  let holdTL = new TimelineMax({ paused: true });

  holdTL
    .fromTo(
      circleBorder,
      1,
      { drawSVG: "0%" },
      { drawSVG: "100%", ease: Power3.easeInOut },
      0
    )

    .call(function () {
      $(".circle_mag").removeClass("mg");

      let url = animCircle.attr("data-url");

      isHoldEnd = true;

      isHolding = false;

      openLink(url);
    });

  animCircle
    .on("mousedown touchstart", function () {
      isHolding = true;

      canScroll = false;

      holdTL.play();
    })
    .on("mouseup touchend", function () {
      if (!isHoldEnd && isHolding) {
        canScroll = true;

        holdTL.reverse();
      }
    })
    .on("mouseleave", function () {
      if (isHolding) {
        holdTL.reverse();
      }
    });

  var searchTL = new TimelineMax({ paused: true });

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
    console.log(isSearch);
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
}

function openLink(url) {
  $(".site_loader").show();

  if (loaderTL) {
    loaderTL.kill();
  }

  loaderTL = new TimelineMax();

  loaderTL

    .to(".site_loader", 0.5, { autoAlpha: 1, ease: Power3.easeIn }, 0)

    .call(function () {
      window.location.href = url;
    });
}
