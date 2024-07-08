// sanity.config.ts
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {structure, defaultDocumentNode} from './structure'
import { schemaTypes } from './schemaTypes'
import {documentInternationalization} from '@sanity/document-internationalization'
import { DocumentInternationalizationMenu } from './node_modules/@sanity/document-internationalization/dist/index'

export default defineConfig({
  name: 'default',
  title: 'sanity_demo',

  projectId: 'npumkjty',
  dataset: 'newdataset',

  plugins: [
    deskTool({structure,defaultDocumentNode}),
    documentInternationalization({
      supportedLanguages: [{id:'en',title:'English'},{id:'el',title:'Greek'},{id:'fr',title:'French'}],
      schemaTypes:['post','author','category']
  })],

  schema: {
    types: schemaTypes,
  },
})
