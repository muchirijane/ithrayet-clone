import Layout from "../components/Layout";
import { GET_GALLERY_DATA } from "../graphql";
import { ChunkArray } from "../helpers/arrayHelper";
import { CMSPath } from "../helpers/imageCMSPath";

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
        galleries: data.galleries.length && ChunkArray(data.galleries, 12),
        SEO: data.listGallery.seo,
      },
      revalidate: 60,
    };
  }
};
const Gallery = (props) => {
  const { galleries, SEO } = props;
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

  return (
    <Layout isInner seo={SEO && SEO}>
      {galleries && (
        <div id="sections">
          <section>
            <div className="gallery_set">
              {galleries.map((chunk, chunk_key) => {
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
      )}
    </Layout>
  );
};

export default Gallery;
