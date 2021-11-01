import { CMSPath } from "../../../../helpers/imageCMSPath";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import CommonImageBlock from "@/components/elements/CommonImageBlock";

const ImageStyleFullWidth = (props) => {
  const { t } = useTranslation("common");
  const { content } = props;
  const { locale } = useRouter();

  return (
    <section>
      <div className="custom_content">
        <div className="content_a">
          <div className="content_b">
            <div className="side_head long">
              <div className="f_80 alt">{content.imageFullWidth_title}</div>
            </div>

            <div className="section_sides inner_sides flex">
              <div
                className="text_side"
                data-scroll
                data-scroll-direction="vertical"
                data-scroll-speed="2"
              >
                <CommonImageBlock
                  image={content.imageFullWidth_image[0]}
                  locale={locale}
                />
              </div>

              <div
                className="text_side"
                data-scroll
                data-scroll-direction="vertical"
                data-scroll-speed="3"
              >
                <CommonImageBlock
                  image={content.imageFullWidth_image[1]}
                  locale={locale}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageStyleFullWidth;
