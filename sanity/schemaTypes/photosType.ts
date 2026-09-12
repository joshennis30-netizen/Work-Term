import {defineField, defineType} from 'sanity'

export const photosType = defineType({
    name: 'photos',
    title: 'Photos',
    type: 'document',
    fields: [
        defineField({
            name: 'image',
            type: 'image',
        }),
    ],
})