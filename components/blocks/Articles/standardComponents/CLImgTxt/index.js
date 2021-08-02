import TypeLeft from "./type_left";
import TypeRight from "./type_right";
import TypeLandscape from "./type_landscape";

const CLImgTxt = (props) => {
  const { content } = props;

  switch (content.clImageText1_type.toLowerCase()) {
    case "left":
      return (
        <TypeLeft
          title={content.clImageText1_title}
          description={content.clImageText1_description}
          image={content.clImageText1_image}
          isCentered={content.clImageText1_isCentered}
        />
      );
    case "right":
      return (
        <TypeRight
          title={content.clImageText1_title}
          description={content.clImageText1_description}
          image={content.clImageText1_image}
          isCentered={content.clImageText1_isCentered}
        />
      );

    default:
      return null;
  }
};

export default CLImgTxt;
