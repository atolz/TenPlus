export const SHOW_POP_UP = "SHOW_POP_UP";
export const HIDE_POP_UP = "HIDE_POP_UP";

// export class ShowpopupAction {
//   type = SHOW_POP_UP;
//   payload;
//   constructor(payload) {
//     this.payload = payload;
//   }
// }
// export class HidepopupAction {
//   type = HIDE_POP_UP;
//   payload;
//   constructor(payload) {
//     this.payload = payload;
//   }
// }

export const ShowpopupAction = (payload) => {
  return { type: SHOW_POP_UP, payload };
};
export const HidepopupAction = (payload) => {
  return { type: HIDE_POP_UP, payload };
};
