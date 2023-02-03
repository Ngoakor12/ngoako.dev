export interface About {
  aboutImage: AboutImage;
  body: Body[];
}

export interface AboutImage {
  alt: string;
  image: Image;
}

export interface Image {
  asset: Asset;
}

export interface Asset {
  _ref: string;
}

export interface Body {
  _key: string;
  _type: string;
  children: Children[];
  markDefs: MarkDef[];
  style: string;
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
