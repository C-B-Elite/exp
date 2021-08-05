export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'getKV' : IDL.Func([], [IDL.Vec(IDL.Tuple(IDL.Text, IDL.Nat))], []),
    'getName' : IDL.Func([], [IDL.Text], ['query']),
    'getSM' : IDL.Func([], [IDL.Record({ 'caller' : IDL.Principal })], []),
    'getSMC' : IDL.Func([], [IDL.Principal], []),
    'newCanister' : IDL.Func([], [], ['oneway']),
    'putKV' : IDL.Func([IDL.Text, IDL.Nat], [IDL.Bool], []),
    'testGreet' : IDL.Func([IDL.Text], [IDL.Text], []),
    'test_get_M' : IDL.Func([], [IDL.Principal], []),
  });
};
export const init = ({ IDL }) => { return []; };
