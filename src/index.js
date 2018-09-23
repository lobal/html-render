import fs from 'fs';

const htmlRender = (filePath, placeHolders, callback) => {
    fs.readFile(filePath, (err, content) => {
        if (err) return callback(err);
        
        const placeHolderRegex = /{{(\w.+?)}}/gm;
        const rendered = content.toString().replace(placeHolderRegex, (original, placeHolderName) => {
            return placeHolders[placeHolderName] || '';
        });

        return callback(null, rendered)
    })
};

export default htmlRender;
