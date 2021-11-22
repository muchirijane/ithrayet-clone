import Layout from "../components/Layout";
import { GET_GALLERY_DATA } from "../graphql";
import { ChunkArray } from "../helpers/arrayHelper";
import { CMSPath } from "../helpers/imageCMSPath";
import { fetchAPI } from "../helpers/api";

import client from "../lib/apollo";
import { useEffect, useState } from "react";
import { createHttpLink } from "@apollo/client";

export const getStaticProps = async ({ locale }) => {
  let listOfEditions = await fetchAPI(`/editions?_sort=publishedDate`);
  // console.log(result, "result");
  let listOfImages = [];
  listOfEditions.map((edition, index) => {
    let obj = {};
    if (edition.articles) {
      obj = {
        id: edition.id,
        title: edition.title,
        images: [],
      };

      edition.articles.map((article) => {
        article.ArticleBlocks.map((block) => {
          if (block.image) {
            if (block.image.length) {
              block.image.map((img) => {
                img.link = article.slug;
                img.articleTitle = article.title;
                obj.images = [...obj.images, img];
              });
            } else {
              block.image.link = article.slug;
              block.image.articleTitle = article.title;
              obj.images = [...obj.images, block.image];
            }
          }
        });
      });
    }
    if (obj.images.length) {
      obj.images = ChunkArray(obj.images, 12);
      listOfImages = [...listOfImages, obj];
    }
  });

  const { data } = await client.query({
    query: GET_GALLERY_DATA,
    variables: {
      locale: locale,
    },
  });

  if (data) {
    return {
      props: {
        galleries: data.galleries.length && ChunkArray(data.galleries, 12),
        SEO: data.listGallery.seo,
        listOfImages,
        locale,
      },
      revalidate: 25,
    };
  }
};
const Gallery = (props) => {
  const { galleries, SEO, listOfImages, locale } = props;

  // const [triggerResize, callResize] = useState(false);

  // useEffect(() => {
  //   if (triggerResize) {
  //     console.log("hi");
  //   }
  // }, [triggerResize]);
  // const handleResize = () => {
  //   callResize(true);
  // };
  useEffect(() => {
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 1000);
  }, [galleries]);

  // useEffect(() => {
  //   // console.log(listOfEditions, "listOfEditions");

  //   listOfEditions.map((edition, index) => {
  //     let obj = {};
  //     if (edition.articles) {
  //       obj = {
  //         id: edition.id,
  //         title: edition.title,
  //         images: [],
  //       };

  //       edition.articles.map((article) => {
  //         article.ArticleBlocks.map((block) => {
  //           if (block.image) {
  //             if (block.image.length) {
  //               block.image.map((img) => {
  //                 img.link = article.slug;
  //                 obj.images = [...obj.images, img];
  //               });
  //             } else {
  //               block.image.link = article.slug;
  //               obj.images = [...obj.images, block.image];
  //             }
  //           }
  //         });
  //       });
  //     }
  //     setListOfImages([...listOfImages, obj]);
  //   });
  // }, [listOfEditions]);

  console.log(listOfImages, "listOfImages", galleries);

  return (
    <Layout isInner seo={SEO && SEO}>
      {/* {galleries && (
        <div id="sections">
          <section>
            <div className="gallery_set">
              {galleries.map((chunk, chunk_key) => {
                console.log(chunk, "chunk");
                let counterKey = 0;
                return (
                  <div className="gallery_group" key={`g_pop-${chunk_key}`}>
                    <div className="gallery_items flex">
                      {chunk.map((gallery, key) => {
                        let currentKey = counterKey;
                        counterKey++;

                        return (
                          <div
                            className="gallery_block _curTL1"
                            data-title="+"
                            key={`g_item-${chunk_key}-${key}`}
                          >
                            <div className="gallery_img">
                              {gallery.externalVideoLink ? (
                                <a
                                  href={`${gallery.externalVideoLink}`}
                                  className="exclude_link"
                                  data-popup-type="iframe"
                                  data-cell-index={currentKey}
                                >
                                  <video
                                    autoPlay
                                    playsInline
                                    width="100%"
                                    height="auto"
                                    poster={`${CMSPath}${gallery.media.url}`}
                                  >
                                    <source
                                      src={`${gallery.externalVideoLink}`}
                                    />
                                  </video>
                                </a>
                              ) : (
                                <a
                                  href={`${CMSPath}${gallery.media.url}`}
                                  className="exclude_link"
                                  data-cell-index={currentKey}
                                >
                                  <img
                                    className="load_img"
                                    data-src={`${CMSPath}${gallery.media.url}`}
                                    width="100%"
                                    height="auto"
                                    alt={gallery.media.alternativeText}
                                  />
                                </a>
                              )}
                            </div>
                            <div className="gallery_title">
                              <div className="f_40 alt uppercase">
                                {gallery.title}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      )} */}
      <div id="sections">
        {listOfImages.length
          ? listOfImages.map((edition) => {
              return (
                <section>
                  {/* <h2>{edition.title}</h2> */}
                  <div className="gallery_set">
                    {edition.images.map((chunk, chunk_key) => {
                      let counterKey = 0;
                      return (
                        <div
                          className="gallery_group"
                          key={`g_pop-${chunk_key}`}
                        >
                          <div className="gallery_items flex">
                            {chunk.map((gallery, key) => {
                              let currentKey = counterKey;
                              counterKey++;
                              return (
                                <div
                                  className="gallery_block _curTL1"
                                  data-title="+"
                                  key={`g_item-${chunk_key}-${key}`}
                                >
                                  <div className="gallery_img">
                                    <a
                                      href={`${CMSPath}${gallery.image.url}`}
                                      className="exclude_link"
                                      data-cell-index={currentKey}
                                      data-article={`${
                                        locale === "en" ? "/" : "/ar/"
                                      }articles/${gallery.link}`}
                                    >
                                      <img
                                        className="load_img"
                                        data-src={`${CMSPath}${gallery.image.url}`}
                                        width="100%"
                                        height="auto"
                                        alt={gallery.image.alternativeText}
                                      />
                                    </a>
                                  </div>
                                  <div className="gallery_title">
                                    <div className="f_40 alt uppercase">
                                      {gallery.articleTitle}
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              );
            })
          : null}
      </div>

      {/* <section>
          <div className="gallery_set">
            {listOfImages.length
              ? listOfImages.map((edition) => {
                  let counterKey = 0;

                  return !edition.images ? null : (
                    <div className="gallery_group" key={`g_pop-${edition.id}`}>
                      {console.log(edition)}
                      <div className="gallery_items flex">
                        {edition.images &&
                          edition.images.map((image, index) => {
                            let currentKey = counterKey;
                            counterKey++;

                            return (
                              <div
                                className="gallery_block _curTL1"
                                data-title="+"
                                key={`g_item-${image.id}`}
                              >
                                <div className="gallery_img">
                                  <a
                                    href={`${CMSPath}${image.image.url}`}
                                    className="exclude_link"
                                    data-cell-index={currentKey}
                                  >
                                    <img
                                      className="load_img"
                                      data-src={`${CMSPath}${image.image.url}`}
                                      width="100%"
                                      height="auto"
                                      alt={image.image.alternativeText}
                                    />
                                  </a>
                                </div>
                                <div className="gallery_title">
                                  <div className="f_40 alt uppercase">
                                    {image.link}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
        </section> */}
    </Layout>
  );
};

export default Gallery;
