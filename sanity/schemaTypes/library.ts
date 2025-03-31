export default {
  name: 'library',
  title: 'Library',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Catalog Title',
      type: 'string',
    },
    {
      name: 'showCatalog',
      title: 'Catalog visibility',
      type: 'boolean',
      initialValue: true
    },
    {
      name: 'files',
      type: 'array',
      title: 'Catalog Resources',
      of: [
        {
          name: 'file',
          type: 'file',
          title: 'Resource file',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Resource title',
            },
            {
              name: 'type',
              type: 'string',
              title: 'Resource type',
              options: {
                list: [
                  { title: 'PDF', value: 'pdf' },
                  { title: 'EXCEL', value: 'excel' },
                  { title: 'DOCX', value: 'docx' },
                  { title: 'IMAGE', value: 'img' },
                  { title: 'ARCHIVE', value: 'archive' },
                ],
              },
            }
          ],
        },
      ],
      options: {
        layout: 'grid',
      },
    },
    
  ]
}



/*

export default {
  name: 'gallery',
  type: 'object',
  title: 'Gallery',
  fields: [
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [
        {
          name: 'image',
          type: 'image',
          title: 'Image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            },
          ],
        },
      ],
      options: {
        layout: 'grid',
      },
    },
    {
      name: 'display',
      type: 'string',
      title: 'Display as',
      description: 'How should we display these images?',
      options: {
        list: [
          { title: 'Stacked on top of eachother', value: 'stacked' },
          { title: 'In-line', value: 'inline' },
          { title: 'Carousel', value: 'carousel' },
        ],
        layout: 'radio', // <-- defaults to 'dropdown'
      },
    },
    {
      name: 'zoom',
      type: 'boolean',
      title: 'Zoom enabled',
      description: 'Should we enable zooming of images?',
    },
  ],
  preview: {
    select: {
      images: 'images',
      image: 'images.0',
    },
    prepare(selection: any) {
      const { images, image } = selection;

      return {
        title: `Gallery block of ${Object.keys(images).length} images`,
        subtitle: `Alt text: ${image.alt}`,
        media: image,
      };
    },
  },
}




*/