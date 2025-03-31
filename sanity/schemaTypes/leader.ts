import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'leader',
  title: 'Leader',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn ID',
      type: 'string',
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook ID',
      type: 'string',
    }),
    defineField({
      name: 'visible',
      title: 'Visible',
      type: 'boolean',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
