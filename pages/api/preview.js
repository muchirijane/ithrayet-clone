import { fetchAPI } from "../../helpers/api";

export default async (req, res) => {
  // Fetch the headless CMS to check if the provided `slug` exists
  // getPostBySlug would implement the required fetching logic to the headless CMS
  const previewData = await CheckPreviewDraft(req.query.id);
  const {locale} = req.query;
  // If the slug doesn't exist prevent preview mode from being enabled
  if (!previewData) {
    return res.status(401).json({ message: "Invalid Request" });
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData(
    {
      content_type: previewData.content_type,
      content_id: previewData.content_id,
      content_slug: previewData.content_slug,
      preview_id: previewData.id
    },
    { maxAge: 20 }
  );
 
  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect
  let redirect_uri = "";
  switch (previewData.content_type) {
    case "article":
      redirect_uri = `/${locale}/articles/${previewData.json.slug}`;
      break;
    case "project":
      redirect_uri = `/${locale}/join-experience/${previewData.json.slug}`;
      break;
    case "edition":
      redirect_uri = `/${locale}/editions/${previewData.json.slug}`;
      break;
    case "symbols":
      redirect_uri = `/${locale}/symbols/${previewData.json.slug}`;
      break;
    case "artist":
      redirect_uri = `/${locale}/creatives/${previewData.json.slug}`;
      break;
    default:
      redirect_uri = "/";
  }
  res.redirect(redirect_uri);
};

const CheckPreviewDraft = async (id) => {
  const data = await fetchAPI(`/preview-drafts/${id}`);

  return data;
};
