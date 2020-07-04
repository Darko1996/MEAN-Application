const multer = require('multer');
// const fs = require('fs-extra');

const MIME_TYPE_MAP = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
  }
  // uploading file
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      const isValid = MIME_TYPE_MAP[file.mimetype];
      let type = req.params.type;
      // let path = 'backend/images/' + type; // for develop
      let path = __dirname + '../../images/' + type; // for prod
      // fs.mkdirsSync(path); // creating folder if doesn't exist
      let error = new Error('Invalid mime type');
      if(isValid){
        error = null;
      }
      cb(error, path);
    },
    filename: (req, file, cb) => {
      // const name = file.originalname.toLowerCase().split(' ').join('-');
      const name = file.originalname.toLowerCase().split('.').slice(0, -1).join('.');
      const ext = MIME_TYPE_MAP[file.mimetype];
      cb(null, name + '-' + Date.now() + '.' + ext);
    }
  });

  module.exports = multer({storage: storage}).single("image");