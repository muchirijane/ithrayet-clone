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

const Home = (props) => {
  const {
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
            dataUrl={`/editions`}
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
        {sections.join_ex && (
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
        {loaderImages && <SiteLoader loaderImages={loaderImages} />}
      </Layout>
    )
  );
};

export const getStaticProps = async ({ locale }) => {
  const { data } = await client.query({
    query: GET_HOMEPAGE_DATA,
    variables: {
      locale: locale,
      editionLimit: 8,
    },
  });

  if (data) {
    return {
      props: {
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
      revalidate: 60,
    };
  }
};

export default Home;
