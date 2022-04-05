export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().max(100),
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      validation: (Rule) => Rule.required().max(100),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "document",
      fields: [
        {
          name: "image",
          title: "Image",
          type: "image",
          options: {
            hotspot: true,
          },
          validation: (Rule) => Rule.required(),
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
      name: "mainImage",
      title: "Main Image",
      type: "document",
      fields: [
        {
          name: "image",
          title: "Image",
          type: "image",
          options: {
            hotspot: true,
          },
          validation: (Rule) => Rule.required(),
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
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [
        {
          type: "string",
          title: "technology",
          validation: (Rule) => Rule.required().min(1),
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: "links",
      title: "Links",
      type: "object",
      fields: [
        {
          name: "code",
          type: "url",
          validation: (Rule) =>
            Rule.uri({
              scheme: ["http", "https", "mailto", "tel"],
            }),
        },
        {
          name: "live",
          type: "url",
          validation: (Rule) =>
            Rule.uri({
              scheme: ["http", "https", "mailto", "tel"],
            }),
        },
      ],
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: ["individual", "group"],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "details",
      title: "Details",
      type: "array",
      of: [
        {
          name: "detail",
          type: "object",
          fields: [
            {
              name: "order",
              title: "Order",
              type: "number",
            },
            {
              name: "name",
              title: "Name",
              type: "string",
            },
            {
              name: "body",
              title: "Body",
              type: "blockContent",
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    },
  ],
};
