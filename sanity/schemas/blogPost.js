export default {
  name: "blogPost",
  type: "document",
  title: "Blog Post",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
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
      name: "publishedAt",
      type: "datetime",
      title: "Published at",
      options: {
        dateFormat: "YYYY-MM-DD",
        timeFormat: "HH:mm",
        timeStep: 15,
        calendarTodayLabel: "Today"
      }
    },
    {
      name: "excerpt",
      type: "text",
      title: "Excerpt",
      description: "A brief summary of the blog post."
    },
    {
      name: "mainImage",
      type: "image",
      title: "Main image",
      options: {
        hotspot: true
      }
    },
    {
      name: "body",
      type: "array",
      title: "Body",
      of: [
        {
          type: "block",
          styles: [
            {
              title: "Normal",
              value: "normal"
            },
            {
              title: "H1",
              value: "h1"
            },
            {
              title: "H2",
              value: "h2"
            },
            {
              title: "H3",
              value: "h3"
            },
            {
              title: "H4",
              value: "h4"
            },
            {
              title: "Quote",
              value: "blockquote"
            }
          ],
          marks: {
            decorators: [
              {
                title: "Strong",
                value: "strong"
              },
              {
                title: "Emphasis",
                value: "em"
              },
              {
                title: "Code",
                value: "code"
              },
              {
                title: "Underline",
                value: "underline"
              },
              {
                title: "Strike",
                value: "strike-through"
              }
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "External link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL"
                  },
                  {
                    name: "blank",
                    type: "boolean",
                    title: "Open in new tab",
                    initialValue: true
                  }
                ]
              }
            ]
          }
        },
        {
          type: "image",
          options: {
            hotspot: true
          }
        }
      ]
    },
    {
      name: "tags",
      type: "array",
      title: "Tags",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "tag"
            }
          ]
        }
      ]
    },
    {
      name: "seo",
      type: "seo",
      title: "SEO"
    }
  ]
}