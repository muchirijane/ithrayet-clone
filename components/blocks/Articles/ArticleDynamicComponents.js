import {
  StandardArticleComponents,
  IthraeyatArticleComponents,
} from "../../../constants/articleComponents";
import dynamic from "next/dynamic";

const ImageStyle = dynamic(() => import("./ithraeyatComponents/ImageStyle"));
const ImageStyleWT = dynamic(() =>
  import("./ithraeyatComponents/ImageStyleWT")
);
const GalleryImage = dynamic(() =>
  import("./ithraeyatComponents/GalleryImage")
);
const GalleryImageWT = dynamic(() =>
  import("./ithraeyatComponents/GalleryImageWT")
);
const TiltingGallery = dynamic(() =>
  import("./ithraeyatComponents/TiltingGallery")
);
const InteractiveMap = dynamic(() =>
  import("./ithraeyatComponents/InteractiveMap")
);
const HoverImage = dynamic(() => import("./ithraeyatComponents/HoverImage"));
const TiltingFullWidth = dynamic(() =>
  import("./ithraeyatComponents/TiltingFullWidth")
);
const ImageWithText = dynamic(() =>
  import("./ithraeyatComponents/ImageWithText")
);
const ImageLandscape = dynamic(() =>
  import("./ithraeyatComponents/ImageLandscape")
);
const TextSound = dynamic(() => import("./ithraeyatComponents/TextSound"));
const SignatureWT = dynamic(() => import("./ithraeyatComponents/SignatureWT"));
const Signature = dynamic(() => import("./ithraeyatComponents/Signature"));

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
      case IthraeyatArticleComponents.PARALLAX_IMAGE_SECTION:
        return <ImageStyle content={block} />;
      case IthraeyatArticleComponents.IMAGE_GALLERY_WT_SECTION:
        return <ImageStyleWT content={block} />;
      case IthraeyatArticleComponents.IMAGE_GALLERYSLIDER_SECTION:
        return <GalleryImage content={block} />;
      case IthraeyatArticleComponents.IMAGE_GALLERY_SLIDER_WT_SECTION:
        return <GalleryImageWT content={block} />;
      case IthraeyatArticleComponents.TILTING_GALLERY_SECTION:
        return <TiltingGallery content={block} />;
      case IthraeyatArticleComponents.INTERACTIVE_MAP_SECTION:
        return <InteractiveMap content={block} />;
      case IthraeyatArticleComponents.HOVER_IMAGE_SECTION:
        return <HoverImage content={block} />;
      case IthraeyatArticleComponents.TILTING_FULLWIDTH_SECTION:
        return <TiltingFullWidth content={block} />;
      case IthraeyatArticleComponents.PARALLAX_IMAGE_TEXT_SECTION:
        return <ImageWithText content={block} />;
      case IthraeyatArticleComponents.PARALLAX_IMAGE_LANDSCAPE_SECTION:
        return <ImageLandscape content={block} />;
      case IthraeyatArticleComponents.TEXT_WITH_SOUND_SECTION:
        return <TextSound content={block} />;
      case IthraeyatArticleComponents.SIGNATURE_WO_TEXT_SECTION:
        return <Signature content={block} />;

      case IthraeyatArticleComponents.SIGNATURE_WT_SECTION:
        return <SignatureWT content={block} />;

      default:
        return null;
    }
  });
};

export default ArticleDynamicComponents;
