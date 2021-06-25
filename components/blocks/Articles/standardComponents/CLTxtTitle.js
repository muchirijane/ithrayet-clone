const CLTxtTitle = (props) => {
  const { content } = props;

  return (
    <section>
      <div className="custom_content">
        <div className="content_a">
          <div className="content_b">
            <div className="section_sides three_cols flex">
              <div className="three_col">
                <div className="f_80 alt">
                  {content.clTextWithTitle[0].title}
                </div>
                <div
                  className="f_20 less_opacity"
                  dangerouslySetInnerHTML={{
                    __html: content.clTextWithTitle[0].description,
                  }}
                />
              </div>

              <div className="three_col">
                <div className="f_80 alt">
                  {content.clTextWithTitle[1].title}
                </div>
                <div
                  className="f_20 less_opacity"
                  dangerouslySetInnerHTML={{
                    __html: content.clTextWithTitle[1].description,
                  }}
                />
              </div>

              <div className="three_col">
                <div className="f_80 alt">
                  {content.clTextWithTitle[2].title}
                </div>
                <div
                  className="f_20 less_opacity"
                  dangerouslySetInnerHTML={{
                    __html: content.clTextWithTitle[2].description,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CLTxtTitle;
