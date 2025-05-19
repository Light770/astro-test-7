export default {
  name: "textImage",
  type: "object",
  title: "Text & Image",
  fields: [
    {
      name: "text",
      type: "array",
      title: "Text",
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
    },
    {
      name: "imagePosition",
      type: "string",
      title: "Image Position",
      options: {
        list: [
          {
            title: "Left",
            value: "left"
          },
          {
            title: "Right",
            value: "right"
          }
        ],
        layout: "radio"
      }
    }
  ]
}