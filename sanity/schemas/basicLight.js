export default {
  name: "basicLight",
  type: "object",
  title: "Basic Light Section",
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