import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
    dataset: process.env.PUBLIC_SANITY_DATASET || 'production'
  }
})