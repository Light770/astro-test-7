export default {
  name: "tag",
  type: "document",
  title: "Tag",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: [
        {
          rule: "required()",
          message: "Title is required"
        }
      ]
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 96
      },
      validation: [
        {
          rule: "required()",
          message: "Slug is required"
        }
      ]
    }
  ]
}