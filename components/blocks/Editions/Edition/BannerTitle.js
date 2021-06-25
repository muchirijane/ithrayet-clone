const BannerTitle = (props) => {
  const { tags, title, type } = props;
  return (
    <div className="content_a">
      <div className="section_head_set outter">
        <div className="section_head">
          <div className="tags flex">
            {tags.map((tag, key) => {
              return (
                <a
                  key={`edition_tag-${key}`}
                  href="#"
                  style={{ color: tag.color }}
                >
                  {tag.name}
                </a>
              );
            })}
          </div>
          <div className="f_30">{`${type.value} #${type.number}`}</div>
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default BannerTitle;
