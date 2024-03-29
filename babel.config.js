module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            '@displays': './src/components/displays',
            '@indicators': './src/components/indicators',
            '@inputs': './src/components/inputs',
            '@styles': './src/styles',
            '@hooks': './src/hooks',
            '@state': './src/state',
            '@views': './src/views',
            '@testUtils': './testUtils.tsx',
          },
        },
      ],
    ],
  };
};
