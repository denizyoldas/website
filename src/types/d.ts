export type WithTarget<Event, Target> = Event & {
  currentTarget: Target;
  target: Target;
};
