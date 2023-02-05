interface Title {
  [page: string]: string;
}

interface Path {
  [path: string]: string;
}

export const PAGE_TITLE: Title = {
  HOME: "Ngoako Ramokgopa | Software Developer",
  NOT_FOUND: "Page not found | Ngoako Ramokgopa",
  DEFAULT_PROJECT_DETAILS: "Project | Ngoako Ramokgopa",
  CODING_RESOURCE_FINDER: "Coding Resource Finder | Project",
  NGOAKO_DOT_DEV: "Ngoako.dev | Project",
};

export const PATH: Path = {
  HOME: "/",
  PROJECT_DETAILS: "/projects/:slug",
};
