import EditionsTitle from "../../elements/EditionsTitle";
import { TagsBuilder } from "../../../helpers/tagsBuilder";

const PageBar = (props) => {
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
              type={`${edition.type.value} #${edition.type.number}`}
              title={edition.title}
              pageURL={`/editions/${edition.slug}`}
              bgColor={edition.color}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PageBar;
