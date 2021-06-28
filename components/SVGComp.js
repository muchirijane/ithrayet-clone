import { ReactSVG } from "react-svg";
import { CMSPath } from "../helpers/imageCMSPath";

const SVGComp = (props) => {
  const { url_path, classes } = props;

  return (
    <ReactSVG
      className={classes ? classes : ""}
      src={`${CMSPath}${url_path}`}
      beforeInjection={(svg) => {
        svg.setAttribute("crossorigin", "anonymous");
      }}
    />
  );
};

export default SVGComp;
