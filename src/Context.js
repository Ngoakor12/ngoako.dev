import { createContext, useState, useEffect } from "react";
import sanityClient from "./client";
import urlBuilder from "@sanity/image-url";

const Context = createContext();

function ContextProvider({ children }) {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    getAndSetProjects();
  }, [isLoading]);
  
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
    try {
      const response = await sanityClient.fetch(
        `*[_type == "project"]{
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
            }`
      );
      const data = await response;
      setProjects(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Context.Provider value={{ isLoading, projects,urlFor,serializers }}>
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
