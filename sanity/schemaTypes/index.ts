import { type SchemaTypeDefinition } from 'sanity'

import {infoType} from './infoType'
import {newsType} from './newsType'
import {resultsType} from './resultsType'
import {photosType} from './photosType'
import {sponsorsType} from './sponsorsType'
import {volunteersType} from './volunteersType'
import {backgroundType} from './backgroundType'
import {raceType} from './raceType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [infoType, newsType, resultsType, photosType, sponsorsType, volunteersType, backgroundType, raceType],
}
