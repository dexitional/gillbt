import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const checker = defineType({
  name: 'checker',
  title: 'Admission Checker',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'session',
      type: 'string',
      title: 'Admission Session',
    }),
    
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Admission Year',
      options: {
        source: 'lastName',
      },
    }),
    defineField({
      name: 'data',
      title: 'Student List',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'student',
          fields: [
            { type: 'string', name: 'firstname',title: 'First Name' },
            { type: 'string', name: 'lastName',title: 'Last Name' },
            { type: 'string', name: 'program',title: 'Program of Study' },
            { type: 'string', name: 'serial',title: 'Reference Number' },
          ],
        })
      ]
    }),
  
  ],
  preview: {
    select: {
      title: 'session',
   }
  },
})
