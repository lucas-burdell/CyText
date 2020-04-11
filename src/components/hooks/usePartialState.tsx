import * as React from "react";

export function usePartialState<T>(
  initial?: T
): [T, (partialState: Partial<T>) => void] {
  const [state, setState] = React.useState(initial);
  return [
    state,
    (partialState: Partial<T>) => setState({ ...state, ...partialState })
  ];
}
