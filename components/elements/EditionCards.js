const EditionCards = ({ title, cover, img1, img2 }) => {
  return (
    <span
      data-title={title}
      data-date="March 2021"
      data-url={`#1`}
      data-cover={cover}
      data-img1={img1}
      data-img2={img2}
    ></span>
  );
};

export default EditionCards;