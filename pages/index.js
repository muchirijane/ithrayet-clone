// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <body id="home">
        <div id="site" class="no-select">
          <main>
            <section id="main">
              <div class="main_heading flex full_bg">
                <p>Every artist was first an amateur</p>
                <h3>
                  A true artist is not one who <br />
                  is inspired, but one who <br />
                  inspires others
                </h3>
              </div>

              <div id="container"></div>

              <div class="main_wrap scale">
                <div class="main_wrap_animated full_bg">
                  <article
                    id="6"
                    class="reveal preloadIMG"
                    data-img="imgs/section1/1.jpg"
                    data-title="There are so many <br/>forms of love"
                    data-sub="April 2021"
                    data-url="#"
                  >
                    <div class="article_content full_bg">
                      <i></i>
                    </div>
                  </article>

                  <article
                    id="7"
                    class="reveal preloadIMG"
                    data-img="imgs/section1/2.jpg"
                    data-title="The Creed of <br/>the Phoenix"
                    data-sub="Febuary 2021"
                    data-url="#"
                  >
                    <div class="article_content full_bg">
                      <i></i>
                    </div>
                  </article>

                  <article
                    id="8"
                    class="reveal preloadIMG"
                    data-img="imgs/section1/3.jpg"
                    data-title="The Hand of <br/>the Cursed"
                    data-sub="January 2021"
                    data-url="#"
                  >
                    <div class="article_content full_bg">
                      <i></i>
                    </div>
                  </article>

                  <article
                    id="9"
                    class="reveal preloadIMG"
                    data-img="imgs/section1/4.jpg"
                    data-title="The Word of <br/>the Archangel"
                    data-sub="September 2021"
                    data-url="#"
                  >
                    <div class="article_content full_bg">
                      <i></i>
                    </div>
                  </article>

                  <article
                    id="5"
                    class="preloadIMG"
                    data-img="imgs/section1/5.jpg"
                    data-title="The Titan in <br/>the Night"
                    data-sub="May 2021"
                    data-url="#"
                  >
                    <div class="article_content full_bg">
                      <i></i>
                    </div>
                  </article>

                  <article
                    id="4"
                    class="preloadIMG"
                    data-img="imgs/section1/6.jpg"
                    data-title="The Salt of <br/>the Empire"
                    data-sub="June 2021"
                    data-url="#"
                  >
                    <div class="article_content full_bg">
                      <i></i>
                    </div>
                  </article>

                  <article
                    id="3"
                    class="preloadIMG"
                    data-img="imgs/section1/7.jpg"
                    data-title="The Dawn of <br/>the Abyss"
                    data-sub="July 2021"
                    data-url="#"
                  >
                    <div class="article_content full_bg">
                      <i></i>
                    </div>
                  </article>

                  <article
                    id="2"
                    class="preloadIMG"
                    data-img="imgs/section1/8.jpg"
                    data-title="The Whisper <br/>in the Chasm"
                    data-sub="November 2021"
                    data-url="#"
                  >
                    <div class="article_content full_bg">
                      <i></i>
                    </div>
                  </article>

                  <article
                    id="1"
                    class="preloadIMG"
                    data-img="imgs/section1/9.jpg"
                    data-title="The Groom in <br/>the City"
                    data-sub="March 2021"
                    data-url="#"
                  >
                    <div class="article_content full_bg">
                      <i></i>
                    </div>
                  </article>
                </div>
              </div>

              <div class="circle_set no-select buildup">
                Hold here to <br />
                Explore Editions
              </div>
            </section>

            <section id="editions">
              <div class="content_set">
                <div class="section_title flex">
                  <h4 class="_inOut">Editions</h4>
                  <a href="editions_en.php" class="mobile_only _inOut">
                    All Editions
                  </a>
                </div>
              </div>

              <div class="section_content flex full_bg">
                <div class="section_head">
                  <h1>
                    <span>
                      The life and <br />
                      art of the <br />
                      street /
                    </span>
                    <span>Issue #1</span>
                  </h1>
                  <div class="ed_image _curTL1">
                    <div class="full_bg prx">
                      <div class="cardWrapper full_bg">
                        <div class="card full_bg">
                          <div class="cardFace full_bg front"></div>
                          <div class="cardFace full_bg back"></div>
                        </div>
                      </div>

                      <div class="ed_sub_images">
                        <div class="ed_sub_image"></div>
                        <div class="ed_sub_image"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="section_label">
                  <h3 class="_fill_card _inOut"></h3>
                  <p class="_fill_card _inOut"></p>
                </div>

                <div class="cards">
                  <span
                    data-title="The Street"
                    data-date="March 2021"
                    data-url="#1"
                    data-cover="imgs/section2/1-1.jpg"
                    data-img1="imgs/section2/1-2.jpg"
                    data-img2="imgs/section2/1-3.jpg"
                  ></span>
                  <span
                    data-title="Druid's Tears"
                    data-date="April 2021"
                    data-url="#2"
                    data-cover="imgs/section2/2-1.jpg"
                    data-img1="imgs/section2/2-2.jpg"
                    data-img2="imgs/section2/3-3.jpg"
                  ></span>
                  <span
                    data-title="Cleric's Gold"
                    data-date="June 2022"
                    data-url="#3"
                    data-cover="imgs/section2/3-1.jpg"
                    data-img1="imgs/section2/2-2.jpg"
                    data-img2="imgs/section2/3-3.jpg"
                  ></span>
                </div>
              </div>

              <div class="circle_set no-select buildup lower desktop_only">
                All Editions
              </div>

              <div class="arrow_set prev fluid flex"></div>

              <div class="arrow_set next fluid flex"></div>

              <div id="drawings" class="full_bg"></div>
            </section>

            <section id="creatives">
              <div class="content_set">
                <div class="section_title flex">
                  <h4 class="_inOut">Creatives</h4>
                  <a href="creatives_en.php" class="mobile_only _inOut">
                    All Creatives
                  </a>
                </div>
              </div>

              <div class="cr_text">
                <p class="_inOut">Every artist was first an amateur</p>
                <h6 class="_inOut">
                  A true artist is not one who <br />
                  is inspired, but one who <br />
                  inspires others
                </h6>
              </div>

              <div class="crv_wrap full_bg">
                <div class="crv_circles scale">
                  <div class="circles_group full_bg active">
                    <div
                      class="crv_circle _curTL2"
                      data-name="Mark Lyons"
                      data-url="#"
                    >
                      <div class="crv_cont full_bg mg" data-dist="7">
                        <div class="crv_stroke">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 202 202"
                          >
                            <path
                              class="stroke-an svg-stroke"
                              fill="none"
                              stroke-width="1"
                              d="M91,3.4C149.3-4.5,203.9,49.1,199.9,107c-3.4,49.3-42.6,87.9-90.9,93.7C35.1,209.6-17.1,128.5,9.5,63 C23.3,28.7,55.4,8.3,91,3.4"
                            ></path>
                          </svg>
                        </div>
                        <div class="sign sign_a">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 130.6 80"
                            class="animate"
                          >
                            <line
                              class="stroke-an"
                              x1="2.4"
                              y1="2.1"
                              x2="5.7"
                              y2="77.1"
                            ></line>
                            <path
                              class="stroke-an"
                              d="M11.5,37.7c-0.8,37.6,36.6,36.7,36.8,8.8c0.1-22.8-25.8-26.4-28.1-3.9c-2.4,23.3,28,27.8,29.9,0.5c-1,18.3,8.1,32.6,9.9-0.4c1.8-33,0.8,21.5,0.8,21.5S85.3-3.8,82.2,53c-2,36.9,13.7-2.3,13.7-2.3"
                            ></path>
                            <line
                              class="stroke-an"
                              x1="88.6"
                              y1="53.1"
                              x2="128.1"
                              y2="54.7"
                            ></line>
                          </svg>
                        </div>
                        <div class="sign sign_b">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 130.6 80"
                            class="animate"
                          >
                            <line
                              class="stroke-an"
                              x1="2.4"
                              y1="2.1"
                              x2="5.7"
                              y2="77.1"
                            ></line>
                            <path
                              class="stroke-an"
                              d="M11.5,37.7c-0.8,37.6,36.6,36.7,36.8,8.8c0.1-22.8-25.8-26.4-28.1-3.9c-2.4,23.3,28,27.8,29.9,0.5c-1,18.3,8.1,32.6,9.9-0.4c1.8-33,0.8,21.5,0.8,21.5S85.3-3.8,82.2,53c-2,36.9,13.7-2.3,13.7-2.3"
                            ></path>
                            <line
                              class="stroke-an"
                              x1="88.6"
                              y1="53.1"
                              x2="128.1"
                              y2="54.7"
                            ></line>
                          </svg>
                        </div>
                        <div class="crv_img">
                          <i class="load_bg" data-src="imgs/section3/1.png"></i>
                        </div>
                      </div>
                    </div>

                    <div
                      class="crv_circle _curTL2"
                      data-name="Rowan Douglas"
                      data-url="#"
                    >
                      <div class="crv_cont full_bg mg" data-dist="7">
                        <div class="crv_stroke">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 202 202"
                          >
                            <path
                              class="stroke-an svg-stroke"
                              fill="none"
                              stroke-width="1"
                              d="M91,3.4C149.3-4.5,203.9,49.1,199.9,107c-3.4,49.3-42.6,87.9-90.9,93.7C35.1,209.6-17.1,128.5,9.5,63 C23.3,28.7,55.4,8.3,91,3.4"
                            ></path>
                          </svg>
                        </div>
                        <div class="sign sign_a">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 130.6 80"
                            class="animate"
                          >
                            <line
                              class="stroke-an"
                              x1="2.4"
                              y1="2.1"
                              x2="5.7"
                              y2="77.1"
                            ></line>
                            <path
                              class="stroke-an"
                              d="M11.5,37.7c-0.8,37.6,36.6,36.7,36.8,8.8c0.1-22.8-25.8-26.4-28.1-3.9c-2.4,23.3,28,27.8,29.9,0.5c-1,18.3,8.1,32.6,9.9-0.4c1.8-33,0.8,21.5,0.8,21.5S85.3-3.8,82.2,53c-2,36.9,13.7-2.3,13.7-2.3"
                            ></path>
                            <line
                              class="stroke-an"
                              x1="88.6"
                              y1="53.1"
                              x2="128.1"
                              y2="54.7"
                            ></line>
                          </svg>
                        </div>
                        <div class="sign sign_b">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 130.6 80"
                            class="animate"
                          >
                            <line
                              class="stroke-an"
                              x1="2.4"
                              y1="2.1"
                              x2="5.7"
                              y2="77.1"
                            ></line>
                            <path
                              class="stroke-an"
                              d="M11.5,37.7c-0.8,37.6,36.6,36.7,36.8,8.8c0.1-22.8-25.8-26.4-28.1-3.9c-2.4,23.3,28,27.8,29.9,0.5c-1,18.3,8.1,32.6,9.9-0.4c1.8-33,0.8,21.5,0.8,21.5S85.3-3.8,82.2,53c-2,36.9,13.7-2.3,13.7-2.3"
                            ></path>
                            <line
                              class="stroke-an"
                              x1="88.6"
                              y1="53.1"
                              x2="128.1"
                              y2="54.7"
                            ></line>
                          </svg>
                        </div>
                        <div class="crv_img">
                          <i class="load_bg" data-src="imgs/section3/2.png"></i>
                        </div>
                      </div>
                    </div>

                    <div
                      class="crv_circle _curTL2"
                      data-name="Georgie Russell"
                      data-url="#"
                    >
                      <div class="crv_cont full_bg mg" data-dist="7">
                        <div class="crv_stroke">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 202 202"
                          >
                            <path
                              class="stroke-an svg-stroke"
                              fill="none"
                              stroke-width="1"
                              d="M91,3.4C149.3-4.5,203.9,49.1,199.9,107c-3.4,49.3-42.6,87.9-90.9,93.7C35.1,209.6-17.1,128.5,9.5,63 C23.3,28.7,55.4,8.3,91,3.4"
                            ></path>
                          </svg>
                        </div>
                        <div class="sign sign_a">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 130.6 80"
                            class="animate"
                          >
                            <line
                              class="stroke-an"
                              x1="2.4"
                              y1="2.1"
                              x2="5.7"
                              y2="77.1"
                            ></line>
                            <path
                              class="stroke-an"
                              d="M11.5,37.7c-0.8,37.6,36.6,36.7,36.8,8.8c0.1-22.8-25.8-26.4-28.1-3.9c-2.4,23.3,28,27.8,29.9,0.5c-1,18.3,8.1,32.6,9.9-0.4c1.8-33,0.8,21.5,0.8,21.5S85.3-3.8,82.2,53c-2,36.9,13.7-2.3,13.7-2.3"
                            ></path>
                            <line
                              class="stroke-an"
                              x1="88.6"
                              y1="53.1"
                              x2="128.1"
                              y2="54.7"
                            ></line>
                          </svg>
                        </div>
                        <div class="sign sign_b">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 130.6 80"
                            class="animate"
                          >
                            <line
                              class="stroke-an"
                              x1="2.4"
                              y1="2.1"
                              x2="5.7"
                              y2="77.1"
                            ></line>
                            <path
                              class="stroke-an"
                              d="M11.5,37.7c-0.8,37.6,36.6,36.7,36.8,8.8c0.1-22.8-25.8-26.4-28.1-3.9c-2.4,23.3,28,27.8,29.9,0.5c-1,18.3,8.1,32.6,9.9-0.4c1.8-33,0.8,21.5,0.8,21.5S85.3-3.8,82.2,53c-2,36.9,13.7-2.3,13.7-2.3"
                            ></path>
                            <line
                              class="stroke-an"
                              x1="88.6"
                              y1="53.1"
                              x2="128.1"
                              y2="54.7"
                            ></line>
                          </svg>
                        </div>
                        <div class="crv_img">
                          <i class="load_bg" data-src="imgs/section3/3.png"></i>
                        </div>
                      </div>
                    </div>

                    <div
                      class="crv_circle _curTL2"
                      data-name="Tommy Hampton"
                      data-url="#"
                    >
                      <div class="crv_cont full_bg mg" data-dist="7">
                        <div class="crv_stroke">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 202 202"
                          >
                            <path
                              class="stroke-an svg-stroke"
                              fill="none"
                              stroke-width="1"
                              d="M91,3.4C149.3-4.5,203.9,49.1,199.9,107c-3.4,49.3-42.6,87.9-90.9,93.7C35.1,209.6-17.1,128.5,9.5,63 C23.3,28.7,55.4,8.3,91,3.4"
                            ></path>
                          </svg>
                        </div>
                        <div class="sign sign_a">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 130.6 80"
                            class="animate"
                          >
                            <line
                              class="stroke-an"
                              x1="2.4"
                              y1="2.1"
                              x2="5.7"
                              y2="77.1"
                            ></line>
                            <path
                              class="stroke-an"
                              d="M11.5,37.7c-0.8,37.6,36.6,36.7,36.8,8.8c0.1-22.8-25.8-26.4-28.1-3.9c-2.4,23.3,28,27.8,29.9,0.5c-1,18.3,8.1,32.6,9.9-0.4c1.8-33,0.8,21.5,0.8,21.5S85.3-3.8,82.2,53c-2,36.9,13.7-2.3,13.7-2.3"
                            ></path>
                            <line
                              class="stroke-an"
                              x1="88.6"
                              y1="53.1"
                              x2="128.1"
                              y2="54.7"
                            ></line>
                          </svg>
                        </div>
                        <div class="sign sign_b">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 130.6 80"
                            class="animate"
                          >
                            <line
                              class="stroke-an"
                              x1="2.4"
                              y1="2.1"
                              x2="5.7"
                              y2="77.1"
                            ></line>
                            <path
                              class="stroke-an"
                              d="M11.5,37.7c-0.8,37.6,36.6,36.7,36.8,8.8c0.1-22.8-25.8-26.4-28.1-3.9c-2.4,23.3,28,27.8,29.9,0.5c-1,18.3,8.1,32.6,9.9-0.4c1.8-33,0.8,21.5,0.8,21.5S85.3-3.8,82.2,53c-2,36.9,13.7-2.3,13.7-2.3"
                            ></path>
                            <line
                              class="stroke-an"
                              x1="88.6"
                              y1="53.1"
                              x2="128.1"
                              y2="54.7"
                            ></line>
                          </svg>
                        </div>
                        <div class="crv_img">
                          <i class="load_bg" data-src="imgs/section3/4.png"></i>
                        </div>
                      </div>
                    </div>

                    <div
                      class="crv_circle _curTL2"
                      data-name="Sibley Thornton"
                      data-url="#"
                    >
                      <div class="crv_cont full_bg mg" data-dist="7">
                        <div class="crv_stroke">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 202 202"
                          >
                            <path
                              class="stroke-an svg-stroke"
                              fill="none"
                              stroke-width="1"
                              d="M91,3.4C149.3-4.5,203.9,49.1,199.9,107c-3.4,49.3-42.6,87.9-90.9,93.7C35.1,209.6-17.1,128.5,9.5,63 C23.3,28.7,55.4,8.3,91,3.4"
                            ></path>
                          </svg>
                        </div>
                        <div class="sign sign_a">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 130.6 80"
                            class="animate"
                          >
                            <line
                              class="stroke-an"
                              x1="2.4"
                              y1="2.1"
                              x2="5.7"
                              y2="77.1"
                            ></line>
                            <path
                              class="stroke-an"
                              d="M11.5,37.7c-0.8,37.6,36.6,36.7,36.8,8.8c0.1-22.8-25.8-26.4-28.1-3.9c-2.4,23.3,28,27.8,29.9,0.5c-1,18.3,8.1,32.6,9.9-0.4c1.8-33,0.8,21.5,0.8,21.5S85.3-3.8,82.2,53c-2,36.9,13.7-2.3,13.7-2.3"
                            ></path>
                            <line
                              class="stroke-an"
                              x1="88.6"
                              y1="53.1"
                              x2="128.1"
                              y2="54.7"
                            ></line>
                          </svg>
                        </div>
                        <div class="sign sign_b">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 130.6 80"
                            class="animate"
                          >
                            <line
                              class="stroke-an"
                              x1="2.4"
                              y1="2.1"
                              x2="5.7"
                              y2="77.1"
                            ></line>
                            <path
                              class="stroke-an"
                              d="M11.5,37.7c-0.8,37.6,36.6,36.7,36.8,8.8c0.1-22.8-25.8-26.4-28.1-3.9c-2.4,23.3,28,27.8,29.9,0.5c-1,18.3,8.1,32.6,9.9-0.4c1.8-33,0.8,21.5,0.8,21.5S85.3-3.8,82.2,53c-2,36.9,13.7-2.3,13.7-2.3"
                            ></path>
                            <line
                              class="stroke-an"
                              x1="88.6"
                              y1="53.1"
                              x2="128.1"
                              y2="54.7"
                            ></line>
                          </svg>
                        </div>
                        <div class="crv_img">
                          <i class="load_bg" data-src="imgs/section3/5.png"></i>
                        </div>
                      </div>
                    </div>

                    <div
                      class="crv_circle _curTL2"
                      data-name="Kit Goodwin"
                      data-url="#"
                    >
                      <div class="crv_cont full_bg mg" data-dist="7">
                        <div class="crv_stroke">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 202 202"
                          >
                            <path
                              class="stroke-an svg-stroke"
                              fill="none"
                              stroke-width="1"
                              d="M91,3.4C149.3-4.5,203.9,49.1,199.9,107c-3.4,49.3-42.6,87.9-90.9,93.7C35.1,209.6-17.1,128.5,9.5,63 C23.3,28.7,55.4,8.3,91,3.4"
                            ></path>
                          </svg>
                        </div>
                        <div class="sign sign_a">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 130.6 80"
                            class="animate"
                          >
                            <line
                              class="stroke-an"
                              x1="2.4"
                              y1="2.1"
                              x2="5.7"
                              y2="77.1"
                            ></line>
                            <path
                              class="stroke-an"
                              d="M11.5,37.7c-0.8,37.6,36.6,36.7,36.8,8.8c0.1-22.8-25.8-26.4-28.1-3.9c-2.4,23.3,28,27.8,29.9,0.5c-1,18.3,8.1,32.6,9.9-0.4c1.8-33,0.8,21.5,0.8,21.5S85.3-3.8,82.2,53c-2,36.9,13.7-2.3,13.7-2.3"
                            ></path>
                            <line
                              class="stroke-an"
                              x1="88.6"
                              y1="53.1"
                              x2="128.1"
                              y2="54.7"
                            ></line>
                          </svg>
                        </div>
                        <div class="sign sign_b">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 130.6 80"
                            class="animate"
                          >
                            <line
                              class="stroke-an"
                              x1="2.4"
                              y1="2.1"
                              x2="5.7"
                              y2="77.1"
                            ></line>
                            <path
                              class="stroke-an"
                              d="M11.5,37.7c-0.8,37.6,36.6,36.7,36.8,8.8c0.1-22.8-25.8-26.4-28.1-3.9c-2.4,23.3,28,27.8,29.9,0.5c-1,18.3,8.1,32.6,9.9-0.4c1.8-33,0.8,21.5,0.8,21.5S85.3-3.8,82.2,53c-2,36.9,13.7-2.3,13.7-2.3"
                            ></path>
                            <line
                              class="stroke-an"
                              x1="88.6"
                              y1="53.1"
                              x2="128.1"
                              y2="54.7"
                            ></line>
                          </svg>
                        </div>
                        <div class="crv_img">
                          <i class="load_bg" data-src="imgs/section3/6.png"></i>
                        </div>
                      </div>
                    </div>

                    <div
                      class="crv_circle _curTL2"
                      data-name="Bridget Todd"
                      data-url="#"
                    >
                      <div class="crv_cont full_bg mg" data-dist="7">
                        <div class="crv_stroke">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 202 202"
                          >
                            <path
                              class="stroke-an svg-stroke"
                              fill="none"
                              stroke-width="1"
                              d="M91,3.4C149.3-4.5,203.9,49.1,199.9,107c-3.4,49.3-42.6,87.9-90.9,93.7C35.1,209.6-17.1,128.5,9.5,63 C23.3,28.7,55.4,8.3,91,3.4"
                            ></path>
                          </svg>
                        </div>
                        <div class="sign sign_a">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 130.6 80"
                            class="animate"
                          >
                            <line
                              class="stroke-an"
                              x1="2.4"
                              y1="2.1"
                              x2="5.7"
                              y2="77.1"
                            ></line>
                            <path
                              class="stroke-an"
                              d="M11.5,37.7c-0.8,37.6,36.6,36.7,36.8,8.8c0.1-22.8-25.8-26.4-28.1-3.9c-2.4,23.3,28,27.8,29.9,0.5c-1,18.3,8.1,32.6,9.9-0.4c1.8-33,0.8,21.5,0.8,21.5S85.3-3.8,82.2,53c-2,36.9,13.7-2.3,13.7-2.3"
                            ></path>
                            <line
                              class="stroke-an"
                              x1="88.6"
                              y1="53.1"
                              x2="128.1"
                              y2="54.7"
                            ></line>
                          </svg>
                        </div>
                        <div class="sign sign_b">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 130.6 80"
                            class="animate"
                          >
                            <line
                              class="stroke-an"
                              x1="2.4"
                              y1="2.1"
                              x2="5.7"
                              y2="77.1"
                            ></line>
                            <path
                              class="stroke-an"
                              d="M11.5,37.7c-0.8,37.6,36.6,36.7,36.8,8.8c0.1-22.8-25.8-26.4-28.1-3.9c-2.4,23.3,28,27.8,29.9,0.5c-1,18.3,8.1,32.6,9.9-0.4c1.8-33,0.8,21.5,0.8,21.5S85.3-3.8,82.2,53c-2,36.9,13.7-2.3,13.7-2.3"
                            ></path>
                            <line
                              class="stroke-an"
                              x1="88.6"
                              y1="53.1"
                              x2="128.1"
                              y2="54.7"
                            ></line>
                          </svg>
                        </div>
                        <div class="crv_img">
                          <i class="load_bg" data-src="imgs/section3/7.png"></i>
                        </div>
                      </div>
                    </div>

                    <div
                      class="crv_circle _curTL2"
                      data-name="Gloria Leonard"
                      data-url="#"
                    >
                      <div class="crv_cont full_bg mg" data-dist="7">
                        <div class="crv_stroke">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 202 202"
                          >
                            <path
                              class="stroke-an svg-stroke"
                              fill="none"
                              stroke-width="1"
                              d="M91,3.4C149.3-4.5,203.9,49.1,199.9,107c-3.4,49.3-42.6,87.9-90.9,93.7C35.1,209.6-17.1,128.5,9.5,63 C23.3,28.7,55.4,8.3,91,3.4"
                            ></path>
                          </svg>
                        </div>
                        <div class="sign sign_a">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 130.6 80"
                            class="animate"
                          >
                            <line
                              class="stroke-an"
                              x1="2.4"
                              y1="2.1"
                              x2="5.7"
                              y2="77.1"
                            ></line>
                            <path
                              class="stroke-an"
                              d="M11.5,37.7c-0.8,37.6,36.6,36.7,36.8,8.8c0.1-22.8-25.8-26.4-28.1-3.9c-2.4,23.3,28,27.8,29.9,0.5c-1,18.3,8.1,32.6,9.9-0.4c1.8-33,0.8,21.5,0.8,21.5S85.3-3.8,82.2,53c-2,36.9,13.7-2.3,13.7-2.3"
                            ></path>
                            <line
                              class="stroke-an"
                              x1="88.6"
                              y1="53.1"
                              x2="128.1"
                              y2="54.7"
                            ></line>
                          </svg>
                        </div>
                        <div class="sign sign_b">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 130.6 80"
                            class="animate"
                          >
                            <line
                              class="stroke-an"
                              x1="2.4"
                              y1="2.1"
                              x2="5.7"
                              y2="77.1"
                            ></line>
                            <path
                              class="stroke-an"
                              d="M11.5,37.7c-0.8,37.6,36.6,36.7,36.8,8.8c0.1-22.8-25.8-26.4-28.1-3.9c-2.4,23.3,28,27.8,29.9,0.5c-1,18.3,8.1,32.6,9.9-0.4c1.8-33,0.8,21.5,0.8,21.5S85.3-3.8,82.2,53c-2,36.9,13.7-2.3,13.7-2.3"
                            ></path>
                            <line
                              class="stroke-an"
                              x1="88.6"
                              y1="53.1"
                              x2="128.1"
                              y2="54.7"
                            ></line>
                          </svg>
                        </div>
                        <div class="crv_img">
                          <i class="load_bg" data-src="imgs/section3/8.png"></i>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="circles_group full_bg">
                    <div
                      class="crv_circle _curTL2"
                      data-name="Ivory Read"
                      data-url="#"
                    >
                      <div class="crv_cont full_bg mg" data-dist="7">
                        <div class="crv_stroke">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 202 202"
                          >
                            <path
                              class="stroke-an svg-stroke"
                              fill="none"
                              stroke-width="1"
                              d="M91,3.4C149.3-4.5,203.9,49.1,199.9,107c-3.4,49.3-42.6,87.9-90.9,93.7C35.1,209.6-17.1,128.5,9.5,63 C23.3,28.7,55.4,8.3,91,3.4"
                            ></path>
                          </svg>
                        </div>
                        <div class="sign sign_a">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 130.6 80"
                            class="animate"
                          >
                            <line
                              class="stroke-an"
                              x1="2.4"
                              y1="2.1"
                              x2="5.7"
                              y2="77.1"
                            ></line>
                            <path
                              class="stroke-an"
                              d="M11.5,37.7c-0.8,37.6,36.6,36.7,36.8,8.8c0.1-22.8-25.8-26.4-28.1-3.9c-2.4,23.3,28,27.8,29.9,0.5c-1,18.3,8.1,32.6,9.9-0.4c1.8-33,0.8,21.5,0.8,21.5S85.3-3.8,82.2,53c-2,36.9,13.7-2.3,13.7-2.3"
                            ></path>
                            <line
                              class="stroke-an"
                              x1="88.6"
                              y1="53.1"
                              x2="128.1"
                              y2="54.7"
                            ></line>
                          </svg>
                        </div>
                        <div class="sign sign_b">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 130.6 80"
                            class="animate"
                          >
                            <line
                              class="stroke-an"
                              x1="2.4"
                              y1="2.1"
                              x2="5.7"
                              y2="77.1"
                            ></line>
                            <path
                              class="stroke-an"
                              d="M11.5,37.7c-0.8,37.6,36.6,36.7,36.8,8.8c0.1-22.8-25.8-26.4-28.1-3.9c-2.4,23.3,28,27.8,29.9,0.5c-1,18.3,8.1,32.6,9.9-0.4c1.8-33,0.8,21.5,0.8,21.5S85.3-3.8,82.2,53c-2,36.9,13.7-2.3,13.7-2.3"
                            ></path>
                            <line
                              class="stroke-an"
                              x1="88.6"
                              y1="53.1"
                              x2="128.1"
                              y2="54.7"
                            ></line>
                          </svg>
                        </div>
                        <div class="crv_img">
                          <i class="load_bg" data-src="imgs/section3/9.png"></i>
                        </div>
                      </div>
                    </div>

                    <div
                      class="crv_circle _curTL2"
                      data-name="Winston Castro"
                      data-url="#"
                    >
                      <div class="crv_cont full_bg mg" data-dist="7">
                        <div class="crv_stroke">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 202 202"
                          >
                            <path
                              class="stroke-an svg-stroke"
                              fill="none"
                              stroke-width="1"
                              d="M91,3.4C149.3-4.5,203.9,49.1,199.9,107c-3.4,49.3-42.6,87.9-90.9,93.7C35.1,209.6-17.1,128.5,9.5,63 C23.3,28.7,55.4,8.3,91,3.4"
                            ></path>
                          </svg>
                        </div>
                        <div class="sign sign_a">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 130.6 80"
                            class="animate"
                          >
                            <line
                              class="stroke-an"
                              x1="2.4"
                              y1="2.1"
                              x2="5.7"
                              y2="77.1"
                            ></line>
                            <path
                              class="stroke-an"
                              d="M11.5,37.7c-0.8,37.6,36.6,36.7,36.8,8.8c0.1-22.8-25.8-26.4-28.1-3.9c-2.4,23.3,28,27.8,29.9,0.5c-1,18.3,8.1,32.6,9.9-0.4c1.8-33,0.8,21.5,0.8,21.5S85.3-3.8,82.2,53c-2,36.9,13.7-2.3,13.7-2.3"
                            ></path>
                            <line
                              class="stroke-an"
                              x1="88.6"
                              y1="53.1"
                              x2="128.1"
                              y2="54.7"
                            ></line>
                          </svg>
                        </div>
                        <div class="sign sign_b">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 130.6 80"
                            class="animate"
                          >
                            <line
                              class="stroke-an"
                              x1="2.4"
                              y1="2.1"
                              x2="5.7"
                              y2="77.1"
                            ></line>
                            <path
                              class="stroke-an"
                              d="M11.5,37.7c-0.8,37.6,36.6,36.7,36.8,8.8c0.1-22.8-25.8-26.4-28.1-3.9c-2.4,23.3,28,27.8,29.9,0.5c-1,18.3,8.1,32.6,9.9-0.4c1.8-33,0.8,21.5,0.8,21.5S85.3-3.8,82.2,53c-2,36.9,13.7-2.3,13.7-2.3"
                            ></path>
                            <line
                              class="stroke-an"
                              x1="88.6"
                              y1="53.1"
                              x2="128.1"
                              y2="54.7"
                            ></line>
                          </svg>
                        </div>
                        <div class="crv_img">
                          <i
                            class="load_bg"
                            data-src="imgs/section3/10.png"
                          ></i>
                        </div>
                      </div>
                    </div>

                    <div
                      class="crv_circle _curTL2"
                      data-name="Robin Reid"
                      data-url="#"
                    >
                      <div class="crv_cont full_bg mg" data-dist="7">
                        <div class="crv_stroke">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 202 202"
                          >
                            <path
                              class="stroke-an svg-stroke"
                              fill="none"
                              stroke-width="1"
                              d="M91,3.4C149.3-4.5,203.9,49.1,199.9,107c-3.4,49.3-42.6,87.9-90.9,93.7C35.1,209.6-17.1,128.5,9.5,63 C23.3,28.7,55.4,8.3,91,3.4"
                            ></path>
                          </svg>
                        </div>
                        <div class="sign sign_a">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 130.6 80"
                            class="animate"
                          >
                            <line
                              class="stroke-an"
                              x1="2.4"
                              y1="2.1"
                              x2="5.7"
                              y2="77.1"
                            ></line>
                            <path
                              class="stroke-an"
                              d="M11.5,37.7c-0.8,37.6,36.6,36.7,36.8,8.8c0.1-22.8-25.8-26.4-28.1-3.9c-2.4,23.3,28,27.8,29.9,0.5c-1,18.3,8.1,32.6,9.9-0.4c1.8-33,0.8,21.5,0.8,21.5S85.3-3.8,82.2,53c-2,36.9,13.7-2.3,13.7-2.3"
                            ></path>
                            <line
                              class="stroke-an"
                              x1="88.6"
                              y1="53.1"
                              x2="128.1"
                              y2="54.7"
                            ></line>
                          </svg>
                        </div>
                        <div class="sign sign_b">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 130.6 80"
                            class="animate"
                          >
                            <line
                              class="stroke-an"
                              x1="2.4"
                              y1="2.1"
                              x2="5.7"
                              y2="77.1"
                            ></line>
                            <path
                              class="stroke-an"
                              d="M11.5,37.7c-0.8,37.6,36.6,36.7,36.8,8.8c0.1-22.8-25.8-26.4-28.1-3.9c-2.4,23.3,28,27.8,29.9,0.5c-1,18.3,8.1,32.6,9.9-0.4c1.8-33,0.8,21.5,0.8,21.5S85.3-3.8,82.2,53c-2,36.9,13.7-2.3,13.7-2.3"
                            ></path>
                            <line
                              class="stroke-an"
                              x1="88.6"
                              y1="53.1"
                              x2="128.1"
                              y2="54.7"
                            ></line>
                          </svg>
                        </div>
                        <div class="crv_img">
                          <i
                            class="load_bg"
                            data-src="imgs/section3/11.png"
                          ></i>
                        </div>
                      </div>
                    </div>

                    <div
                      class="crv_circle _curTL2"
                      data-name="Eda Santiago"
                      data-url="#"
                    >
                      <div class="crv_cont full_bg mg" data-dist="7">
                        <div class="crv_stroke">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 202 202"
                          >
                            <path
                              class="stroke-an svg-stroke"
                              fill="none"
                              stroke-width="1"
                              d="M91,3.4C149.3-4.5,203.9,49.1,199.9,107c-3.4,49.3-42.6,87.9-90.9,93.7C35.1,209.6-17.1,128.5,9.5,63 C23.3,28.7,55.4,8.3,91,3.4"
                            ></path>
                          </svg>
                        </div>
                        <div class="sign sign_a">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 130.6 80"
                            class="animate"
                          >
                            <line
                              class="stroke-an"
                              x1="2.4"
                              y1="2.1"
                              x2="5.7"
                              y2="77.1"
                            ></line>
                            <path
                              class="stroke-an"
                              d="M11.5,37.7c-0.8,37.6,36.6,36.7,36.8,8.8c0.1-22.8-25.8-26.4-28.1-3.9c-2.4,23.3,28,27.8,29.9,0.5c-1,18.3,8.1,32.6,9.9-0.4c1.8-33,0.8,21.5,0.8,21.5S85.3-3.8,82.2,53c-2,36.9,13.7-2.3,13.7-2.3"
                            ></path>
                            <line
                              class="stroke-an"
                              x1="88.6"
                              y1="53.1"
                              x2="128.1"
                              y2="54.7"
                            ></line>
                          </svg>
                        </div>
                        <div class="sign sign_b">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 130.6 80"
                            class="animate"
                          >
                            <line
                              class="stroke-an"
                              x1="2.4"
                              y1="2.1"
                              x2="5.7"
                              y2="77.1"
                            ></line>
                            <path
                              class="stroke-an"
                              d="M11.5,37.7c-0.8,37.6,36.6,36.7,36.8,8.8c0.1-22.8-25.8-26.4-28.1-3.9c-2.4,23.3,28,27.8,29.9,0.5c-1,18.3,8.1,32.6,9.9-0.4c1.8-33,0.8,21.5,0.8,21.5S85.3-3.8,82.2,53c-2,36.9,13.7-2.3,13.7-2.3"
                            ></path>
                            <line
                              class="stroke-an"
                              x1="88.6"
                              y1="53.1"
                              x2="128.1"
                              y2="54.7"
                            ></line>
                          </svg>
                        </div>
                        <div class="crv_img">
                          <i
                            class="load_bg"
                            data-src="imgs/section3/12.png"
                          ></i>
                        </div>
                      </div>
                    </div>

                    <div
                      class="crv_circle _curTL2"
                      data-name="Tommy Fox"
                      data-url="#"
                    >
                      <div class="crv_cont full_bg mg" data-dist="7">
                        <div class="crv_stroke">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 202 202"
                          >
                            <path
                              class="stroke-an svg-stroke"
                              fill="none"
                              stroke-width="1"
                              d="M91,3.4C149.3-4.5,203.9,49.1,199.9,107c-3.4,49.3-42.6,87.9-90.9,93.7C35.1,209.6-17.1,128.5,9.5,63 C23.3,28.7,55.4,8.3,91,3.4"
                            ></path>
                          </svg>
                        </div>
                        <div class="sign sign_a">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 130.6 80"
                            class="animate"
                          >
                            <line
                              class="stroke-an"
                              x1="2.4"
                              y1="2.1"
                              x2="5.7"
                              y2="77.1"
                            ></line>
                            <path
                              class="stroke-an"
                              d="M11.5,37.7c-0.8,37.6,36.6,36.7,36.8,8.8c0.1-22.8-25.8-26.4-28.1-3.9c-2.4,23.3,28,27.8,29.9,0.5c-1,18.3,8.1,32.6,9.9-0.4c1.8-33,0.8,21.5,0.8,21.5S85.3-3.8,82.2,53c-2,36.9,13.7-2.3,13.7-2.3"
                            ></path>
                            <line
                              class="stroke-an"
                              x1="88.6"
                              y1="53.1"
                              x2="128.1"
                              y2="54.7"
                            ></line>
                          </svg>
                        </div>
                        <div class="sign sign_b">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 130.6 80"
                            class="animate"
                          >
                            <line
                              class="stroke-an"
                              x1="2.4"
                              y1="2.1"
                              x2="5.7"
                              y2="77.1"
                            ></line>
                            <path
                              class="stroke-an"
                              d="M11.5,37.7c-0.8,37.6,36.6,36.7,36.8,8.8c0.1-22.8-25.8-26.4-28.1-3.9c-2.4,23.3,28,27.8,29.9,0.5c-1,18.3,8.1,32.6,9.9-0.4c1.8-33,0.8,21.5,0.8,21.5S85.3-3.8,82.2,53c-2,36.9,13.7-2.3,13.7-2.3"
                            ></path>
                            <line
                              class="stroke-an"
                              x1="88.6"
                              y1="53.1"
                              x2="128.1"
                              y2="54.7"
                            ></line>
                          </svg>
                        </div>
                        <div class="crv_img">
                          <i
                            class="load_bg"
                            data-src="imgs/section3/13.png"
                          ></i>
                        </div>
                      </div>
                    </div>

                    <div
                      class="crv_circle _curTL2"
                      data-name="Nina Mallin"
                      data-url="#"
                    >
                      <div class="crv_cont full_bg mg" data-dist="7">
                        <div class="crv_stroke">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 202 202"
                          >
                            <path
                              class="stroke-an svg-stroke"
                              fill="none"
                              stroke-width="1"
                              d="M91,3.4C149.3-4.5,203.9,49.1,199.9,107c-3.4,49.3-42.6,87.9-90.9,93.7C35.1,209.6-17.1,128.5,9.5,63 C23.3,28.7,55.4,8.3,91,3.4"
                            ></path>
                          </svg>
                        </div>
                        <div class="sign sign_a">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 130.6 80"
                            class="animate"
                          >
                            <line
                              class="stroke-an"
                              x1="2.4"
                              y1="2.1"
                              x2="5.7"
                              y2="77.1"
                            ></line>
                            <path
                              class="stroke-an"
                              d="M11.5,37.7c-0.8,37.6,36.6,36.7,36.8,8.8c0.1-22.8-25.8-26.4-28.1-3.9c-2.4,23.3,28,27.8,29.9,0.5c-1,18.3,8.1,32.6,9.9-0.4c1.8-33,0.8,21.5,0.8,21.5S85.3-3.8,82.2,53c-2,36.9,13.7-2.3,13.7-2.3"
                            ></path>
                            <line
                              class="stroke-an"
                              x1="88.6"
                              y1="53.1"
                              x2="128.1"
                              y2="54.7"
                            ></line>
                          </svg>
                        </div>
                        <div class="sign sign_b">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 130.6 80"
                            class="animate"
                          >
                            <line
                              class="stroke-an"
                              x1="2.4"
                              y1="2.1"
                              x2="5.7"
                              y2="77.1"
                            ></line>
                            <path
                              class="stroke-an"
                              d="M11.5,37.7c-0.8,37.6,36.6,36.7,36.8,8.8c0.1-22.8-25.8-26.4-28.1-3.9c-2.4,23.3,28,27.8,29.9,0.5c-1,18.3,8.1,32.6,9.9-0.4c1.8-33,0.8,21.5,0.8,21.5S85.3-3.8,82.2,53c-2,36.9,13.7-2.3,13.7-2.3"
                            ></path>
                            <line
                              class="stroke-an"
                              x1="88.6"
                              y1="53.1"
                              x2="128.1"
                              y2="54.7"
                            ></line>
                          </svg>
                        </div>
                        <div class="crv_img">
                          <i
                            class="load_bg"
                            data-src="imgs/section3/14.png"
                          ></i>
                        </div>
                      </div>
                    </div>

                    <div
                      class="crv_circle _curTL2"
                      data-name="Ava Clayton"
                      data-url="#"
                    >
                      <div class="crv_cont full_bg mg" data-dist="7">
                        <div class="crv_stroke">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 202 202"
                          >
                            <path
                              class="stroke-an svg-stroke"
                              fill="none"
                              stroke-width="1"
                              d="M91,3.4C149.3-4.5,203.9,49.1,199.9,107c-3.4,49.3-42.6,87.9-90.9,93.7C35.1,209.6-17.1,128.5,9.5,63 C23.3,28.7,55.4,8.3,91,3.4"
                            ></path>
                          </svg>
                        </div>
                        <div class="sign sign_a">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 130.6 80"
                            class="animate"
                          >
                            <line
                              class="stroke-an"
                              x1="2.4"
                              y1="2.1"
                              x2="5.7"
                              y2="77.1"
                            ></line>
                            <path
                              class="stroke-an"
                              d="M11.5,37.7c-0.8,37.6,36.6,36.7,36.8,8.8c0.1-22.8-25.8-26.4-28.1-3.9c-2.4,23.3,28,27.8,29.9,0.5c-1,18.3,8.1,32.6,9.9-0.4c1.8-33,0.8,21.5,0.8,21.5S85.3-3.8,82.2,53c-2,36.9,13.7-2.3,13.7-2.3"
                            ></path>
                            <line
                              class="stroke-an"
                              x1="88.6"
                              y1="53.1"
                              x2="128.1"
                              y2="54.7"
                            ></line>
                          </svg>
                        </div>
                        <div class="sign sign_b">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 130.6 80"
                            class="animate"
                          >
                            <line
                              class="stroke-an"
                              x1="2.4"
                              y1="2.1"
                              x2="5.7"
                              y2="77.1"
                            ></line>
                            <path
                              class="stroke-an"
                              d="M11.5,37.7c-0.8,37.6,36.6,36.7,36.8,8.8c0.1-22.8-25.8-26.4-28.1-3.9c-2.4,23.3,28,27.8,29.9,0.5c-1,18.3,8.1,32.6,9.9-0.4c1.8-33,0.8,21.5,0.8,21.5S85.3-3.8,82.2,53c-2,36.9,13.7-2.3,13.7-2.3"
                            ></path>
                            <line
                              class="stroke-an"
                              x1="88.6"
                              y1="53.1"
                              x2="128.1"
                              y2="54.7"
                            ></line>
                          </svg>
                        </div>
                        <div class="crv_img">
                          <i
                            class="load_bg"
                            data-src="imgs/section3/15.png"
                          ></i>
                        </div>
                      </div>
                    </div>

                    <div
                      class="crv_circle _curTL2"
                      data-name="Shana Hayes"
                      data-url="#"
                    >
                      <div class="crv_cont full_bg mg" data-dist="7">
                        <div class="crv_stroke">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 202 202"
                          >
                            <path
                              class="stroke-an svg-stroke"
                              fill="none"
                              stroke-width="1"
                              d="M91,3.4C149.3-4.5,203.9,49.1,199.9,107c-3.4,49.3-42.6,87.9-90.9,93.7C35.1,209.6-17.1,128.5,9.5,63 C23.3,28.7,55.4,8.3,91,3.4"
                            ></path>
                          </svg>
                        </div>
                        <div class="sign sign_a">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 130.6 80"
                            class="animate"
                          >
                            <line
                              class="stroke-an"
                              x1="2.4"
                              y1="2.1"
                              x2="5.7"
                              y2="77.1"
                            ></line>
                            <path
                              class="stroke-an"
                              d="M11.5,37.7c-0.8,37.6,36.6,36.7,36.8,8.8c0.1-22.8-25.8-26.4-28.1-3.9c-2.4,23.3,28,27.8,29.9,0.5c-1,18.3,8.1,32.6,9.9-0.4c1.8-33,0.8,21.5,0.8,21.5S85.3-3.8,82.2,53c-2,36.9,13.7-2.3,13.7-2.3"
                            ></path>
                            <line
                              class="stroke-an"
                              x1="88.6"
                              y1="53.1"
                              x2="128.1"
                              y2="54.7"
                            ></line>
                          </svg>
                        </div>
                        <div class="sign sign_b">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 130.6 80"
                            class="animate"
                          >
                            <line
                              class="stroke-an"
                              x1="2.4"
                              y1="2.1"
                              x2="5.7"
                              y2="77.1"
                            ></line>
                            <path
                              class="stroke-an"
                              d="M11.5,37.7c-0.8,37.6,36.6,36.7,36.8,8.8c0.1-22.8-25.8-26.4-28.1-3.9c-2.4,23.3,28,27.8,29.9,0.5c-1,18.3,8.1,32.6,9.9-0.4c1.8-33,0.8,21.5,0.8,21.5S85.3-3.8,82.2,53c-2,36.9,13.7-2.3,13.7-2.3"
                            ></path>
                            <line
                              class="stroke-an"
                              x1="88.6"
                              y1="53.1"
                              x2="128.1"
                              y2="54.7"
                            ></line>
                          </svg>
                        </div>
                        <div class="crv_img">
                          <i
                            class="load_bg"
                            data-src="imgs/section3/16.png"
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="cr_name">
                <h3 class="_inOut"></h3>
              </div>

              <div class="circle_set no-select buildup lower desktop_only">
                All Creatives
              </div>

              <div class="arrow_set prev static flex"></div>

              <div class="arrow_set next static flex"></div>
            </section>

            <section id="stories">
              <div class="story_wrap flex">
                <h4 class="_inOut">Our Story</h4>

                <div class="story_head">
                  <i
                    class="story_media img left load_img _secEle prx"
                    data-src="imgs/section4/2.jpg"
                  ></i>

                  <h2 class="_lines">
                    An art{" "}
                    <i
                      class="story_media img load_img _secEle prx"
                      data-src="imgs/section4/1.jpg"
                    ></i>{" "}
                    is to must have his <br />
                    measuring tools{" "}
                    <i class="story_media video _secEle prx">
                      <video preload="metadata" autoplay loop muted playsinline>
                        {" "}
                        <source
                          src="imgs/section4/4.mp4"
                          type="video/mp4"
                        />{" "}
                      </video>
                    </i>{" "}
                    not in <br />
                    the hand, but in the eye.
                  </h2>

                  <i
                    class="story_media img right load_img _secEle prx"
                    data-src="imgs/section4/3.jpg"
                  ></i>
                </div>

                <p class="_lines">
                  There are so many forms of love, the love of a partner, a
                  parent, a sibling, a child, a pet, a book, a piece of music, a
                  color, a memory—the list of beloved things and persons are
                  truly limitless. Inside Ithraeyat’s pages
                </p>
              </div>

              <div class="circle_set no-select buildup lower centered">
                More About <br />
                Ithraeyat
              </div>
            </section>

            <section id="join">
              <div class="section-sides flex">
                <div class="section-side flex">
                  <div class="content_set">
                    <div class="section_title flex">
                      <h4 class="_secEle">Join The experience</h4>
                      <a href="projects_en.php" class="mobile_only _secEle">
                        All Projects
                      </a>
                    </div>

                    <div class="side-content">
                      <p class="_secEle">Every artist was first an amateur</p>

                      <h3 class="_secEle">
                        A true artist is not one who <br />
                        is inspired, but one who <br />
                        inspires others.
                      </h3>

                      <div class="circle_set no-select buildup static desktop_only">
                        All Projects
                      </div>
                    </div>
                  </div>
                </div>

                <div class="section-side adjustable">
                  <div class="join_slider full_bg flex">
                    <div class="jn_circles zero-font">
                      <div
                        class="jn_circle"
                        data-color="#C09E9C"
                        data-title="Out of Time"
                        data-url="#1"
                      >
                        <div class="jn_circle_content">
                          <i class="full_bg">
                            <span
                              class="load_bg _curTL1"
                              data-src="imgs/section5/1.jpg"
                            ></span>
                          </i>
                        </div>
                      </div>
                      <div
                        class="jn_circle"
                        data-color="#9cc0b6"
                        data-title="Positive Ideas"
                        data-url="#2"
                      >
                        <div class="jn_circle_content">
                          <i class="full_bg">
                            <span
                              class="load_bg _curTL1"
                              data-src="imgs/section5/2.jpg"
                            ></span>
                          </i>
                        </div>
                      </div>
                      <div
                        class="jn_circle"
                        data-color="#b47b64"
                        data-title="Tiny World"
                        data-url="#3"
                      >
                        <div class="jn_circle_content">
                          <i class="full_bg">
                            <span
                              class="load_bg _curTL1"
                              data-src="imgs/section5/3.jpg"
                            ></span>
                          </i>
                        </div>
                      </div>
                    </div>
                    <div class="jn_title _secEle">
                      <h3></h3>
                    </div>
                  </div>
                  <i class="full_bg"></i>
                </div>
              </div>

              <div class="arrow_set prev static flex"></div>

              <div class="arrow_set next static flex"></div>
            </section>

            <section id="newsletter">
              <div class="section_content flex full_bg">
                <div class="content_set no-padding">
                  <h3 class="_inOut">
                    Be part of The Ithraeyat Experience, <br />
                    join our Newsletter.
                  </h3>
                  <h6 class="_inOut">
                    Your email address will be kept confidential and only used{" "}
                    <br />
                    to send our newsletter or respond to any queries
                  </h6>
                  <div class="form_set">
                    <form action="#">
                      <div class="input_set buildup">
                        <input
                          type="email"
                          name="email"
                          id="newsletter_email"
                        />
                        <label for="newsletter_email" class="full_bg flex">
                          Email Address
                        </label>
                        <div class="inline_submit flex _curTL2">
                          <span>Subscribe</span>
                          <i class="full_bg"></i>
                        </div>
                        <div class="input_border">
                          <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                          >
                            <line
                              class="svg-stroke"
                              fill="none"
                              stroke-miterlimit="10"
                              x1="0"
                              y1="100%"
                              x2="0"
                              y2="0"
                            ></line>
                            <line
                              class="svg-stroke"
                              fill="none"
                              stroke-miterlimit="10"
                              x1="0"
                              y1="0"
                              x2="100%"
                              y2="0"
                            ></line>
                            <line
                              class="svg-stroke"
                              fill="none"
                              stroke-miterlimit="10"
                              x1="100%"
                              y1="0"
                              x2="100%"
                              y2="100%"
                            ></line>
                            <line
                              class="svg-stroke"
                              fill="none"
                              stroke-miterlimit="10"
                              x1="100%"
                              y1="100%"
                              x2="0"
                              y2="100%"
                            ></line>
                          </svg>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="sub_footer">
                    <ul class="flex">
                      <li>
                        <a href="journey_en.php" class="_inOut">
                          Our Journey
                        </a>
                      </li>
                      <li>
                        <a href="downloads_en.php" class="_inOut">
                          Download Issues
                        </a>
                      </li>
                      <li>
                        <a href="static_en.php" class="_inOut">
                          Terms &amp; Conditions
                        </a>
                      </li>
                      <li>
                        <a href="static_en.php" class="_inOut">
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a href="contact_en.php" class="_inOut">
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <p class="copyrights _inOut">
                  © 2021 Ithraeyat . All right reserved.
                </p>
              </div>
            </section>

            <div
              class="indicator_set buildup _mainElement"
              style={{
                visibility: "hidden",
              }}
            >
              <i class="hori full_bg"></i>
              <i class="vert full_bg"></i>
            </div>

            <div
              class="mode_set no-select buildup _mainElement _curTL2"
              style={{
                visibility: "hidden",
              }}
            >
              <div class="mode_toggle">
                <span data-title1="Light" data-title2="Dark">
                  <i>Light</i> Mode
                </span>
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="currentColor">
                    <path
                      class="darkPath"
                      d="M18.7,12.1c-0.2,0-0.3,0-0.5,0.1c-0.5,0.5-1.2,0.8-1.8,1.1c-0.6,0.3-1.4,0.4-2.1,0.4c-1.7,0-3.2-0.7-4.3-1.8c-1.1-1.1-1.8-2.6-1.8-4.3c0-0.7,0.1-1.4,0.3-2c0.2-0.7,0.6-1.3,1-1.8C9.7,3.5,9.7,3.2,9.5,3C9.3,2.9,9.1,2.8,9,2.9c-1.8,0.5-3.3,1.5-4.4,3c-1.1,1.4-1.7,3.1-1.7,5c0,2.3,0.9,4.3,2.4,5.8c1.5,1.5,3.6,2.4,5.8,2.4c1.9,0,3.7-0.7,5.1-1.8c1.4-1.1,2.5-2.7,2.9-4.6C19.2,12.5,19,12.2,18.7,12.1z M15.6,16.5c-1.2,1-2.7,1.5-4.4,1.5c-2,0-3.8-0.8-5.1-2.1C4.8,14.6,4,12.8,4,10.9c0-1.6,0.5-3.1,1.5-4.4c0.6-0.8,1.5-1.5,2.4-2C7.8,4.7,7.6,4.9,7.6,5.2C7.3,5.9,7.2,6.7,7.2,7.6c0,2,0.8,3.8,2.1,5.1c1.3,1.3,3.1,2.1,5.1,2.1c0.9,0,1.7-0.1,2.5-0.4c0.3-0.1,0.5-0.2,0.8-0.3C17.1,15,16.4,15.8,15.6,16.5z"
                    ></path>
                    <path
                      class="lightPath"
                      d="M15.1705 7.22956C14.1631 6.22216 12.7409 5.57031 11.2002 5.57031C9.65943 5.57031 8.23721 6.19253 7.22981 7.22956C6.22241 8.23697 5.57056 9.65918 5.57056 11.1999C5.57056 12.7407 6.22241 14.1629 7.22981 15.1703C8.23721 16.1777 9.65943 16.8295 11.2002 16.8295C12.7409 16.8295 14.1631 16.2073 15.1705 15.1703C16.1779 14.1629 16.8298 12.7407 16.8298 11.1999C16.8298 9.65918 16.2075 8.23697 15.1705 7.22956ZM14.1039 14.1036C13.3631 14.8443 12.3261 15.2888 11.2002 15.2888C10.0742 15.2888 9.03721 14.8443 8.29647 14.1036C7.55573 13.3629 7.11129 12.3258 7.11129 11.1999C7.11129 10.074 7.55573 9.03696 8.29647 8.29623C9.03721 7.55549 10.0742 7.11105 11.2002 7.11105C12.3261 7.11105 13.3631 7.55549 14.1039 8.29623C14.8446 9.03696 15.289 10.074 15.289 11.1999C15.289 12.3258 14.8446 13.3629 14.1039 14.1036Z"
                    ></path>
                    <path
                      class="shines"
                      d="M21.6297 10.4297H19.3482C18.9334 10.4297 18.5778 10.7852 18.5778 11.2001C18.5778 11.6149 18.9334 11.9704 19.3482 11.9704H21.6297C22.0445 11.9704 22.4 11.6149 22.4 11.2001C22.4 10.7852 22.0445 10.4297 21.6297 10.4297Z"
                    ></path>
                    <path
                      class="shines"
                      d="M11.2001 18.5776C10.7853 18.5776 10.4297 18.9332 10.4297 19.348V21.6295C10.4297 22.0443 10.7853 22.3998 11.2001 22.3998C11.6149 22.3998 11.9705 22.0443 11.9705 21.6295V19.348C11.9705 18.9332 11.6149 18.5776 11.2001 18.5776Z"
                    ></path>
                    <path
                      class="shines"
                      d="M19.1111 18.0447L17.4814 16.4151C17.2148 16.1188 16.7111 16.1188 16.4148 16.4151C16.1185 16.7114 16.1185 17.1855 16.4148 17.4818L18.0444 19.1114C18.3407 19.4077 18.8148 19.4077 19.1111 19.1114C19.4074 18.8151 19.4074 18.341 19.1111 18.0447Z"
                    ></path>
                    <path
                      class="shines"
                      d="M11.2001 0C10.7853 0 10.4297 0.355554 10.4297 0.770367V3.05184C10.4297 3.46665 10.7853 3.82221 11.2001 3.82221C11.6149 3.82221 11.9705 3.46665 11.9705 3.05184V0.770367C11.9705 0.355554 11.6149 0 11.2001 0Z"
                    ></path>
                    <path
                      class="shines"
                      d="M19.1407 3.28863C18.8444 2.99233 18.3703 2.99233 18.074 3.28863L16.4444 4.91825C16.1481 5.21454 16.1481 5.68862 16.4444 5.98491C16.7111 6.28121 17.2148 6.28121 17.5111 5.98491L19.1407 4.35529C19.437 4.05899 19.437 3.58492 19.1407 3.28863Z"
                    ></path>
                    <path
                      class="shines"
                      d="M3.0519 10.4297H0.770428C0.355615 10.4297 6.10352e-05 10.7852 6.10352e-05 11.2001C6.10352e-05 11.6149 0.325986 11.9704 0.770428 11.9704H3.0519C3.46671 11.9704 3.82227 11.6149 3.82227 11.2001C3.82227 10.7852 3.46671 10.4297 3.0519 10.4297Z"
                    ></path>
                    <path
                      class="shines"
                      d="M5.95561 16.4151C5.68895 16.1188 5.18525 16.1188 4.88895 16.4151L3.25933 18.0447C2.96304 18.341 2.96304 18.8151 3.25933 19.1114C3.55563 19.4077 4.0297 19.4077 4.32599 19.1114L5.95561 17.4818C6.25191 17.1855 6.25191 16.7114 5.95561 16.4151Z"
                    ></path>
                    <path
                      class="shines"
                      d="M5.95561 4.91825L4.32599 3.28863C4.0297 2.99233 3.55563 2.99233 3.25933 3.28863C2.96304 3.58492 2.96304 4.05899 3.25933 4.35529L4.88895 5.98491C5.18525 6.28121 5.65932 6.28121 5.95561 5.98491C6.25191 5.68862 6.25191 5.21454 5.95561 4.91825Z"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>

            <div class="modes_helpers full_bg">
              <i class="a full_bg"></i>
              <i class="b full_bg"></i>
            </div>

            <div
              class="equalizer buildup _curTL2"
              style={{
                visibility: "hidden",
              }}
            >
              <span class="eq1"></span>
              <span class="eq2"></span>
              <span class="eq3"></span>
            </div>

            <div
              class="_item animated_circle buildup _curTL2"
              style={{
                visibility: "hidden",
              }}
            >
              <div class="circle_mag full_bg flex mg" data-dist="6">
                <strong></strong>
              </div>
            </div>

            <div
              class="_item animated_arrow prev _curTL2"
              style={{
                visibility: "hidden",
              }}
            >
              <div class="arrow_inner mg flex" data-dist="2">
                <svg
                  width="30"
                  height="20"
                  viewBox="0 0 30 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    class="svg-fill"
                    d="M0.569607 10.5296L9.70003 19.66C9.93782 19.8978 10.323 19.8978 10.5607 19.66C10.7985 19.4222 10.7985 19.0371 10.5607 18.7993L2.46936 10.7079H28.9999C29.3364 10.7079 29.6086 10.4357 29.6086 10.0992C29.6086 9.76277 29.3364 9.49051 28.9999 9.49051H2.46936L10.5607 1.39918C10.7985 1.16139 10.7985 0.776203 10.5607 0.538471C10.4419 0.419603 10.2861 0.360142 10.1304 0.360142C9.97463 0.360142 9.8189 0.419603 9.69998 0.538471L0.569548 9.6689C0.331816 9.90663 0.331816 10.2918 0.569607 10.5296Z"
                  ></path>
                </svg>
              </div>
            </div>

            <div
              class="_item animated_arrow next _curTL2"
              style={{
                visibility: "hidden",
              }}
            >
              <div class="arrow_inner mg flex" data-dist="2">
                <svg
                  width="30"
                  height="20"
                  viewBox="0 0 30 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    class="svg-fill"
                    d="M29.4303 10.5296L20.2999 19.66C20.0621 19.8978 19.6769 19.8978 19.4392 19.66C19.2014 19.4222 19.2014 19.0371 19.4392 18.7993L27.5306 10.7079H1.00001C0.663554 10.7079 0.391296 10.4357 0.391296 10.0992C0.391296 9.76277 0.663554 9.49051 1.00001 9.49051H27.5306L19.4392 1.39918C19.2014 1.16139 19.2014 0.776203 19.4392 0.538471C19.5581 0.419603 19.7138 0.360142 19.8696 0.360142C20.0253 0.360142 20.181 0.419603 20.3 0.538471L29.4304 9.6689C29.6681 9.90663 29.6681 10.2918 29.4303 10.5296Z"
                  ></path>
                </svg>
              </div>
            </div>

            <a
              href="#"
              class="view_btn mobile_only flex"
              style={{
                visibility: "hidden",
              }}
            >
              View
            </a>

            <div class="loader flex">
              <div
                class="music_tip full_bg flex _show"
                style={{
                  visibility: "hidden",
                }}
              >
                <p>
                  This Website contains music
                  <br /> click anywhere to enable media playback
                </p>
              </div>
              <div
                class="loader_wrap full_bg flex"
                style={{
                  visibility: "hidden",
                }}
              >
                <div class="ld_perc">0%</div>
                <div class="ld_tube">
                  <i class="vert full_bg"></i>
                  <i class="hori full_bg"></i>
                </div>
                <div class="loader_circle _ele">
                  <div class="loader_select"></div>
                  <div class="loader_img full_bg">
                    <i class="img-1 loader_bg" data-src="imgs/loader/1.jpg"></i>
                    <i class="img-2 loader_bg" data-src="imgs/loader/2.jpg"></i>
                    <i class="img-3 loader_bg" data-src="imgs/loader/3.jpg"></i>
                    <i class="img-4 loader_bg" data-src="imgs/loader/4.jpg"></i>
                  </div>
                  <div class="loader_shapes _ele flex">
                    <svg
                      width="532"
                      height="534"
                      viewBox="0 0 532 534"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0)">
                        <g id="shape-1">
                          <path d="M413.685 44.6592C401.415 35.7528 384.202 38.4797 375.303 50.7397C366.403 62.9997 369.143 80.2107 381.412 89.1171C393.682 98.0234 410.895 95.2965 419.794 83.0365C428.694 70.7765 425.954 53.5655 413.685 44.6592ZM424.038 65.0424C424.422 70.3793 423.206 75.8599 420.259 80.6887L417.711 81.0705L417.819 78.3026C420.076 74.3063 421.017 69.8556 420.752 65.5028L422.218 63.2484L424.038 65.0424ZM416.833 79.8944L416.778 81.3005L415.474 81.7154C415.786 81.3371 416.082 80.956 416.374 80.5535C416.531 80.3368 416.682 80.1156 416.833 79.8944ZM423.893 63.6133L422.688 62.4177L423.397 60.8424C423.62 61.7605 423.783 62.6827 423.893 63.6133ZM420.616 64.0337C420.518 63.2437 420.381 62.4544 420.204 61.6825L421.524 62.6406L420.616 64.0337ZM423.031 59.4426L421.953 61.8272L419.828 60.2844C418.819 56.8767 417.027 53.6755 414.495 50.9861L414.22 48.3664L416.815 48.6238C419.783 51.7429 421.871 55.4617 423.031 59.4426ZM413.465 49.9547C412.891 49.4154 412.289 48.9025 411.647 48.4178L413.289 48.3331L413.465 49.9547ZM415.791 47.5969L414.07 47.4256L413.632 45.7744C414.398 46.3491 415.113 46.9536 415.791 47.5969ZM398.07 40.3489C403.055 40.4413 408.066 41.9326 412.467 44.9288L413.121 47.4172L410.453 47.5604C406.669 45.0309 402.388 43.7581 398.119 43.6563L396.064 41.9654L398.07 40.3489ZM395.392 42.6033L396.691 43.6689C395.863 43.7014 395.036 43.7722 394.217 43.8964L395.392 42.6033ZM396.597 40.3575L395.212 41.4702L393.771 40.6134C394.709 40.4812 395.65 40.398 396.597 40.3575ZM377.624 49.3143C381.578 44.8192 386.81 41.9518 392.374 40.8567L394.56 42.1598L392.736 44.1639C387.932 45.1771 383.428 47.6935 380.022 51.6032L377.567 52.0524L377.624 49.3143ZM377.825 54.5652L377.609 52.9718L379.121 52.6885C378.984 52.8636 378.854 53.0431 378.723 53.2227C378.41 53.6668 378.104 54.1155 377.825 54.5652ZM376.046 51.2795C376.253 50.9947 376.466 50.7143 376.681 50.4447L376.643 52.2701L374.992 52.8494C375.323 52.3147 375.673 51.7934 376.046 51.2795ZM374.272 54.0759L376.717 53.2226L377.072 55.8626C375.625 58.5468 374.761 61.418 374.446 64.3284L374.442 64.3346L372.998 66.5197L371.093 64.6076C371.393 60.9871 372.439 57.3967 374.272 54.0759ZM371.092 69.0792C370.997 67.9984 370.978 66.9163 371.015 65.8365L372.594 67.4275L371.092 69.0792ZM379.473 53.767C386.705 43.8042 400.7 41.5871 410.67 48.8246C420.641 56.0622 422.869 70.0554 415.636 80.0182C408.404 89.981 394.409 92.1981 384.439 84.9606C374.469 77.7231 372.241 63.7298 379.473 53.767ZM385.469 86.7482L384.117 86.7597L383.646 85.5192C383.722 85.5839 383.809 85.6468 383.889 85.7053C384.408 86.0725 384.94 86.421 385.469 86.7482ZM374.384 68.7551L373.459 67.4878L374.315 66.1904C374.292 67.0434 374.314 67.9004 374.384 68.7551ZM380.525 87.2629C375.237 82.8566 372.064 76.734 371.227 70.3019L372.975 68.3754L374.608 70.6101L374.612 70.6039C375.455 75.7914 378.04 80.7028 382.229 84.3681L383.175 86.8322L380.525 87.2629ZM381.952 88.374C381.797 88.2616 381.642 88.1491 381.492 88.0305L383.468 87.7064L383.888 89.6565C383.234 89.2669 382.59 88.8373 381.952 88.374ZM384.966 90.2692L384.404 87.6677L387.097 87.6466C390.989 89.6111 395.261 90.3864 399.422 90.0505L401.942 91.1801L400.429 93.2775C395.215 93.8514 389.812 92.8882 384.966 90.2692ZM402.532 90.4455L401.198 89.8459C401.968 89.7239 402.726 89.5654 403.473 89.3703L402.532 90.4455ZM401.691 93.1159L402.782 91.6006L404.438 92.5383C403.534 92.7801 402.611 92.9703 401.691 93.1159ZM405.668 92.1735L403.373 90.8767L405.13 88.8613C408.518 87.6998 411.666 85.749 414.273 83.0563L416.866 82.2345L417.145 84.848C413.941 88.3367 409.961 90.8084 405.668 92.1735ZM417.76 81.9944L419.606 81.7182C419.435 81.9811 419.246 82.2412 419.057 82.5012C418.706 82.9842 418.337 83.4537 417.96 83.9079L417.76 81.9944Z"></path>
                          <path d="M405.679 65.3589C405.668 65.3881 405.656 65.4174 405.644 65.4467C405.664 65.4709 405.678 65.4906 405.7 65.5254L405.768 65.4326L405.675 65.3651L405.679 65.3589ZM396.397 58.6207L396.343 58.695C396.383 58.7051 396.412 58.7169 396.441 58.7287C396.461 58.7146 396.476 58.7067 396.49 58.6881L396.397 58.6207ZM398.951 74.6664C398.927 74.6867 398.907 74.7008 398.873 74.7227L398.966 74.7902L399.033 74.6973C399.01 74.69 398.981 74.6782 398.951 74.6664ZM389.717 67.9918C389.697 67.9676 389.677 67.9434 389.655 67.9085L389.601 67.9828L389.694 68.0503C389.701 68.0272 389.71 68.0149 389.717 67.9918Z"></path>
                          <path d="M408.635 74.4914C408.671 74.376 408.717 74.2865 408.775 74.2336C408.729 74.3231 408.687 74.4064 408.635 74.4914Z"></path>
                          <path d="M394.4 47.9718L392.44 50.6715L395.148 52.6371L397.108 49.9375L394.4 47.9718ZM394.944 51.3543L393.723 50.4682L394.609 49.2484L395.83 50.1345L394.944 51.3543Z"></path>
                          <path d="M400.33 46.0077L395.593 46.758L394.032 45.6245L392.899 47.1849L388.163 47.9352L389.223 54.5951L393.966 53.8493L395.521 54.9783L396.654 53.418L401.39 52.6676L400.33 46.0077ZM395.148 52.6372L392.44 50.6715L394.4 47.9718L397.108 49.9375L395.148 52.6372Z"></path>
                          <path d="M407.815 79.3229L403.078 80.0733L401.517 78.9397L400.384 80.5001L395.648 81.2504L396.708 87.9103L401.444 87.16L403 88.289L404.128 86.7349L408.864 85.9845L407.815 79.3229ZM402.627 85.9479L399.919 83.9822L401.883 81.2763L404.591 83.242L402.627 85.9479Z"></path>
                          <path d="M401.89 81.2807L399.925 83.9866L402.633 85.9523L404.597 83.2464L401.89 81.2807ZM402.429 84.6695L401.208 83.7834L402.094 82.5636L403.314 83.4497L402.429 84.6695Z"></path>
                          <path d="M417.409 63.6813L418.384 62.3377L417.04 61.3616L416.328 56.8931L410.576 57.8044L411.289 62.2835L410.319 63.621L411.657 64.5926L412.37 69.0717L418.122 68.1605L417.409 63.6813ZM414.714 65.3084L412.012 63.3472L413.977 60.6413L416.678 62.6025L414.714 65.3084Z"></path>
                          <path d="M413.977 60.6413L412.012 63.3471L414.714 65.3084L416.678 62.6025L413.977 60.6413ZM414.51 64.0255L413.289 63.1394L414.175 61.9196L415.395 62.8057L414.51 64.0255Z"></path>
                          <path d="M417.893 63.7965L419.026 62.2361L417.464 61.1026L416.71 56.3669L410.05 57.4221L410.804 62.1578L409.675 63.712L411.231 64.841L411.985 69.5767L418.645 68.5215L417.893 63.7965ZM411.651 64.5881L410.312 63.6165L411.283 62.2791L410.57 57.7999L416.322 56.8887L417.034 61.3571L418.378 62.3333L417.403 63.6769L418.114 68.1453L412.362 69.0566L411.651 64.5881Z"></path>
                          <path d="M413.977 60.6413L412.012 63.3472L414.714 65.3084L416.678 62.6025L413.977 60.6413ZM414.51 64.0255L413.289 63.1394L414.175 61.9196L415.395 62.8057L414.51 64.0255Z"></path>
                          <path d="M384.576 71.2559L385.708 69.6955L384.147 68.562L383.393 63.8263L376.732 64.8815L377.492 69.6217L376.364 71.1759L377.919 72.3049L378.673 77.0406L385.334 75.9854L384.576 71.2559ZM381.403 72.7723L378.695 70.8066L380.659 68.1008L383.367 70.0665L381.403 72.7723Z"></path>
                          <path d="M380.659 68.1006L378.695 70.8065L381.403 72.7722L383.367 70.0664L380.659 68.1006ZM381.198 71.4894L379.978 70.6033L380.863 69.3835L382.084 70.2696L381.198 71.4894Z"></path>
                          <path d="M407.98 73.7513C407.913 73.8441 407.857 73.946 407.81 74.063C407.878 73.9702 407.937 73.8621 407.98 73.7513Z"></path>
                          <path d="M414.985 76.5486C415.155 75.9627 414.921 75.3202 414.32 74.7416C413.8 74.232 413.039 73.8211 412.194 73.5768C410.747 73.1595 409.731 73.0081 409.045 73.1058C409.118 71.9489 408.687 70.4828 407.743 68.7199C406.978 67.2849 406.096 66.0491 405.694 65.521C405.674 65.4968 405.658 65.4664 405.638 65.4422C405.65 65.413 405.657 65.3899 405.673 65.3544C405.896 64.7218 406.368 63.2496 406.653 61.6318C407.037 59.4996 406.955 57.8796 406.414 56.8255C407.372 56.745 408.483 56.3224 409.264 55.8589C410.036 55.4078 410.662 54.7936 411.017 54.1345C411.416 53.4028 411.449 52.6797 411.118 52.1184C410.684 51.3871 409.725 51.0787 408.591 51.2858C408.402 50.2033 407.853 49.4738 407.099 49.3521C406.491 49.2511 405.882 49.5559 405.378 50.2111C404.932 50.7858 404.61 51.5822 404.464 52.4601C404.249 53.76 404.197 54.7053 404.303 55.3681C403.116 55.2162 401.574 55.647 399.688 56.6417C398.253 57.406 397.013 58.2929 396.49 58.6882C396.47 58.7022 396.455 58.7101 396.441 58.7287C396.412 58.7169 396.383 58.7051 396.343 58.695C395.756 58.4865 394.229 57.9832 392.541 57.6752C390.613 57.3341 389.116 57.363 388.063 57.771C388.05 57.0716 387.702 56.091 386.994 54.7072C386.59 53.9219 386.028 53.2492 385.442 52.8433C384.764 52.3699 384.084 52.2639 383.542 52.5416C382.863 52.8902 382.561 53.749 382.707 54.8383C381.859 54.9507 381.185 55.2932 380.816 55.801C380.686 55.9805 380.597 56.1809 380.544 56.3975C380.4 57.0396 380.654 57.7063 381.262 58.2895C381.378 58.4025 381.51 58.5077 381.653 58.6111C382.155 58.9755 382.779 59.2491 383.462 59.4041C384.321 59.6023 385.478 59.6765 386.4 59.4757C386.004 60.711 386.39 62.4472 387.561 64.6399C388.36 66.1464 389.287 67.4243 389.665 67.9069C389.686 67.931 389.708 67.9659 389.728 67.9901C389.721 68.0132 389.712 68.0256 389.704 68.0486C389.483 68.6919 389.009 70.1534 388.724 71.7713C388.311 74.0616 388.437 75.7513 389.086 76.7992C388.43 76.947 387.577 77.3397 386.47 77.9918C385.709 78.4413 385.079 79.0341 384.707 79.6521C384.277 80.3613 384.216 81.045 384.529 81.5654C384.626 81.7307 384.759 81.8741 384.914 81.9866C385.372 82.3194 386.068 82.4176 386.875 82.2568C387.028 83.0489 387.38 83.6728 387.857 84.0191C388.068 84.1721 388.304 84.2772 388.557 84.3192C389.209 84.4241 389.859 84.1295 390.404 83.495C390.888 82.9197 391.243 82.1183 391.382 81.2359C391.537 80.2798 391.517 78.9896 391.187 78.0501C392.356 78.1609 393.86 77.7307 395.69 76.7614C397.124 75.9971 398.36 75.1164 398.888 74.7149C398.912 74.6946 398.936 74.6744 398.967 74.6586C398.996 74.6704 399.019 74.6777 399.059 74.6878C399.692 74.9109 401.165 75.3844 402.779 75.6767C404.962 76.0705 406.602 75.9751 407.656 75.3973C407.702 76.2722 407.97 77.2326 408.292 77.9487C408.643 78.7425 409.167 79.4157 409.762 79.8475C409.78 79.861 409.793 79.87 409.811 79.8835C410.496 80.3614 411.205 80.4792 411.804 80.2144C412.576 79.8674 412.989 78.9472 412.915 77.7971C413.997 77.7408 414.78 77.288 414.985 76.5486ZM383.654 58.5133C382.938 58.3527 382.313 58.0408 381.891 57.6308C381.783 57.5329 381.648 57.3788 381.549 57.2028C381.45 57.0267 381.39 56.8225 381.437 56.6013C381.543 56.1297 382.2 55.7845 383.063 55.73C383.364 56.0714 383.609 56.4764 383.596 56.6373C383.566 56.6531 383.469 56.6959 383.252 56.7084C382.996 56.7215 382.805 56.9326 382.812 57.1835C382.819 57.3304 382.888 57.4564 383 57.5374C383.08 57.5958 383.179 57.6295 383.288 57.6233C384.056 57.5947 384.341 57.2536 384.447 56.9902C384.487 56.8962 384.499 56.8011 384.506 56.7015C384.516 56.6998 384.522 56.7043 384.533 56.7026C384.819 56.6738 385.222 56.4839 385.457 55.7563C385.534 55.5193 385.404 55.2549 385.156 55.1791C384.919 55.1016 384.655 55.2312 384.584 55.4726C384.514 55.6864 384.449 55.7624 384.421 55.7889C384.256 55.7547 383.885 55.3531 383.626 54.9284C383.482 54.1621 383.598 53.5465 383.936 53.3668C384.16 53.2547 384.513 53.3412 384.9 53.6032L384.95 53.6392C385.402 53.9675 385.844 54.5058 386.163 55.1347C387.347 57.4405 387.155 57.9915 387.068 58.0984L387.041 58.1356L387.02 58.1772C386.805 58.6168 385.202 58.8709 383.654 58.5133ZM394.406 61.3637L391.059 61.8938L391.592 65.2398L390.217 67.1346C388.8 65.2273 386.251 61.0884 387.493 59.286C388.726 57.496 393.507 58.6785 395.786 59.4628L394.406 61.3637ZM405.37 52.607C405.492 51.8918 405.758 51.2248 406.108 50.7695C406.394 50.4007 406.704 50.2093 406.953 50.2575C407.324 50.3192 407.621 50.875 407.716 51.6436C407.606 52.1213 407.373 52.6239 407.228 52.7073C407.198 52.6955 407.112 52.6325 406.978 52.4509C406.831 52.2495 406.544 52.2018 406.337 52.3443C406.135 52.4913 406.088 52.7783 406.231 52.9858C406.372 53.1827 406.515 53.3244 406.651 53.4233C406.942 53.6347 407.207 53.6475 407.398 53.6064C407.409 53.6047 407.419 53.603 407.424 53.5968C407.454 53.6851 407.502 53.7763 407.569 53.8533C407.61 53.9017 407.662 53.959 407.731 54.0085C407.948 54.166 408.303 54.2631 408.865 54.1137C409.112 54.0472 409.258 53.7939 409.187 53.5531C409.12 53.3061 408.867 53.1599 408.62 53.2265C408.41 53.2817 408.304 53.2711 408.27 53.2655C408.214 53.1209 408.326 52.6538 408.506 52.2362C409.176 52.0699 409.781 52.1219 410.116 52.3648C410.197 52.4233 410.262 52.4896 410.314 52.5746C410.533 52.9509 410.335 53.4315 410.195 53.6893C409.916 54.2049 409.418 54.6946 408.781 55.0641C407.508 55.8137 406.027 56.0812 405.542 55.8238L405.536 55.8193C405.524 55.8103 405.511 55.8013 405.493 55.7878C405.48 55.7788 405.468 55.7698 405.454 55.7501L405.421 55.7169L405.384 55.6899C405.304 55.6315 404.946 55.1731 405.37 52.607ZM390.465 81.0906C390.35 81.8104 390.074 82.4514 389.697 82.9057C389.605 83.0189 389.463 83.1619 389.289 83.2717C389.115 83.3815 388.912 83.4519 388.699 83.42C388.226 83.3415 387.835 82.7075 387.726 81.8534C388.053 81.5331 388.438 81.2639 388.597 81.2661C388.617 81.2903 388.665 81.3814 388.69 81.6076C388.714 81.8613 388.94 82.0446 389.198 82.0147C389.452 81.9909 389.636 81.7646 389.605 81.5064C389.523 80.7468 389.172 80.4735 388.895 80.3859C388.803 80.3567 388.702 80.3398 388.604 80.3444C388.608 80.3382 388.607 80.3275 388.605 80.3168C388.559 80.0282 388.345 79.6457 387.6 79.4458C387.354 79.3806 387.104 79.5299 387.039 79.7758C386.974 80.0217 387.123 80.272 387.37 80.3372C387.582 80.3967 387.667 80.449 387.693 80.4777C387.689 80.5221 387.655 80.5824 387.606 80.6505C387.466 80.8424 387.18 81.107 386.889 81.312L386.884 81.3182C386.137 81.5133 385.505 81.4326 385.31 81.1018C385.176 80.8819 385.241 80.5319 385.489 80.1255C385.784 79.6403 386.314 79.1454 386.934 78.7732C389.169 77.4547 389.719 77.6086 389.837 77.6941L389.91 77.7374C389.933 77.7447 389.951 77.7581 389.976 77.7761C390.405 78.0972 390.711 79.605 390.465 81.0906ZM390.328 76.8216L390.297 76.7992C388.575 75.5487 389.693 70.9054 390.468 68.6126L392.346 69.9755L392.879 73.3215L395.712 72.8727L396.231 72.7959L398.103 74.1543C396.165 75.5846 392.103 78.053 390.328 76.8216ZM401.135 69.2079L399.392 69.4839L398.354 70.9143L396.929 69.8797L395.186 70.1558L394.909 68.4133L393.477 67.3742L394.516 65.9439L394.238 64.2014L395.981 63.9253L397.015 62.5012L398.446 63.5403L400.189 63.2642L400.466 65.0067L401.891 66.0412L400.858 67.4654L401.135 69.2079ZM403.027 63.4337L402.495 60.0877L399.148 60.6179L397.271 59.2549C399.203 57.8309 403.27 55.3563 405.045 56.5876C406.811 57.8037 405.682 62.487 404.905 64.7966L403.027 63.4337ZM407.812 74.0737C406.597 75.839 401.912 74.7071 399.601 73.9279L400.963 72.0517L404.309 71.5216L403.777 68.1756L405.134 66.3057C406.477 68.1314 408.758 71.858 407.975 73.7574C407.975 73.7574 407.975 73.7574 407.971 73.7636C407.937 73.8621 407.878 73.9702 407.812 74.0737C407.817 74.0675 407.817 74.0675 407.812 74.0737ZM411.416 79.3937C411.022 79.5711 410.554 79.3165 410.318 79.1456C409.843 78.8099 409.404 78.2548 409.112 77.5887C408.583 76.4012 408.447 75.102 408.626 74.5038L408.63 74.4976C408.667 74.3822 408.713 74.2927 408.77 74.2398C408.77 74.2398 408.77 74.2398 408.775 74.2336C408.779 74.2274 408.794 74.2195 408.799 74.2133L408.861 74.1542C408.958 74.0456 409.444 73.7549 411.946 74.4654C412.48 74.6165 412.979 74.8554 413.369 75.1388C413.487 75.2242 413.594 75.3114 413.692 75.4109C414.029 75.741 414.18 76.0679 414.109 76.3093C414.007 76.6706 413.42 76.9061 412.642 76.9088C412.182 76.7352 411.715 76.4529 411.647 76.2994C411.665 76.2746 411.734 76.1924 411.925 76.0854C412.146 75.9626 412.228 75.6812 412.1 75.4658C411.977 75.2442 411.696 75.1627 411.48 75.29C410.811 75.6645 410.703 76.0872 410.728 76.3792C410.729 76.3899 410.731 76.4006 410.733 76.4113C410.638 76.4372 410.545 76.4738 410.46 76.5256C410.212 76.6856 409.943 77.0295 410.058 77.784C410.078 77.9123 410.144 78.0169 410.243 78.0889C410.336 78.1564 410.462 78.1912 410.58 78.1725C410.832 78.1381 411.003 77.9028 410.968 77.6507C410.939 77.4307 410.956 77.3294 410.967 77.3002C411.051 77.2759 411.234 77.3237 411.456 77.4091C411.619 77.4709 411.792 77.5586 411.967 77.6569C412.05 78.2849 411.958 78.842 411.724 79.164C411.629 79.2557 411.533 79.3368 411.416 79.3937Z"></path>
                        </g>
                        <g id="shape-2">
                          <path d="M497.14 167.008C496.459 170.482 495.096 173.619 492.983 176.45C491.237 178.799 489.016 180.62 486.535 182.15C484.598 183.344 482.561 184.323 480.417 185.058L478.817 177.368C482.661 175.8 485.67 173.191 487.753 169.48C489.828 165.784 490.463 161.882 489.797 157.789L497.37 155.057C497.63 156.327 497.814 157.605 497.898 158.898C498.082 161.652 497.669 164.323 497.14 167.008Z"></path>
                          <path d="M464.896 177.185L463.235 184.882C460.011 183.658 457.14 181.844 454.513 179.61C450.876 176.511 448.755 172.479 447.293 168.034C446.649 166.075 446.435 164.047 446.313 162.004C446.152 159.464 446.427 156.97 447.055 154.514C447.063 154.483 447.071 154.453 447.078 154.422L454.467 157.085C454.421 157.314 454.375 157.544 454.345 157.781C453.717 161.874 454.322 165.761 456.343 169.403C458.311 172.953 461.183 175.532 464.896 177.185Z"></path>
                          <path d="M488.932 141.285L483.166 146.664C482.5 146.143 481.826 145.646 481.106 145.21C478.993 143.917 476.681 143.152 474.215 142.899C473.503 142.823 472.783 142.777 472.362 142.738C468.212 142.807 464.69 143.909 461.588 146.136L455.815 140.749C456.336 140.336 456.856 139.93 457.4 139.548C459.85 137.826 462.53 136.556 465.432 135.814C466.818 135.462 468.265 135.324 469.69 135.133C470.463 135.026 471.252 134.972 472.04 134.972C474.935 134.972 477.745 135.431 480.471 136.426C483.518 137.543 486.298 139.089 488.786 141.162C488.832 141.201 488.878 141.239 488.932 141.285Z"></path>
                          <path d="M485.111 148.301C486.198 147.314 487.24 146.357 488.289 145.409C489.881 143.963 491.482 142.524 493.059 141.063C493.373 140.772 493.549 140.81 493.848 141.055C497.048 143.649 498.878 147.054 499.797 151.002C499.889 151.392 499.774 151.53 499.414 151.66C496.183 152.785 492.959 153.932 489.736 155.072C489.207 155.256 489.215 155.264 489.016 154.713C488.204 152.479 487.025 150.466 485.41 148.706C485.318 148.592 485.226 148.454 485.111 148.301Z"></path>
                          <path d="M459.559 147.842C457.568 149.755 456.144 152.012 455.156 154.621C454.513 154.391 453.901 154.177 453.288 153.948C450.692 152.999 448.097 152.035 445.501 151.094C445.133 150.964 445.003 150.818 445.11 150.405C445.976 146.893 447.622 143.833 450.302 141.376C450.616 141.086 450.968 140.841 451.29 140.565C451.481 140.405 451.634 140.412 451.81 140.581C452.254 141.002 452.714 141.415 453.158 141.836C455.21 143.748 457.262 145.661 459.307 147.574C459.391 147.651 459.46 147.735 459.559 147.842Z"></path>
                          <path d="M472.056 188.883C469.896 188.937 467.798 188.57 465.746 187.904C465.371 187.782 465.294 187.621 465.379 187.238C466.014 184.316 466.642 181.393 467.247 178.47C467.316 178.118 467.446 178.08 467.76 178.156C470.494 178.814 473.235 178.853 475.984 178.24C476.351 178.156 476.451 178.271 476.512 178.592C477.094 181.592 477.684 184.591 478.281 187.583C478.342 187.889 478.22 187.996 477.944 188.08C476.022 188.623 474.069 188.937 472.056 188.883Z"></path>
                        </g>
                        <g id="shape-3">
                          <path d="M477.304 245.517C481.536 245.517 485.767 245.517 489.998 245.517C490.051 245.371 490.097 245.226 490.151 245.08C487.687 242.285 485.231 239.483 482.454 236.328C491.322 236.328 499.654 236.328 508.591 236.328C505.89 239.483 503.48 242.293 500.702 245.54C505.354 245.54 509.516 245.54 513.686 245.54C513.778 245.723 513.87 245.899 513.962 246.083C511.192 249.483 508.415 252.883 505.331 256.658C509.723 256.658 513.671 256.658 518.109 256.658C517.481 257.538 517.191 258.044 516.816 258.472C514.138 261.528 511.475 264.598 508.728 267.592C507.925 268.473 507.994 269.047 508.767 269.866C511.521 272.776 514.222 275.732 516.938 278.68C517.351 279.124 517.726 279.598 518.476 280.494C514.092 280.494 510.167 280.494 506.249 280.494C506.165 280.67 506.081 280.839 505.997 281.015C508.728 284.445 511.452 287.868 514.184 291.298C514.107 291.459 514.038 291.612 513.962 291.773C509.685 291.773 505.408 291.773 501.131 291.773C501.069 291.926 501.008 292.079 500.947 292.233C503.449 295.058 505.951 297.884 508.728 301.015C499.922 301.015 491.566 301.015 482.637 301.015C485.407 297.876 487.886 295.058 490.365 292.24C490.304 292.087 490.235 291.934 490.174 291.788C485.95 291.788 481.734 291.788 477.511 291.788C477.427 291.628 477.343 291.467 477.258 291.306C479.99 287.883 482.722 284.461 485.453 281.038C485.384 280.877 485.315 280.724 485.246 280.563C481.306 280.563 477.366 280.563 473.425 280.563C473.364 280.402 473.295 280.242 473.234 280.081C476.578 276.245 479.929 272.408 483.334 268.503C479.791 264.705 476.317 260.984 472.851 257.263C472.92 257.102 472.989 256.933 473.058 256.773C477.113 256.773 481.168 256.773 485.231 256.773C485.3 256.619 485.369 256.466 485.438 256.313C482.653 252.906 479.868 249.498 477.082 246.099C477.159 245.907 477.236 245.716 477.304 245.517ZM507.695 268.702C503.625 262.914 499.616 257.217 495.637 251.558C495.316 251.704 495.178 251.727 495.124 251.803C491.398 257.11 487.664 262.408 484.007 267.753C483.747 268.136 483.877 269.055 484.168 269.506C486.386 272.906 488.682 276.252 490.977 279.598C492.454 281.758 493.961 283.894 495.668 286.344C499.792 280.303 503.709 274.552 507.695 268.702Z"></path>
                          <path d="M495.484 257.301C496.716 259.077 497.703 260.494 498.682 261.926C499.983 263.832 501.33 265.716 502.546 267.669C502.837 268.128 502.967 269.032 502.707 269.43C500.633 272.646 498.46 275.8 496.295 278.955C496.127 279.2 495.782 279.33 495.392 279.598C492.99 276.091 490.625 272.684 488.33 269.223C488.108 268.894 488.131 268.159 488.353 267.822C490.602 264.407 492.936 261.038 495.484 257.301ZM495.744 273.496C496.93 271.765 497.863 270.44 498.743 269.078C498.896 268.832 498.965 268.35 498.835 268.136C497.886 266.589 496.869 265.08 495.713 263.319C494.535 265.073 493.602 266.397 492.745 267.768C492.569 268.059 492.492 268.618 492.653 268.878C493.563 270.333 494.566 271.742 495.744 273.496Z"></path>
                        </g>
                        <g id="shape-4">
                          <path d="M448.066 376.271L479.158 405.384L442.945 383.073L448.066 376.271Z"></path>
                          <path d="M443.06 382.92L474.152 412.033L440.829 391.505L439.789 388.154L443.06 382.92Z"></path>
                          <path d="M440.871 384.694L458.843 360.825C461.141 357.773 465.497 357.152 468.554 359.453L492.404 377.411C495.455 379.707 496.072 384.064 493.77 387.122L475.798 410.991C473.5 414.044 469.144 414.665 466.087 412.364L442.237 394.406C439.18 392.105 438.573 387.746 440.871 384.694ZM492.541 386.197C494.333 383.818 493.855 380.42 491.477 378.629L467.626 360.672C465.249 358.881 461.851 359.361 460.059 361.741L442.088 385.61C440.296 387.989 440.774 391.387 443.152 393.178L467.002 411.136C469.38 412.926 472.778 412.446 474.569 410.066L492.541 386.197Z"></path>
                          <path d="M465.188 358.797L466.785 360.288L493.956 385.729L457.738 363.425L461.218 358.943L465.188 358.797Z"></path>
                          <path d="M457.968 363.119L489.06 392.232L452.847 369.921L457.968 363.119Z"></path>
                          <path d="M452.962 369.768L484.054 398.881L447.84 376.57L452.962 369.768Z"></path>
                        </g>
                        <g id="shape-5">
                          <path d="M386.242 484.018C389.133 484.696 392.005 484.858 394.894 483.996C390.606 483.886 386.933 482.439 384.162 479.019C386.972 480.347 389.933 480.903 393.003 481.021C390.947 480.224 389.002 479.246 387.33 477.78C385.669 476.315 384.28 474.651 383.371 472.581C386.34 474.924 389.583 476.653 393.289 477.477C389.696 474.861 387.528 471.336 386.574 467.027C389.069 470.35 391.886 473.262 396.084 474.867C395.64 474.098 395.29 473.489 394.933 472.885C394.755 472.589 394.58 472.298 394.395 472.006C394.318 471.892 394.207 471.697 394.135 471.704C393.28 471.809 393.2 471.023 392.888 470.578C392.281 469.722 391.784 468.783 391.238 467.88C391.185 467.786 391.069 467.634 391.001 467.647C390.197 467.781 390.112 467.027 389.828 466.618C389.214 465.739 388.702 464.782 388.149 463.857C388.082 463.744 387.942 463.562 387.875 463.575C387.157 463.72 387.069 463.064 386.823 462.704C386.188 461.773 385.659 460.781 385.043 459.836C384.889 459.597 384.581 459.409 384.301 459.334C383.827 459.206 383.329 459.172 382.836 459.107C382.827 459.046 382.819 458.985 382.811 458.923C384.289 457.793 385.766 456.662 387.377 455.428C387.321 455.972 387.221 456.396 387.248 456.809C387.276 457.173 387.338 457.607 387.56 457.871C388.292 458.727 389.094 459.51 389.869 460.334C390.189 460.677 390.587 460.969 390.491 461.563C390.461 461.75 390.699 462.011 390.866 462.191C391.63 463.013 392.443 463.798 393.187 464.645C393.401 464.886 393.429 465.288 393.562 465.601C393.658 465.826 393.773 466.065 393.942 466.235C394.712 467.052 395.524 467.837 396.27 468.673C396.484 468.914 396.547 469.299 396.679 469.622C396.741 469.767 396.755 469.949 396.856 470.055C397.581 470.839 398.319 471.614 399.121 472.359C398.72 468.069 396.726 464.518 394.068 461.234C395.996 462.167 397.685 463.428 399.079 465.049C400.474 466.669 401.699 468.42 402.447 470.469C402.587 466.671 401.834 463.066 400.275 459.605C401.533 460.444 402.367 461.684 403.144 462.901C403.944 464.148 404.614 465.515 405.088 466.915C405.557 468.309 405.711 469.82 405.981 471.194C406.753 468.271 406.801 465.209 406.249 462.057C407.296 462.971 408.333 465.385 408.684 467.708C408.99 469.758 408.753 471.779 408.305 473.789C409.831 471.234 410.523 468.46 410.603 465.479C411.604 467.391 411.907 469.424 411.699 471.509C411.486 473.599 410.607 475.487 409.334 477.376C411.678 475.891 413.148 473.918 414.146 471.506C414.557 472.358 414.195 474.87 413.067 476.861C412.131 478.511 410.759 479.754 409.255 480.876C409.28 480.934 409.316 480.993 409.341 481.051C409.999 480.74 410.669 480.469 411.301 480.11C411.941 479.736 412.526 479.279 413.316 478.925C413.029 479.52 412.803 480.145 412.452 480.694C411.38 482.343 409.853 483.396 407.948 483.881C407.456 484.006 407.378 484.182 407.525 484.638C407.812 485.555 408.042 486.497 408.176 487.58C407.168 486.993 406.164 486.412 405.105 485.797C404.194 487.505 402.954 488.82 401.23 489.553C400.408 489.902 399.481 490.014 398.458 490.277C399.671 489.079 400.733 488.035 401.796 486.98C401.742 486.896 401.683 486.806 401.629 486.723C398.581 489.229 395.247 490.441 391.318 489.151C393.802 488.705 396.102 487.879 398.115 485.962C395.948 486.696 393.904 487.037 391.817 486.678C389.727 486.303 387.844 485.48 386.242 484.018Z"></path>
                          <path d="M367.615 474.899C374.49 469.204 377.327 461.434 379.242 453.013C378.394 452.938 377.607 452.867 376.819 452.795C376.042 452.725 375.264 452.666 374.41 452.596C374.3 453.586 374.279 454.479 374.924 455.296C375.097 455.51 375.13 455.842 375.218 456.121C374.869 456.157 374.483 456.307 374.185 456.208C373.361 455.924 372.925 455.216 372.709 454.418C372.554 453.824 372.511 453.202 372.386 452.421C371.375 452.511 370.303 452.521 369.266 452.728C368.391 452.896 368.181 453.452 368.472 454.299C368.82 455.333 368.663 455.935 367.946 456.32C367.189 456.717 366.363 456.481 365.763 455.698C364.963 454.653 364.923 453.228 365.677 452.083C366.546 450.762 367.792 450.059 369.354 449.972C370.427 449.912 371.507 449.962 372.622 449.957C372.723 448.867 372.74 447.843 371.879 447.008C371.792 446.921 371.735 446.656 371.791 446.604C371.918 446.468 372.125 446.348 372.307 446.334C373.031 446.271 373.814 446.866 374.177 447.832C374.369 448.359 374.46 448.945 374.511 449.503C374.552 449.934 374.698 450.112 375.125 450.141C376.545 450.22 377.966 450.337 379.385 450.378C379.571 450.381 379.875 450.061 379.931 449.845C380.203 448.75 380.405 447.642 380.634 446.542C380.723 446.117 380.806 445.697 380.859 445.425C379.989 444.906 379.175 444.498 378.454 443.971C377.887 443.557 377.623 442.911 377.806 442.192C377.867 441.944 378.122 441.748 378.373 441.421C379.009 442.756 380.043 443.188 381.276 443.362C381.597 442.182 381.796 441.018 382.228 439.945C383.101 437.784 385.322 436.479 387.358 437.262C388.397 437.661 389.149 438.782 389.004 439.702C388.842 440.712 387.893 441.198 386.978 440.733C386.793 440.643 386.631 440.506 386.454 440.401C385.761 439.987 385.11 440.119 384.789 440.847C384.429 441.662 384.183 442.524 383.89 443.375C383.745 443.804 384.022 443.901 384.345 444.058C385.001 444.374 385.683 444.672 386.246 445.118C387.168 445.857 387.173 447.01 386.282 447.585C385.702 446.411 384.749 445.82 383.415 445.829C383.318 446.193 383.198 446.516 383.137 446.852C382.928 448.052 382.729 449.254 382.516 450.526C386.772 450.669 390.952 450.612 395.11 449.809C399.269 449.006 403.083 447.426 406.527 444.934C406.575 444.984 406.628 445.04 406.682 445.086C406.366 445.53 406.066 445.981 405.73 446.412C403.155 449.712 399.761 451.703 395.73 452.697C392.32 453.534 388.865 453.605 385.387 453.445C384.285 453.392 383.192 453.323 382.047 453.264C381.749 454.639 381.464 456.004 381.152 457.36C380.279 461.121 379.069 464.755 376.905 468.001C374.723 471.261 371.768 473.522 368.063 474.817C367.915 474.862 367.76 474.875 367.615 474.899Z"></path>
                        </g>
                        <g id="shape-6">
                          <path d="M244.078 503.724C243.657 503.724 242.745 503.609 242.278 504.275L242.424 504.565H249.461C250.226 504.565 250.655 504.986 250.847 505.682C251.076 506.555 251.283 507.435 251.497 508.315C252.125 510.862 254.453 512.653 257.125 512.645C257.164 512.53 257.278 512.393 257.248 512.293C256.589 509.944 255.556 507.848 253.343 506.516C252.669 506.111 251.819 505.767 251.811 504.535"></path>
                          <path d="M291.306 510.411C291.275 510.442 291.253 510.487 291.215 510.518C291.199 510.518 291.176 510.525 291.161 510.525C291.169 510.518 291.184 510.502 291.192 510.495C291.23 510.472 291.275 510.449 291.306 510.411Z"></path>
                          <path d="M299.385 503.984L298.091 505.308C296.23 504.979 294.676 505.621 294.224 507.175C293.795 508.651 293.719 510.128 291.858 510.694C291.827 510.725 291.781 510.748 291.743 510.778C291.735 510.786 291.72 510.801 291.712 510.809C290.48 510.962 289.255 511.1 287.976 511.245C288.228 507.718 289.921 506.035 293.075 505.958C293.642 505.943 294.048 505.836 294.224 505.04C291.766 505.04 289.446 505.093 287.118 505.009C286.176 504.979 285.434 505.139 284.614 505.667C282.011 507.351 278.649 506.907 276.322 504.696C278.933 502.239 282.133 501.842 285.166 503.563C285.495 503.747 285.847 503.999 286.199 504.015C288.428 504.045 290.663 504.03 293.083 504.03C291.827 503.158 290.549 502.568 289.714 501.597C288.849 500.579 288.114 499.294 288.305 497.725C291.889 498.421 294.515 500.097 295.38 503.77C296.804 503.731 297.792 504.787 299.385 503.984Z"></path>
                          <path d="M275.901 487.694C272.8 486.394 272.064 483.57 271.391 480.647C271.123 481.137 270.985 481.55 270.985 481.956C270.985 483.433 271.069 484.894 271.054 486.371C271.046 487.954 270.954 489.554 270.901 491.137C270.862 492.117 271.115 492.958 271.643 493.838C273.136 496.317 272.401 499.477 269.867 501.536C268.925 500.028 268.19 498.475 268.312 496.692C268.389 495.568 268.496 494.252 269.116 493.41C269.882 492.377 270.127 491.367 270.165 490.212C270.188 489.179 270.211 488.138 270.127 487.113C269.974 485.246 269.622 483.402 270.142 481.535C270.211 481.29 269.913 480.946 269.652 480.341C268.802 482.071 269.293 483.869 267.937 485.062C266.697 486.156 265.265 486.7 263.55 487.381C263.802 486.248 264.047 485.399 264.185 484.534C264.545 482.315 265.74 480.869 267.968 480.41C269.17 480.165 269.729 479.354 269.951 478.314C270.112 477.602 269.982 476.829 269.982 475.674L271.429 475.85C270.747 478.13 270.671 478.872 273.228 480.227C273.458 480.349 273.711 480.426 273.94 480.548C276.322 481.91 277.218 484.986 275.901 487.694Z"></path>
                          <path d="M271.414 475.85L269.966 475.674L270.548 475.315L271.414 475.85Z"></path>
                          <path d="M266.934 504.734C266.069 505.032 265.395 505.246 264.744 505.506C262.263 506.501 259.844 506.402 257.439 505.17C256.842 504.864 256.084 504.764 255.403 504.757C251.36 504.68 247.317 504.657 243.274 504.634C242.853 504.634 241.941 504.749 241.474 504.083L241.62 503.793H248.657C249.422 503.793 249.851 503.372 250.043 502.675C250.272 501.803 250.479 500.923 250.693 500.043C251.321 497.496 253.649 495.705 256.321 495.713C256.36 495.828 256.475 495.965 256.444 496.065C255.785 498.414 254.752 500.51 252.539 501.842C251.865 502.247 251.015 502.591 251.007 503.823C253.741 503.678 256.421 504.389 258.994 502.882C259.805 502.4 261.031 502.255 261.972 502.446C263.397 502.721 264.752 503.41 266.123 503.969C266.406 504.068 266.597 504.405 266.934 504.734Z"></path>
                          <path d="M278.32 521.926C277.685 524.734 275.633 526.609 272.822 527.022C272.363 527.098 271.643 527.359 271.567 527.665C271.352 528.483 270.901 531.391 271.429 531.758L270.502 532.829L270.074 532.5C270.112 532.477 270.288 529.555 270.15 527.91C270.127 527.527 269.438 527.121 268.979 526.861C268.09 526.364 266.896 526.188 266.276 525.484C265.227 524.298 264.499 522.821 263.695 521.436C263.488 521.092 263.511 520.633 263.343 519.837C266.536 520.809 269.032 522.049 270.135 525.216C270.273 523.196 270.158 521.261 270.311 519.34C270.403 518.177 270.234 517.259 269.584 516.272C269.116 515.576 268.887 514.619 268.825 513.755C268.688 511.811 269.576 510.181 270.832 508.36C271.482 509.5 271.995 510.434 272.524 511.36C273.542 513.112 273.412 514.788 272.309 516.463C271.927 517.045 271.574 517.68 271.391 518.338C271 519.684 271.092 524.191 271.421 525.637C273.335 522.263 275.579 521.062 278.32 521.926Z"></path>
                          <path d="M271.919 528.675L271.904 528.682L271.697 528.843L270.663 529.662"></path>
                          <path d="M270.433 534L240.402 503.992L270.433 473.983L300.465 503.992L270.433 534ZM242.699 503.984L270.426 531.689L298.152 503.984L270.426 476.279L242.699 503.984Z"></path>
                        </g>
                        <g id="shape-7">
                          <path d="M163.597 475.069L174.412 469.248C174.788 469.042 174.933 468.576 174.73 468.194C174.524 467.818 174.058 467.672 173.675 467.874L163.26 473.475L158.871 455.057C158.861 455.009 158.84 454.965 158.82 454.921C158.864 454.917 158.905 454.92 158.953 454.91L167.461 452.599C167.67 452.54 167.851 452.4 167.949 452.201C168.048 452.002 168.058 451.776 167.982 451.568L164.695 442.931C164.55 442.552 164.132 442.344 163.739 442.465L155.061 445.152C154.849 445.218 154.681 445.366 154.59 445.568C154.498 445.77 154.488 445.996 154.578 446.194L158.034 454.454C158.034 454.454 158.041 454.457 158.044 454.467C157.972 454.474 157.897 454.488 157.832 454.516L139.438 461.793L135.872 450.156C135.744 449.742 135.312 449.51 134.898 449.638C134.484 449.766 134.252 450.197 134.38 450.611L137.974 462.348L126.452 466.579C126.045 466.727 125.841 467.172 125.99 467.579C126.138 467.986 126.584 468.19 126.991 468.042L138.417 463.849L143.562 482.258L135.397 484.79C135.185 484.856 135.018 485.004 134.926 485.206C134.834 485.408 134.825 485.634 134.914 485.832L138.37 494.092C138.443 494.273 138.58 494.409 138.745 494.491C138.909 494.573 139.105 494.593 139.3 494.545L147.808 492.234C148.016 492.175 148.197 492.034 148.296 491.836C148.395 491.637 148.404 491.411 148.328 491.202L145.284 483.198L162.147 475.768L163.981 487.45C164.051 487.878 164.449 488.161 164.873 488.098C165.297 488.036 165.591 487.634 165.521 487.207L163.597 475.069ZM156.345 446.388L163.508 444.17L166.231 451.322L159.212 453.236L156.345 446.388ZM146.547 490.95L139.527 492.864L136.668 486.019L143.83 483.801L146.547 490.95ZM144.995 481.611L139.877 463.284L157.571 456.282L161.837 474.187L144.995 481.611Z"></path>
                          <path d="M152.915 463.111L144.237 465.799C144.025 465.864 143.857 466.012 143.766 466.214C143.674 466.416 143.664 466.642 143.754 466.84L147.21 475.1C147.283 475.281 147.42 475.418 147.585 475.499C147.749 475.581 147.944 475.601 148.139 475.553L156.647 473.242C156.856 473.183 157.037 473.043 157.136 472.844C157.234 472.645 157.244 472.419 157.168 472.211L153.882 463.574C153.727 463.198 153.308 462.99 152.915 463.111ZM148.374 473.875L145.514 467.031L152.677 464.813L155.401 471.965L148.374 473.875Z"></path>
                          <path d="M139.068 487.023C138.927 487.064 138.815 487.171 138.75 487.301C138.685 487.431 138.686 487.585 138.738 487.722L140.066 490.901C140.117 491.021 140.207 491.117 140.31 491.168C140.419 491.222 140.549 491.236 140.676 491.204L143.95 490.31C144.09 490.269 144.213 490.176 144.278 490.046C144.342 489.915 144.349 489.765 144.297 489.628L143.03 486.308C142.934 486.055 142.652 485.916 142.389 485.998L139.068 487.023ZM142.249 487.125L143.136 489.453L140.854 490.071L139.919 487.839L142.249 487.125Z"></path>
                          <path d="M148.13 468.013C148.058 468.038 148 468.086 147.969 468.147C147.935 468.216 147.932 468.291 147.967 468.36L149.295 471.539C149.319 471.594 149.363 471.641 149.418 471.669C149.473 471.696 149.538 471.703 149.6 471.682L152.874 470.787C152.942 470.77 153 470.722 153.034 470.654C153.068 470.585 153.071 470.51 153.044 470.445L151.777 467.125C151.729 466.998 151.591 466.93 151.461 466.968L148.13 468.013ZM151.388 467.547L152.465 470.371L149.687 471.127L148.559 468.423L151.388 467.547Z"></path>
                          <path d="M163.774 450.401C163.914 450.36 164.037 450.267 164.102 450.137C164.166 450.007 164.173 449.856 164.121 449.719L162.854 446.399C162.757 446.146 162.476 446.007 162.213 446.089L158.878 447.124C158.737 447.166 158.625 447.272 158.56 447.402C158.495 447.533 158.496 447.687 158.548 447.823L159.876 451.003C159.927 451.122 160.017 451.218 160.12 451.269C160.229 451.324 160.36 451.337 160.486 451.306L163.774 450.401ZM160.664 450.173L159.729 447.94L162.055 447.216L162.942 449.544L160.664 450.173Z"></path>
                        </g>
                        <g id="shape-8">
                          <path d="M93.9742 388.475L73.8331 363.433C71.5344 360.575 67.3591 360.12 64.5032 362.417L39.4799 382.543C36.624 384.84 36.1727 389.016 38.4714 391.874L58.6125 416.916C60.9111 419.774 65.0864 420.228 67.9423 417.931L92.9656 397.806C95.8215 395.509 96.2728 391.333 93.9742 388.475ZM45.3433 391.555C43.7549 389.58 44.0666 386.695 46.0401 385.108C48.0136 383.521 50.8976 383.835 52.486 385.81C54.0745 387.785 53.7627 390.669 51.7892 392.256C49.8158 393.844 46.9318 393.53 45.3433 391.555ZM54.8769 383.887C53.2884 381.912 53.6002 379.028 55.5737 377.441C57.5471 375.853 60.4311 376.167 62.0196 378.142C63.608 380.117 63.2963 383.001 61.3228 384.589C59.3493 386.176 56.4653 385.862 54.8769 383.887ZM64.7801 375.922C63.1916 373.947 63.5034 371.063 65.4768 369.476C67.4503 367.888 70.3343 368.202 71.9227 370.177C73.5112 372.152 73.1994 375.036 71.226 376.624C69.2525 378.211 66.3685 377.897 64.7801 375.922ZM60.3591 410.224C58.7707 408.249 59.0825 405.365 61.056 403.778C63.0295 402.191 65.9134 402.505 67.5019 404.48C69.0903 406.455 68.7786 409.339 66.8051 410.926C64.8268 412.507 61.9428 412.193 60.3591 410.224ZM69.8927 402.557C68.3043 400.582 68.616 397.698 70.5895 396.11C72.563 394.523 75.447 394.837 77.0354 396.812C78.6238 398.787 78.3121 401.671 76.3386 403.258C74.3603 404.84 71.4764 404.526 69.8927 402.557ZM79.7959 394.592C78.2074 392.617 78.5192 389.733 80.4927 388.145C82.4662 386.558 85.3501 386.872 86.9386 388.847C88.527 390.822 88.2153 393.706 86.2418 395.293C84.2635 396.875 81.3795 396.561 79.7959 394.592Z"></path>
                        </g>
                        <g id="shape-9">
                          <path d="M61.9165 258.406C59.6747 261.561 57.4252 264.715 54.862 268.322C52.2988 264.746 49.9728 261.499 47.6469 258.245C47.754 258.107 47.8611 257.97 47.9682 257.832L61.4957 257.832L61.9165 258.406Z"></path>
                          <path d="M30.5537 257.357C30.2935 257.992 30.1328 258.697 29.7503 259.248C27.9446 261.875 26.0853 264.47 24.226 267.058C23.9965 267.38 23.6369 267.617 23.1013 268.107C20.7829 264.792 18.5641 261.622 16.3452 258.46C16.4293 258.283 16.5135 258.1 16.5977 257.924C17.3322 257.824 18.0667 257.663 18.8089 257.64C22.734 257.541 26.6668 257.479 30.5996 257.403L30.5537 257.357Z"></path>
                          <path d="M38.2281 290.711C38.7866 290.397 39.5135 290.214 39.8655 289.746C42.0002 286.89 44.0278 283.958 46.1319 281.086C46.4915 280.596 47.05 280.244 47.5168 279.831L47.4785 279.785C48.7333 281.737 49.9652 283.713 51.2506 285.65C51.9239 286.668 52.7273 287.602 53.4083 288.621C53.7143 289.073 53.852 289.639 54.181 290.413C53.2705 290.535 52.6202 290.696 51.9622 290.704C48.7104 290.742 45.4662 290.727 42.2144 290.765C41.5028 290.773 40.7989 290.918 39.7124 291.048C41.7936 294.854 44.8388 297.61 46.5068 301.232C44.8235 302.166 33.4613 302.189 31.5791 301.263C31.8852 300.643 32.1223 299.969 32.5202 299.402C34.1117 297.143 35.772 294.93 37.3558 292.664C37.769 292.074 37.9756 291.339 38.274 290.673L38.2281 290.711Z"></path>
                          <path d="M38.2739 290.665C33.5378 290.765 28.8016 290.849 24.0731 290.681C23.9889 290.443 23.8971 290.214 23.8129 289.976C26.0548 286.806 28.289 283.636 30.8369 280.03C29.4826 279.907 28.6256 279.777 27.7687 279.769C24.624 279.754 21.4793 279.8 18.327 279.785C17.6766 279.785 17.0263 279.639 16.3682 279.555C16.2611 279.394 16.154 279.233 16.0469 279.08C18.3805 275.788 20.7065 272.495 23.1243 269.088C23.637 269.547 23.9583 269.746 24.1573 270.029C26.1007 272.771 28.0135 275.535 29.9493 278.276C32.3518 281.668 34.7926 285.03 37.1645 288.437C37.6312 289.111 37.8761 289.946 38.228 290.704L38.2739 290.665Z"></path>
                          <path d="M47.5244 279.83C48.2665 278.559 48.9245 277.235 49.7585 276.033C51.3118 273.774 52.9645 271.576 54.8696 268.942C57.4558 272.541 59.8124 275.826 62.1767 279.103C62.0695 279.333 61.9624 279.562 61.863 279.792L47.4861 279.792L47.5244 279.83Z"></path>
                          <path d="M32.3442 235.856C36.8049 235.68 41.2656 235.603 45.8869 236.078C44.043 239.807 41.6175 242.939 38.9702 246.492C36.4988 242.954 34.2417 239.715 31.9846 236.476C32.107 236.277 32.2294 236.07 32.3442 235.856Z"></path>
                          <path d="M30.592 257.403C29.3908 255.412 28.2278 253.398 26.973 251.446C26.0701 250.029 25.0448 248.697 24.1955 247.035C28.8628 246.545 33.423 246.698 38.3122 246.668C37.9373 247.441 37.8072 247.839 37.5777 248.161C35.7184 250.833 33.8668 253.498 31.9616 256.132C31.6097 256.622 31.0282 256.951 30.5461 257.357L30.592 257.403Z"></path>
                          <path d="M54.0051 247.433C51.7403 250.649 49.4831 253.865 47.0194 257.357C44.5633 253.904 42.222 250.619 39.8807 247.334C39.9649 247.15 40.0567 246.974 40.1409 246.79C44.6628 246.844 49.1847 246.231 53.7067 246.874C53.8061 247.058 53.9056 247.25 54.0051 247.433Z"></path>
                        </g>
                        <g id="shape-10">
                          <path d="M51.5819 142.834C53.9457 142.183 55.0377 142.495 56.5097 144.521C56.9341 145.102 56.9927 145.949 57.1952 146.685C57.2371 146.842 57.1536 147.032 57.1499 147.207C57.0978 149.776 56.6954 150.366 54.4109 151.293C53.0757 151.831 51.4026 151.148 50.7301 149.849C50.0266 148.497 49.5994 147.109 50.0073 145.577C50.529 144.658 51.0535 143.749 51.5819 142.834Z"></path>
                          <path d="M45.3987 153.544C46.54 153.265 47.5383 153.709 48.528 154.183C49.1976 154.508 49.848 154.866 50.5032 155.2C52.0031 155.969 52.4314 157.507 51.5344 158.907C51.368 159.165 51.2319 159.431 51.0722 159.693C49.6482 162.098 46.8478 162.143 45.0044 160.761C44.2827 160.22 44.0513 158.999 43.6513 158.07C43.504 157.728 43.5012 157.32 43.428 156.942C44.0855 155.818 44.7401 154.684 45.3987 153.544Z"></path>
                          <path d="M40.0075 162.88C42.6937 162.282 44.2496 164.056 45.7039 165.408C45.3541 166.718 44.9967 167.812 44.7711 168.937C44.6291 169.642 44.41 170.205 43.6876 170.416C40.4976 171.35 37.7344 170.153 37.9017 166.527C38.6024 165.314 39.303 164.1 40.0075 162.88Z"></path>
                          <path d="M57.8951 131.899C59.1243 132.494 60.3651 133.069 61.579 133.69C62.7664 134.296 63.1279 135.92 62.4656 137.067C62.1018 137.697 61.8839 138.411 61.6262 139.102C61.1887 140.273 60.8727 140.453 59.6606 140.257C59.0222 140.154 58.3596 140.169 57.7272 140.025C57.3384 139.933 56.8771 139.738 56.645 139.436C56.0413 138.645 55.5463 137.758 55.0073 136.916C55.9655 135.241 56.9303 133.57 57.8951 131.899Z"></path>
                          <path d="M63.2858 122.562C66.0935 122.565 68.1537 124.276 68.3723 126.79C68.5054 128.335 67.6462 129.563 66.1749 129.969C66.0076 130.014 65.8393 130.075 65.6937 130.159C64.1928 130.999 62.6284 130.618 62.0233 129.11C61.7306 128.393 61.234 127.646 61.6351 126.737C61.7464 126.483 61.5167 126.086 61.4442 125.752C62.0606 124.684 62.6732 123.623 63.2858 122.562Z"></path>
                          <path d="M55.4419 154.833C56.5633 152.783 58.8683 151.913 60.5378 152.541C62.1202 153.136 63.3142 155.337 62.9654 157.028C62.872 157.496 62.809 157.972 62.6786 158.427C61.9659 160.978 59.7454 162.039 57.3248 160.677C56.486 160.201 55.3294 160.108 55.1275 158.851C55.111 158.726 54.9778 158.605 54.9916 158.49C55.1567 157.117 55.336 155.735 55.4419 154.833Z"></path>
                          <path d="M72.9378 144.315C74.5138 142.06 76.4473 141.664 78.4546 142.717C78.7036 142.852 78.9482 143.117 79.0589 143.384C79.8249 145.179 80.2138 147.031 79.5221 148.948C79.3914 149.297 79.1438 149.649 78.8589 149.882C77.0981 151.28 73.4662 150.73 72.2801 148.852C72.0078 148.42 71.8811 147.737 71.9897 147.243C72.2276 146.142 72.6683 145.088 72.9378 144.315Z"></path>
                          <path d="M53.6816 172.189C53.3351 172.193 52.9813 172.148 52.645 172.21C50.3413 172.604 48.6383 171.223 48.5802 168.89C48.5734 168.719 48.598 168.538 48.5741 168.365C48.3291 166.402 49.2076 164.911 51.0863 164.29C51.8278 164.046 52.6221 163.894 53.3987 163.865C54.4914 163.824 55.0683 164.661 55.6351 165.439C55.7332 165.576 55.7121 165.811 55.8255 165.921C57.3277 167.389 56.7601 168.786 55.6828 170.162C55.4746 170.431 55.2398 170.684 54.9835 170.899C54.5603 171.264 54.1116 171.598 53.6724 171.945C53.671 172.024 53.6763 172.107 53.6816 172.189Z"></path>
                          <path d="M73.9906 138.115C72.6949 139.701 71.5274 139.902 69.9627 138.787C69.2854 138.307 68.5555 137.904 67.8332 137.487C66.4815 136.706 65.8255 134.338 66.8458 133.168C67.8222 132.043 68.8896 130.944 70.616 130.8C71.6947 130.706 72.3737 131.045 72.9785 131.819C73.1889 132.082 73.4039 132.383 73.6888 132.547C74.854 133.238 74.8774 133.304 74.4839 134.598C74.3605 134.995 74.3745 135.445 74.3184 135.864C74.218 136.619 74.1043 137.367 73.9906 138.115Z"></path>
                          <path d="M63.0712 141.634C63.6394 140.512 64.4148 140.332 65.6014 140.327C68.0951 140.308 68.6194 142.017 69.2 143.873C69.7918 145.77 68.9987 148.062 67.273 149.046C65.7958 149.891 64.3886 149.406 63.216 147.871C61.6407 145.795 61.8261 143.744 63.0712 141.634Z"></path>
                          <path d="M63.7416 163.992C65.6796 164.66 66.8143 165.97 67.1079 168.093C67.3857 170.137 66.639 171.66 64.9157 172.946C63.6366 172.667 62.0706 172.824 60.8019 171.747C59.9765 171.049 59.383 169.124 59.7798 168.115C59.9864 167.589 60.1295 167.035 60.3333 166.499C60.7082 165.513 61.3221 164.771 62.4112 164.506C62.8597 164.403 63.2813 164.178 63.7416 163.992Z"></path>
                          <path d="M71.385 164.541C71.771 164.225 72.006 163.91 72.3102 163.811C73.1772 163.534 74.0651 163.251 74.9665 163.143C76.0473 163.016 77.3503 164.263 77.6351 165.453C77.8146 166.229 78.1955 166.962 78.3265 167.745C78.4292 168.317 78.4127 168.988 78.2089 169.525C77.7599 170.715 75.3098 171.547 74.1238 171.03C73.5725 170.791 72.9955 170.582 72.4077 170.437C71.1752 170.123 70.519 169.178 70.7452 167.93C70.9624 166.773 71.1824 165.627 71.385 164.541Z"></path>
                          <path d="M84.5622 159.117C83.28 159.685 82.0344 160.328 80.729 160.767C80.2707 160.918 79.5379 160.734 79.1207 160.431C77.8107 159.472 76.6259 158.31 76.6191 156.547C76.6175 155.892 77.1342 155.226 77.4571 154.59C77.5501 154.414 77.8731 154.344 77.9385 154.17C78.5335 152.603 79.9947 152.934 81.0882 152.938C82.3364 152.933 83.2626 153.778 83.9252 154.956C84.4919 155.964 84.8977 156.852 84.3995 158.006C84.2844 158.267 84.4865 158.666 84.5622 159.117Z"></path>
                          <path d="M73.1961 159.584C71.888 161.375 69.7105 161.78 67.8457 160.694C66.955 160.171 67.0909 159.339 66.93 158.654C66.6452 157.464 66.2687 156.203 66.9902 154.984C67.5099 154.099 68.1507 153.479 69.2529 153.452C69.8605 153.44 70.5072 153.177 71.0675 153.324C71.6818 153.484 72.502 153.869 72.6951 154.361C73.165 155.552 73.3809 156.861 73.5674 158.145C73.6222 158.601 73.3312 159.105 73.1961 159.584Z"></path>
                          <path d="M87.3234 163.929C87.8872 164.529 88.4444 165.125 89.0044 165.731C89.0298 165.763 89.0752 165.807 89.0731 165.841C88.972 166.552 88.7331 167.272 88.7905 167.968C88.8533 168.747 89.018 169.426 88.1738 169.893C87.9293 170.026 87.8212 170.397 87.585 170.561C87.3345 170.735 87.0025 170.897 86.7149 170.89C86.2014 170.876 85.6788 170.787 85.1879 170.627C84.8448 170.518 84.4584 170.33 84.2386 170.053C83.815 169.516 83.7094 168.766 82.6822 168.8C82.404 168.808 81.8788 167.682 81.8249 167.041C81.6881 165.671 82.887 164.268 84.2688 163.925C85.2638 163.686 86.2707 163.136 87.3234 163.929Z"></path>
                        </g>
                        <g id="shape-11">
                          <path d="M158.128 63.5591V53.8419H148.403V43H142.117H140.486H134.199V53.8419H124.475V63.5591H114V78.1348H124.1V87.852H134.199V98.6939H148.411V87.852H158.511V78.1348H168.61V63.5591H158.128ZM152.952 77.9665H145.195V87.6454H136.52V77.9894L129.215 77.9512V63.3066H136.52V54.7295H145.195V63.3066H152.952V77.9665Z"></path>
                          <path d="M142.89 65.0511H139.268V76.3368H142.89V65.0511Z"></path>
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect width="532" height="534"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="cur desktop_only"
              style={{
                visibility: "hidden",
              }}
            >
              <strong>View</strong>
              <i></i>
            </div>
          </main>
        </div>
      </body>

      <script
        id="fragment"
        type="x-shader/x-fragment"
        dangerouslySetInnerHTML={{
          __html: `
			varying float vNoise;
			varying vec2 vUv;
			uniform sampler2D uImage;
			uniform float time;
			uniform float percent;

			void main()	{

				vec2 newUV = vUv;

				vec4 oceanView = texture2D(uImage,newUV);

				gl_FragColor = vec4(vUv,0.,1.);
				gl_FragColor = oceanView;
				gl_FragColor.rgb += 0.05*vec3(vNoise);
				gl_FragColor.a = percent;
			}`,
        }}
      ></script>
      <script
        id="vertex"
        type="x-shader/x-vertex"
        dangerouslySetInnerHTML={{
          __html: `vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
			vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
			vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

			float cnoise(vec3 P){
				vec3 Pi0 = floor(P); // Integer part for indexing
				vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
				Pi0 = mod(Pi0, 289.0);
				Pi1 = mod(Pi1, 289.0);
				vec3 Pf0 = fract(P); // Fractional part for interpolation
				vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
				vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
				vec4 iy = vec4(Pi0.yy, Pi1.yy);
				vec4 iz0 = Pi0.zzzz;
				vec4 iz1 = Pi1.zzzz;

				vec4 ixy = permute(permute(ix) + iy);
				vec4 ixy0 = permute(ixy + iz0);
				vec4 ixy1 = permute(ixy + iz1);

				vec4 gx0 = ixy0 / 7.0;
				vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
				gx0 = fract(gx0);
				vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
				vec4 sz0 = step(gz0, vec4(0.0));
				gx0 -= sz0 * (step(0.0, gx0) - 0.5);
				gy0 -= sz0 * (step(0.0, gy0) - 0.5);

				vec4 gx1 = ixy1 / 7.0;
				vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
				gx1 = fract(gx1);
				vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
				vec4 sz1 = step(gz1, vec4(0.0));
				gx1 -= sz1 * (step(0.0, gx1) - 0.5);
				gy1 -= sz1 * (step(0.0, gy1) - 0.5);

				vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
				vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
				vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
				vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
				vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
				vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
				vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
				vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

				vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
				g000 *= norm0.x;
				g010 *= norm0.y;
				g100 *= norm0.z;
				g110 *= norm0.w;
				vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
				g001 *= norm1.x;
				g011 *= norm1.y;
				g101 *= norm1.z;
				g111 *= norm1.w;

				float n000 = dot(g000, Pf0);
				float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
				float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
				float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
				float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
				float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
				float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
				float n111 = dot(g111, Pf1);

				vec3 fade_xyz = fade(Pf0);
				vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
				vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
				float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
				return 2.2 * n_xyz;
			}

			uniform float time;
			uniform vec2 hover;
			uniform float hoverState;
			varying float vNoise;
			varying vec2 vUv;


			void main() {
				vec3 newposition = position;
				float PI = 3.1415925;

				float noise = cnoise(3.*vec3(position.x,position.y,position.z + time/30.));

				float dist = distance(uv,hover);

				newposition.z += hoverState*10.*sin(dist*10. + time);

				vNoise = hoverState*sin(dist*10. - time);
				vUv = uv;

				gl_Position = projectionMatrix * modelViewMatrix * vec4( newposition, 1.0 );

			}`,
        }}
      ></script>
      <script src="jsm/jquery-3.5.1.min.js"></script>
      <script src="jsm/functions.js" type="text/javascript"></script>
    </>
  );
}
