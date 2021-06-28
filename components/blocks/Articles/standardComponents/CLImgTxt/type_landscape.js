import Link from "next/link";
import { CMSPath } from "../../../../../helpers/imageCMSPath";

const TypeLandscape = (props) => {
  const { title, description, image, isCentered } = props;

  return (
    <section>
      <div className="custom_content">
        <div className="content_a">
          <div className="content_b">
            <div className="side_head">
              <div className="f_80 alt">{title}</div>
            </div>

            <div className="section_sides inner_sides flex">
              <div
                className="text_side"
                style={isCentered ? { textAlign: "center" } : {}}
              >
                <div
                  className="f_20 less_opacity"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              </div>

              <div className="text_side">
                <img crossorigin="anonymous"
                  className="load_img"
                  data-src={`${CMSPath}${image.image.url}`}
                  width="100%"
                  height="auto"
                  alt={`${image.image.alternativeText}`}
                />
                <div className="info_line">
                  <div className="f_14">
                    {`${image.description}`} Artwork by{" "}
                    <strong>
                      <Link href={`/creatives/${image.artist.slug}`}>
                        <a target="_blank">{`${image.artist.firstName} ${image.artist.lastName}`}</a>
                      </Link>
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypeLandscape;
