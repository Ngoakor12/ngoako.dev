const GET_PROJECTS = `*[_type == "project"]{
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

const GET_ABOUT_CONTENT = `*[_type == "about"]{
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

const GET_CV = `*[_type == "CV"]{
  cvUrl
}`;

export { GET_PROJECTS, GET_ABOUT_CONTENT, GET_CV };
