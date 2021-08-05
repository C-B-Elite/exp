import type { Principal } from '@dfinity/principal';
export interface canister2 {
  'getKV' : () => Promise<Array<[string, bigint]>>,
  'getM' : () => Promise<{ 'caller' : Principal }>,
  'getMC' : () => Promise<Principal>,
  'greet' : (arg_0: string) => Promise<string>,
  'putKey' : (arg_0: string, arg_1: bigint) => Promise<boolean>,
}
export interface _SERVICE extends canister2 {}
