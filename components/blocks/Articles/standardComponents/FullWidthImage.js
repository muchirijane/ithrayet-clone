import Link from "next/link";
import { CMSPath } from "../../../../helpers/imageCMSPath";

const FullWidthImage = (props) => {
  const { content } = props;

  return (
    <section>
      <div className="custom_content">
        <div className="media_set full">
          <img crossOrigin="anonymous"
            className="load_img"
            data-src={`${CMSPath}${content.fullWidthImage_image.image.url}`}
            width="100%"
            height="auto"
            alt={content.fullWidthImage_image.image.alternativeText}
          />

          <div className="info_line">
            <div className="f_14">
              {content.fullWidthImage_image.description} Artwork by{" "}
              <strong>
                <Link
                  href={`/creatives/${content.fullWidthImage_image.artist.slug}`}
                >
                  <a target="_blank">
                    {`${content.fullWidthImage_image.artist.firstName} ${content.fullWidthImage_image.artist.lastName}`}
                  </a>
                </Link>
              </strong>
            </div>
          </div>
        </div>

        <div className="content_a">
          <div className="content_b">
            <div
              className={
                content.fullWidthImage_type.toLowerCase() === "left"
                  ? "media_title  flex"
                  : "media_title reversed flex"
              }
            >
              <strong className="f_80 uppercase">
                {content.fullWidthImage_title}
              </strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullWidthImage;
