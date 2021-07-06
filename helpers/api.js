export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  let data = {};
  try {
    const response = await fetch(requestUrl, {
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit

      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referre
    });

    data = await response.json();
  } catch (error) {
    console.log(error);
  }
  return data;
}

export function getStrapiURL(path = "") {
  return `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"}${path}`;
}

export const getTypeValue = (value, t) => {
  if (value.toLowerCase() === "edition") {
    return t("type.edition");
  } else {
    return t("type.issue");
  }
};
