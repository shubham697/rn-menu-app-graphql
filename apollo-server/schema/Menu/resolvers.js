const resolvers = {
  Query: {
    menus: async (_source, { }, { dataSources }) => {
      return response = await dataSources.FirebaseAPI.getAll('menus')
    },
  },
}

module.exports = resolvers;