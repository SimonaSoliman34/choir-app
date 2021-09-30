import {
  checkHasId,
  removeUndefinedKeys,
  uniqueEntities,
  getFormatedDates,
} from "../../utils/helpers";

export function fromAPI(apiAttendance) {
  checkHasId(apiAttendance);
  const dates = getFormatedDates(
    removeUndefinedKeys({
      createdAt: apiAttendance.createdAt,
      updatedAt: apiAttendance.updatedAt,
      date: apiAttendance.date,
    })
  );

  return {
    attendance: removeUndefinedKeys({
      id: apiAttendance.id,
      userId: apiAttendance.useId,
      groupId: apiAttendance.groupId,
      attend: apiAttendance.attend,
      note: apiAttendance.note,
      ...dates,
    }),
  };
}

export function fromAPIList(apiAttendances) {
  let result = {
    attendances: [],
  };

  let allAttendances = [];
  apiAttendances.forEach((apiAttendance) => {
    const { attendance } = fromAPI(apiAttendance);
    allAttendances.push(attendance);
  });

  result.groups = uniqueEntities(allAttendances);
  return result;
}

export default {
  fromAPI,
  fromAPIList,
};
