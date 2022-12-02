import fs from "fs";
import multer from "multer";

const fileStorageEngine = multer.diskStorage({
  destination: function (req, file, cb) {
    let folderPath = req.query.folderPath;
    folderPath = `./${folderPath}`;
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, {
        recursive: true,
      });
    }
    cb(null, `${folderPath}/`);
  },

  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: fileStorageEngine });

module.exports = upload;
