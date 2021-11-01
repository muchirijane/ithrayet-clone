const CL3TxtWoTitle = (props) => {
  const { content } = props;
  return (
    <section>
      <div className="custom_content">
        <div className="content_a">
          <div className="content_b">
            <div className="section_sides text_sides equal flex">
              <div className="text_side">
                <div
                  className="f_20 less_opacity"
                  dangerouslySetInnerHTML={{
                    __html: content.cl3TWoT_content[0].content,
                  }}
                />
              </div>

              <div className="text_side">
                <div
                  className="f_20 less_opacity"
                  dangerouslySetInnerHTML={{
                    __html: content.cl3TWoT_content[1].content,
                  }}
                />
              </div>
              <div className="text_side">
                <div
                  className="f_20 less_opacity"
                  dangerouslySetInnerHTML={{
                    __html: content.cl3TWoT_content[2].content,
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

export default CL3TxtWoTitle;
