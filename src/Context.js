import { createContext, useState, useEffect } from "react";
import sanityClient from "./client";

const Context = createContext();

function ContextProvider({ children }) {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAndSetProjects();
  }, [isLoading]);

  async function getAndSetProjects() {
    try {
      const response = await sanityClient.fetch(
        `*[_type == "project"]{
            title,
            slug{current},
            description,
            technologies,
            links,
            coverImg,
            details
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
    <Context.Provider value={{ isLoading, projects }}>
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
