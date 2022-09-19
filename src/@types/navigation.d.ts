/********** Route Params **********/

/** Route params accepted b the navigator when navigating to ´Games´ screen. */
export interface GameRouteParams {
  id:       string; /** UUID of the game. */
  name:     string; /** Title of the game. */
  coverURL: string; /** URL to an image of the game's box art. */
}

/********** Type Definitions **********/

/** Expands the ReactNavigation namespace with type information about accepted app routes. */
export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      game: GameRouteParams;
    }
  }
}
