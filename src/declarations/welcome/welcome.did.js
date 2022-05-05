export const idlFactory = ({ IDL }) => {
  return IDL.Service({ 'greetBack' : IDL.Func([], [IDL.Text], []) });
};
export const init = ({ IDL }) => { return []; };
