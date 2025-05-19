export default {
  name: "basic",
  type: "object",
  title: "Basic Section",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title"
    },
    {
      name: "content",
      type: "array",
      title: "Content",
      of: [
        {
          type: "block"
        }
      ]
    }
  ]
}