export const mockUseLocation = (
  pathname: string,
  search: string | '',
  hash: string | '',
  state = null,
  key = 'test-key'
) => {
  jest.spyOn(require('react-router-dom'), 'useLocation').mockReturnValue({
    pathname,
    search,
    hash,
    state,
    key,
  });
};
