export default {
  name: "featureSticky",
  type: "object",
  title: "Feature Sticky",
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
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true
      }
    }
  ]
}