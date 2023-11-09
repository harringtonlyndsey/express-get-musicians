const router = express.Router();
const { check, validationResult } = require("express-validator");

app.post("/musicians", [
    check("name").not().isEmpty(),
    check("instrument").not().isEmpty(),
] async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.json({errors:errors.array()});
    } else {
        await Musician.create(req.body);
        const musicians = await Musician.findAll({});
  res.json(musician);
    }
});


module.exports = router;
