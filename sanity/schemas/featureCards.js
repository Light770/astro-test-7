export default {
  name: "featureCards",
  type: "object",
  title: "Feature Cards",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title"
    },
    {
      name: "features",
      type: "array",
      title: "Features",
      of: [
        {
          type: "featureCard"
        }
      ]
    }
  ]
}