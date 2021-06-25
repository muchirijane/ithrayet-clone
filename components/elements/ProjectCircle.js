const ProjectCircle = ({ title, url, color }) => {
  return (
    <div
      className="jn_circle"
      data-color={color}
      data-title={title}
      data-url={`#1`}
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
