import { CMSPath } from "../../../../../helpers/imageCMSPath";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import CommonImageBlock from "@/components/elements/CommonImageBlock";

const TypeLeft = (props) => {
  const { t } = useTranslation("common");
  const { title, description, image, isCentered } = props;
  const { locale } = useRouter();
  return (
    <section>
      <div className="custom_content">
        <div className="content_a">
          <div className="content_b">
            <div className="section_sides inner_sides reversed flex">
              <div
                className="text_side"
                style={isCentered ? { textAlign: "center" } : {}}
              >
                <div
                  className="f_80 alt"
                  style={isCentered ? { textAlign: "center" } : {}}
                >
                  {title}
                </div>
                <div
                  className="f_20 less_opacity"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              </div>

              <div
                className="text_side"
                data-scroll
                data-scroll-direction="vertical"
                data-scroll-speed="2"
              >
                <CommonImageBlock image={image} locale={locale} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypeLeft;
