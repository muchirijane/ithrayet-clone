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
                return (
                  <div className="gallery_group" key={`g_pop-${chunk_key}`}>
                    <div className="gallery_items flex">
                      {chunk.map((gallery, key) => (
                        <div
                          className="gallery_block _curTL1"
                          data-title="+"
                          key={`g_item-${chunk_key}-${key}`}
                        >
                          <div className="gallery_img">
                            <img
                              className="load_img"
                              data-src={`${CMSPath}${gallery.media.url}`}
                              width="100%"
                              height="auto"
                              alt={gallery.media.alternativeText}
                            />
                          </div>
                          <div className="gallery_title">
                            <div className="f_40 alt uppercase">
                              {gallery.title}
                            </div>
                          </div>
                        </div>
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
