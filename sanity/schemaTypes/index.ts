import { type SchemaTypeDefinition } from 'sanity'

import {infoType} from './infoType'
import {newsType} from './newsType'
import {resultsType} from './resultsType'
import {photosType} from './photosType'
import {sponsorsType} from './sponsorsType'
import {volunteersType} from './volunteersType'
import {bannerType} from './bannerType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [infoType, newsType, resultsType, photosType, sponsorsType, volunteersType, bannerType],
}
