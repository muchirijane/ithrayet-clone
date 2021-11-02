const getSplitted = (title) => {
  let firstLine = title.split(" ");
  let secondLine = firstLine.splice(firstLine.length / 2);
  // console.log(firstLine, secondLine);
  return `${firstLine.join(" ")} <br/> ${secondLine.join(" ")}`;
};

const ArticleHomepage = ({ id, imgUrl, title, subTitle, hrefUrl }) => {
  // console.log(title.length);
  // getSplitted(title);
  const customTitle = title.length > 30 ? getSplitted(title) : title;
  return (
    <article
      id={id}
      className="reveal preloadIMG"
      data-img={imgUrl}
      data-title={customTitle}
      data-sub={subTitle}
      data-url={hrefUrl}
    >
      <div className="article_content full_bg">
        <i></i>
      </div>
    </article>
  );
};

export default ArticleHomepage;
