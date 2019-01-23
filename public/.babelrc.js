module.exports = {
    'presets': [
        ['env', {
            'targets': {
            'browsers': ['iOS >= 7', 'Android >= 4.3']
            }
        }],
        'react',
        'stage-0'
    ],
    'plugins': [
        'jsx-control-statements',
        'transform-runtime',
        'transform-decorators-legacy',
        //require(`${require('./webpack.alias.js')`)
    ],
    'env': {
        'production': {
            'plugins': ['transform-react-remove-prop-types']
        }
    }
}