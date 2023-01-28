import React, { createContext, useState, useEffect } from "react";
import sanityClient from "./sanityClient";
import urlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";


type Project = {
  title: string,
  slug: string,
  description: string,
  technologies: string[],
  links: string,
  order: number,
  type: string,
  // details,
  // coverImage{
  //   alt,
  //   image{
  //     asset{
  //       _ref
  //     }
  //   }
  // },
  // mainImage{
  //   alt,
  //   image{
  //     asset{
  //       _ref
  //     }
  //   }
  // },
}

type About = {
  aboutImage: any,
  body: string
}

type AppContextType = {
  isLoading: boolean
  projects: Project[]
  aboutContent: About | null,
  cvUrl: CV,
  urlFor: any,
  serializers: any,
  sanityClient: any,
  BlockContent: any,
  setPageTitle: any,
  isDefaultLink: any,
}

type CV = string

const Context = createContext<AppContextType | null>(null);

type ContextProps = {
  children?: React.ReactElement[]
}

function ContextProvider({ children }: ContextProps) {
  const [projects, setProjects] = useState([]);
  const [cvUrl, setCvUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [aboutContent, setAboutContent] = useState(null);
  const [pageTitle, setPageTitle] = useState(
    "Ngoako Ramokgopa | Software Developer"
  );

  useEffect(() => {
    async function initialFetchAndSet() {
      const [aboutContent, projects, cv] = await Promise.all([
        getAboutContent(),
        getAndSetProjects(),
        getCV(),
      ]);
      setAboutContent(aboutContent[0]);
      setProjects(projects);
      setCvUrl(cv[0].cvUrl);
      setIsLoading(false);
    }
    initialFetchAndSet();
  }, []);

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  function urlFor(source: {}) {
    return urlBuilder({ projectId: "542oyksl", dataset: "production" }).image(
      source
    );
  }

  const serializers = {
    types: {
      image: (imageProp: { node: { asset: string } }) => {
        const node = imageProp.node
        return (
          <img
            src={urlFor(node.asset)
              .width(200)
              .url()}
            alt=""
          />
        );
      },
    },
  };

  async function getAndSetProjects() {
    const query = `*[_type == "project"]{
      title,
      slug{current},
      description,
      technologies,
      links,
      order,
      type,
      details,
      coverImage{
        alt,
        image{
          asset{
            _ref
          }
        }
      },
      mainImage{
        alt,
        image{
          asset{
            _ref
          }
        }
      },
    }`;
    try {
      const response = await sanityClient.fetch(query);
      const data = await response;
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async function getAboutContent() {
    const query = `*[_type == "about"]{
      aboutImage{
        alt,
        image{
          asset{
            _ref
          }
        }
      },
      body
    }`;
    try {
      const response = await sanityClient.fetch(query);
      const data = await response;
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async function getCV() {
    const query = `*[_type == "CV"]{
      cvUrl
    }`;
    try {
      const response = await sanityClient.fetch(query);
      const data = await response;
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  function isDefaultLink(link: string) {
    return link === "https://www.example.com" ? "#" : link;
  }

  return (
    <Context.Provider
      value={{
        isLoading,
        projects,
        aboutContent,
        cvUrl,
        urlFor,
        serializers,
        sanityClient,
        BlockContent,
        setPageTitle,
        isDefaultLink,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
