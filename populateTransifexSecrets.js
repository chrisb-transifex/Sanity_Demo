// ./populateTransifexSecrets.js
// Do not commit this file to your repository

import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2023-02-15'})

client.createOrReplace({
  // The `.` in this _id will ensure the document is private
  // even in a public dataset!
  _id: 'transifex.secrets',
  _type: 'transifexSettings',
  // Replace these with your values
  organization: 'chrisb',
  project: 'sanity_demo',
  token: '1/f1194dc3aa6844276fd1628648228582410da541'
})