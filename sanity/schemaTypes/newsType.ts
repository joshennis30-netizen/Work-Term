import {defineField, defineType} from 'sanity'

export const newsType = defineType({
    name: 'news',
    title: 'News',
    type: 'document',
    fields: [
        defineField({
            name: 'news',
            type: 'text',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'date',
            type: 'date',
            validation: Rule => Rule.required()
        })
    ]
})