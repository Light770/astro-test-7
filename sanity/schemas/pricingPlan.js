export default {
  name: "pricingPlan",
  type: "object",
  title: "Pricing Plan",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name"
    },
    {
      name: "price",
      type: "number",
      title: "Price"
    },
    {
      name: "features",
      type: "array",
      title: "Features",
      of: [
        {
          type: "string"
        }
      ]
    },
    {
      name: "ctaText",
      type: "string",
      title: "CTA Text"
    },
    {
      name: "ctaLink",
      type: "string",
      title: "CTA Link"
    }
  ]
}