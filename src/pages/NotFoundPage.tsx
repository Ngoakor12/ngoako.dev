import { useContext, useEffect } from "react";
import { Context } from "../AppContext";
import { PAGE_TITLE } from "../constants";

function PageNotFound() {
  const { setPageTitle } = useContext(Context);

  useEffect(() => {
    setPageTitle(PAGE_TITLE.NOT_FOUND);
  }, [setPageTitle]);

  return (
    <section className="not-found-page">
      <h1>404</h1>
      <div>
        <p>It looks like you are lost.</p>
        <p>There is nothing here.</p>
      </div>
      <a href="https://ngoako.dev/" className="primary-btn">
        Go to homepage
      </a>
    </section>
  );
}

export default PageNotFound;
