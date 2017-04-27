
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var db = req.db;
    var collection = db.get('pomiary');
    collection.find(
        {},
        {
            "limit" : 5,
            "sort": {'ts' : -1}
        },
        function (e, docs) {
            res.render('datalist', {
                title: "Lodóweczka",
                "datalist" : docs
            });
        });

//    res.render('index', { title: 'Lodówka', textBelow: 'Tu za chwilę pojawi się temperatura odczytana z bazy danych ....'+count });
});

module.exports = router;
