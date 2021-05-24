

const EditionBlock = () =>{
    return(
        <section id="editions">
        <div className="content_set">
          <div className="section_title flex">
            <h4 className="_inOut">Editions</h4>
            <a href="editions_en.php" className="mobile_only _inOut">
              All Editions
            </a>
          </div>
        </div>

        <div className="section_content flex full_bg">
          <div className="section_head">
            <h1>
              <span>
                The life and <br />
                art of the <br />
                street /
              </span>
              <span>Issue #1</span>
            </h1>
            <div className="ed_image _curTL1">
              <div className="full_bg prx">
                <div className="cardWrapper full_bg">
                  <div className="card full_bg">
                    <div className="cardFace full_bg front"></div>
                    <div className="cardFace full_bg back"></div>
                  </div>
                </div>

                <div className="ed_sub_images">
                  <div className="ed_sub_image"></div>
                  <div className="ed_sub_image"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="section_label">
            <h3 className="_fill_card _inOut"></h3>
            <p className="_fill_card _inOut"></p>
          </div>

          <div className="cards">
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

        <div className="circle_set no-select buildup lower desktop_only">
          All Editions
        </div>

        <div className="arrow_set prev fluid flex"></div>

        <div className="arrow_set next fluid flex"></div>

        <div id="drawings" className="full_bg"></div>
      </section>

    )
}

export default EditionBlock;