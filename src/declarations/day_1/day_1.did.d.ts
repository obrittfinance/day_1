import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'add' : (arg_0: bigint, arg_1: bigint) => Promise<bigint>,
  'clearCounter' : () => Promise<bigint>,
  'days_to_second' : (arg_0: bigint) => Promise<bigint>,
  'div' : (arg_0: bigint, arg_1: bigint) => Promise<bigint>,
  'divide' : (arg_0: bigint, arg_1: bigint) => Promise<boolean>,
  'increment_amount' : (arg_0: bigint) => Promise<bigint>,
  'is_even' : (arg_0: bigint) => Promise<boolean>,
  'mod' : (arg_0: bigint, arg_1: bigint) => Promise<bigint>,
  'remove_from_array' : (arg_0: Array<bigint>, arg_1: bigint) => Promise<
      Array<bigint>
    >,
  'square' : (arg_0: bigint) => Promise<bigint>,
  'sum_of_array' : (arg_0: Array<bigint>) => Promise<bigint>,
  'test' : () => Promise<bigint>,
}
