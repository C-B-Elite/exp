export const idlFactory = ({ IDL }) => {
  const canister2 = IDL.Service({
    'getKV' : IDL.Func([], [IDL.Vec(IDL.Tuple(IDL.Text, IDL.Nat))], ['query']),
    'getM' : IDL.Func([], [IDL.Record({ 'caller' : IDL.Principal })], []),
    'getMC' : IDL.Func([], [IDL.Principal], []),
    'greet' : IDL.Func([IDL.Text], [IDL.Text], ['query']),
    'putKV' : IDL.Func([IDL.Text, IDL.Nat], [IDL.Bool], []),
    'test' : IDL.Func([], [IDL.Text], []),
  });
  return canister2;
};
export const init = ({ IDL }) => { return []; };
