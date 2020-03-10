export default function checkHasData(data) {
  if (!data) return false;

  const isObjectWithData = Object.keys(data).length > 0;
  const isArrayWithData = Array.isArray(data) && data.length > 0;

  return isObjectWithData || isArrayWithData;
}
