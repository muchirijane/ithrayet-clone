import { CMSPath } from "../../../../helpers/imageCMSPath";
import { format } from "date-fns";
import Link from "next/link";
import { StripPTags } from "../../../../helpers/arrayHelper";

const CenterTextSection = (props) => {
  const { content, centerText } = props;

  return (
    <div className="section_sides exp_sides flex">
      {content.map((card, key) => {
        return (
          <Link href={`/join-experience/${card.slug}`} key={`exp-text-${key}`}>
            <a
              className="exp_set _curTL1"
              data-title="View"
              data-scroll
              data-scroll-direction="vertical"
              data-scroll-speed={key + 1}
            >
              <div className="exp_img">
                <img
                  className="load_img"
                  data-src={`${CMSPath}${card.cover.url}`}
                  alt={card.cover.alternativeText}
                  width="100%"
                  height="auto"
                />
              </div>
              <div className="exp_details">
                <span className="f_40 alt flex">
                  <span>{card.title}</span>
                  <span className="f_16 norm">
                    / {card.date && format(new Date(card.date), "yyyy")}
                  </span>
                </span>
                <span className="f_16">{card.quote}</span>
              </div>
            </a>
          </Link>
        );
      })}
      {centerText && (
        <div className="row_middle flex">
          <strong
            className="f_40 uppercase"
            dangerouslySetInnerHTML={{ __html: StripPTags(centerText) }}
          />
        </div>
      )}
    </div>
  );
};

export default CenterTextSection;
