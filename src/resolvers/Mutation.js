const Mutation = {
  async createItem(parent, { data }, ctx, info) {
    const item = await ctx.db.mutation.createItem(
      {
        data: { ...data },
      },
      info,
    );

    return item;
  },
  updateItem(parent, { data }, ctx, info) {
    const updates = { ...data };
    delete updates.id;

    return ctx.db.mutation.updateItem(
      {
        data: updates,
        where: { id: data.id },
      },
      info,
    );
  },
  // createDog(parent, args, ctx, info) {
  //   console.log(args)
  // }
};

module.exports = Mutation;
