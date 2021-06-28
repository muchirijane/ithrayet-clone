import Link from "next/link";
import { useRouter } from "next/router";
import { CMSPath } from "../../helpers/imageCMSPath";
const EditonArticle = (props) => {
  const { article, id } = props;
  const { locale } = useRouter();

  return (
    <section data-scroll data-scroll-id={id} className="tab_section">
      <div className="section_content">
        <div className="content_a">
          <Link
            href={`/articles/${article.slug}`}
            locale={locale}
            data-title="Read"
          >
            <a
              className="section_sides edition_sides flex _link _curTL1"
              data-title="Read"
            >
              <div className="section_side img_side">
                <img
                  className="preloadIMG"
                  data-img={`${CMSPath}${article.cover.url}`}
                  width="100%"
                  height="auto"
                  alt={article.title}
                  data-scroll
                  data-scroll-direction="vertical"
                  data-scroll-speed="2"
                />
              </div>
              <div className="section_side text_side">
                <div className="article_title">
                  <div className="f_16">{article.quote}</div>
                  <div className="f_80 alt">{article.description}</div>
                </div>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EditonArticle;
