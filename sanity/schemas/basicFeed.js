export default {
  name: "basicFeed",
  type: "object",
  title: "Basic Feed",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title"
    },
    {
      name: "feedItems",
      type: "array",
      title: "Feed Items",
      of: [
        {
          type: "feedItem"
        }
      ]
    }
  ]
}