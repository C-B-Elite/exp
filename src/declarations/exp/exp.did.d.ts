import type { Principal } from '@dfinity/principal';
export type List = [] | [[string, List]];
export interface _SERVICE {
  'greet' : () => Promise<List>,
  'test' : () => Promise<List>,
}
