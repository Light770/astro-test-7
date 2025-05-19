export default {
  name: "page",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Page Title",
      validation: [
        {
          rule: "required()",
          message: "Title is required"
        }
      ]
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 96
      },
      validation: [
        {
          rule: "required()",
          message: "Slug is required"
        }
      ]
    },
    {
      name: "seo",
      type: "seo",
      title: "SEO"
    },
    {
      name: "body",
      type: "array",
      title: "Page Content",
      of: [
        {
          type: "stickySidebar"
        },
        {
          type: "textImage"
        },
        {
          type: "basicForm"
        },
        {
          type: "contactCards"
        },
        {
          type: "basicDark"
        },
        {
          type: "basicLight"
        },
        {
          type: "basic"
        },
        {
          type: "faqSticky"
        },
        {
          type: "featureCards"
        },
        {
          type: "featureList"
        },
        {
          type: "featureSticky"
        },
        {
          type: "homeCTA"
        },
        {
          type: "highlightRows"
        },
        {
          type: "signUp"
        },
        {
          type: "pricingColumns"
        },
        {
          type: "basicFeed"
        }
      ]
    }
  ]
}