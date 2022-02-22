export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
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
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [
        {
          type: "string",
          title: "technology",
        },
      ],
    },
    {
      name: "links",
      title: "Links",
      type: "object",
      fields: [
        {
          name: "code",
          type: "string",
        },
        {
          name: "live",
          type: "string",
        },
      ],
    },
    {
      name: "details",
      title: "Details",
      type: "object",
      fields: [
        {
          name: "problem",
          title: "Problem",
          type: "blockContent",
        },
        {
          name: "goal",
          title: "Goal",
          type: "blockContent",
        },
        {
          name: "technologies",
          title: "Technologies",
          type: "blockContent",
        },
        {
          name: "challenges",
          title: "Challenges",
          type: "blockContent",
        },
        {
          name: "lessons",
          title: "Lessons",
          type: "blockContent",
        },
        {
          name: "credits",
          title: "Credits",
          type: "blockContent",
        },
      ],
    },
  ],
};
