const ArticleHomepage = ({id,imgUrl,title,subTitle}) => {
  return (
    <article
      id={id}
      className="reveal preloadIMG"
      data-img={imgUrl}
      data-title={title}
      data-sub={subTitle}
      data-url="#"
    >
      <div className="article_content full_bg">
        <i></i>
      </div>
    </article>
  );
};

export default ArticleHomepage;