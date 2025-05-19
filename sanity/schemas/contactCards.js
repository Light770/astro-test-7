export default {
  name: "contactCards",
  type: "object",
  title: "Contact Cards",
  fields: [
    {
      name: "cards",
      type: "array",
      title: "Cards",
      of: [
        {
          type: "contactCard"
        }
      ]
    }
  ]
}