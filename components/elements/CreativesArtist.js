import SVGComp from "../SVGComp";

const CreativeArtist = ({ dist, artistName, svgUrl, profileUrl }) => {
  return (
    <div className="crv_circle _curTL2" data-name={artistName} data-url="#">
      <div className="crv_cont full_bg mg" data-dist={dist}>
        <div className="crv_stroke">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 202 202">
            <path
              className="stroke-an svg-stroke"
              fill="none"
              strokeWidth="1"
              d="M91,3.4C149.3-4.5,203.9,49.1,199.9,107c-3.4,49.3-42.6,87.9-90.9,93.7C35.1,209.6-17.1,128.5,9.5,63 C23.3,28.7,55.4,8.3,91,3.4"
            ></path>
          </svg>
        </div>

        <SVGComp classes="sign sign_a" url_path={`${svgUrl}`} />
        <SVGComp classes="sign sign_b" url_path={`${svgUrl}`} />

        <div className="crv_img">
          <i className="load_bg" data-src={profileUrl}></i>
        </div>
      </div>
    </div>
  );
};

export default CreativeArtist;
