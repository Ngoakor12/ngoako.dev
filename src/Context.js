import { createContext, useState, useEffect } from "react";
import sanityClient from "./client";
import urlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const Context = createContext();

function ContextProvider({ children }) {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [aboutContent, setAboutContent] = useState(null);
  const [pageTitle, setPageTitle] = useState(
    "Ngoako Ramokgopa | Software Developer"
  );

  useEffect(() => {
    getAndSetProjects();
    getAboutContent();
  }, [isLoading]);

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  function urlFor(source) {
    return urlBuilder({ projectId: "542oyksl", dataset: "production" }).image(
      source
    );
  }

  const serializers = {
    types: {
      image: ({ node }) => {
        return <img src={urlFor(node.asset).width(200).url()} alt="" />;
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
      setProjects(data);
      setIsLoading(false);
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
      setAboutContent(data[0]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Context.Provider
      value={{
        isLoading,
        projects,
        aboutContent,
        urlFor,
        serializers,
        sanityClient,
        BlockContent,
        setPageTitle,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
