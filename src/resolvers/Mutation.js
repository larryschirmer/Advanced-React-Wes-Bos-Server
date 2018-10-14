const Mutation = {
  async createItem(parent, args, ctx, info) {
    const item = await ctx.db.mutation.createItem(
      {
        data: { ...args.data },
      },
      info,
    );

    return item;
  },
  // createDog(parent, args, ctx, info) {
  //   console.log(args)
  // }
};

module.exports = Mutation;
