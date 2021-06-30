import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_SEARCH_DATA, SEARCH_RESULTS } from "../graphql";
import client from "../lib/apollo";
import { CMSPath } from "../helpers/imageCMSPath";
import Link from "next/link";

export const getStaticProps = async ({ locale }) => {
  const { data } = await client.query({
    query: GET_SEARCH_DATA,
    variables: {
      locale: locale,
    },
  });

  if (data) {
    return {
      props: {
        searchProps: data.search,
      },
      revalidate: 60,
    };
  }
};

const Search = (props) => {
  const { searchProps } = props;
  const router = useRouter();
  const { search_term } = router.query;

  const [search, onSearch] = useState("");

  useEffect(() => {
    if (search_term && search_term != 'undefined') {
      onSearch(search_term);
    }
  }, [search_term]);
  const [totalCount, updateCount] = useState(0);

  const [editions, onEditions] = useState([]);
  const [stories, onStories] = useState([]);
  const [projects, onProjects] = useState([]);
  const [creatives, onCreatives] = useState([]);

  const [includeItems, onItemChange] = useState({
    withEditions: true,
    withProjects: true,
    withStories: true,
    withCreatives: true,
  });

  const { loading, error, data, refetch } = useQuery(SEARCH_RESULTS, {
    variables: {
      locale: router.locale,
      search_term: search,
      withStories: includeItems.withStories,
      withProjects: includeItems.withProjects,
      withEditions: includeItems.withEditions,
      withCreatives: includeItems.withCreatives,
    },
    client: client,
  });

  useEffect(() => {
    refetch();
  }, [search]);

  useEffect(() => {
    let editionsCount = editions.length;
    let projectsCount = projects.length;
    let storiesCount = stories.length;
    let creativesCount = creatives.length;
    let total = editionsCount + projectsCount + storiesCount + creativesCount;
    updateCount(total);
  }, [editions, projects, stories, creatives]);

  useEffect(() => {
    if (data) {
      onEditions(data.editions ? data.editions : []);
      onStories(data.stories ? data.stories : []);
      onProjects(data.projects ? data.projects : []);
      onCreatives(data.artists ? data.artists : []);
    }
  }, [data]);

  const searchItem = (e) => {
    onSearch(e.target.value);
  };

  const updateType = (e) => {
    e.preventDefault();

    const type = e.target.dataset.type;

    switch (type) {
      case "all":
        onItemChange({
          withEditions: true,
          withProjects: true,
          withStories: true,
          withCreatives: true,
        });
        break;
      case "editions":
        onItemChange({
          withEditions: true,
          withProjects: false,
          withStories: false,
          withCreatives: false,
        });
        break;
      case "projects":
        onItemChange({
          withEditions: false,
          withProjects: true,
          withStories: false,
          withCreatives: false,
        });
        break;
      case "stories":
        onItemChange({
          withEditions: false,
          withProjects: false,
          withStories: true,
          withCreatives: false,
        });
        break;
      case "creatives":
        onItemChange({
          withEditions: false,
          withProjects: false,
          withStories: false,
          withCreatives: true,
        });
        break;
      default:
        onItemChange({
          withEditions: true,
          withProjects: true,
          withStories: true,
          withCreatives: true,
        });
    }
  };

  return (
    <Layout isInner seo={searchProps && searchProps.seo}>
      <div className="role-setction">
        <div className="content_a fixed_item has_background filters">
          <div className="inner_search_input">
            <form action="" method="post">
              <input
                type="text"
                name="query"
                placeholder="Type something.."
                value={search}
                onChange={searchItem}
              />
            </form>
          </div>

          <div className="sub-menu static">
            <ul>
              <li>
                <a
                  href="#"
                  className="active"
                  onClick={updateType}
                  data-type="all"
                >
                  <span className="f_lable" style={{ pointerEvents: "none" }}>
                    <span>All </span>
                    <span className="f_count">{totalCount}</span>
                  </span>
                </a>
              </li>
              <li>
                <a href="#" onClick={updateType} data-type="editions">
                  <span className="f_lable" style={{ pointerEvents: "none" }}>
                    <span>Editions </span>
                    <span className="f_count">
                      {editions ? editions.length : "0"}
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a href="#" onClick={updateType} data-type="stories">
                  <span className="f_lable" style={{ pointerEvents: "none" }}>
                    <span>Stories </span>
                    <span className="f_count">
                      {stories ? stories.length : "0"}
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a href="#" onClick={updateType} data-type="creatives">
                  <span className="f_lable" style={{ pointerEvents: "none" }}>
                    <span>Creatives </span>
                    <span className="f_count">
                      {creatives ? creatives.length : "0"}
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a href="#" onClick={updateType} data-type="projects">
                  <span className="f_lable" style={{ pointerEvents: "none" }}>
                    <span>Projects </span>
                    <span className="f_count">
                      {projects ? projects.length : "0"}
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div id="sections">
        <section>
          <div className="section_content has_parallax">
            {editions.length > 0 && (
              <div className="search_block">
                <div className="content_a">
                  <strong className="f_40 uppercase">Editions</strong>
                </div>

                <div className="search_row flex">
                  {editions.map((edition, key) => (
                    <Link
                      href={`/editions/${edition.slug}`}
                      key={`search_edition-${key}`}
                    >
                      <a className="result_set">
                        <div className="result_img">
                          <img
                            className="load_img"
                            data-src={`${CMSPath}${edition.cover.url}`}
                            width="100%"
                            height="auto"
                            alt={edition.cover.alternativeText}
                          />
                        </div>
                        <div className="result_title">
                          <div className="f_80 alt">{edition.title}</div>
                          <span className="f_16 less_opacity">{`${edition.type.value} #${edition.type.number}`}</span>
                        </div>
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            {projects.length > 0 && (
              <div className="search_block">
                <div className="content_a">
                  <strong className="f_40 uppercase">Projects</strong>
                </div>

                <div className="search_row flex">
                  {projects.map((project, key) => (
                    <Link
                      href={`/join-experience/${project.slug}`}
                      key={`search_project-${key}`}
                    >
                      <a className="result_set">
                        <div className="result_img">
                          <img
                            className="load_img"
                            data-src={`${CMSPath}${project.cover.url}`}
                            width="100%"
                            height="auto"
                            alt={project.cover.alternativeText}
                          />
                        </div>
                        <div className="result_title">
                          <div className="f_80 alt">{project.title}</div>
                          {/* <span className="f_16 less_opacity">{`${edition.type.value} #${edition.type.number}`}</span> */}
                        </div>
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            {stories.length > 0 && (
              <div className="search_block">
                <div className="content_a">
                  <strong className="f_40 uppercase">Stories</strong>
                </div>

                <div className="search_row flex">
                  {stories.map((story, key) => (
                    <Link
                      href={`/projects/${story.name}`}
                      key={`search_story-${key}`}
                    >
                      <a className="result_set">
                        <div className="result_img">
                          <img
                            className="load_img"
                            data-src={`${CMSPath}${story.articles[0].cover.url}`}
                            width="100%"
                            height="auto"
                            alt={story.articles[0].cover.alternativeText}
                          />
                        </div>
                        <div className="result_title">
                          <div className="f_80 alt">{story.name}</div>
                          {/* <span className="f_16 less_opacity">{`${edition.type.value} #${edition.type.number}`}</span> */}
                        </div>
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            {creatives.length > 0 && (
              <div className="search_block">
                <div className="content_a">
                  <strong className="f_40 uppercase">Creatives</strong>
                </div>

                <div className="search_row flex">
                  {creatives.map((creative, key) => (
                    <Link
                      href={`/creatives/${creative.slug}`}
                      key={`search_creative-${key}`}
                    >
                      <a className="result_set">
                        <div className="result_img">
                          <img
                            className="load_img"
                            data-src={`${CMSPath}${creative.profileImage.url}`}
                            width="100%"
                            height="auto"
                            alt={creative.profileImage.alternativeText}
                          />
                        </div>
                        <div className="result_title">
                          <div className="f_80 alt">{`${creative.firstName} ${creative.lastName}`}</div>
                          {/* <span className="f_16 less_opacity">{`${edition.type.value} #${edition.type.number}`}</span> */}
                        </div>
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Search;
