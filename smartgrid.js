const smartgrid = require('smart-grid');

const settings = {
    filename: '_smart-grid',
    outputStyle: 'scss',
    columns: 12,
    offset: '30px',
    container: {
        maxWidth: '1170px',
        fields: '30px'
    },
    breakPoints: {
        md: {
            width: "780px",
            fields: "20px"
        },
        sm: {
            width: "600px",
            fields: "15px"
        }
    },
    oldSizeStyle: false,
    properties: [
    ]
};

smartgrid('./app/scss', settings);