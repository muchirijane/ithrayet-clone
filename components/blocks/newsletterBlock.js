const NewsLetterBlock = () => {
  return (
    <section id="newsletter">
      <div className="section_content flex full_bg">
        <div className="content_set no-padding">
          <h3 className="_inOut">
            Be part of The Ithraeyat Experience, <br />
            join our Newsletter.
          </h3>
          <h6 className="_inOut">
            Your email address will be kept confidential and only used <br />
            to send our newsletter or respond to any queries
          </h6>
          <div className="form_set">
            <form action="#">
              <div className="input_set buildup">
                <input type="email" name="email" id="newsletter_email" />
                <label for="newsletter_email" className="full_bg flex">
                  Email Address
                </label>
                <div className="inline_submit flex _curTL2">
                  <span>Subscribe</span>
                  <i className="full_bg"></i>
                </div>
                <div className="input_border">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                  >
                    <line
                      className="svg-stroke"
                      fill="none"
                      strokeMiterlimit="10"
                      x1="0"
                      y1="100%"
                      x2="0"
                      y2="0"
                    ></line>
                    <line
                      className="svg-stroke"
                      fill="none"
                      strokeMiterlimit="10"
                      x1="0"
                      y1="0"
                      x2="100%"
                      y2="0"
                    ></line>
                    <line
                      className="svg-stroke"
                      fill="none"
                      strokeMiterlimit="10"
                      x1="100%"
                      y1="0"
                      x2="100%"
                      y2="100%"
                    ></line>
                    <line
                      className="svg-stroke"
                      fill="none"
                      strokeMiterlimit="10"
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
          <div className="sub_footer">
            <ul className="flex">
              <li>
                <a href="journey_en.php" className="_inOut">
                  Our Journey
                </a>
              </li>
              <li>
                <a href="downloads_en.php" className="_inOut">
                  Download Issues
                </a>
              </li>
              <li>
                <a href="static_en.php" className="_inOut">
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a href="static_en.php" className="_inOut">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="contact_en.php" className="_inOut">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="copyrights _inOut">
          © 2021 Ithraeyat . All right reserved.
        </p>
      </div>
    </section>
  );
};

export default NewsLetterBlock;