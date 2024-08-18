export const intro = {
    name: "intro",
    type: 'document',
    title: "Introduction",
    fields: [
      {
        name: "intro",
        title: "Main introduction",
        type: "string"
      }, 
      {
        name: 'cvFile',
        title: 'CV File',
        type: 'file',
      },
      {
        name: 'projects',
        title: 'Projects',
        type: 'string',
      },
      {
        name: 'certifications',
        title: 'Certifications',
        type: 'string',
      },
      {
        name: 'years',
        title: 'Years of Experience',
        type: 'string',
      },
      {
        name: 'about',
        title: 'About Me',
        type: 'string',
      },
      {
        name: "skills",
        title: "Skills",
        type: "array",
        of: [{ type: "string" }],
      },
      {
        name: "cerList",
        title: "Certifications List",
        type: "array",
        of: [{ type: "string" }],
      },
      {
        name: "certLinks",
        title: "Certifications Links",
        type: "array",
        of: [{ type: "string" }],
      },
      {
        name: "education",
        title: "Education",
        type: "array",
        of: [{ type: "string" }],
      },
     
    ]
  }
  