import Link from "next/link";
import { CMSPath } from "../../../../helpers/imageCMSPath";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import CommonImageBlock from "@/components/elements/CommonImageBlock";

const FullWidthImage = (props) => {
  const { t } = useTranslation("common");
  const { content } = props;
  const { locale } = useRouter();
  return (
    <section>
      <div className="custom_content">
        <div className="media_set full">
          <CommonImageBlock
            image={content.fullWidthImage_image}
            locale={locale}
          />
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
