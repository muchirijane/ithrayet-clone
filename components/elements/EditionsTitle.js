const EditionsTitle = (props) => {
  const { id, tags, tagColors, type, title, pageURL, bgColor } = props;
  return (
    <div
      className="tab flex"
      data-id={id}
      data-tags={tags}
      data-tags-url="#1,#2,#3"
      data-tags-color={tagColors}
      data-url={pageURL}
      data-color={bgColor}
    >
      <i className="full_bg"></i>
      <div className="tab_content">
        <span className="f_16">{type}</span>
        <span className="f_40 alt">{title}</span>
      </div>
    </div>
  );
};

export default EditionsTitle;
