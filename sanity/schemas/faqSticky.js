export default {
  name: "faqSticky",
  type: "object",
  title: "FAQ Sticky",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title"
    },
    {
      name: "faqs",
      type: "array",
      title: "FAQs",
      of: [
        {
          type: "faq"
        }
      ]
    }
  ]
}