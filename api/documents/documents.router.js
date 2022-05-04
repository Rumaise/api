const { uploadDocument, uploadStorage } = require("./documents.controller");

const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
router.post("/upload", uploadStorage.single("document"), uploadDocument);
module.exports = router;
