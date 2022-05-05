import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'getValue' : () => Promise<bigint>,
  'greet' : (arg_0: string) => Promise<string>,
  'hello' : () => Promise<string>,
  'increment' : () => Promise<undefined>,
  'sayHiFromAnotherCanister' : () => Promise<string>,
}
