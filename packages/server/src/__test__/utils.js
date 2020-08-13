module.exports = {
  clearDatabase: async (mongoose) => {
    const collections = mongoose.connection.collections;

    for (const key in collections) {
      const collection = collections[key];
      await collection.deleteMany();
    }
  },
};
