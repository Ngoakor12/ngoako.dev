export default {
  name: "about",
  title: "About",
  type: "document",
  fields: [
    {
      name: "image",
      title: "About Image",
      type: "document",
      fields: [
        {
          name: "src",
          title: "Image",
          type: "image",
          options: {
            hotspot: true,
          },
        },
        {
          name: "alt",
          title: "Alternative text",
          type: "string",
        },
        {
          name: "figCaption",
          title: "Caption",
          type: "string",
        },
      ],
    },
    {
      name: "body",
      title: "About Body",
      type: "blockContent",
    },
  ],
};
