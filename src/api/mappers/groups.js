import {
  checkHasId,
  removeUndefinedKeys,
  uniqueEntities,
} from "../../utils/helpers";

export function fromAPI(apiGroup) {
  checkHasId(apiGroup);

  return {
    group: removeUndefinedKeys({
      id: apiGroup.id,
      name: apiGroup.name,
    }),
  };
}

export function fromAPIList(apiGroups) {
  let result = {
    groups: [],
  };

  let allGroups = [];
  apiGroups.forEach((apiGroup) => {
    const { menu } = fromAPI(apiGroup);
    allGroups.push(menu);
  });

  result.groups = uniqueEntities(allGroups);
  return result;
}

export default {
  fromAPI,
  fromAPIList,
};