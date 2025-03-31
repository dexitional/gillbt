import { type SchemaTypeDefinition } from 'sanity'

import { authorType } from './authorType'
import { blockContentType } from './blockContentType'
import { categoryType } from './categoryType'
import gallery from './gallery'
import leader from './leader'
import library from './library'
import page from './page'
import { postType } from './postType'
import project from './project'
import { staff } from './staff'



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ blockContentType, categoryType, postType, authorType, page,leader,project,gallery,library, staff ],
}
