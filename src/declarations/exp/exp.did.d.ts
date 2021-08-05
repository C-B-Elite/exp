import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'getName' : () => Promise<string>,
  'getSM' : () => Promise<{ 'caller' : Principal }>,
  'getSMC' : () => Promise<Principal>,
  'newCanister' : () => Promise<undefined>,
  'testGreet' : (arg_0: string) => Promise<string>,
  'test_get_M' : () => Promise<Principal>,
}
