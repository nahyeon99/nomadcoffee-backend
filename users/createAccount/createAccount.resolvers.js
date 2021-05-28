import bcrypt from "bcrypt";
import client from "../../client";

Mutation: {
  createAccount: async (
    _,
    { username, email, name, location, password, githubUsername }
  ) => {
    try {
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
      if (existingUser) {
        throw new Error("This username/password is already taken.");
      }

      const uglyPassword = await bcrypt.hash(password, 10);
      return client.user.create({
        data: {
          username,
          email,
          name,
          location,
          password: uglyPassword,
          githubUsername,
        },
      });
    } catch (e) {
      return e;
    }
  };
}
