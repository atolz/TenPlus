export const CHANGE_ACTIVE_COURSE = "CHANGE_ACTIVE_COURSE";
export const CHANGE_ACTIVE_MOD = "CHANGE_ACTIVE_MOD";

export const ChangeActiveCourse = (id) => {
  return { type: CHANGE_ACTIVE_COURSE, payload: id };
};
export const ChangeActiveMod = (id) => {
  return { type: CHANGE_ACTIVE_MOD, payload: id };
};
