const { forwardTo } = require('prisma-binding');

const Query = {
  items: forwardTo('db')
  // async items(parent, args, ctx, info) {
  //   const items = await ctx.db.query.items();
  //   return items;
  // },
  // dogs(parent, args, ctx, info) {
  //   return [{ name: 'Snickers' }, { name: 'Sunny' }];
  // },
};

module.exports = Query;
