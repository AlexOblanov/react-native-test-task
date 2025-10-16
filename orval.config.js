require('dotenv').config()

module.exports = {
  api: {
    input: {
      target: process.env.OPEN_API_URL,
    },
    output: {
      target: 'src/shared/api/generated/api.ts',
      mode: 'single',
      client: 'react-query',
      prettier: true,
      override: {
        mutator: {
          path: 'src/shared/api/config/baseApi.ts',
          name: 'customInstance',
        },
      },
    },
    hooks: {
      afterAllFilesWrite: 'prettier --write',
    },
  },
}
