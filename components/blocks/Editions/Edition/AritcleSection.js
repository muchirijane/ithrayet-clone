import { useState } from "react";
import EditonArticle from "../../../elements/EditionArticle";

const ArticleSection = (props) => {
  const { articles, slug } = props;

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
              <a className="active exclude-a">
                <span className="f_lable">All</span>
              </a>
            </li>
            <li>
              <a className="exclude-a">
                <span className="f_lable">Featured</span>
              </a>
            </li>
            <li>
              <a className="exclude-a">
                <span className="f_lable">Exclusive</span>
              </a>
            </li>
            {/* <li>
              <a href="edition_en.php?id=3">
                <span className="f_lable">Most Read</span>
              </a>
            </li> */}
          </ul>
        </div>
      </div>
      {articles.map((article, key) => (
        <EditonArticle
          id={key + 1}
          article={article}
          key={`editon_article-${key}`}
        />
      ))}
    </div>
  );
};

export default ArticleSection;
