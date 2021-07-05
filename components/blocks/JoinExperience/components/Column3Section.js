import { CMSPath } from "../../../../helpers/imageCMSPath";
import { format } from "date-fns";
import Link from "next/link";
const Column3Section = (props) => {
  const { content } = props;

  return (
    <div className="section_sides exp_sides flex">
      {content.map((card, key) => (
        <Link
          href={`/join-experience/${card.slug}`}
          key={`expc3-${key}`}
        >
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
                  / {format(new Date(card.date), "yyyy")}
                </span>
              </span>
              <span className="f_16">{card.quote}</span>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Column3Section;
