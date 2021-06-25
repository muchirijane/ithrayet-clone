import EditonArticle from '../../../elements/EditionArticle';

const ArticleSection = (props) => {
  const { articles } = props;
  return (
    <div id="sections">
      <div
        className="fixed_item has_background filters"
        data-scroll
        data-scroll-sticky
        data-scroll-target="#sections"
      >
        <div className="sub-menu secondary">
          <ul>
            <li>
              <a href="edition_en.php" className="active">
                <span className="f_lable">All</span>
              </a>
            </li>
            <li>
              <a href="edition_en.php?id=1">
                <span className="f_lable">Featured</span>
              </a>
            </li>
            <li>
              <a href="edition_en.php?id=2">
                <span className="f_lable">Exclusive</span>
              </a>
            </li>
            <li>
              <a href="edition_en.php?id=3">
                <span className="f_lable">Most Read</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {articles.map((article, key) => {
        return (
          <EditonArticle id={key+1} article={article} key={`editon_article-${key}`} />
        );
      })}
    </div>
  );
};

export default ArticleSection;
