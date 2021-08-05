import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'getKV' : () => Promise<Array<[string, bigint]>>,
  'getName' : () => Promise<string>,
  'getSM' : () => Promise<{ 'caller' : Principal }>,
  'getSMC' : () => Promise<Principal>,
  'newCanister' : () => Promise<undefined>,
  'putKV' : (arg_0: string, arg_1: bigint) => Promise<boolean>,
  'testGreet' : (arg_0: string) => Promise<string>,
  'test_get_M' : () => Promise<Principal>,
}
