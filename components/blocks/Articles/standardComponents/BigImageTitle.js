import { CMSPath } from "../../../../helpers/imageCMSPath";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import CommonImageBlock from "@/components/elements/CommonImageBlock";

const BigImageTitle = (props) => {
  const { t } = useTranslation("common");
  const { content } = props;
  const { locale } = useRouter();

  return (
    <section>
      <div className="custom_content">
        <div className="content_a">
          <div className="content_b">
            <div className="media_head">
              <div className="f_40 uppercase">{content.bigImageWT_title}</div>
            </div>

            <div className="media_set">
              <CommonImageBlock
                image={content.bigImageWT_image}
                locale={locale}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BigImageTitle;
