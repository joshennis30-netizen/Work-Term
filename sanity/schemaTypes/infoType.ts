import {defineField, defineType} from 'sanity'

export const infoType = defineType({
    name: 'info',
    title: 'Info',
    type: 'document',
    fields: [
        defineField({
            name: 'what',
            type: 'text',
        }),
        defineField({
            name: 'when',
            type: 'text',
        }),
        defineField({
            name: 'where',
            type: 'text',
        }),
        defineField({
            name: 'how_to_take_part',
            type: 'text',
        }),
        defineField({
            name: 'additional_info',
            type: 'text',
        }),
    ]
})