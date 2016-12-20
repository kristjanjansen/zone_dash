_ = require('lodash')

// Object to be exported

style = {}

// Colors

style.color = {
    green: 'hsl(129, 52%, 44%)',
    blue: 'hsl(217, 93%, 63%)',
    white: 'hsl(0, 100%, 100%)',
    grayLighter: 'hsl(0, 0%, 90%)',
    grayLight: 'hsl(0, 0%, 60%)',
    gray: 'hsl(0, 0%, 50%)',
    grayDark: 'hsl(0, 0%, 40%)',
    red: 'hls(0, 100%, 50%)',
    orange: 'hls(45, 100%, 50%)'
}

// Fonts

style.fontText = {
    sm: 'normal 0.9rem / 100% "Rubik", "Open Sans", sans-serif',
    md: 'normal 1rem / 100% "Rubik", "Open Sans", sans-serif',
    lg: 'normal 1.4rem / 100% "Rubik", "Open Sans", sans-serif',
    xl: 'normal 2rem / 100% "Rubik", "Open Sans", sans-serif'
}

style.fontCode = {
    md: 'normal 1rem / 100% monospace'
}

style.lineHeight = {
    sm: '100%',
    md: '140%',
}

// Margins and paddings

var marginPaddingSizes = {
    xs: '0.5rem',
    sm: '0.7rem',
    md: '0.8rem',
    lg: '0.9rem'
}

style.margin = marginPaddingSizes
style.padding = marginPaddingSizes

// Icon sizes

style.icon = {
    sm: '1rem',
    md: '2rem',
    lg: '3rem'
}

// Borders

style.border = {
    sm: '1px solid #aaa',
    md: '1px solid #888'
}

style.borderRadius = {
    md: '5px' 
}

// Flatten the style groups

flattened = {}

_.each(style, (group, groupKey) => {
    _.each(group, (value, key) => {
        flattened[_.kebabCase(groupKey + '-' + key)] = value
    })
})

style.flattened = flattened
module.exports = style

// console.log(JSON.stringify(module.exports))