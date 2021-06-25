const CLTxt = (props) => {
  const { content } = props;
  return (
    <section>
      <div className="custom_content">
        <div className="content_a">
          <div className="content_b">
            <div className="section_sides text_sides equal flex">
              <div className="text_side">
                <div className="f_80 alt">
                  {content.clT_content[0].title}
                </div>
                <div
                  className="f_20 less_opacity"
                  dangerouslySetInnerHTML={{
                    __html: content.clT_content[0].description,
                  }}
                />
              </div>

              <div className="text_side">
                <div className="f_80 alt">
                  {content.clT_content[1].title}
                </div>
                <div
                  className="f_20 less_opacity"
                  dangerouslySetInnerHTML={{
                    __html: content.clT_content[1].description,
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

export default CLTxt;
