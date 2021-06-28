import { CMSPath } from "../../../../helpers/imageCMSPath";
import { format } from "date-fns";
import Link from "next/link";
const Column3Section = (props) => {
  const { content } = props;
 
  return (
    <div className="section_sides exp_sides flex">
      {content.CL3_cards.map((card, key) => {
        return (
          <Link href={`/join-experience/${card.project.slug}`} key={`exp-${key}`}>
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
                  data-src={`${CMSPath}${card.project.cover.url}`}
                  alt={card.project.cover.alternativeText}
                  width="100%"
                  height="auto"
                />
              </div>
              <div className="exp_details">
                <span className="f_40 alt flex">
                  <span>{card.project.title}</span>
                  <span className="f_16 norm">
                    / {format(new Date(card.project.date), "yyyy")}
                  </span>
                </span>
                <span className="f_16">{card.project.quote}</span>
              </div>
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default Column3Section;
