import {defineField, defineType} from 'sanity'

export const resultsType = defineType({
    name: 'results',
    title: 'Results',
    type: 'document',
    fields: [
        defineField({
            name: 'category',
            type: 'string',
        }),
        defineField({
            name: 'placement',
            type: 'number',
        }),
        defineField({
            name: 'name',
            type: 'string',
        }),
        defineField({
            name: 'Bib',
            type: 'number',
        }),
        defineField({
            name: 'Lap_1',
            type: 'string',
        }),
        defineField({
            name: 'Lap_2',
            type: 'string',
        }),
        defineField({
            name: 'Lap_3',
            type: 'string',
        }),
        defineField({
            name: 'Lap_4',
            type: 'string',
        }),
        defineField({
            name: 'Lap_5',
            type: 'string',
        }),
        defineField({
            name: 'Lap_6',
            type: 'string',
        }),
        defineField({
            name: 'Total',
            type: 'string',
        }),
    ],
})