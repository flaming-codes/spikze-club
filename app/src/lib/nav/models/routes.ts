export enum Route {
  Start = "/",
  Home = "/home",
  Player = "/player",
  Team = "/team",
  Leagues = "/leagues",
  Events = "/events",
  SignUp = "/sign-up",
  SignIn = "/sign-in"
}

export function getRoute(props: { route: Route; slug?: string; hash?: string }) {
  const { route, slug, hash } = props;
  return `${route}${slug ? `/${slug}` : ""}${hash ? `#${hash}` : ""}`;
}

export function getAnchorRef(props: { id: string }) {
  return `#${props.id}`;
}
