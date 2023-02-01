export interface Project {
  coverImage: CoverImage;
  description: string;
  details: Detail[];
  links: Links;
  mainImage: MainImage;
  order: number;
  slug: Slug;
  technologies: string[];
  title: string;
  type: string;
}

export interface CoverImage {
  alt: string;
  image: Image;
}

export interface Image {
  asset: Asset;
}

export interface Asset {
  _ref: string;
}

export interface Detail {
  _key: string;
  _type: string;
  body: Body[];
  name: string;
  order: number;
}

export interface Body {
  _key: string;
  _type: string;
  children: Children[];
  markDefs: MarkDef[];
  style: string;
  level?: number;
  listItem?: string;
}

export interface Children {
  _key: string;
  _type: string;
  marks: string[];
  text: string;
}

export interface MarkDef {
  _key: string;
  _type: string;
  href: string;
}

export interface Links {
  code: string;
  live: string;
}

export interface MainImage {
  alt: string;
  image: Image;
}

export interface Slug {
  current: string;
}
