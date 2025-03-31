import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const staff = defineType({
  name: 'staff',
  title: 'Staff',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'firstName',
      type: 'string',
      title: 'First Name',
    }),
    defineField({
      name: 'lastName',
      type: 'string',
      title: 'Last Name',
    }),
    defineField({
      name: 'phone',
      type: 'string',
      title: 'Phone Number',
    }),
    defineField({
      name: 'email',
      type: 'string',
      title: 'Email Address',
    }),
    defineField({
      name: 'position',
      type: 'string',
      title: 'Designation or Position',
    }),
    defineField({
      name: 'period',
      type: 'string',
      title: 'Office Period',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Profile Link',
      options: {
        source: 'lastName',
      },
    }),
    defineField({
      name: 'profile',
      type: 'blockContent',
      title: 'Profile & Biodata',
    }),
    defineField({
      name: 'profileImage',
      type: 'image',
      options: {
        hotspot: true,
      }
    }),
    defineField({
      name: 'facebookUrl',
      title: 'Facebook Link',
      type: 'string',
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Instagram Link',
      type: 'string',
    }),
    defineField({
      name: 'twitterUrl',
      title: 'Twitter Link',
      type: 'string',
     }),
    defineField({
      name: 'youtubeUrl',
      title: 'Youtube Link',
      type: 'string',
     }),
    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn Link',
      type: 'string',
     }),
    defineField({
      name: 'type',
      title: 'Profile Type',
      type: 'string',
      options: {
        list: [
          { title: "Active Staff", value: "staff" },
          { title: "Current Principal", value: "principal" },
          { title: "Past Principal", value: "past-principal" },
          { title: "Past Staff", value: "past-staff" },
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: 'lastName',
      media: 'profileImage',
    }
    
  },
})
