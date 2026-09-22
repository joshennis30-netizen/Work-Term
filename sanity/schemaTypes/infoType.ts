import {defineField, defineType} from 'sanity'

export const infoType = defineType({
    name: 'info',
    title: 'Info',
    type: 'document',
    fields: [
        defineField({
            name: 'What',
            type: 'string',
        }),
        defineField({
            name: 'When',
            type: 'string',
        }),
        defineField({
            name: 'Where',
            type: 'string',
        }),
        defineField({
            name: 'how_to_take_part',
            type: 'string',
        }),
        defineField({
            name: 'additional_info',
            type: 'string',
        }),
    ]
})