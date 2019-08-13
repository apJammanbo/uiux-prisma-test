import { prisma } from "../../../generated/prisma-client";

const UserQuery = {
  Query: {
    user: async (_, args) => {
      const { id } = args;
      const user = await prisma.user({ id });
      return user;
    }
  }
};

export default UserQuery;
