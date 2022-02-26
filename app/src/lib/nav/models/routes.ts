/**
 * Enumeration of every possible route
 * in the PWA.
 */
export const enum Route {
  Start = "/",

  // Legal routes.
  About = "/about",
  Imprint = "/about/imprint",
  Privacy = "/about/privacy",
  Licenses = "/about/licenses",

  // Game routes.
  Game = "/game",
  TurfWars = "/game/turf-wars",
  TurfWarsSession = "/game/turf-wars/session",
  TurfWarsSessionSetup = "/game/turf-wars/session/setup",
  TurfWarsSessionPlay = "/game/turf-wars/session/play",
  Atc = "/game/around-the-clock",
  AtcSession = "/game/around-the-clock/session",
  AtcSessionSetup = "/game/around-the-clock/session/setup",
  AtcSessionPlay = "/game/around-the-clock/session/play"
}

export function getRoute(props: { route: Route; slug?: string; hash?: string }) {
  const { route, slug, hash } = props;
  return `${route}${slug ? `/${slug}` : ""}${hash ? `#${hash}` : ""}`;
}

export function getAnchorRef(props: { id: string }) {
  return `#${props.id}`;
}
