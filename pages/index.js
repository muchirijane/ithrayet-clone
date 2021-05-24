// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import SiteLoader from "../components/SiteLoader";
import client from "../lib/apollo";
import { GET_HOMEPAGE_DATA } from "../graphql/queries";
import { AttachCMSPath } from "../helpers/imageCMSPath";
import Layout from "../components/Layout";
import MainBlock from "../components/blocks/mainBlock";
import EditionBlock from "../components/blocks/editionBlock";
import CreativeBlock from "../components/blocks/creativeBlock";
import StoryBlock from "../components/blocks/storyBlock";
import JoinBlock from "../components/blocks/joinBlock";
import NewsLetterBlock from "../components/blocks/newsletterBlock";

const Home = (props) => {
  const { loaderImages, editions, artists } = props;
  return (
    <Layout>
      <MainBlock editions={editions} />
      <EditionBlock />
      <CreativeBlock artists={artists} />
      <StoryBlock />
      <JoinBlock />
      <NewsLetterBlock />

      <div
        className="indicator_set buildup _mainElement"
        style={{
          visibility: "hidden",
        }}
      >
        <i className="hori full_bg"></i>
        <i className="vert full_bg"></i>
      </div>

      <div
        className="mode_set no-select buildup _mainElement _curTL2"
        style={{
          visibility: "hidden",
        }}
      >
        <div className="mode_toggle">
          <span data-title1="Light" data-title2="Dark">
            <i>Light</i> Mode
          </span>
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="currentColor">
              <path
                className="darkPath"
                d="M18.7,12.1c-0.2,0-0.3,0-0.5,0.1c-0.5,0.5-1.2,0.8-1.8,1.1c-0.6,0.3-1.4,0.4-2.1,0.4c-1.7,0-3.2-0.7-4.3-1.8c-1.1-1.1-1.8-2.6-1.8-4.3c0-0.7,0.1-1.4,0.3-2c0.2-0.7,0.6-1.3,1-1.8C9.7,3.5,9.7,3.2,9.5,3C9.3,2.9,9.1,2.8,9,2.9c-1.8,0.5-3.3,1.5-4.4,3c-1.1,1.4-1.7,3.1-1.7,5c0,2.3,0.9,4.3,2.4,5.8c1.5,1.5,3.6,2.4,5.8,2.4c1.9,0,3.7-0.7,5.1-1.8c1.4-1.1,2.5-2.7,2.9-4.6C19.2,12.5,19,12.2,18.7,12.1z M15.6,16.5c-1.2,1-2.7,1.5-4.4,1.5c-2,0-3.8-0.8-5.1-2.1C4.8,14.6,4,12.8,4,10.9c0-1.6,0.5-3.1,1.5-4.4c0.6-0.8,1.5-1.5,2.4-2C7.8,4.7,7.6,4.9,7.6,5.2C7.3,5.9,7.2,6.7,7.2,7.6c0,2,0.8,3.8,2.1,5.1c1.3,1.3,3.1,2.1,5.1,2.1c0.9,0,1.7-0.1,2.5-0.4c0.3-0.1,0.5-0.2,0.8-0.3C17.1,15,16.4,15.8,15.6,16.5z"
              ></path>
              <path
                className="lightPath"
                d="M15.1705 7.22956C14.1631 6.22216 12.7409 5.57031 11.2002 5.57031C9.65943 5.57031 8.23721 6.19253 7.22981 7.22956C6.22241 8.23697 5.57056 9.65918 5.57056 11.1999C5.57056 12.7407 6.22241 14.1629 7.22981 15.1703C8.23721 16.1777 9.65943 16.8295 11.2002 16.8295C12.7409 16.8295 14.1631 16.2073 15.1705 15.1703C16.1779 14.1629 16.8298 12.7407 16.8298 11.1999C16.8298 9.65918 16.2075 8.23697 15.1705 7.22956ZM14.1039 14.1036C13.3631 14.8443 12.3261 15.2888 11.2002 15.2888C10.0742 15.2888 9.03721 14.8443 8.29647 14.1036C7.55573 13.3629 7.11129 12.3258 7.11129 11.1999C7.11129 10.074 7.55573 9.03696 8.29647 8.29623C9.03721 7.55549 10.0742 7.11105 11.2002 7.11105C12.3261 7.11105 13.3631 7.55549 14.1039 8.29623C14.8446 9.03696 15.289 10.074 15.289 11.1999C15.289 12.3258 14.8446 13.3629 14.1039 14.1036Z"
              ></path>
              <path
                className="shines"
                d="M21.6297 10.4297H19.3482C18.9334 10.4297 18.5778 10.7852 18.5778 11.2001C18.5778 11.6149 18.9334 11.9704 19.3482 11.9704H21.6297C22.0445 11.9704 22.4 11.6149 22.4 11.2001C22.4 10.7852 22.0445 10.4297 21.6297 10.4297Z"
              ></path>
              <path
                className="shines"
                d="M11.2001 18.5776C10.7853 18.5776 10.4297 18.9332 10.4297 19.348V21.6295C10.4297 22.0443 10.7853 22.3998 11.2001 22.3998C11.6149 22.3998 11.9705 22.0443 11.9705 21.6295V19.348C11.9705 18.9332 11.6149 18.5776 11.2001 18.5776Z"
              ></path>
              <path
                className="shines"
                d="M19.1111 18.0447L17.4814 16.4151C17.2148 16.1188 16.7111 16.1188 16.4148 16.4151C16.1185 16.7114 16.1185 17.1855 16.4148 17.4818L18.0444 19.1114C18.3407 19.4077 18.8148 19.4077 19.1111 19.1114C19.4074 18.8151 19.4074 18.341 19.1111 18.0447Z"
              ></path>
              <path
                className="shines"
                d="M11.2001 0C10.7853 0 10.4297 0.355554 10.4297 0.770367V3.05184C10.4297 3.46665 10.7853 3.82221 11.2001 3.82221C11.6149 3.82221 11.9705 3.46665 11.9705 3.05184V0.770367C11.9705 0.355554 11.6149 0 11.2001 0Z"
              ></path>
              <path
                className="shines"
                d="M19.1407 3.28863C18.8444 2.99233 18.3703 2.99233 18.074 3.28863L16.4444 4.91825C16.1481 5.21454 16.1481 5.68862 16.4444 5.98491C16.7111 6.28121 17.2148 6.28121 17.5111 5.98491L19.1407 4.35529C19.437 4.05899 19.437 3.58492 19.1407 3.28863Z"
              ></path>
              <path
                className="shines"
                d="M3.0519 10.4297H0.770428C0.355615 10.4297 6.10352e-05 10.7852 6.10352e-05 11.2001C6.10352e-05 11.6149 0.325986 11.9704 0.770428 11.9704H3.0519C3.46671 11.9704 3.82227 11.6149 3.82227 11.2001C3.82227 10.7852 3.46671 10.4297 3.0519 10.4297Z"
              ></path>
              <path
                className="shines"
                d="M5.95561 16.4151C5.68895 16.1188 5.18525 16.1188 4.88895 16.4151L3.25933 18.0447C2.96304 18.341 2.96304 18.8151 3.25933 19.1114C3.55563 19.4077 4.0297 19.4077 4.32599 19.1114L5.95561 17.4818C6.25191 17.1855 6.25191 16.7114 5.95561 16.4151Z"
              ></path>
              <path
                className="shines"
                d="M5.95561 4.91825L4.32599 3.28863C4.0297 2.99233 3.55563 2.99233 3.25933 3.28863C2.96304 3.58492 2.96304 4.05899 3.25933 4.35529L4.88895 5.98491C5.18525 6.28121 5.65932 6.28121 5.95561 5.98491C6.25191 5.68862 6.25191 5.21454 5.95561 4.91825Z"
              ></path>
            </g>
          </svg>
        </div>
      </div>

      <div className="modes_helpers full_bg">
        <i className="a full_bg"></i>
        <i className="b full_bg"></i>
      </div>

      <div
        className="equalizer buildup _curTL2"
        style={{
          visibility: "hidden",
        }}
      >
        <span className="eq1"></span>
        <span className="eq2"></span>
        <span className="eq3"></span>
      </div>

      <div
        className="_item animated_circle buildup _curTL2"
        style={{
          visibility: "hidden",
        }}
      >
        <div className="circle_mag full_bg flex mg" data-dist="6">
          <strong></strong>
        </div>
      </div>

      <div
        className="_item animated_arrow prev _curTL2"
        style={{
          visibility: "hidden",
        }}
      >
        <div className="arrow_inner mg flex" data-dist="2">
          <svg
            width="30"
            height="20"
            viewBox="0 0 30 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="svg-fill"
              d="M0.569607 10.5296L9.70003 19.66C9.93782 19.8978 10.323 19.8978 10.5607 19.66C10.7985 19.4222 10.7985 19.0371 10.5607 18.7993L2.46936 10.7079H28.9999C29.3364 10.7079 29.6086 10.4357 29.6086 10.0992C29.6086 9.76277 29.3364 9.49051 28.9999 9.49051H2.46936L10.5607 1.39918C10.7985 1.16139 10.7985 0.776203 10.5607 0.538471C10.4419 0.419603 10.2861 0.360142 10.1304 0.360142C9.97463 0.360142 9.8189 0.419603 9.69998 0.538471L0.569548 9.6689C0.331816 9.90663 0.331816 10.2918 0.569607 10.5296Z"
            ></path>
          </svg>
        </div>
      </div>

      <div
        className="_item animated_arrow next _curTL2"
        style={{
          visibility: "hidden",
        }}
      >
        <div className="arrow_inner mg flex" data-dist="2">
          <svg
            width="30"
            height="20"
            viewBox="0 0 30 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="svg-fill"
              d="M29.4303 10.5296L20.2999 19.66C20.0621 19.8978 19.6769 19.8978 19.4392 19.66C19.2014 19.4222 19.2014 19.0371 19.4392 18.7993L27.5306 10.7079H1.00001C0.663554 10.7079 0.391296 10.4357 0.391296 10.0992C0.391296 9.76277 0.663554 9.49051 1.00001 9.49051H27.5306L19.4392 1.39918C19.2014 1.16139 19.2014 0.776203 19.4392 0.538471C19.5581 0.419603 19.7138 0.360142 19.8696 0.360142C20.0253 0.360142 20.181 0.419603 20.3 0.538471L29.4304 9.6689C29.6681 9.90663 29.6681 10.2918 29.4303 10.5296Z"
            ></path>
          </svg>
        </div>
      </div>

      <a
        href="#"
        className="view_btn mobile_only flex"
        style={{
          visibility: "hidden",
        }}
      >
        View
      </a>

      <SiteLoader loaderImages={loaderImages} />

      <div
        className="cur desktop_only"
        style={{
          visibility: "hidden",
        }}
      >
        <strong>View</strong>
        <i></i>
      </div>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const { data } = await client.query({
    query: GET_HOMEPAGE_DATA,
  });

  if (data) {
    let parsedData = JSON.parse(JSON.stringify(data));

    parsedData.loaderImage.images.map((img) => {
      img.url = AttachCMSPath(img.url);
      return img;
    });

    parsedData.editions.map((edition) => {
      edition.cover.url = AttachCMSPath(edition.cover.url);
      return edition;
    });

    parsedData.artists.map((artist) =>{

      artist.signature.url = AttachCMSPath(artist.signature.url);
      artist.profileImage.url = AttachCMSPath(artist.profileImage.url);
    
      return artist;
    });

    
    return {
      props: {
        loaderImages: parsedData.loaderImage,
        editions: parsedData.editions,
        artists: parsedData.artists
      },
    };
  }
};

export default Home;
