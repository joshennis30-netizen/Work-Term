import {defineField, defineType} from 'sanity'

export const bannerType = defineType({
    name: 'banner',
    title: 'Banner',
    type: 'document',
    fields: [
        defineField({
            name: 'image',
            description: 'must be 1980x1020 pixels',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
    ],
})