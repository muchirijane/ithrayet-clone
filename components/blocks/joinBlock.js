const JoinBlock = () => {
  return (
    <section id="join">
      <div className="section-sides flex">
        <div className="section-side flex">
          <div className="content_set">
            <div className="section_title flex">
              <h4 className="_secEle">Join The experience</h4>
              <a href="projects_en.php" className="mobile_only _secEle">
                All Projects
              </a>
            </div>

            <div className="side-content">
              <p className="_secEle">Every artist was first an amateur</p>

              <h3 className="_secEle">
                A true artist is not one who <br />
                is inspired, but one who <br />
                inspires others.
              </h3>

              <div className="circle_set no-select buildup static desktop_only">
                All Projects
              </div>
            </div>
          </div>
        </div>

        <div className="section-side adjustable">
          <div className="join_slider full_bg flex">
            <div className="jn_circles zero-font">
              <div
                className="jn_circle"
                data-color="#C09E9C"
                data-title="Out of Time"
                data-url="#1"
              >
                <div className="jn_circle_content">
                  <i className="full_bg">
                    <span
                      className="load_bg _curTL1"
                      data-src="imgs/section5/1.jpg"
                    ></span>
                  </i>
                </div>
              </div>
              <div
                className="jn_circle"
                data-color="#9cc0b6"
                data-title="Positive Ideas"
                data-url="#2"
              >
                <div className="jn_circle_content">
                  <i className="full_bg">
                    <span
                      className="load_bg _curTL1"
                      data-src="imgs/section5/2.jpg"
                    ></span>
                  </i>
                </div>
              </div>
              <div
                className="jn_circle"
                data-color="#b47b64"
                data-title="Tiny World"
                data-url="#3"
              >
                <div className="jn_circle_content">
                  <i className="full_bg">
                    <span
                      className="load_bg _curTL1"
                      data-src="imgs/section5/3.jpg"
                    ></span>
                  </i>
                </div>
              </div>
            </div>
            <div className="jn_title _secEle">
              <h3></h3>
            </div>
          </div>
          <i className="full_bg"></i>
        </div>
      </div>

      <div className="arrow_set prev static flex"></div>

      <div className="arrow_set next static flex"></div>
    </section>
  );
};

export default JoinBlock;
