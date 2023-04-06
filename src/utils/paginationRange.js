import _ from "lodash";

export const paginationRange = (totalPage, page, limit, siblings) => {
  let totalPageNumb = 5 + siblings;
  if (totalPageNumb >= totalPage) {
    return _.range(1, totalPage + 1);
  }

  let leftSiblings = Math.max(page - siblings, 1);
  let rightSiblings = Math.min(page + siblings, totalPage);

  let showLeftDots = leftSiblings > 2;
  let showRightDots = rightSiblings < totalPage - 2;

  if (!showLeftDots && showRightDots) {
    let leftItemsCount = 2 + 1 * siblings;
    let leftRange = _.range(1, leftItemsCount + 1);
    return [...leftRange, " ...", totalPage];
  } else if (showLeftDots && !showRightDots) {
    let rightItemsCount = 2 + 1 * siblings;
    let rightRange = _.range(totalPage - rightItemsCount + 1, totalPage + 1);
    return [1, "... ", ...rightRange];
  } else {
    let middleRange = _.range(leftSiblings, rightSiblings + 1);
    return [1, "... ", ...middleRange, " ...", totalPage];
  }
};
