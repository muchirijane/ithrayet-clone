import { getTypeValue } from "../../../../helpers/api";
import useTranslation from "next-translate/useTranslation";

const BannerTitle = (props) => {
  const { t } = useTranslation("common");

  const { tags, title, type } = props;
  return (
    <div className="content_a">
      <div className="section_head_set outter">
        <div className="section_head">
          <div className="tags flex">
            {tags.map((tag, key) => {
              return (
                <a
                  key={`edition_tag-${key}`}
                  href="#"
                  style={{ color: tag.color }}
                >
                  {tag.name}
                </a>
              );
            })}
          </div>
          <div className="f_30">{`${getTypeValue(type.value, t)} #${
            type.number
          }`}</div>
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default BannerTitle;
