import Elements from "../elements";

const CreativeBlock = ({ artists }) => {
  return (
    <section id="creatives">
      <div className="content_set">
        <div className="section_title flex">
          <h4 className="_inOut">Creatives</h4>
          <a href="creatives_en.php" className="mobile_only _inOut">
            All Creatives
          </a>
        </div>
      </div>

      <div className="cr_text">
        <p className="_inOut">Every artist was first an amateur</p>
        <h6 className="_inOut">
          A true artist is not one who <br />
          is inspired, but one who <br />
          inspires others
        </h6>
      </div>

      <div className="crv_wrap full_bg">
        <div className="crv_circles scale">
          <div className="circles_group full_bg active">
            {artists.map((val,key) => {

              return (
                <Elements.CreativeArtist
                  key={key}
                  dist={key}
                  artistName={`${val.firstName} ${val.lastName}`}
                  svgUrl={val.signature.url}
                  profileUrl={val.profileImage.url}
                />
              );
            })}
          </div>

          {/* <div className="circles_group full_bg">
            <div
              className="crv_circle _curTL2"
              data-name="Ivory Read"
              data-url="#"
            >
              <div className="crv_cont full_bg mg" data-dist="7">
                <div className="crv_stroke">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 202 202">
                    <path
                      className="stroke-an svg-stroke"
                      fill="none"
                      strokeWidth="1"
                      d="M91,3.4C149.3-4.5,203.9,49.1,199.9,107c-3.4,49.3-42.6,87.9-90.9,93.7C35.1,209.6-17.1,128.5,9.5,63 C23.3,28.7,55.4,8.3,91,3.4"
                    ></path>
                  </svg>
                </div>
                <div className="sign sign_a">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 130.6 80"
                    className="animate"
                  >
                    <line
                      className="stroke-an"
                      x1="2.4"
                      y1="2.1"
                      x2="5.7"
                      y2="77.1"
                    ></line>
                    <path
                      className="stroke-an"
                      d="M11.5,37.7c-0.8,37.6,36.6,36.7,36.8,8.8c0.1-22.8-25.8-26.4-28.1-3.9c-2.4,23.3,28,27.8,29.9,0.5c-1,18.3,8.1,32.6,9.9-0.4c1.8-33,0.8,21.5,0.8,21.5S85.3-3.8,82.2,53c-2,36.9,13.7-2.3,13.7-2.3"
                    ></path>
                    <line
                      className="stroke-an"
                      x1="88.6"
                      y1="53.1"
                      x2="128.1"
                      y2="54.7"
                    ></line>
                  </svg>
                </div>
                <div className="sign sign_b">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 130.6 80"
                    className="animate"
                  >
                    <line
                      className="stroke-an"
                      x1="2.4"
                      y1="2.1"
                      x2="5.7"
                      y2="77.1"
                    ></line>
                    <path
                      className="stroke-an"
                      d="M11.5,37.7c-0.8,37.6,36.6,36.7,36.8,8.8c0.1-22.8-25.8-26.4-28.1-3.9c-2.4,23.3,28,27.8,29.9,0.5c-1,18.3,8.1,32.6,9.9-0.4c1.8-33,0.8,21.5,0.8,21.5S85.3-3.8,82.2,53c-2,36.9,13.7-2.3,13.7-2.3"
                    ></path>
                    <line
                      className="stroke-an"
                      x1="88.6"
                      y1="53.1"
                      x2="128.1"
                      y2="54.7"
                    ></line>
                  </svg>
                </div>
                <div className="crv_img">
                  <i className="load_bg" data-src="imgs/section3/9.png"></i>
                </div>
              </div>
            </div>

            <div
              className="crv_circle _curTL2"
              data-name="Winston Castro"
              data-url="#"
            >
              <div className="crv_cont full_bg mg" data-dist="7">
                <div className="crv_stroke">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 202 202">
                    <path
                      className="stroke-an svg-stroke"
                      fill="none"
                      strokeWidth="1"
                      d="M91,3.4C149.3-4.5,203.9,49.1,199.9,107c-3.4,49.3-42.6,87.9-90.9,93.7C35.1,209.6-17.1,128.5,9.5,63 C23.3,28.7,55.4,8.3,91,3.4"
                    ></path>
                  </svg>
                </div>
                <div className="sign sign_a">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 130.6 80"
                    className="animate"
                  >
                    <line
                      className="stroke-an"
                      x1="2.4"
                      y1="2.1"
                      x2="5.7"
                      y2="77.1"
                    ></line>
                    <path
                      className="stroke-an"
                      d="M11.5,37.7c-0.8,37.6,36.6,36.7,36.8,8.8c0.1-22.8-25.8-26.4-28.1-3.9c-2.4,23.3,28,27.8,29.9,0.5c-1,18.3,8.1,32.6,9.9-0.4c1.8-33,0.8,21.5,0.8,21.5S85.3-3.8,82.2,53c-2,36.9,13.7-2.3,13.7-2.3"
                    ></path>
                    <line
                      className="stroke-an"
                      x1="88.6"
                      y1="53.1"
                      x2="128.1"
                      y2="54.7"
                    ></line>
                  </svg>
                </div>
                <div className="sign sign_b">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 130.6 80"
                    className="animate"
                  >
                    <line
                      className="stroke-an"
                      x1="2.4"
                      y1="2.1"
                      x2="5.7"
                      y2="77.1"
                    ></line>
                    <path
                      className="stroke-an"
                      d="M11.5,37.7c-0.8,37.6,36.6,36.7,36.8,8.8c0.1-22.8-25.8-26.4-28.1-3.9c-2.4,23.3,28,27.8,29.9,0.5c-1,18.3,8.1,32.6,9.9-0.4c1.8-33,0.8,21.5,0.8,21.5S85.3-3.8,82.2,53c-2,36.9,13.7-2.3,13.7-2.3"
                    ></path>
                    <line
                      className="stroke-an"
                      x1="88.6"
                      y1="53.1"
                      x2="128.1"
                      y2="54.7"
                    ></line>
                  </svg>
                </div>
                <div className="crv_img">
                  <i className="load_bg" data-src="imgs/section3/10.png"></i>
                </div>
              </div>
            </div>

            <div
              className="crv_circle _curTL2"
              data-name="Robin Reid"
              data-url="#"
            >
              <div className="crv_cont full_bg mg" data-dist="7">
                <div className="crv_stroke">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 202 202">
                    <path
                      className="stroke-an svg-stroke"
                      fill="none"
                      strokeWidth="1"
                      d="M91,3.4C149.3-4.5,203.9,49.1,199.9,107c-3.4,49.3-42.6,87.9-90.9,93.7C35.1,209.6-17.1,128.5,9.5,63 C23.3,28.7,55.4,8.3,91,3.4"
                    ></path>
                  </svg>
                </div>
                <div className="sign sign_a">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 130.6 80"
                    className="animate"
                  >
                    <line
                      className="stroke-an"
                      x1="2.4"
                      y1="2.1"
                      x2="5.7"
                      y2="77.1"
                    ></line>
                    <path
                      className="stroke-an"
                      d="M11.5,37.7c-0.8,37.6,36.6,36.7,36.8,8.8c0.1-22.8-25.8-26.4-28.1-3.9c-2.4,23.3,28,27.8,29.9,0.5c-1,18.3,8.1,32.6,9.9-0.4c1.8-33,0.8,21.5,0.8,21.5S85.3-3.8,82.2,53c-2,36.9,13.7-2.3,13.7-2.3"
                    ></path>
                    <line
                      className="stroke-an"
                      x1="88.6"
                      y1="53.1"
                      x2="128.1"
                      y2="54.7"
                    ></line>
                  </svg>
                </div>
                <div className="sign sign_b">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 130.6 80"
                    className="animate"
                  >
                    <line
                      className="stroke-an"
                      x1="2.4"
                      y1="2.1"
                      x2="5.7"
                      y2="77.1"
                    ></line>
                    <path
                      className="stroke-an"
                      d="M11.5,37.7c-0.8,37.6,36.6,36.7,36.8,8.8c0.1-22.8-25.8-26.4-28.1-3.9c-2.4,23.3,28,27.8,29.9,0.5c-1,18.3,8.1,32.6,9.9-0.4c1.8-33,0.8,21.5,0.8,21.5S85.3-3.8,82.2,53c-2,36.9,13.7-2.3,13.7-2.3"
                    ></path>
                    <line
                      className="stroke-an"
                      x1="88.6"
                      y1="53.1"
                      x2="128.1"
                      y2="54.7"
                    ></line>
                  </svg>
                </div>
                <div className="crv_img">
                  <i className="load_bg" data-src="imgs/section3/11.png"></i>
                </div>
              </div>
            </div>

            <div
              className="crv_circle _curTL2"
              data-name="Eda Santiago"
              data-url="#"
            >
              <div className="crv_cont full_bg mg" data-dist="7">
                <div className="crv_stroke">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 202 202">
                    <path
                      className="stroke-an svg-stroke"
                      fill="none"
                      strokeWidth="1"
                      d="M91,3.4C149.3-4.5,203.9,49.1,199.9,107c-3.4,49.3-42.6,87.9-90.9,93.7C35.1,209.6-17.1,128.5,9.5,63 C23.3,28.7,55.4,8.3,91,3.4"
                    ></path>
                  </svg>
                </div>
                <div className="sign sign_a">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 130.6 80"
                    className="animate"
                  >
                    <line
                      className="stroke-an"
                      x1="2.4"
                      y1="2.1"
                      x2="5.7"
                      y2="77.1"
                    ></line>
                    <path
                      className="stroke-an"
                      d="M11.5,37.7c-0.8,37.6,36.6,36.7,36.8,8.8c0.1-22.8-25.8-26.4-28.1-3.9c-2.4,23.3,28,27.8,29.9,0.5c-1,18.3,8.1,32.6,9.9-0.4c1.8-33,0.8,21.5,0.8,21.5S85.3-3.8,82.2,53c-2,36.9,13.7-2.3,13.7-2.3"
                    ></path>
                    <line
                      className="stroke-an"
                      x1="88.6"
                      y1="53.1"
                      x2="128.1"
                      y2="54.7"
                    ></line>
                  </svg>
                </div>
                <div className="sign sign_b">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 130.6 80"
                    className="animate"
                  >
                    <line
                      className="stroke-an"
                      x1="2.4"
                      y1="2.1"
                      x2="5.7"
                      y2="77.1"
                    ></line>
                    <path
                      className="stroke-an"
                      d="M11.5,37.7c-0.8,37.6,36.6,36.7,36.8,8.8c0.1-22.8-25.8-26.4-28.1-3.9c-2.4,23.3,28,27.8,29.9,0.5c-1,18.3,8.1,32.6,9.9-0.4c1.8-33,0.8,21.5,0.8,21.5S85.3-3.8,82.2,53c-2,36.9,13.7-2.3,13.7-2.3"
                    ></path>
                    <line
                      className="stroke-an"
                      x1="88.6"
                      y1="53.1"
                      x2="128.1"
                      y2="54.7"
                    ></line>
                  </svg>
                </div>
                <div className="crv_img">
                  <i className="load_bg" data-src="imgs/section3/12.png"></i>
                </div>
              </div>
            </div>

            <div
              className="crv_circle _curTL2"
              data-name="Tommy Fox"
              data-url="#"
            >
              <div className="crv_cont full_bg mg" data-dist="7">
                <div className="crv_stroke">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 202 202">
                    <path
                      className="stroke-an svg-stroke"
                      fill="none"
                      strokeWidth="1"
                      d="M91,3.4C149.3-4.5,203.9,49.1,199.9,107c-3.4,49.3-42.6,87.9-90.9,93.7C35.1,209.6-17.1,128.5,9.5,63 C23.3,28.7,55.4,8.3,91,3.4"
                    ></path>
                  </svg>
                </div>
                <div className="sign sign_a">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 130.6 80"
                    className="animate"
                  >
                    <line
                      className="stroke-an"
                      x1="2.4"
                      y1="2.1"
                      x2="5.7"
                      y2="77.1"
                    ></line>
                    <path
                      className="stroke-an"
                      d="M11.5,37.7c-0.8,37.6,36.6,36.7,36.8,8.8c0.1-22.8-25.8-26.4-28.1-3.9c-2.4,23.3,28,27.8,29.9,0.5c-1,18.3,8.1,32.6,9.9-0.4c1.8-33,0.8,21.5,0.8,21.5S85.3-3.8,82.2,53c-2,36.9,13.7-2.3,13.7-2.3"
                    ></path>
                    <line
                      className="stroke-an"
                      x1="88.6"
                      y1="53.1"
                      x2="128.1"
                      y2="54.7"
                    ></line>
                  </svg>
                </div>
                <div className="sign sign_b">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 130.6 80"
                    className="animate"
                  >
                    <line
                      className="stroke-an"
                      x1="2.4"
                      y1="2.1"
                      x2="5.7"
                      y2="77.1"
                    ></line>
                    <path
                      className="stroke-an"
                      d="M11.5,37.7c-0.8,37.6,36.6,36.7,36.8,8.8c0.1-22.8-25.8-26.4-28.1-3.9c-2.4,23.3,28,27.8,29.9,0.5c-1,18.3,8.1,32.6,9.9-0.4c1.8-33,0.8,21.5,0.8,21.5S85.3-3.8,82.2,53c-2,36.9,13.7-2.3,13.7-2.3"
                    ></path>
                    <line
                      className="stroke-an"
                      x1="88.6"
                      y1="53.1"
                      x2="128.1"
                      y2="54.7"
                    ></line>
                  </svg>
                </div>
                <div className="crv_img">
                  <i className="load_bg" data-src="imgs/section3/13.png"></i>
                </div>
              </div>
            </div>

            <div
              className="crv_circle _curTL2"
              data-name="Nina Mallin"
              data-url="#"
            >
              <div className="crv_cont full_bg mg" data-dist="7">
                <div className="crv_stroke">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 202 202">
                    <path
                      className="stroke-an svg-stroke"
                      fill="none"
                      strokeWidth="1"
                      d="M91,3.4C149.3-4.5,203.9,49.1,199.9,107c-3.4,49.3-42.6,87.9-90.9,93.7C35.1,209.6-17.1,128.5,9.5,63 C23.3,28.7,55.4,8.3,91,3.4"
                    ></path>
                  </svg>
                </div>
                <div className="sign sign_a">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 130.6 80"
                    className="animate"
                  >
                    <line
                      className="stroke-an"
                      x1="2.4"
                      y1="2.1"
                      x2="5.7"
                      y2="77.1"
                    ></line>
                    <path
                      className="stroke-an"
                      d="M11.5,37.7c-0.8,37.6,36.6,36.7,36.8,8.8c0.1-22.8-25.8-26.4-28.1-3.9c-2.4,23.3,28,27.8,29.9,0.5c-1,18.3,8.1,32.6,9.9-0.4c1.8-33,0.8,21.5,0.8,21.5S85.3-3.8,82.2,53c-2,36.9,13.7-2.3,13.7-2.3"
                    ></path>
                    <line
                      className="stroke-an"
                      x1="88.6"
                      y1="53.1"
                      x2="128.1"
                      y2="54.7"
                    ></line>
                  </svg>
                </div>
                <div className="sign sign_b">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 130.6 80"
                    className="animate"
                  >
                    <line
                      className="stroke-an"
                      x1="2.4"
                      y1="2.1"
                      x2="5.7"
                      y2="77.1"
                    ></line>
                    <path
                      className="stroke-an"
                      d="M11.5,37.7c-0.8,37.6,36.6,36.7,36.8,8.8c0.1-22.8-25.8-26.4-28.1-3.9c-2.4,23.3,28,27.8,29.9,0.5c-1,18.3,8.1,32.6,9.9-0.4c1.8-33,0.8,21.5,0.8,21.5S85.3-3.8,82.2,53c-2,36.9,13.7-2.3,13.7-2.3"
                    ></path>
                    <line
                      className="stroke-an"
                      x1="88.6"
                      y1="53.1"
                      x2="128.1"
                      y2="54.7"
                    ></line>
                  </svg>
                </div>
                <div className="crv_img">
                  <i className="load_bg" data-src="imgs/section3/14.png"></i>
                </div>
              </div>
            </div>

            <div
              className="crv_circle _curTL2"
              data-name="Ava Clayton"
              data-url="#"
            >
              <div className="crv_cont full_bg mg" data-dist="7">
                <div className="crv_stroke">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 202 202">
                    <path
                      className="stroke-an svg-stroke"
                      fill="none"
                      strokeWidth="1"
                      d="M91,3.4C149.3-4.5,203.9,49.1,199.9,107c-3.4,49.3-42.6,87.9-90.9,93.7C35.1,209.6-17.1,128.5,9.5,63 C23.3,28.7,55.4,8.3,91,3.4"
                    ></path>
                  </svg>
                </div>
                <div className="sign sign_a">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 130.6 80"
                    className="animate"
                  >
                    <line
                      className="stroke-an"
                      x1="2.4"
                      y1="2.1"
                      x2="5.7"
                      y2="77.1"
                    ></line>
                    <path
                      className="stroke-an"
                      d="M11.5,37.7c-0.8,37.6,36.6,36.7,36.8,8.8c0.1-22.8-25.8-26.4-28.1-3.9c-2.4,23.3,28,27.8,29.9,0.5c-1,18.3,8.1,32.6,9.9-0.4c1.8-33,0.8,21.5,0.8,21.5S85.3-3.8,82.2,53c-2,36.9,13.7-2.3,13.7-2.3"
                    ></path>
                    <line
                      className="stroke-an"
                      x1="88.6"
                      y1="53.1"
                      x2="128.1"
                      y2="54.7"
                    ></line>
                  </svg>
                </div>
                <div className="sign sign_b">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 130.6 80"
                    className="animate"
                  >
                    <line
                      className="stroke-an"
                      x1="2.4"
                      y1="2.1"
                      x2="5.7"
                      y2="77.1"
                    ></line>
                    <path
                      className="stroke-an"
                      d="M11.5,37.7c-0.8,37.6,36.6,36.7,36.8,8.8c0.1-22.8-25.8-26.4-28.1-3.9c-2.4,23.3,28,27.8,29.9,0.5c-1,18.3,8.1,32.6,9.9-0.4c1.8-33,0.8,21.5,0.8,21.5S85.3-3.8,82.2,53c-2,36.9,13.7-2.3,13.7-2.3"
                    ></path>
                    <line
                      className="stroke-an"
                      x1="88.6"
                      y1="53.1"
                      x2="128.1"
                      y2="54.7"
                    ></line>
                  </svg>
                </div>
                <div className="crv_img">
                  <i className="load_bg" data-src="imgs/section3/15.png"></i>
                </div>
              </div>
            </div>

            <div
              className="crv_circle _curTL2"
              data-name="Shana Hayes"
              data-url="#"
            >
              <div className="crv_cont full_bg mg" data-dist="7">
                <div className="crv_stroke">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 202 202">
                    <path
                      className="stroke-an svg-stroke"
                      fill="none"
                      strokeWidth="1"
                      d="M91,3.4C149.3-4.5,203.9,49.1,199.9,107c-3.4,49.3-42.6,87.9-90.9,93.7C35.1,209.6-17.1,128.5,9.5,63 C23.3,28.7,55.4,8.3,91,3.4"
                    ></path>
                  </svg>
                </div>
                <div className="sign sign_a">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 130.6 80"
                    className="animate"
                  >
                    <line
                      className="stroke-an"
                      x1="2.4"
                      y1="2.1"
                      x2="5.7"
                      y2="77.1"
                    ></line>
                    <path
                      className="stroke-an"
                      d="M11.5,37.7c-0.8,37.6,36.6,36.7,36.8,8.8c0.1-22.8-25.8-26.4-28.1-3.9c-2.4,23.3,28,27.8,29.9,0.5c-1,18.3,8.1,32.6,9.9-0.4c1.8-33,0.8,21.5,0.8,21.5S85.3-3.8,82.2,53c-2,36.9,13.7-2.3,13.7-2.3"
                    ></path>
                    <line
                      className="stroke-an"
                      x1="88.6"
                      y1="53.1"
                      x2="128.1"
                      y2="54.7"
                    ></line>
                  </svg>
                </div>
                <div className="sign sign_b">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 130.6 80"
                    className="animate"
                  >
                    <line
                      className="stroke-an"
                      x1="2.4"
                      y1="2.1"
                      x2="5.7"
                      y2="77.1"
                    ></line>
                    <path
                      className="stroke-an"
                      d="M11.5,37.7c-0.8,37.6,36.6,36.7,36.8,8.8c0.1-22.8-25.8-26.4-28.1-3.9c-2.4,23.3,28,27.8,29.9,0.5c-1,18.3,8.1,32.6,9.9-0.4c1.8-33,0.8,21.5,0.8,21.5S85.3-3.8,82.2,53c-2,36.9,13.7-2.3,13.7-2.3"
                    ></path>
                    <line
                      className="stroke-an"
                      x1="88.6"
                      y1="53.1"
                      x2="128.1"
                      y2="54.7"
                    ></line>
                  </svg>
                </div>
                <div className="crv_img">
                  <i className="load_bg" data-src="imgs/section3/16.png"></i>
                </div>
              </div>
            </div>
          </div>
         */}
        </div>
      </div>

      <div className="cr_name">
        <h3 className="_inOut"></h3>
      </div>

      <div className="circle_set no-select buildup lower desktop_only">
        All Creatives
      </div>

      <div className="arrow_set prev static flex"></div>

      <div className="arrow_set next static flex"></div>
    </section>
  );
};

export default CreativeBlock;
