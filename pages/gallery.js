import Layout from "../components/Layout";
import { GET_GALLERY_DATA } from "../graphql";
import { ChunkArray } from "../helpers/arrayHelper";
import { CMSPath } from "../helpers/imageCMSPath";
import Link from "next/link";
import client from "../lib/apollo";
import { useEffect, useState } from "react";

export const getStaticProps = async ({ locale }) => {
  const { data } = await client.query({
    query: GET_GALLERY_DATA,
    variables: {
      locale: locale,
    },
  });

  if (data) {
    return {
      props: {
        articles: data.articles.length && ChunkArray(data.articles, 12),
        SEO: data.listGallery.seo,
      },
      revalidate: 60,
    };
  }
};
const Gallery = (props) => {
  const { articles, SEO } = props;
  // const [triggerResize, callResize] = useState(false);

  // useEffect(() => {
  //   if (triggerResize) {
  //     console.log("hi");
  //   }
  // }, [triggerResize]);
  // const handleResize = () => {
  //   callResize(true);
  // };
  return (
    <Layout isInner seo={SEO && SEO}>
      {articles && (
        <div id="sections">
          <section>
            <div className="gallery_set">
              {articles.map((chunk, chunk_key) => {
                return (
                  <div className="gallery_group" key={`g_pop-${chunk_key}`}>
                    <div className="gallery_items flex">
                      {chunk.map((article, key) => (
                        <Link
                          href={`/articles/${article.slug}`}
                          key={`g_item-${chunk_key}-${key}`}
                        >
                          <a className="gallery_block _curTL1" data-title="+">
                            <div className="gallery_img">
                              <img
                                className="load_img"
                                data-src={`${CMSPath}${article.cover.url}`}
                                width="100%"
                                height="auto"
                                alt={article.cover.alternativeText}
                              />
                            </div>
                            <div className="gallery_title">
                              <div className="f_40 alt uppercase">
                                {article.title}
                              </div>
                            </div>
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
