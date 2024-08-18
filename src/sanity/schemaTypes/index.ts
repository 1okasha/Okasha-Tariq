import { type SchemaTypeDefinition } from 'sanity'
import { intro } from "./intro"
import { project } from "./projects"


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ intro,project ],
}
