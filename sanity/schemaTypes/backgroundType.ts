import {defineField, defineType} from 'sanity'

export const backgroundType = defineType({
    name: 'background',
    title: 'Background',
    type: 'document',
    fields: [
        defineField({
            name: 'image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
    ],
})