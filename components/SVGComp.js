import SVG from "react-inlinesvg";
import { CMSPath } from "../helpers/imageCMSPath";

const SVGComp = (props) => {
  const { url_path, classes } = props;
  const headers = new Headers();
  headers.append("Access-Control-Allow-Origin", "*");
  return (
    <SVG
      className={classes ? classes : ""}
      src={`${CMSPath}${url_path}`}
      fetchOptions={{ mode: "cors", headers: headers }}
    />
  );
};

export default SVGComp;
