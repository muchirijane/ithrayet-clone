import Link from "next/link";
import { CMSPath } from "../../../../helpers/imageCMSPath";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import CommonImageBlock from "@/components/elements/CommonImageBlock";

const ImageWithText = (props) => {
  const { t } = useTranslation("common");
  const { content } = props;
  const { locale } = useRouter();
  return (
    <section>
      <div className="custom_content">
        <div className="content_a">
          <div className="section_sides inner_sides flex">
            <div className="inner_side">
              <div
                className="side_img big-quote_contatiner"
                data-scroll
                data-scroll-direction="vertical"
                data-scroll-speed="1"
              >
                <div
                  className="text_side big-quote"
                  data-scroll
                  data-scroll-direction="vertical"
                  data-scroll-speed="2"
                >
                  <div className="f_80 uppercase">{content.sectionTitle}</div>
                </div>

                <CommonImageBlock
                  image={content.parallaxImageWT_images[0]}
                  locale={locale}
                />
              </div>

              <div
                className="text_side"
                data-scroll
                data-scroll-direction="vertical"
                data-scroll-speed="2"
              >
                <div className="f_80 alt">{content.title}</div>
                <div
                  className="f_20 less_opacity"
                  dangerouslySetInnerHTML={{ __html: content.description }}
                />
              </div>
            </div>

            <div
              className="inner_side"
              data-scroll
              data-scroll-direction="vertical"
              data-scroll-speed="2"
            >
              <div className="side_img">
                <CommonImageBlock
                  image={content.parallaxImageWT_images[1]}
                  locale={locale}
                />
              </div>

              <div
                className="side_img"
                data-scroll
                data-scroll-direction="vertical"
                data-scroll-speed="1"
              >
                <CommonImageBlock
                  image={content.parallaxImageWT_images[2]}
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

export default ImageWithText;
