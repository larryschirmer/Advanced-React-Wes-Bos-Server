const { forwardTo } = require('prisma-binding');

const Query = {
  item: forwardTo('db'),
  items: forwardTo('db'),
  itemsConnection: forwardTo('db'),
  // async items(parent, args, ctx, info) {
  //   const items = await ctx.db.query.items();
  //   return items;
  // },
  // dogs(parent, args, ctx, info) {
  //   return [{ name: 'Snickers' }, { name: 'Sunny' }];
  // },
};

module.exports = Query;
