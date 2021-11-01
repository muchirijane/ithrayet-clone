import Link from "next/link";
import { CMSPath } from "../../../../helpers/imageCMSPath";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import CommonImageBlock from "@/components/elements/CommonImageBlock";

const TiltingFullWidth = (props) => {
  const { t } = useTranslation("common");
  const { content } = props;
  const { locale } = useRouter();
  console.log(content, "titlin");
  return (
    <section>
      <div className="custom_content">
        <div className="content_a">
          <div className="content_b">
            {content.tiltImageFW_title ? (
              <div className="side_head long">
                <div className="f_80 alt">{content.tiltImageFW_title}</div>
              </div>
            ) : null}

            <div className="section_sides center_tilt_cols flex">
              {content.tiltImageFW_image.length
                ? content.tiltImageFW_image.map((image, index) => (
                    <div className="ct_col">
                      <div
                        data-scroll
                        data-scroll-direction="horizontal"
                        data-scroll-speed={index === 0 ? "2" : "-2"}
                      >
                        <CommonImageBlock image={image} locale={locale} />
                      </div>
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TiltingFullWidth;
