const ProjectCircle = ({ title, url, color, hrefUrl }) => {
  return (
    <div
      className="jn_circle _link"
      data-color={color}
      data-title={title}
      data-href={hrefUrl}
    >
      <div className="jn_circle_content">
        <i className="full_bg">
          <span className="load_bg _curTL1" data-src={url}></span>
        </i>
      </div>
    </div>
  );
};

export default ProjectCircle;
