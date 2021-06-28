import { ReactSVG } from "react-svg";
import { CMSPath } from "../../../../helpers/imageCMSPath";

const Signature = (props) => {
  const { content } = props;
  return (
    <section>
      <div className="custom_content">
        <div className="content_a">
          <div className="content_b">
            <div className="section_sides signes text_sides flex">
              <div className="text_side">
                <div className="sign_set">
                  <ReactSVG src={`${CMSPath}${content.signature.url}`} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signature;
