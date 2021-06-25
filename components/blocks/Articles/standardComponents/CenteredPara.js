const CenteredPara = (props) => {
  const { content } = props;
  return (
    <section>
      <div className="custom_content">
        <div className="content_a">
          <div className="centered_text">
            <div className="f_80 alt">{content.title}</div>
            <div
              className="f_20 less_opacity"
              dangerouslySetInnerHTML={{ __html: content.description }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CenteredPara;
