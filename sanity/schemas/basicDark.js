export default {
  name: "basicDark",
  type: "object",
  title: "Basic Dark Section",
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