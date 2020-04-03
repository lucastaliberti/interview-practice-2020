/**
 * Check if we're serving orders first-come, first-served
 *
 * O(takeOutOrders.length + dineInOrders.length)
 * @param {*} takeOutOrders
 * @param {*} dineInOrders
 * @param {*} servedOrders
 */
export function isFirstComeFirstServed(
  takeOutOrders,
  dineInOrders,
  servedOrders
) {
  if (takeOutOrders.length + dineInOrders.length !== servedOrders.length) {
    return false;
  }

  const orderedOrders = [];

  // O(takeOutOrders.length + dineInOrders.length)
  while (takeOutOrders.length > 0 || dineInOrders.length > 0) {
    if (takeOutOrders[0] > dineInOrders[0] || takeOutOrders.length === 0) {
      orderedOrders.push(dineInOrders.shift());
    } else {
      orderedOrders.push(takeOutOrders.shift());
    }
  }

  // O(takeOutOrders.length + dineInOrders.length)
  for (let i = 0; i < orderedOrders.length; i++) {
    if (orderedOrders[i] !== servedOrders[i]) {
      return false;
    }
  }

  return true;
}
