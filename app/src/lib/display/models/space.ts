// Can be kept globally as they're the
// same for every component.
export const directions: Array<{
  enterFrom: string;
  enterTo: string;
  leaveFrom: string;
  leaveTo: string;
}> = [
  {
    enterFrom: "translate-x-full",
    enterTo: "translate-x-0",
    leaveFrom: "translate-x-0",
    leaveTo: "-translate-x-full"
  },
  {
    enterFrom: "translate-y-full",
    enterTo: "translate-y-0",
    leaveFrom: "translate-y-0",
    leaveTo: "-translate-y-full"
  },
  {
    enterFrom: "-translate-x-full",
    enterTo: "translate-x-0",
    leaveFrom: "translate-x-0",
    leaveTo: "translate-x-full"
  },
  {
    enterFrom: "-translate-y-full",
    enterTo: "translate-y-0",
    leaveFrom: "translate-y-0",
    leaveTo: "translate-y-full"
  }
];
