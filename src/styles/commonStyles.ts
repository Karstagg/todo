// common styles
export const theme = {
  bgColor: '#414141',
  bgColorDarker: '#16181A',
  textColor: '#fff',
  constructive: 'rgb(36, 146, 37)',
  constructiveTransparent: 'rgba(36, 146, 37, 0.25)',
  destructive: 'rgb(211, 36, 49)',
  destructiveTransparent: 'rgba(211, 36, 49, 0.25)',
  neutral: 'rgb(232, 191, 58)',
  neutralTransparent: 'rgba(232, 191, 58, 0.25)',
};

export const text = {
  heading: {
    color: theme.textColor,
    fontSize: 48,
  },
  subHeading: {
    color: theme.textColor,
    fontSize: 24,
  },
  body: {
    color: theme.textColor,
    fontSize: 16,
  },
};

export default {theme, text};
