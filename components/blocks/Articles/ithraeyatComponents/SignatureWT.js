import { ReactSVG } from "react-svg";
import { CMSPath } from "../../../../helpers/imageCMSPath";

const SignatureWT = (props) => {
  const { content } = props;
  return (
    <section>
      <div className="custom_content">
        <div className="content_a">
          <div className="content_b">
            <div className="section_sides signes text_sides flex">
              <div className="text_side">
                <div className="f_20 less_opacity">
                  <p>{content.signatureWT_title} </p>
                </div>
              </div>

              <div className="text_side">
                <div className="sign_set">
                  <ReactSVG src={`${CMSPath}${content.signatureWT_sign.url}`} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignatureWT;
