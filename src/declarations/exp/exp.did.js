export const idlFactory = ({ IDL }) => {
  const List = IDL.Rec();
  List.fill(IDL.Opt(IDL.Tuple(IDL.Text, List)));
  return IDL.Service({
    'greet' : IDL.Func([], [List], []),
    'test' : IDL.Func([], [List], []),
  });
};
export const init = ({ IDL }) => { return []; };
