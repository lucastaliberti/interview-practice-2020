/**
 * Make a list of the products
 * @param {*} intArray
 */
export function getProductsOfAllIntsExceptAtIndex(intArray) {
  if (intArray.length < 2) {
    throw new Error("not possible");
  }

  let resultArray = new Array(intArray.length).fill(1);
  let productSoFar = 1;

  for (let j = 0; j < intArray.length; j++) {
    resultArray[j] = productSoFar;
    productSoFar *= intArray[j];
  }

  productSoFar = 1;
  for (let k = intArray.length - 1; k >= 0; k--) {
    resultArray[k] *= productSoFar;
    productSoFar *= intArray[k];
  }

  return resultArray;
}
