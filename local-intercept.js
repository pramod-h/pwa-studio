const moduleOverridePlugin = require('./src/moduleOverrideWebpackPlugin');
const componentOverrideMapping = require('./src/componentOverrideMapping');

function localIntercept(targets) {

    // Include our webpack plugin for overriding
    targets.of('@magento/pwa-buildpack').webpackCompiler.tap(compiler => {
        new moduleOverridePlugin(componentOverrideMapping).apply(compiler);
    })
}

module.exports = localIntercept;
