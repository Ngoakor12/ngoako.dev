import sanityClient from "../sanityClient";
import { About } from "../types/About";
import { CV } from "../types/CV";
import { Project } from "../types/Project";
import { GET_ABOUT_CONTENT, GET_CV, GET_PROJECTS } from "./queries";

async function getProjects() {
  try {
    return await sanityClient.fetch<Project[]>(GET_PROJECTS);
  } catch (error) {
    console.log(error);
  }
}

async function getAboutContent() {
  try {
    return await sanityClient.fetch<[About]>(GET_ABOUT_CONTENT);
  } catch (error) {
    console.log(error);
  }
}

async function getCV() {
  try {
    return await sanityClient.fetch<[CV]>(GET_CV);
  } catch (error) {
    console.log(error);
  }
}

export { getProjects, getAboutContent, getCV };
