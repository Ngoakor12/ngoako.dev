import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "542oyksl",
  dataset: "production",
  useCdn: false,
  apiVersion: "2021-08-31",
});
