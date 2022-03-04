const router = require("express").Router();
const Bet = require("../models/Bet.model");
const axios = require("axios");

router.get("/getAllOdds",(req, res) => {
  var options = {
    method: "GET",
    url: "https://odds.p.rapidapi.com/v4/sports/soccer_uefa_champs_league/odds",
    params: {
      regions: "us",
      oddsFormat: "decimal",
      markets: "h2h,spreads",
      dateFormat: "iso",
    },
    headers: {
      "x-rapidapi-host": "odds.p.rapidapi.com",
      "x-rapidapi-key": "bdbe3ed927msh8b3c80be793e9dap191d1djsn67ae6ec0cb2f",
    },
  };

//   let {data} = await 
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      res.json(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
    // console.log(data)
});
router.get("/getAllScores", (req, res) => {
  var options = {
    method: "GET",
    url: `https://odds.p.rapidapi.com/v4/sports/soccer_uefa_champs_league/scores`,
    params: { daysFrom: "3" },
    headers: {
      "x-rapidapi-host": "odds.p.rapidapi.com",
      "x-rapidapi-key": "bdbe3ed927msh8b3c80be793e9dap191d1djsn67ae6ec0cb2f",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      res.json(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});

router.post("/createBet", (req, res) => {
  Bet.create({
    creator: req.body.creator,
    homeTeam: req.body.homeTeam,
    awayTeam: req.body.awayTeam,
    wager: req.body.wager,
    homeTeamOdds: req.body.homeTeamOdds,
    awayTeamOdds: req.body.awayTeamOdds,
    bettingOnHomeTeam: req.body.bettingOnHomeTeam,
  })
    .then((createdBet) => {
      res.json(createdBet);
    })
    .catch((err) => {
      res.json(err.message);
    });
});

router.get("/view-bets", (req, res) => {
  Bet.find()
    .then((allBet) => {
      res.json(allBet);
    })
    .catch((err) => {
      res.json(err.message);
    });
});
router.get("/:betId/view", (req, res) => {
    Bet.findById(req.params.betId)
      .then((oneBet) => {
        res.json(oneBet);
      })
      .catch((err) => {
        res.json(err.message);
      });
  });
//   router.post("/:betId/edit", (req, res) => {
//     Bet.findByIdAndUpdate(
//       req.params.betId,
//       {
//        ...req.body
//       },
//       { new: true }
//     )
//       .then((updatedBet) => {
//         res.json(updatedBet);
//       })
//       .catch((err) => {
//         res.json(err.message);
//       });
//   });
  router.post("/:betId/remove", (req, res) => {
    Bet.findByIdAndRemove(req.params.betId)
      .then(
        (removedBet) => {
          res.json(removedBet);
        },
      )
      .catch((err) => {
        res.json(err.message);
      });
  });

module.exports = router;
