import sanityClient from "@sanity/client";

export const clientConfig = {
  projectId: "542oyksl",
  dataset: "production",
  useCdn: false,
  apiVersion: "2021-08-31",
};

export default sanityClient(clientConfig);
