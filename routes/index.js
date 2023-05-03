var express = require('express');
var router = express.Router();


const soap = require('soap');
var multer = require('multer')
var upload = multer()

const {Sequelize} = require('sequelize');
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mssql',
  dialectOptions: {
    options: {
      encrypt: false
    },
  }
});

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: '服務學習地圖', mapkey: process.env.GOOGLE_KEY });
});


router.get('/cos_data', (req, res, next) => {
  let paramter = {
    replacements: {
      smtr: req.query.smtr,
      sl_sdgs: req.query.sdgs,
      sl_name: req.query.txtname,
    }
  }

  sequelize.query("[ServiceLearn].[dbo].[get_ServiceLearnDataList] :smtr,:sl_sdgs,:sl_name;", paramter)
  .then((DataList) => {
    res.set({'Content-Type': 'application/json',}).send(JSON.stringify({data:DataList[0],errMsg: '搜尋成功。',result: 1}))
  })
  .catch(err => {
    res.set({'Content-Type': 'application/json'}).send(JSON.stringify({errMsg: 'API發生錯誤。',result: 0}))
  });
});


router.get('/smtr', (req, res, next) => {
  sequelize.query("SELECT DISTINCT [sl_smtr] FROM [ServiceLearn].[dbo].[ServiceLearn_data] ORDER BY [sl_smtr] DESC")
  .then((DataList) => {                 
    res.set({'Content-Type': 'application/json',}).send(JSON.stringify({data:DataList[0],errMsg: '搜尋成功。',result: 1}))
  })
  .catch(err => {
    res.set({'Content-Type': 'application/json'}).send(JSON.stringify({errMsg: 'API發生錯誤。',result: 0}))
  });
});


router.get('/sdgs', (req, res, next) => {
  sequelize.query("SELECT [no],[cd_name] FROM [ServiceLearn].[dbo].[SDGs_Item]")
  .then((DataList) => {                 
    res.set({'Content-Type': 'application/json',}).send(JSON.stringify({data:DataList[0],errMsg: '搜尋成功。',result: 1}))
  })
  .catch(err => {
    res.set({'Content-Type': 'application/json'}).send(JSON.stringify({errMsg: 'API發生錯誤。',result: 0}))
  });
});







module.exports = router;
