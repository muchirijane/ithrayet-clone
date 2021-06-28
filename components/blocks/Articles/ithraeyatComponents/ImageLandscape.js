import { CMSPath } from "../../../../helpers/imageCMSPath";

const ImageLandscape = (props) => {
  const { content } = props;

  return (
    <section>
      <div className="custom_content">
        <div className="content_a">
          <div className="content_b">
            <div
              className={
                content.parallaxLS_type.toLowerCase() === "left"
                  ? "section_sides dif_size_cold flex"
                  : "section_sides reversed dif_size_cold flex"
              }
            >
              <div className="ds_col">
                <img crossOrigin="anonymous"
                  className="load_img"
                  data-src={`${CMSPath}${content.parallaxLS_imageTitle.image.url}`}
                  width="100%"
                  height="auto"
                  alt={content.parallaxLS_imageTitle.image.alternativeText}
                />
                <div className="info_line">
                  <div className="f_80 alt">
                    {content.parallaxLS_imageTitle.title}
                  </div>
                </div>
              </div>

              <div
                className="ds_col"
                data-scroll
                data-scroll-direction="vertical"
                data-scroll-speed="2"
              >
                <img crossOrigin="anonymous"
                  className="load_img"
                  data-src={`${CMSPath}${content.imageTitleDescription.image.url}`}
                  width="100%"
                  height="auto"
                  alt={content.imageTitleDescription.image.alternativeText}
                />
                <div className="info_line">
                  <div className="f_40 alt">
                    {content.imageTitleDescription.title}
                  </div>
                  <div
                    className="f_20 less_opacity"
                    dangerouslySetInnerHTML={{
                      __html: content.imageTitleDescription.description,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageLandscape;
