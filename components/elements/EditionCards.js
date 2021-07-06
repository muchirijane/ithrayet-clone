import { format } from "date-fns";
import Link from "next/link";
const EditionCards = ({ title, cover, img1, img2, date, slug }) => {
  return (
    <span
      data-title={title}
      data-date={`${format(new Date(date), "MMMM yyyy")}`}
      data-url={`/articles/${slug}`}
      data-cover={cover}
      data-img1={img1}
      data-img2={img2}
    ></span>
  );
};

export default EditionCards;
