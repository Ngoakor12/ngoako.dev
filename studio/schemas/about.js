export default {
  name: "about",
  title: "About",
  type: "document",
  fields: [
    {
      name: "aboutImage",
      title: "About Image",
      type: "document",
      fields: [
        {
          name: "image",
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
          validation: (Rule) => Rule.required(),
        },
        {
          name: "figCaption",
          title: "Caption",
          type: "string",
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "body",
      title: "About Body",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    },
  ],
};
