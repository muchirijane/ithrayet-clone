import SVG from "react-inlinesvg";
import { CMSPath } from "../helpers/imageCMSPath";

const SVGComp = (props) => {
  const { url_path, classes } = props;

  return (
    <SVG className={classes ? classes : ""} src={`${CMSPath}${url_path}`} />
  );
};

export default SVGComp;
