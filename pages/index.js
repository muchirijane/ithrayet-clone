import SiteLoader from "../components/SiteLoader";
import client from "../lib/apollo";
import { GET_HOMEPAGE_DATA } from "../graphql";
import Layout from "../components/Layout";
import MainBlock from "../components/blocks/mainBlock";
import EditionBlock from "../components/blocks/editionBlock";
import CreativeBlock from "../components/blocks/creativeBlock";
import StoryBlock from "../components/blocks/storyBlock";
import JoinBlock from "../components/blocks/joinBlock";
import IndicatorSet from "../components/UIKit/indicatorSet";
import AnimatedCircle from "../components/UIKit/animatedCircle";
import MobileViewButton from "../components/UIKit/mobileViewButton";
import AnimatedArrow from "../components/UIKit/animatedArrow";
import NewsLetterBlock from "../components/blocks/newsletterBlock";
import { GET_SYMBOLS_URLS } from "../graphql/symbols";
import { CMSPath } from "../helpers/imageCMSPath";

const Home = (props) => {
  // console.log(props.isMobileView, "props.isMobileView");
  const {
    symbolData,
    loaderImages,
    editions,
    featuredEdition,
    artists,
    projects,
    sections,
    SEO,
  } = props;

  return (
    sections && (
      <Layout seo={SEO} isHomepage={true} IncludeNoSelect>
        {sections.main_section && (
          <MainBlock
            editions={editions}
            sectionData={sections.main_section}
            dataUrl={`/editions/${editions[0].slug}`}
          />
        )}
        {featuredEdition && (
          <EditionBlock
            featuredEdition={featuredEdition}
            dataUrl={`/editions`}
          />
        )}
        {sections.creatives && (
          <CreativeBlock
            artists={artists}
            sectionData={sections.creatives}
            dataUrl={`/creatives`}
          />
        )}
        {sections.our_story && (
          <StoryBlock sectionData={sections.our_story} dataUrl={`/stories`} />
        )}
        {sections.join_exp && (
          <JoinBlock
            projects={projects}
            sectionData={sections.join_exp}
            dataUrl={`/join-experience`}
          />
        )}
        {sections.news_letter && (
          <NewsLetterBlock sectionData={sections.news_letter} />
        )}

        <IndicatorSet />
        <AnimatedCircle />

        <AnimatedArrow direction={"prev"} />
        <AnimatedArrow direction={"next"} />

        <MobileViewButton />
        {loaderImages && (
          <SiteLoader symbolData={symbolData} loaderImages={loaderImages} />
        )}
      </Layout>
    )
  );
};

export const getStaticProps = async ({ locale }) => {
  const { data } = await client.query({
    query: GET_HOMEPAGE_DATA,
    variables: {
      locale: locale,
      editionLimit: 1,
      articleLimit: 8,
    },
    fetchPolicy: "no-cache",
  });

  const { data: symbolData } = await client.query({
    query: GET_SYMBOLS_URLS,
    variables: {
      locale: locale,
      limit: 12,
    },
    fetchPolicy: "no-cache",
  });

  if (data) {
    return {
      props: {
        symbolData: symbolData && symbolData.symbols,
        loaderImages: data.loaderImage,
        editions: data.editions,
        artists: data.artists,
        projects: data.projects,
        featuredEdition: data.featuredEdition,
        sections: {
          main_section: data.homepage && data.homepage.mainSection,
          our_story: data.homepage && data.homepage.ourStory,
          join_exp: data.homepage && data.homepage.joinExperience,
          news_letter: data.homepage && data.newsLetterForm,
          creatives: data.homepage && data.homepage.creatives,
        },
        SEO: data.homepage && data.homepage.seo,
        pageType: "home",
      },
      revalidate: 1,
    };
  }
};

export default Home;
