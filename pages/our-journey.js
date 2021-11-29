import Link from "next/link";
import WriteToUsForm from "../components/forms/WriteToUs";
import InnerFooter from "../components/InnerFooter";
import Layout from "../components/Layout";
import { GET_JOURNEY_DATA } from "../graphql";
import { ChunkArray } from "../helpers/arrayHelper";

import { CMSPath } from "../helpers/imageCMSPath";
import client from "../lib/apollo";
import useIsTouchDevice from "@/helpers/isTouchDevice";

export const getStaticProps = async ({ locale }) => {
  const { data } = await client.query({
    query: GET_JOURNEY_DATA,
    variables: {
      locale: locale,
    },
  });

  if (data) {
    return {
      props: {
        journey: data.journey,
        news_letter: data.newsLetterForm,
        write_to_us: data.writeToUsForm,
        artists: data.artists.reduce(
          (rows, key, index) =>
            (index % 8 == 0
              ? rows.push([key])
              : rows[rows.length - 1].push(key)) && rows,
          []
        ),
      },
      revalidate: 1,
    };
  }
};
const OurJourney = (props) => {
  const { journey, news_letter, write_to_us, artists } = props;
  // console.log(artists);
  return (
    <Layout isInner seo={journey && journey.seo}>
      {journey && (
        <div className="page_head_set">
          <h1>{journey.title}</h1>
        </div>
      )}
      {journey && (
        <div id="sections">
          <section>
            <div className="section_content">
              <div className="content_a">
                <div className="hero_text flex">
                  <strong className="f_80 uppercase">
                    {journey.ourTeam.title}
                  </strong>
                  <div className="f_20 less_opacity">
                    {journey.ourTeam.description}
                  </div>
                </div>
              </div>
              <div className="team_set">
                {artists &&
                  artists.map((team, key) => {
                    return (
                      team && (
                        <div className="team_group" key={`team_group-${key}`}>
                          <div className="team_members flex">
                            {team.map((artist, index) => {
                              return useIsTouchDevice() ? (
                                <a className="crv_circle" data-index={index}>
                                  <div
                                    className="crv_cont full_bg mg"
                                    data-dist="7"
                                  >
                                    <div className="crv_stroke">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 202 202"
                                      >
                                        <path
                                          className="stroke-an svg-stroke"
                                          fill="none"
                                          strokeWidth="1"
                                          d="M91,3.4C149.3-4.5,203.9,49.1,199.9,107c-3.4,49.3-42.6,87.9-90.9,93.7C35.1,209.6-17.1,128.5,9.5,63 C23.3,28.7,55.4,8.3,91,3.4"
                                        ></path>
                                      </svg>
                                    </div>
                                    <div className="crv_img">
                                      <i
                                        className="load_bg"
                                        data-src={`${CMSPath}${artist.profileImage.url}`}
                                      ></i>
                                    </div>
                                    <div className="crv_name">
                                      <div className="f_40 alt uppercase">
                                        {artist.firstName} {artist.lastName}
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              ) : (
                                <Link
                                  href={`/creatives/${artist.slug}`}
                                  key={`team_item-${artist.id}`}
                                >
                                  <a className="crv_circle" data-index={index}>
                                    <div
                                      className="crv_cont full_bg mg"
                                      data-dist="7"
                                    >
                                      <div className="crv_stroke">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 202 202"
                                        >
                                          <path
                                            className="stroke-an svg-stroke"
                                            fill="none"
                                            strokeWidth="1"
                                            d="M91,3.4C149.3-4.5,203.9,49.1,199.9,107c-3.4,49.3-42.6,87.9-90.9,93.7C35.1,209.6-17.1,128.5,9.5,63 C23.3,28.7,55.4,8.3,91,3.4"
                                          ></path>
                                        </svg>
                                      </div>
                                      <div className="crv_img">
                                        <i
                                          className="load_bg"
                                          data-src={`${CMSPath}${artist.profileImage.url}`}
                                        ></i>
                                      </div>
                                      <div className="crv_name">
                                        <div className="f_40 alt uppercase">
                                          {artist.firstName} {artist.lastName}
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      )
                    );
                  })}
                {/* <div className="team_members flex">
                  {artists.length
                    ? artists.map((artist) => (
                        <a
                          href="#"
                          className="crv_circle"
                          key={`team_item-${artist.id}`}
                        >
                          <div className="crv_cont full_bg mg" data-dist="7">
                            <div className="crv_stroke">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 202 202"
                              >
                                <path
                                  className="stroke-an svg-stroke"
                                  fill="none"
                                  strokeWidth="1"
                                  d="M91,3.4C149.3-4.5,203.9,49.1,199.9,107c-3.4,49.3-42.6,87.9-90.9,93.7C35.1,209.6-17.1,128.5,9.5,63 C23.3,28.7,55.4,8.3,91,3.4"
                                ></path>
                              </svg>
                            </div>
                            <div className="crv_img">
                              <i
                                className="load_bg"
                                data-src={`${CMSPath}${artist.profileImage.url}`}
                              ></i>
                            </div>
                            <div className="crv_name">
                              <div className="f_40 alt uppercase">
                                {artist.firstName} {artist.lastName}
                              </div>
                            </div>
                          </div>
                        </a>
                      ))
                    : null}
                </div> */}
                {/* {journey.Teams.map((team, key) => {
                  return (
                    team && (
                      <div className="team_group" key={`team_group-${key}`}>
                        <div className="team_text">
                          <div className="f_14 less_opacity">{team.title}</div>
                          <div className="f_20 uppercase">{team.quote}</div>
                        </div>

                        <div className="team_members flex">
                          {team.teamImage.map((member, team_key) => {
                            return (
                              <a
                                href="#"
                                className="crv_circle"
                                key={`team_item-${team_key}`}
                              >
                                <div
                                  className="crv_cont full_bg mg"
                                  data-dist="7"
                                >
                                  <div className="crv_stroke">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 202 202"
                                    >
                                      <path
                                        className="stroke-an svg-stroke"
                                        fill="none"
                                        strokeWidth="1"
                                        d="M91,3.4C149.3-4.5,203.9,49.1,199.9,107c-3.4,49.3-42.6,87.9-90.9,93.7C35.1,209.6-17.1,128.5,9.5,63 C23.3,28.7,55.4,8.3,91,3.4"
                                      ></path>
                                    </svg>
                                  </div>
                                  <div className="crv_img">
                                    <i
                                      className="load_bg"
                                      data-src={`${CMSPath}${member.image.url}`}
                                    ></i>
                                  </div>
                                  <div className="crv_name">
                                    <div className="f_40 alt uppercase">
                                      {member.name}
                                    </div>
                                  </div>
                                </div>
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    )
                  );
                })} */}
              </div>
            </div>
          </section>

          <section>
            <div className="section_content">
              <div className="hero_text flex has_shape">
                <div className="letters_shape">
                  <svg
                    width="1084"
                    height="189"
                    viewBox="0 0 1084 189"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M278,185.1l-16.6-5.9v-67.9l-46-16.5v67.7l17.9-3.9v-56.2"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M198.3,9.3v147l17,6.1V95.2"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M199.2,9.3L214,4.6l17.4,4.6L214,13.9L199.2,9.3z"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M215.3,72.3V13.9l17.2-4.3v58.8L215.3,72.3z"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M233.3,69.2l27,9.2 M214.8,72.9L260.3,89V29.6"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M278,24.8l-16.6,4.6l16.6,6.1l17.2-4.4L278,24.8z"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M278.9,185.1V36.3l17-4.8v149.4L278.9,185.1z"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M21.7,184.9L3,178.3v-76.3V9.8"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M21.7,4.6L3.8,9.8l18.7,7.5l18.5-5.6L21.7,4.6z"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M22.8,184.9V17.5l19.1-5.4v168L22.8,184.9z"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M170.2,69.8l-17.9,4.4V39.1v-0.7l-0.7-0.2l-80.4-29l14-3.5l83.5,28.8L170.2,69.8z"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M68.4,9l-0.5,35.9h2.9C69.8,38.6,68.7,24,80,25l21.3,6.8v131.5c-1,2.6-5,6.8-13.6,2.9"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M151.8,75c-0.8-9.7-9.2-24.7-16.5-30.6 M135.3,44.4v116.4c-0.2,4.2,2.4,13.1,14.1,15l-18.9,4.9c-4.5-1-13.6-5.2-13.6-14.6c0-9.3,0-90.2,0-129.5L135.3,44.4z"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M148.9,180.3l-18.4,4.9l-44.2-15.5"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M1082.3,69.8l-17.9,4.4V39.1v-0.7l-0.7-0.2l-80.4-29l14-3.5l83.5,28.8L1082.3,69.8z"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M980.4,9L980,44.9h2.9c-1-6.3-2.1-20.9,9.2-19.9l21.3,6.8v131.5c-1,2.6-5,6.8-13.6,2.9"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M1063.9,75c-0.8-9.7-9.2-24.7-16.5-30.6 M1047.4,44.4v116.4c-0.2,4.2,2.4,13.1,14.1,15l-18.9,4.9c-4.5-1-13.6-5.2-13.6-14.6c0-9.3,0-90.2,0-129.5L1047.4,44.4z"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M1061,180.3l-18.4,4.9l-44.2-15.5"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M322.7,15v157.9l13.2,4.7 M335.8,177.6v-67.7l19.7,3.8v59.2L335.8,177.6z"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M336.3,37.1v55.5l18.8-5.2 M355.1,87.4V40.8 M355.1,87.4l24.9,7.5"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M322.7,15.9l19.7-11.3c32.9,1.1,93.7,23,66.3,102"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M322.7,15.9c32.9,1.1,93.7,23,66.3,102"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M365,99.6l-28.7-7.1V33.8c14.9,3.3,45.1,16.2,47,41.4C385.2,100.3,371.9,101.9,365,99.6z"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M388.5,117.4c5.6,3.7,16.7,15,16,30.6c-0.9,19.5-0.9,28.8,4.2,31.5"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M355.1,113.7l13.6,3.8c5.6,1.9,16.7,15,16,30.6c-0.8,15.9,0,28.8,3.2,34.4c1.1,2.1,3.7,2.3,6,1.6l36-11.1"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M408.2,106.2c5.6,3.7,16.7,15,16,30.6c-0.9,19.5,0,33.5,5.2,36.2"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M593.6,6.9L611.1,2l53.1,17.5L647.6,24L593.6,6.9z"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M648.5,47.4l-38.7-13v116.8"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M664.7,42.9V20l-16.2,4.5V47L664.7,42.9z"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M592.7,6.9v159.7l17.1,5.4 M626.9,156.3v-53.5"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M626.9,68.6l36.4,13.9"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M663.3,82.1v22l-18,4"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M645.8,108.2l-36.4-11.2"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M627.3,68.6V40.7"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M646.2,85.7v22.9"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M646.2,86.1l-36.4-11.7"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M627.3,68.6l-17.5,5.8"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M645.8,86.1l17.5-3.1"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M626.4,145.1l36.4,13.9"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M662.9,158.6v22l-18,4"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M645.3,184.7l-35.5-12.6"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M645.8,162.2v22.9"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M645.8,162.6l-36.4-11.7"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M645.3,162.6l17.5-3.1"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M691.7,12.5L707.4,2l38.9,4.5"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M779.9,2.7l-14.9,10.5h32.1l20.2-7.5L779.9,2.7z"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M745.5,5.7l11.2,38.1"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M724.6,14.7l20.9,74L763.4,14"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M767.2,96.2l30.6-83l18.7-7.5l-35.1,103.1l2.2,67.3l-20.9,9l-2.2-65.8L767.2,96.2z"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M692.4,12.5l38.1,115.9v56.1l31.7,1.2"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M725.3,15.5l-33.6-3"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M724.6,15.5l21.7-9"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M878.3,6.8l-2-0.4l-31.7,140l-0.2,0.8l0.7,0.3l17.4,7.8l1.1,0.5l0.3-1.1l6.6-23.7l36.5,13.2l6.3,32.9l0.1,0.5l0.5,0.2l20.7,9.4l0.1,0.6l1.1-0.4l18.8-6.4l0.8-0.3l-0.2-0.9L918.6,10.4l-0.2-1l-1,0.2l-18.4,4.1l-1,0.2l0.2,1l35.8,169.7"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M887.2,40.3l-13.3,65.2l28.5,10.6L887.2,40.3z"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M895,79.3l-3.7,22l7.8,2.8"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M890.4,100.9l-13.8,4.1"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M917.1,10l-22.9-6.9l-17.9,3.2"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M897.8,14.6l-21.6-8.3"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M489.8,6.1l-2-0.4l-31.7,140l-0.2,0.8l0.7,0.3l17.4,7.8l1.1,0.5l0.3-1.1l6.6-23.7l36.5,13.2l6.3,32.9l0.1,0.5l0.5,0.2l20.7,9.4l0.1,0.6l1.1-0.4l18.8-6.4l0.8-0.3l-0.2-0.9L530.2,9.8l-0.2-1L529,9l-18.4,4.1l-1,0.2l0.2,1l35.8,169.7"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M498.8,39.6l-13.3,65.2l28.5,10.6L498.8,39.6z"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M506.6,78.7l-3.7,22l7.8,2.8"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M502,100.2l-13.8,4.1"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M528.6,9.4l-22.9-6.9l-17.9,3.2"
                    ></path>
                    <path
                      className="svg-stroke"
                      strokeWidth="2"
                      d="M509.3,13.9l-21.6-8.3"
                    ></path>
                  </svg>
                </div>
                <strong className="f_80 uppercase">
                  {journey.ithraeyat.title}
                </strong>
              </div>

              <div className="jr_core_set">
                <div className="jr_row flex">
                  <div className="line_shape jr_shape_set">
                    <svg
                      viewBox="0 0 1440 409"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1502 399.861C1469.17 425.361 1398.99 377.293 1232.5 293.861C1012 183.361 1388 92.3613 1341 183.361C1308.92 245.474 1231 452.86 1077 399.861C923 346.861 774.5 -79.1387 431 14.3613C156.2 89.1613 7.83333 243.195 -32 310.861"
                        className="svg-stroke"
                        strokeOpacity="0.5"
                      ></path>
                    </svg>
                  </div>

                  <div
                    className="jr_row_image suqared"
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="2"
                  >
                    <img
                      className="load_img"
                      data-src={`${CMSPath}${journey.ithraeyat.images[0].image.url}`}
                      width="100%"
                      height="auto"
                      alt={journey.ithraeyat.images[0].alternativeText}
                    />
                  </div>

                  <div
                    className="jr_row_image rounded"
                    data-scroll
                    data-scroll-direction="horizontal"
                    data-scroll-speed="-2"
                  >
                    <img
                      className="load_img"
                      data-src={`${CMSPath}${journey.ithraeyat.images[1].image.url}`}
                      width="100%"
                      height="auto"
                      alt={journey.ithraeyat.images[1].alternativeText}
                    />
                  </div>
                </div>

                <div className="jr_row flex">
                  <div
                    className="jr_row_image rounded"
                    data-scroll
                    data-scroll-direction="horizontal"
                    data-scroll-speed="2"
                  >
                    <img
                      className="load_img"
                      data-src={`${CMSPath}${journey.ithraeyat.images[2].image.url}`}
                      width="100%"
                      height="auto"
                      alt={journey.ithraeyat.images[2].alternativeText}
                    />
                  </div>

                  <div className="jr_row_image suqared">
                    <img
                      className="load_img"
                      data-src={`${CMSPath}${journey.ithraeyat.images[3].image.url}`}
                      width="100%"
                      height="auto"
                      alt={journey.ithraeyat.images[3].alternativeText}
                    />
                  </div>
                  <div
                    className="jr_row_image suqared"
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="2"
                  >
                    <div className="cont_grid_box">
                      <div className="cg_box_text flex">
                        <strong className="f_80 responsive uppercase">
                          {journey.ithraeyat.symbolCard.title}
                        </strong>
                      </div>
                      <div className="box_pattern flex">
                        <svg
                          width="153"
                          height="200"
                          viewBox="0 0 153 200"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="0.4" clipPath="url(#clip0)">
                            <path
                              d="M128.088 101.774L152.499 67.1804C153.353 65.9692 153.058 64.2853 151.851 63.4286C150.644 62.5719 148.965 62.8673 148.111 64.0785L124.614 97.3724L82.9185 47.1509C82.8008 47.0327 82.683 46.9145 82.5652 46.7964C82.683 46.7078 82.8302 46.6782 82.948 46.56L105.621 26.3532C106.181 25.851 106.505 25.142 106.505 24.3739C106.505 23.6058 106.21 22.8968 105.651 22.3651L82.3296 0.710704C81.299 -0.264185 79.6795 -0.234643 78.6783 0.740246L56.064 22.3651C55.534 22.8968 55.2395 23.6354 55.269 24.3739C55.2984 25.142 55.6223 25.851 56.1818 26.3532L79.4439 46.5896C79.4439 46.5896 79.4734 46.5896 79.4734 46.6191C79.2673 46.7373 79.0611 46.9145 78.8845 47.0918L33.3908 97.8156L4.62234 67.2986C3.62118 66.2351 1.91333 66.176 0.823837 67.1804C-0.265655 68.1849 -0.295101 69.8983 0.706054 70.9618L29.7395 101.745L0.7355 132.557C-0.265655 133.65 -0.23621 135.334 0.853282 136.368C1.91333 137.372 3.62118 137.343 4.65178 136.25L33.4203 105.733L77.4122 154.773L56.1229 175.127C55.5634 175.659 55.269 176.368 55.2984 177.136C55.3279 177.904 55.6518 178.613 56.2113 179.115L79.4734 199.352C79.974 199.795 80.5923 200.002 81.2401 200.002C81.8879 200.002 82.5063 199.765 83.0069 199.322L105.68 179.115C106.24 178.613 106.563 177.904 106.563 177.136C106.563 176.368 106.269 175.659 105.71 175.127L84.0964 155.068L124.673 106.176L148.17 139.47C149.024 140.681 150.703 140.947 151.91 140.12C153.117 139.263 153.412 137.579 152.558 136.368L128.088 101.774ZM61.8943 24.2262L80.5629 6.38279L99.8793 24.3148L81.1812 41.0061L61.8943 24.2262ZM99.8793 177.047L81.1812 193.739L61.9237 176.988L80.5923 159.145L99.8793 177.047ZM80.8279 150.578L37.0421 101.774L80.8279 52.9707L121.345 101.774L80.8279 150.578Z"
                              fill="#6C8380"
                            ></path>
                            <path
                              d="M76.912 81.2129L54.2977 102.838C53.7382 103.369 53.4438 104.078 53.4732 104.847C53.5027 105.615 53.8266 106.324 54.386 106.826L77.6482 127.062C78.1487 127.505 78.7671 127.712 79.4149 127.712C80.0627 127.712 80.6811 127.476 81.1816 127.033L103.855 106.826C104.414 106.324 104.738 105.615 104.738 104.847C104.738 104.078 104.444 103.369 103.884 102.838L80.5633 81.1834C79.5327 80.2085 77.9426 80.238 76.912 81.2129ZM79.3854 121.449L60.1279 104.699L78.7965 86.8554L98.1129 104.787L79.3854 121.449Z"
                              fill="#6C8380"
                            ></path>
                            <path
                              d="M70.8158 176.398C70.4625 176.752 70.2563 177.225 70.2563 177.727C70.2563 178.229 70.4919 178.702 70.8747 179.027L79.8262 186.826C80.1501 187.121 80.5918 187.269 81.004 187.269C81.4163 187.269 81.858 187.121 82.1819 186.826L90.8978 179.056C91.2806 178.731 91.4867 178.229 91.4867 177.727C91.4867 177.225 91.2806 176.752 90.9272 176.398L81.9463 168.067C81.269 167.417 80.1796 167.446 79.5023 168.096L70.8158 176.398ZM80.7685 171.848L87.0699 177.697L81.004 183.133L74.7321 177.668L80.7685 171.848Z"
                              fill="#6C8380"
                            ></path>
                            <path
                              d="M69.6684 103.725C69.4918 103.902 69.374 104.139 69.4034 104.404C69.4034 104.67 69.5212 104.907 69.6979 105.054L78.6494 112.854C78.8261 113.001 79.0322 113.06 79.2383 113.06C79.4444 113.06 79.6505 112.972 79.8272 112.824L88.5431 105.054C88.7198 104.877 88.8376 104.641 88.8376 104.404C88.8376 104.139 88.7493 103.902 88.5431 103.725L79.5622 95.3941C79.2089 95.0691 78.6788 95.0691 78.3549 95.3941L69.6684 103.725ZM78.9733 97.2553L86.5997 104.345L79.2089 110.963L71.5824 104.345L78.9733 97.2553Z"
                              fill="#6C8380"
                            ></path>
                            <path
                              d="M90.9286 25.2302C91.3114 24.9052 91.5175 24.403 91.5175 23.9008C91.5175 23.3986 91.3114 22.9259 90.958 22.5714L81.9771 14.2405C81.2998 13.5906 80.2103 13.6201 79.5331 14.27L70.8466 22.6009C70.4932 22.9554 70.2871 23.4281 70.2871 23.9303C70.2871 24.4325 70.5227 24.9052 70.9055 25.2302L79.857 33.0293C80.1809 33.3247 80.6226 33.4724 81.0348 33.4724C81.447 33.4724 81.8887 33.3247 82.2126 33.0293L90.9286 25.2302ZM81.0054 29.307L74.704 23.8417L80.7698 18.0514L87.0712 23.9008L81.0054 29.307Z"
                              fill="#6C8380"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0">
                              <rect
                                width="153"
                                height="200"
                                fill="white"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                        <svg
                          width="153"
                          height="200"
                          viewBox="0 0 153 200"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="0.4" clipPath="url(#clip1)">
                            <path
                              d="M128.088 101.774L152.499 67.1804C153.353 65.9692 153.058 64.2853 151.851 63.4286C150.644 62.5719 148.965 62.8673 148.111 64.0785L124.614 97.3724L82.9185 47.1509C82.8008 47.0327 82.683 46.9145 82.5652 46.7964C82.683 46.7078 82.8302 46.6782 82.948 46.56L105.621 26.3532C106.181 25.851 106.505 25.142 106.505 24.3739C106.505 23.6058 106.21 22.8968 105.651 22.3651L82.3296 0.710704C81.299 -0.264185 79.6795 -0.234643 78.6783 0.740246L56.064 22.3651C55.534 22.8968 55.2395 23.6354 55.269 24.3739C55.2984 25.142 55.6223 25.851 56.1818 26.3532L79.4439 46.5896C79.4439 46.5896 79.4734 46.5896 79.4734 46.6191C79.2673 46.7373 79.0611 46.9145 78.8845 47.0918L33.3908 97.8156L4.62234 67.2986C3.62118 66.2351 1.91333 66.176 0.823837 67.1804C-0.265655 68.1849 -0.295101 69.8983 0.706054 70.9618L29.7395 101.745L0.7355 132.557C-0.265655 133.65 -0.23621 135.334 0.853282 136.368C1.91333 137.372 3.62118 137.343 4.65178 136.25L33.4203 105.733L77.4122 154.773L56.1229 175.127C55.5634 175.659 55.269 176.368 55.2984 177.136C55.3279 177.904 55.6518 178.613 56.2113 179.115L79.4734 199.352C79.974 199.795 80.5923 200.002 81.2401 200.002C81.8879 200.002 82.5063 199.765 83.0069 199.322L105.68 179.115C106.24 178.613 106.563 177.904 106.563 177.136C106.563 176.368 106.269 175.659 105.71 175.127L84.0964 155.068L124.673 106.176L148.17 139.47C149.024 140.681 150.703 140.947 151.91 140.12C153.117 139.263 153.412 137.579 152.558 136.368L128.088 101.774ZM61.8943 24.2262L80.5629 6.38279L99.8793 24.3148L81.1812 41.0061L61.8943 24.2262ZM99.8793 177.047L81.1812 193.739L61.9237 176.988L80.5923 159.145L99.8793 177.047ZM80.8279 150.578L37.0421 101.774L80.8279 52.9707L121.345 101.774L80.8279 150.578Z"
                              fill="#6C8380"
                            ></path>
                            <path
                              d="M76.912 81.2129L54.2977 102.838C53.7382 103.369 53.4438 104.078 53.4732 104.847C53.5027 105.615 53.8266 106.324 54.386 106.826L77.6482 127.062C78.1487 127.505 78.7671 127.712 79.4149 127.712C80.0627 127.712 80.6811 127.476 81.1816 127.033L103.855 106.826C104.414 106.324 104.738 105.615 104.738 104.847C104.738 104.078 104.444 103.369 103.884 102.838L80.5633 81.1834C79.5327 80.2085 77.9426 80.238 76.912 81.2129ZM79.3854 121.449L60.1279 104.699L78.7965 86.8554L98.1129 104.787L79.3854 121.449Z"
                              fill="#6C8380"
                            ></path>
                            <path
                              d="M70.8158 176.398C70.4625 176.752 70.2563 177.225 70.2563 177.727C70.2563 178.229 70.4919 178.702 70.8747 179.027L79.8262 186.826C80.1501 187.121 80.5918 187.269 81.004 187.269C81.4163 187.269 81.858 187.121 82.1819 186.826L90.8978 179.056C91.2806 178.731 91.4867 178.229 91.4867 177.727C91.4867 177.225 91.2806 176.752 90.9272 176.398L81.9463 168.067C81.269 167.417 80.1796 167.446 79.5023 168.096L70.8158 176.398ZM80.7685 171.848L87.0699 177.697L81.004 183.133L74.7321 177.668L80.7685 171.848Z"
                              fill="#6C8380"
                            ></path>
                            <path
                              d="M69.6684 103.725C69.4918 103.902 69.374 104.139 69.4034 104.404C69.4034 104.67 69.5212 104.907 69.6979 105.054L78.6494 112.854C78.8261 113.001 79.0322 113.06 79.2383 113.06C79.4444 113.06 79.6505 112.972 79.8272 112.824L88.5431 105.054C88.7198 104.877 88.8376 104.641 88.8376 104.404C88.8376 104.139 88.7493 103.902 88.5431 103.725L79.5622 95.3941C79.2089 95.0691 78.6788 95.0691 78.3549 95.3941L69.6684 103.725ZM78.9733 97.2553L86.5997 104.345L79.2089 110.963L71.5824 104.345L78.9733 97.2553Z"
                              fill="#6C8380"
                            ></path>
                            <path
                              d="M90.9286 25.2302C91.3114 24.9052 91.5175 24.403 91.5175 23.9008C91.5175 23.3986 91.3114 22.9259 90.958 22.5714L81.9771 14.2405C81.2998 13.5906 80.2103 13.6201 79.5331 14.27L70.8466 22.6009C70.4932 22.9554 70.2871 23.4281 70.2871 23.9303C70.2871 24.4325 70.5227 24.9052 70.9055 25.2302L79.857 33.0293C80.1809 33.3247 80.6226 33.4724 81.0348 33.4724C81.447 33.4724 81.8887 33.3247 82.2126 33.0293L90.9286 25.2302ZM81.0054 29.307L74.704 23.8417L80.7698 18.0514L87.0712 23.9008L81.0054 29.307Z"
                              fill="#6C8380"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip1">
                              <rect
                                width="153"
                                height="200"
                                fill="white"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                        <svg
                          width="153"
                          height="200"
                          viewBox="0 0 153 200"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="0.4" clipPath="url(#clip2)">
                            <path
                              d="M128.088 101.774L152.499 67.1804C153.353 65.9692 153.058 64.2853 151.851 63.4286C150.644 62.5719 148.965 62.8673 148.111 64.0785L124.614 97.3724L82.9185 47.1509C82.8008 47.0327 82.683 46.9145 82.5652 46.7964C82.683 46.7078 82.8302 46.6782 82.948 46.56L105.621 26.3532C106.181 25.851 106.505 25.142 106.505 24.3739C106.505 23.6058 106.21 22.8968 105.651 22.3651L82.3296 0.710704C81.299 -0.264185 79.6795 -0.234643 78.6783 0.740246L56.064 22.3651C55.534 22.8968 55.2395 23.6354 55.269 24.3739C55.2984 25.142 55.6223 25.851 56.1818 26.3532L79.4439 46.5896C79.4439 46.5896 79.4734 46.5896 79.4734 46.6191C79.2673 46.7373 79.0611 46.9145 78.8845 47.0918L33.3908 97.8156L4.62234 67.2986C3.62118 66.2351 1.91333 66.176 0.823837 67.1804C-0.265655 68.1849 -0.295101 69.8983 0.706054 70.9618L29.7395 101.745L0.7355 132.557C-0.265655 133.65 -0.23621 135.334 0.853282 136.368C1.91333 137.372 3.62118 137.343 4.65178 136.25L33.4203 105.733L77.4122 154.773L56.1229 175.127C55.5634 175.659 55.269 176.368 55.2984 177.136C55.3279 177.904 55.6518 178.613 56.2113 179.115L79.4734 199.352C79.974 199.795 80.5923 200.002 81.2401 200.002C81.8879 200.002 82.5063 199.765 83.0069 199.322L105.68 179.115C106.24 178.613 106.563 177.904 106.563 177.136C106.563 176.368 106.269 175.659 105.71 175.127L84.0964 155.068L124.673 106.176L148.17 139.47C149.024 140.681 150.703 140.947 151.91 140.12C153.117 139.263 153.412 137.579 152.558 136.368L128.088 101.774ZM61.8943 24.2262L80.5629 6.38279L99.8793 24.3148L81.1812 41.0061L61.8943 24.2262ZM99.8793 177.047L81.1812 193.739L61.9237 176.988L80.5923 159.145L99.8793 177.047ZM80.8279 150.578L37.0421 101.774L80.8279 52.9707L121.345 101.774L80.8279 150.578Z"
                              fill="#6C8380"
                            ></path>
                            <path
                              d="M76.912 81.2129L54.2977 102.838C53.7382 103.369 53.4438 104.078 53.4732 104.847C53.5027 105.615 53.8266 106.324 54.386 106.826L77.6482 127.062C78.1487 127.505 78.7671 127.712 79.4149 127.712C80.0627 127.712 80.6811 127.476 81.1816 127.033L103.855 106.826C104.414 106.324 104.738 105.615 104.738 104.847C104.738 104.078 104.444 103.369 103.884 102.838L80.5633 81.1834C79.5327 80.2085 77.9426 80.238 76.912 81.2129ZM79.3854 121.449L60.1279 104.699L78.7965 86.8554L98.1129 104.787L79.3854 121.449Z"
                              fill="#6C8380"
                            ></path>
                            <path
                              d="M70.8158 176.398C70.4625 176.752 70.2563 177.225 70.2563 177.727C70.2563 178.229 70.4919 178.702 70.8747 179.027L79.8262 186.826C80.1501 187.121 80.5918 187.269 81.004 187.269C81.4163 187.269 81.858 187.121 82.1819 186.826L90.8978 179.056C91.2806 178.731 91.4867 178.229 91.4867 177.727C91.4867 177.225 91.2806 176.752 90.9272 176.398L81.9463 168.067C81.269 167.417 80.1796 167.446 79.5023 168.096L70.8158 176.398ZM80.7685 171.848L87.0699 177.697L81.004 183.133L74.7321 177.668L80.7685 171.848Z"
                              fill="#6C8380"
                            ></path>
                            <path
                              d="M69.6684 103.725C69.4918 103.902 69.374 104.139 69.4034 104.404C69.4034 104.67 69.5212 104.907 69.6979 105.054L78.6494 112.854C78.8261 113.001 79.0322 113.06 79.2383 113.06C79.4444 113.06 79.6505 112.972 79.8272 112.824L88.5431 105.054C88.7198 104.877 88.8376 104.641 88.8376 104.404C88.8376 104.139 88.7493 103.902 88.5431 103.725L79.5622 95.3941C79.2089 95.0691 78.6788 95.0691 78.3549 95.3941L69.6684 103.725ZM78.9733 97.2553L86.5997 104.345L79.2089 110.963L71.5824 104.345L78.9733 97.2553Z"
                              fill="#6C8380"
                            ></path>
                            <path
                              d="M90.9286 25.2302C91.3114 24.9052 91.5175 24.403 91.5175 23.9008C91.5175 23.3986 91.3114 22.9259 90.958 22.5714L81.9771 14.2405C81.2998 13.5906 80.2103 13.6201 79.5331 14.27L70.8466 22.6009C70.4932 22.9554 70.2871 23.4281 70.2871 23.9303C70.2871 24.4325 70.5227 24.9052 70.9055 25.2302L79.857 33.0293C80.1809 33.3247 80.6226 33.4724 81.0348 33.4724C81.447 33.4724 81.8887 33.3247 82.2126 33.0293L90.9286 25.2302ZM81.0054 29.307L74.704 23.8417L80.7698 18.0514L87.0712 23.9008L81.0054 29.307Z"
                              fill="#6C8380"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip2">
                              <rect
                                width="153"
                                height="200"
                                fill="white"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                        <svg
                          width="153"
                          height="200"
                          viewBox="0 0 153 200"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="0.4" clipPath="url(#clip3)">
                            <path
                              d="M128.088 101.774L152.499 67.1804C153.353 65.9692 153.058 64.2853 151.851 63.4286C150.644 62.5719 148.965 62.8673 148.111 64.0785L124.614 97.3724L82.9185 47.1509C82.8008 47.0327 82.683 46.9145 82.5652 46.7964C82.683 46.7078 82.8302 46.6782 82.948 46.56L105.621 26.3532C106.181 25.851 106.505 25.142 106.505 24.3739C106.505 23.6058 106.21 22.8968 105.651 22.3651L82.3296 0.710704C81.299 -0.264185 79.6795 -0.234643 78.6783 0.740246L56.064 22.3651C55.534 22.8968 55.2395 23.6354 55.269 24.3739C55.2984 25.142 55.6223 25.851 56.1818 26.3532L79.4439 46.5896C79.4439 46.5896 79.4734 46.5896 79.4734 46.6191C79.2673 46.7373 79.0611 46.9145 78.8845 47.0918L33.3908 97.8156L4.62234 67.2986C3.62118 66.2351 1.91333 66.176 0.823837 67.1804C-0.265655 68.1849 -0.295101 69.8983 0.706054 70.9618L29.7395 101.745L0.7355 132.557C-0.265655 133.65 -0.23621 135.334 0.853282 136.368C1.91333 137.372 3.62118 137.343 4.65178 136.25L33.4203 105.733L77.4122 154.773L56.1229 175.127C55.5634 175.659 55.269 176.368 55.2984 177.136C55.3279 177.904 55.6518 178.613 56.2113 179.115L79.4734 199.352C79.974 199.795 80.5923 200.002 81.2401 200.002C81.8879 200.002 82.5063 199.765 83.0069 199.322L105.68 179.115C106.24 178.613 106.563 177.904 106.563 177.136C106.563 176.368 106.269 175.659 105.71 175.127L84.0964 155.068L124.673 106.176L148.17 139.47C149.024 140.681 150.703 140.947 151.91 140.12C153.117 139.263 153.412 137.579 152.558 136.368L128.088 101.774ZM61.8943 24.2262L80.5629 6.38279L99.8793 24.3148L81.1812 41.0061L61.8943 24.2262ZM99.8793 177.047L81.1812 193.739L61.9237 176.988L80.5923 159.145L99.8793 177.047ZM80.8279 150.578L37.0421 101.774L80.8279 52.9707L121.345 101.774L80.8279 150.578Z"
                              fill="#6C8380"
                            ></path>
                            <path
                              d="M76.912 81.2129L54.2977 102.838C53.7382 103.369 53.4438 104.078 53.4732 104.847C53.5027 105.615 53.8266 106.324 54.386 106.826L77.6482 127.062C78.1487 127.505 78.7671 127.712 79.4149 127.712C80.0627 127.712 80.6811 127.476 81.1816 127.033L103.855 106.826C104.414 106.324 104.738 105.615 104.738 104.847C104.738 104.078 104.444 103.369 103.884 102.838L80.5633 81.1834C79.5327 80.2085 77.9426 80.238 76.912 81.2129ZM79.3854 121.449L60.1279 104.699L78.7965 86.8554L98.1129 104.787L79.3854 121.449Z"
                              fill="#6C8380"
                            ></path>
                            <path
                              d="M70.8158 176.398C70.4625 176.752 70.2563 177.225 70.2563 177.727C70.2563 178.229 70.4919 178.702 70.8747 179.027L79.8262 186.826C80.1501 187.121 80.5918 187.269 81.004 187.269C81.4163 187.269 81.858 187.121 82.1819 186.826L90.8978 179.056C91.2806 178.731 91.4867 178.229 91.4867 177.727C91.4867 177.225 91.2806 176.752 90.9272 176.398L81.9463 168.067C81.269 167.417 80.1796 167.446 79.5023 168.096L70.8158 176.398ZM80.7685 171.848L87.0699 177.697L81.004 183.133L74.7321 177.668L80.7685 171.848Z"
                              fill="#6C8380"
                            ></path>
                            <path
                              d="M69.6684 103.725C69.4918 103.902 69.374 104.139 69.4034 104.404C69.4034 104.67 69.5212 104.907 69.6979 105.054L78.6494 112.854C78.8261 113.001 79.0322 113.06 79.2383 113.06C79.4444 113.06 79.6505 112.972 79.8272 112.824L88.5431 105.054C88.7198 104.877 88.8376 104.641 88.8376 104.404C88.8376 104.139 88.7493 103.902 88.5431 103.725L79.5622 95.3941C79.2089 95.0691 78.6788 95.0691 78.3549 95.3941L69.6684 103.725ZM78.9733 97.2553L86.5997 104.345L79.2089 110.963L71.5824 104.345L78.9733 97.2553Z"
                              fill="#6C8380"
                            ></path>
                            <path
                              d="M90.9286 25.2302C91.3114 24.9052 91.5175 24.403 91.5175 23.9008C91.5175 23.3986 91.3114 22.9259 90.958 22.5714L81.9771 14.2405C81.2998 13.5906 80.2103 13.6201 79.5331 14.27L70.8466 22.6009C70.4932 22.9554 70.2871 23.4281 70.2871 23.9303C70.2871 24.4325 70.5227 24.9052 70.9055 25.2302L79.857 33.0293C80.1809 33.3247 80.6226 33.4724 81.0348 33.4724C81.447 33.4724 81.8887 33.3247 82.2126 33.0293L90.9286 25.2302ZM81.0054 29.307L74.704 23.8417L80.7698 18.0514L87.0712 23.9008L81.0054 29.307Z"
                              fill="#6C8380"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip3">
                              <rect
                                width="153"
                                height="200"
                                fill="white"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="section_content">
              <div className="content_a">
                <div className="hero_text flex">
                  <strong className="f_80 uppercase">
                    {journey.milestones.title}
                  </strong>
                </div>
              </div>

              <div className="mstones_set">
                {journey.milestonesGoals.map((milestone, key) => (
                  <div
                    key={`milestone_tab-${key}`}
                    className={`${
                      key === 0
                        ? "mstones_images flex active"
                        : "mstones_images flex"
                    }`}
                    id={milestone.year}
                  >
                    <div className="mstones_row flex">
                      <div className="mstones_img">
                        <img
                          className="load_img"
                          data-src={`${CMSPath}${milestone.images[0].image.url}`}
                          width="100%"
                          height="auto"
                          alt={milestone.images[0].alternativeText}
                        />
                      </div>

                      <div className="mstones_img">
                        <img
                          className="load_img"
                          data-src={`${CMSPath}${milestone.images[1].image.url}`}
                          width="100%"
                          height="auto"
                          alt={milestone.images[1].alternativeText}
                        />
                      </div>

                      <div className="mstones_img">
                        <img
                          className="load_img"
                          data-src={`${CMSPath}${milestone.images[2].image.url}`}
                          width="100%"
                          height="auto"
                          alt={milestone.images[2].alternativeText}
                        />
                      </div>
                    </div>

                    <div className="mstones_row flex">
                      <div className="mstones_img">
                        <img
                          className="load_img"
                          data-src={`${CMSPath}${milestone.images[3].image.url}`}
                          width="100%"
                          height="auto"
                          alt={milestone.images[3].alternativeText}
                        />
                      </div>

                      <div className="mstones_img">
                        <img
                          className="load_img"
                          data-src={`${CMSPath}${milestone.images[4].image.url}`}
                          width="100%"
                          height="auto"
                          alt={milestone.images[4].alternativeText}
                        />
                      </div>
                    </div>
                  </div>
                ))}

                <div className="mstones_content">
                  <h1>{journey.milestonesGoals[0].year}</h1>
                  <div className="team_text">
                    <div className="f_14 less_opacity">
                      {journey.milestonesGoals[0].quote.title}
                    </div>
                    <div className="f_20 uppercase">
                      {journey.milestonesGoals[0].quote.quote}
                    </div>
                  </div>
                  <ul>
                    {journey.milestonesGoals.map((milestone, key) => (
                      <li
                        key={`content_mstn-${key}`}
                        className={`${key === 0 ? "active" : ""}`}
                        data-id={milestone.year}
                        data-title={milestone.quote.title}
                        data-text={milestone.quote.quote}
                      >
                        <i></i>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {write_to_us && <WriteToUsForm sectionData={write_to_us} />}

          <InnerFooter sectionData={news_letter} />
        </div>
      )}
    </Layout>
  );
};

export default OurJourney;
