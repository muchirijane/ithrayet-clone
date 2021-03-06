import Layout from "../../components/Layout";
import { GET_EDITIONS_DATA } from "../../graphql";
import client from "../../lib/apollo";
import useTranslation from "next-translate/useTranslation";
import EditionsSection from "../../components/blocks/Editions/editionsSection";
import PageBar from "../../components/blocks/Editions/pageBar";
import SearchBar from "../../components/elements/SearchBar";

export const getServerSideProps = async ({ locale, query }) => {
  const { alphabet, writer, catID, dateFrom, dateTo } = query;
  let catJson;
  let dates = {};
  if (dateFrom && dateTo && dateFrom != "" && dateTo != "") {
    dates = {
      dateTo: dateTo && dateTo != "" ? new Date(dateTo) : null,
      dateFrom: dateFrom && dateFrom != "" ? new Date(dateFrom) : null,
    };
  }

  if (catID && catID != "") {
    catJson = [];
    let splitArray = catID.split(",");
    if (splitArray.length > 0) {
      splitArray.map((val) => {
        catJson.push({
          tags: { name_eq: val },
        });
      });
    } else {
      catJson.push({
        tags: { name_eq: catID },
      });
    }
  }
  let alphabetJson;
  if (alphabet && alphabet != "") {
    alphabetJson = [];
    let alphabetSplitArray = alphabet.split(",");
    if (alphabetSplitArray.length > 0) {
      alphabetSplitArray.map((val) => {
        alphabetJson.push({
          title_containss: val,
        });
      });
    } else {
      alphabetJson.push({
        title_containss: val,
      });
    }
  }

  // console.log("asdasd", {
  //   variables: {
  //     ...dates,
  //     locale: locale,
  //     authFirstName: (writer && writer != "" && writer.split(",")[0]) || "",
  //     authLastName: (writer && writer != "" && writer.split(",")[1]) || "",
  //     tags: catJson ? catJson : {},
  //     alphabets: alphabetJson ? alphabetJson : {},
  //   },
  // });
  const { data } = await client.query({
    query: GET_EDITIONS_DATA,
    variables: {
      ...dates,
      locale: locale,
      authFirstName: (writer && writer != "" && writer.split(",")[0]) || "",
      authLastName: (writer && writer != "" && writer.split(",")[1]) || "",
      tags: catJson ? catJson : {},
      alphabets: alphabetJson ? alphabetJson : {},
    },
    fetchPolicy: "no-cache",
  });
  // console.log(data.editions);
  if (data) {
    return {
      props: {
        editions: data.editions,
        pageType: "editions",
        SEO: data.listEdition.seo,
        filter_authors: data.filter_authors,
        filter_tags: data.filter_tags,
      },
    };
  } else {
    return {};
  }
};

const Editions = (props) => {
  const { t } = useTranslation("common");
  const { editions, SEO, filter_authors, filter_tags } = props;
  console.log(editions)

  return (
    <Layout
      isInner
      isFilter
      seo={SEO && SEO}
      filterData={{
        date: true,
        filter_authors: filter_authors,
        filter_tags: filter_tags,
        alphabet: true,
      }}
    >
      <div className="page_head_set">
        <h1>{t("pages.title_editions")}</h1>
      </div>

      <div className="page_bar">
        <SearchBar />
      </div>

      <div id="fixed-bar" className="fixed-bar">
        <PageBar editions={editions} />

        <EditionsSection editions={editions} />
      </div>
    </Layout>
  );
};

export default Editions;
