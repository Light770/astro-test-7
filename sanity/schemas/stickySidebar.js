export default {
  name: "stickySidebar",
  type: "object",
  title: "Sticky Sidebar",
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