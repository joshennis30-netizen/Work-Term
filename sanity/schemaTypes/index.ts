import { type SchemaTypeDefinition } from 'sanity'

import {postType} from './postType'
import {authorType} from './authorType'
import {categoryType} from './categoryType'
import {blockContentType} from './blockContentType'

import {infoType} from './infoType'
import {newsType} from './newsType'
import {resultsType} from './resultsType'
import {photosType} from './photosType'
import {sponsorsType} from './sponsorsType'
import {volunteersType} from './volunteersType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType, authorType, categoryType, blockContentType, infoType, newsType, resultsType, photosType, sponsorsType, volunteersType],
}
