import bcrypt from "bcrypt";
import client from "../client";

export default {
  Mutation: {
    createAccount: async (
      _,
      {
        username,
        email,
        name,
        location = null,
        avatarURL = null,
        githubUsername = null,
      }
    ) => {
      const existingUser = await client.user.findFirst({
        where: {
          OR: [
            {
              username,
            },
            {
              email,
            },
          ],
        },
      });
      console.log(existingUser);

      const uglyPassword = await bcrypt.hash(password, 10);
      return client.user.create({
        data: {
          username,
          email,
          name,
          location,
          avatarURL,
          githubUsername,
          password: uglyPassword,
        },
      });
      // hash password

      // save and return the user
    },
  },
};
