import {defineField, defineType} from 'sanity'

export const sponsorsType = defineType({
    name: 'sponsor',
    title: 'Sponsor',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
        }),
    ],
})