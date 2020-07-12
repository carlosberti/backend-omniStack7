import multer from 'multer';
import path from 'path';


export default {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: function(request, file, cb) {
            cb(null, file.originalname)
        }
    }),
}