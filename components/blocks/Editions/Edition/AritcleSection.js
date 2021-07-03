import Link from "next/link";
import { useState } from "react";
import EditonArticle from "../../../elements/EditionArticle";

const ArticleSection = (props) => {
  const { articles, slug, featured, exclusive } = props;
 
  const isAll = (featured === null && exclusive === null);
 
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
              <Link href={`/editions/${slug}`}>
                <a className={`exclude-a ${isAll ? "active" : ""}`}>
                  <span className="f_lable">All</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href={`/editions/${slug}?featured=true`}>
                <a className={`exclude-a ${featured ? "active" : ""}`}>
                  <span className="f_lable">Featured</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href={`/editions/${slug}?exclusive=true`}>
                <a className={`exclude-a ${exclusive ? "active" : ""}`}>
                  <span className="f_lable">Exclusive</span>
                </a>
              </Link>
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
