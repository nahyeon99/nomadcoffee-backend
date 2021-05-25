import client from "../client";

export default {
  Mutation: {
    createMenu: (_, { menu, price, genre }) => {
      client.coffee.create({ data: { menu, price, genre } });
    },
    deleteMenu: (_, { menu }) => {
      return true;
    },
  },
};
