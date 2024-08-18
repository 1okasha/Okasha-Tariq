export const project = {
    name: "project",
    type: "document",
    title: "Project",
    fields: [
      {
        name: "title",
        type: "string",
        title: "Project Title",
        validation: (Rule: { required: () => any; }) => Rule.required(),
      },
      {
        name: "description",
        type: "text",
        title: "Project Description",
        validation: (Rule: { required: () => any; }) => Rule.required(),
      },
      {
        name: "image",
        type: "image",
        title: "Project Image",
        options: {
          hotspot: true, // Enables cropping in the UI
        },
        validation: (Rule: { required: () => any; }) => Rule.required(),
      },
      {
        name: "tag",
        type: "array",
        title: "Project Tags",
        of: [{ type: "string" }],
        options: {
          list: [
            { title: "All", value: "All" },
            { title: "AI", value: "AI" },
            { title: "Data Science", value: "DataScience" },
          ],
        },
        validation: (Rule: { required: () => { (): any; new(): any; min: { (arg0: number): any; new(): any; }; }; }) => Rule.required().min(1),
      },
      {
        name: "gitUrl",
        type: "url",
        title: "GitHub URL",
        validation: (Rule: { uri: (arg0: { scheme: string[]; }) => any; }) => Rule.uri({
          scheme: ['http', 'https'],
        }),
      },
      {
        name: "previewUrl",
        type: "url",
        title: "Preview URL",
        validation: (Rule: { uri: (arg0: { scheme: string[]; }) => any; }) => Rule.uri({
          scheme: ['http', 'https'],
        }),
      },
    ],
  };
  