import SVG from "react-inlinesvg";
import { CMSPath } from "../helpers/imageCMSPath";

const SVGComp = (props) => {
  const { url_path, classes } = props;
  return (
    <SVG
      className={classes ? classes : ""}
      src={`${CMSPath}${url_path}`}
      cacheRequests={true}
      fetchOptions={{ headers: { "Access-Control-Allow-Origin": "*" } }}
    />
  );
};

export default SVGComp;
