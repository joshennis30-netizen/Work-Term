import {defineField, defineType} from 'sanity'

export const raceType = defineType({
    name: 'race',
    title: 'Race',
    type: 'document',
    fields: [
        defineField({
            name: 'category',
            type: 'string',
            validation: Rule => Rule.required()
        })
    ]
})