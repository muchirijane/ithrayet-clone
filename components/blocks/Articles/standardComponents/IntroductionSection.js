const IntroductionSection = (props) => {
  const { content } = props;
  return (
    <section>
      <div className="custom_content">
        <div className="content_a">
          <div className="content_b">
            <div className="section_sides text_sides flex">
              <div className="text_side">
                <div className="f_80 alt">{content.title}</div>
              </div>

              <div className="text_side">
                <div
                  className="f_20 less_opacity"
                  dangerouslySetInnerHTML={{ __html: content.description }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
