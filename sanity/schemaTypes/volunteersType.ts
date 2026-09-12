import {defineField, defineType} from 'sanity'

export const volunteersType = defineType({
    name: 'volunteer',
    title: 'Volunteer',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
        }),
    ],
})