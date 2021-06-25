import dynamic from "next/dynamic";
import { JoinExperienceComponents } from "../../../constants/experienceComponents";
const CenterLogoSection = dynamic(() =>
  import("./components/CenterLogoSection")
);
const CenterTextSection = dynamic(() =>
  import("./components/CenterTextSection")
);
const Column3Section = dynamic(() => import("./components/Column3Section"));

const ExperienceDynamicComponents = (props) => {
  const { ProjectSections } = props;

  return ProjectSections.map((block) => {
    switch (block.__typename) {
      case JoinExperienceComponents.COLUMN3_SECTION:
        return <Column3Section content={block} />;
      case JoinExperienceComponents.CENTER_LOGO_SECTION:
        return <CenterLogoSection content={block} />;
      case JoinExperienceComponents.CENTER_TEXT_SECTION:
        return <CenterTextSection content={block} />;

      default:
        return null;
    }
  });
};

export default ExperienceDynamicComponents;
