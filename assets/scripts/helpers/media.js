const MIN = {
  sm: '40.0625em',
  md: '48.0625em',
  lg: '64.0625em',
};
const MAX = {
  xs: '40em',
  sm: '48em',
  md: '64em',
};

export default function media(query, direction = 'up') {
  switch (direction) {
    case 'up':
      query = `(min-width: ${MIN[query]})`;
      break;
    case 'down':
      query = `(max-width: ${MAX[query]})`;
      break;
    default:
      query = '';
  }

  return matchMedia(query).matches;
}
