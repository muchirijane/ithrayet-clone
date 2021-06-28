import { CMSPath } from "../../../../helpers/imageCMSPath";

const InteractiveMap = (props) => {
  const { content } = props;
  return (
    <section>
      <div className="custom_content">
        <div className="content_a">
          <div className="content_b">
            <div className="media_set">
              <img
                className="load_img"
                data-src={`${CMSPath}${content.map_image.url}`}
                width="100%"
                height="auto"
                alt={content.map_image.alternativeText}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;
