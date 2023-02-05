import React, { createContext, useState, useEffect } from "react";
import urlBuilder from "@sanity/image-url";
import { Asset, Project } from "./types/Project";
import { getAboutContent, getProjects, getCV } from "./api/sanity";
import { About } from "./types/About";
import { clientConfig } from "./sanityClient";

const { projectId, dataset } = clientConfig

export type AppContextType = {
  projects: Project[];
  aboutContent: About | undefined;
  cvUrl: string;
  isLoading: boolean;
  urlFor: (source: Asset) => string;
  setPageTitle: (title: string) => void;
  isDefaultLink: (link: string) => string;
};

const Context = createContext<AppContextType>({
  projects: [],
  aboutContent: undefined,
  cvUrl: "",
  isLoading: true,
  urlFor: urlFor,
  isDefaultLink: isDefaultLink,
  setPageTitle: () => { },
});

function urlFor(source: Asset) {
  return urlBuilder({ projectId, dataset })
    .image(source)
    .url();
}

function isDefaultLink(link: string) {
  return link === "https://www.example.com" ? "#" : link;
}

type ContextProps = {
  children?: React.ReactElement[];
};

function ContextProvider({ children }: ContextProps) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [aboutContent, setAboutContent] = useState<About>();
  const [cvUrl, setCvUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [pageTitle, setPageTitle] = useState(
    "Ngoako Ramokgopa | Software Developer"
  );

  useEffect(() => {
    async function initialFetchAndSet() {
      const [projects, aboutContent, CV] = await Promise.allSettled([
        getProjects(),
        getAboutContent(),
        getCV(),
      ]);

      if (projects.status === "fulfilled" && projects.value) {
        setProjects(projects.value);
      }

      if (aboutContent.status === "fulfilled" && aboutContent.value) {
        setAboutContent(aboutContent.value[0]);
      }

      if (CV.status === "fulfilled" && CV.value) {
        setCvUrl(CV.value[0].cvUrl);
      }

      setIsLoading(false);
    }
    initialFetchAndSet();
  }, []);

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return (
    <Context.Provider
      value={{
        isLoading,
        projects,
        aboutContent,
        cvUrl,
        urlFor,
        setPageTitle,
        isDefaultLink,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
