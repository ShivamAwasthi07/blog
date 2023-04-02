export const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "undo",
  "redo",
  "list",
  "bullet",
  "link",
  "color",
  "image",
  "video",
  "background",
  "align",
  "size",
  "font",
];

export const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike", "blockquote", "undo", "redo"],
    [{ size: [] }],
    [{ font: [] }],
    [{ align: ["right", "center", "justify"] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image", "video"],
    [{ color: ["red", "#785412", "#3ba0aa", "#000"] }],
    [{ background: ["red", "#785412", "#efefef"] }],
  ],
};
