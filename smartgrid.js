const smartgrid = require('smart-grid');

const settings = {
    filename: '_smart-grid',
    outputStyle: 'scss',
    columns: 12,
    offset: '30px',
    container: {
        maxWidth: '940px',
        fields: '15px'
    },
    breakPoints: {
        md: {
            width: "980px",
            fields: "15px"
        },
    },
    oldSizeStyle: false,
    properties: [
    ]
};

smartgrid('./app/scss', settings);