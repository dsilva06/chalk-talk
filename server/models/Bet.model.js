const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const betSchema = new Schema(
  {
    creator: {
      type: Schema.Types.ObjectId, ref:"User",
      required:true,
    },
    homeTeam:{
        type: String,
        required: true,
    },
    awayTeam:{
        type: String,
        required: true,
    },
    wager:{
        type: Number,
        required: true
    },
    homeTeamOdds:{
        type:Number,
        required:true
    },
    awayTeamOdds:{
        type:Number,
        required:true
    },
    bettingOnHomeTeam:{
        type: Boolean
    }
   
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Bet = model("Bet", betSchema);

module.exports = Bet;
