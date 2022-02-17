import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "542oyksl",
  dataset: "production",
  useCdn: true,
});
