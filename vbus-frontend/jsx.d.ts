// Lightweight JSX declarations to avoid editor errors when @types/react is not installed.
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
