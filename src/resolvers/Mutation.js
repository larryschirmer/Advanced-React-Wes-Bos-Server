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
  async deleteItem(parent, { data }, ctx, info) {
    const where = { id: data.id };

    const item = await ctx.db.query.item(
      { where },
      `{
        id 
        title
      }`,
    );

    return ctx.db.mutation.deleteItem({ where }, info);
  },
  // createDog(parent, args, ctx, info) {
  //   console.log(args)
  // }
};

module.exports = Mutation;
