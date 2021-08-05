export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'getName' : IDL.Func([], [IDL.Text], ['query']),
    'getSM' : IDL.Func([], [IDL.Record({ 'caller' : IDL.Principal })], []),
    'getSMC' : IDL.Func([], [IDL.Principal], []),
    'newCanister' : IDL.Func([], [], ['oneway']),
    'testGreet' : IDL.Func([IDL.Text], [IDL.Text], []),
    'test_get_M' : IDL.Func([], [IDL.Principal], []),
  });
};
export const init = ({ IDL }) => { return []; };
