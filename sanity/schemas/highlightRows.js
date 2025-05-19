export default {
  name: "highlightRows",
  type: "object",
  title: "Highlight Rows",
  fields: [
    {
      name: "rows",
      type: "array",
      title: "Rows",
      of: [
        {
          type: "highlightRow"
        }
      ]
    }
  ]
}