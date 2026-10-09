import {defineField, defineType} from 'sanity'

export const bannerType = defineType({
    name: 'banner',
    title: 'Banner',
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