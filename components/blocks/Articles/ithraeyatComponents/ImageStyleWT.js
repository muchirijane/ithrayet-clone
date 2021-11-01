import { CMSPath } from "../../../../helpers/imageCMSPath";
import Link from "next/link";
import SVGComp from "../../../SVGComp";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import CommonImageBlock from "@/components/elements/CommonImageBlock";

const ImageStyleWT = (props) => {
  const { t } = useTranslation("common");
  const { content } = props;
  const { locale } = useRouter();
  return (
    <section>
      <div className="custom_content">
        <div className="content_a">
          <div className="content_b">
            {content.galleryWT_sectionTitle && (
              <div className="side_head custom_head center">
                <strong className="f_40 uppercase">
                  {content.galleryWT_sectionTitle}
                </strong>
              </div>
            )}
            <div className="section_sides three_cols flex">
              {content.galleryWT_image &&
                content.galleryWT_image.map((image, key) => (
                  <div
                    key={`parallaxImageWT-${key}`}
                    className="three_col"
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="1"
                  >
                    <CommonImageBlock image={image} locale={locale} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageStyleWT;
