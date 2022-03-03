const router = require("express").Router();
const Bet = require("../models/Bet.model");
const axios = require("axios")



router.get("/test", (req,res)=>{
    var options = {
        method: 'GET',
        url: 'https://odds.p.rapidapi.com/v4/sports',
        params: {all: 'true'},
        headers: {
          'x-rapidapi-host': 'odds.p.rapidapi.com',
          'x-rapidapi-key': 'bdbe3ed927msh8b3c80be793e9dap191d1djsn67ae6ec0cb2f'
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data);
          res.json(response.data)
      }).catch(function (error) {
          console.error(error);
      });
})
router.get("/test2", (req,res)=>{
    var options = {
        method: 'GET',
        url: 'https://odds.p.rapidapi.com/v4/sports/upcoming/odds',
        params: {
          regions: 'us',
          oddsFormat: 'decimal',
          markets: 'h2h,spreads',
          dateFormat: 'iso'
        },
        headers: {
          'x-rapidapi-host': 'odds.p.rapidapi.com',
          'x-rapidapi-key': 'bdbe3ed927msh8b3c80be793e9dap191d1djsn67ae6ec0cb2f'
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data);
          res.json(response.data)
      }).catch(function (error) {
          console.error(error);
      });
})
router.get("/test3", (req,res)=>{
    var options = {
        method: 'GET',
        url: 'https://odds.p.rapidapi.com/v4/sports/soccer_uefa_champs_league/scores',
        params: {daysFrom: '3'},
        headers: {
          'x-rapidapi-host': 'odds.p.rapidapi.com',
          'x-rapidapi-key': 'bdbe3ed927msh8b3c80be793e9dap191d1djsn67ae6ec0cb2f'
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data);
          res.json(response.data)
      }).catch(function (error) {
          console.error(error);
      });
})


module.exports = router;
