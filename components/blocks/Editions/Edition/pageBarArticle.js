import useTranslation from "next-translate/useTranslation";

const PageBarArticle = (props) => {
  const { articles } = props;
  const { t } = useTranslation("common");
  return (
    <div
      className="page_bar fixed_item forced-full-width"
      data-scroll
      data-scroll-sticky
      data-scroll-target="#fixed-bar"
    >
      <div className="tabs_bar multiple">
        {articles.map((article, key) => {
          return (
            <div
              className="tab flex"
              data-id={key + 1}
              key={`edition_bartab-${key}`}
            >
              <i className="full_bg"></i>
              <div className="tab_content">
                {/* <span className="f_16">{`${t("article_tab")} #${
                  key + 1
                }`}</span> */}
                <span className="f_40 alt">{article.title}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PageBarArticle;
