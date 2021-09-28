import EditionsTitle from "../../elements/EditionsTitle";
import { TagsBuilder } from "../../../helpers/tagsBuilder";
import { getTypeValue } from "../../../helpers/api";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

const PageBar = (props) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { locale } = router;
  const { editions } = props;
  return (
    <div
      className="page_bar fixed_item"
      data-scroll
      data-scroll-sticky
      data-scroll-target="#fixed-bar"
    >
      <div className="tabs_bar multiple">
        {editions.map((edition, key) => {
          let tags = TagsBuilder(edition.tags);

          return (
            <EditionsTitle
              key={key}
              id={key + 1}
              tags={tags.tagNames}
              tagColors={tags.tagColors}
              type={`${getTypeValue(edition.type.value, t)} #${
                edition.type.number
              }`}
              title={edition.title}
              pageURL={`${locale === "ar" ? "/ar" : ""}/editions/${
                edition.slug
              }`}
              bgColor={edition.color}
              textColor={edition.colorText}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PageBar;
