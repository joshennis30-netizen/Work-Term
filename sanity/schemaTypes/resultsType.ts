import {defineField, defineType} from 'sanity'

export const resultsType = defineType({
    name: 'results',
    title: 'Results',
    type: 'document',
    fields: [
        defineField({
            name: 'Name',
            title: 'Name',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'category',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'Placement',
            title: 'Placement',
            type: 'number',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'bib',
            type: 'number',
        }),
        defineField({
            name: 'lap_1',
            type: 'string',
        }),
        defineField({
            name: 'lap_2',
            type: 'string',
        }),
        defineField({
            name: 'lap_3',
            type: 'string',
        }),
        defineField({
            name: 'lap_4',
            type: 'string',
        }),
        defineField({
            name: 'lap_5',
            type: 'string',
        }),
        defineField({
            name: 'lap_6',
            type: 'string',
        }),
        defineField({
            name: 'total',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'year',
            type: 'number',
            validation: Rule => Rule.required()
        }),
    ],
})