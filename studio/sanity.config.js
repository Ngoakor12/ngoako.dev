import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./schemas/schema";

export default defineConfig({
  title: "ngoako.dev",
  projectId: "542oyksl",
  dataset: "production",
  plugins: [deskTool()],
  schema: {
    types: schemas,
  },
});
