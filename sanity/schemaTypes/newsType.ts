import {defineField, defineType} from 'sanity'

export const newsType = defineType({
    name: 'news',
    title: 'News',
    type: 'document',
    fields: [
        defineField({
            name: 'news',
            type: 'text',
        }),
        defineField({
            name: 'date',
            type: 'datetime',
        })
    ]
})