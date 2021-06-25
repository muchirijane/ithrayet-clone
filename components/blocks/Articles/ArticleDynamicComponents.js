import {
  StandardArticleComponents,
  IthraeyatArticleComponents,
} from "../../../constants/articleComponents";
import dynamic from "next/dynamic";

const BigImageTitle = dynamic(() =>
  import("./standardComponents/BigImageTitle")
);
const CenteredPara = dynamic(() => import("./standardComponents/CenteredPara"));
const CenteredQuote = dynamic(() =>
  import("./standardComponents/CenteredQuote")
);
const CL3TxtWoTitle = dynamic(() =>
  import("./standardComponents/CL3TxtWoTitle")
);
const CLImgTxt = dynamic(() => import("./standardComponents/CLImgTxt"));
const CLTxt = dynamic(() => import("./standardComponents/CLTxt"));
const CLTxtTitle = dynamic(() => import("./standardComponents/CLTxtTitle"));
const CLTxtWoTitle = dynamic(() => import("./standardComponents/CLTxtWoTitle"));
const FullWidthImage = dynamic(() =>
  import("./standardComponents/FullWidthImage")
);
const ImageStyleFullWidth = dynamic(() =>
  import("./standardComponents/ImageStyleFullWidth")
);
const IntroductionSection = dynamic(() =>
  import("./standardComponents/IntroductionSection")
);
const QuoteWithImage = dynamic(() =>
  import("./standardComponents/QuoteWithImage")
);
const QuoteWithText = dynamic(() =>
  import("./standardComponents/QuoteWithText")
);

const ArticleDynamicComponents = (props) => {
  const { articleBlocks } = props;

  return articleBlocks.map((block) => {
    switch (block.__typename) {
      case StandardArticleComponents.INTRODUCTION_SECTION:
        return <IntroductionSection content={block} />;
      case StandardArticleComponents.CL_IMAGETEXT_SECTION:
        return <CLImgTxt content={block} />;
      case StandardArticleComponents.CL_TEXT_SECTION:
        return <CLTxt content={block} />;
      case StandardArticleComponents.CL_TEXTWITHTITLE_SECTION:
        return <CLTxtTitle content={block} />;
      case StandardArticleComponents.CL_TEXT_WO_TITLE_SECTION:
        return <CLTxtWoTitle content={block} />;
      case StandardArticleComponents.CL3_TEXT_WO_TITLE_SECTION:
        return <CL3TxtWoTitle content={block} />;
      case StandardArticleComponents.CENTEREDTEXTPARA_SECTION:
        return <CenteredPara content={block} />;
      case StandardArticleComponents.QUOTEWITHIMAGE_SECTION:
        return <QuoteWithImage content={block} />;
      case StandardArticleComponents.QUOTEWITHTEXT_SECTION:
        return <QuoteWithText content={block} />;
      case StandardArticleComponents.CENTEREDQUOTE_SECTION:
        return <CenteredQuote content={block} />;
      case StandardArticleComponents.IMAGESTYLEFULLWIDTH_SECTION:
        return <ImageStyleFullWidth content={block} />;
      case StandardArticleComponents.BIG_IMAGEWITHTITLE_SECTION:
        return <BigImageTitle content={block} />;
      case StandardArticleComponents.FULLWIDTH_IMAGE_SECTION:
        return <FullWidthImage content={block} />;
      default:
        return null;
    }
  });
};

export default ArticleDynamicComponents;
