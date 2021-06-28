import Layout from "../components/Layout";

const Search = (props) => {
  return (
    <Layout isInner>
      <div className="role-setction">
        <div className="content_a fixed_item has_background filters">
          <div className="inner_search_input">
            <form action="" method="post">
              <input
                type="text"
                name="query"
                placeholder="Type something.."
                value="Creativity"
              />
            </form>
          </div>

          <div className="sub-menu static">
            <ul>
              <li>
                <a href="#" className="active">
                  <span className="f_lable">
                    <span>All</span>
                    <span className="f_count">6</span>
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="f_lable">
                    <span>Editions</span>
                    <span className="f_count">3</span>
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="f_lable">
                    <span>Stories</span>
                    <span className="f_count">0</span>
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="f_lable">
                    <span>Creatives</span>
                    <span className="f_count">0</span>
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="f_lable">
                    <span>Projects</span>
                    <span className="f_count">0</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div id="sections">
        <section>
          <div className="section_content has_parallax">
            <div className="search_block">
              <div className="content_a">
                <strong className="f_40 uppercase">Editions</strong>
              </div>

              <div className="search_row flex">
                <a href="#" className="result_set">
                  <div className="result_img">
                    <img
                      className="load_img"
                      data-src="imgs/inners/editions/edition1-2.jpg"
                      width="100%"
                      height="auto"
                      alt="Gardens"
                    />
                  </div>
                  <div className="result_title">
                    <div className="f_80 alt">Gardens</div>
                    <span className="f_16 less_opacity">Edition #1</span>
                  </div>
                </a>

                <a href="#" className="result_set">
                  <div className="result_img">
                    <img
                      className="load_img"
                      data-src="imgs/inners/editions/edition2-1.jpg"
                      width="100%"
                      height="auto"
                      alt="Gardens"
                    />
                  </div>
                  <div className="result_title">
                    <div className="f_80 alt">Gardens</div>
                    <span className="f_16 less_opacity">Edition #1</span>
                  </div>
                </a>

                <a href="#" className="result_set">
                  <div className="result_img">
                    <img
                      className="load_img"
                      data-src="imgs/inners/editions/edition2-2.jpg"
                      width="100%"
                      height="auto"
                      alt="Gardens"
                    />
                  </div>
                  <div className="result_title">
                    <div className="f_80 alt">Gardens</div>
                    <span className="f_16 less_opacity">Edition #1</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="search_block">
              <div className="content_a">
                <strong className="f_40 uppercase">Stories</strong>
              </div>

              <div className="search_row flex">
                <a href="#" className="result_set">
                  <div className="result_img">
                    <img
                      className="load_img"
                      data-src="imgs/inners/stories/1.jpg"
                      width="100%"
                      height="auto"
                      alt="Gardens"
                    />
                  </div>
                  <div className="result_title">
                    <div className="f_80 alt">Gardens</div>
                    <span className="f_16 less_opacity">Edition #1</span>
                  </div>
                </a>

                <a href="#" className="result_set">
                  <div className="result_img">
                    <img
                      className="load_img"
                      data-src="imgs/inners/stories/2.jpg"
                      width="100%"
                      height="auto"
                      alt="Gardens"
                    />
                  </div>
                  <div className="result_title">
                    <div className="f_80 alt">Gardens</div>
                    <span className="f_16 less_opacity">Edition #1</span>
                  </div>
                </a>

                <a href="#" className="result_set">
                  <div className="result_img">
                    <img
                      className="load_img"
                      data-src="imgs/inners/stories/3.jpg"
                      width="100%"
                      height="auto"
                      alt="Gardens"
                    />
                  </div>
                  <div className="result_title">
                    <div className="f_80 alt">Gardens</div>
                    <span className="f_16 less_opacity">Edition #1</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Search;
