import { format } from "date-fns";

import { useEffect, useState } from "react";

const EditionCards = ({
  title,
  cover,
  img1,
  img2,
  date,
  slug,
  featuredTitle,
  svg,
}) => {
  const [svgString, setSvgString] = useState("");
  useEffect(() => {
    fetch(svg)
      .then((response) => response.text())
      .then((str) => {
        setSvgString(str);
      });
  }, []);
  return (
    <>
      <div style={{ display: "none" }}></div>

      <span
        data-title={title}
        data-big-title={featuredTitle.replace("<p>", "").replace("</p>", "")}
        data-date={`${format(new Date(date), "MMMM yyyy")}`}
        data-url={slug}
        data-cover={cover}
        data-img1={img1}
        data-img2={img2}
        data-shape={svgString}
      ></span>
    </>
  );
};

export default EditionCards;
