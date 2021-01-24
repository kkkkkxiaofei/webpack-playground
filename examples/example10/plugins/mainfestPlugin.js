class MainfestPlugin {
  apply(compiler) {
    compiler.hooks.emit.tapAsync('MainfestPlugin', (compilation, callback) => {
      const { assets } = compilation;
      const mainfest = Object.keys(assets)
        .reduce((result, filename) => ({ ...result,  [filename]: `./${filename}`}), {});

      const output = JSON.stringify({
        ...mainfest,
        createdAt: new Date().toString(),
        version: '1.0.0'
      });

      assets['mainfest.json'] = {
        source: () => output,
        size: output.length
      };

      callback();
    });
  }
}

module.exports = MainfestPlugin;