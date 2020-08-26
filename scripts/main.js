console.log("You can do it!!!");
import { useFish } from './FishDataProvider.js';
import { FishList } from './FishList.js';
import { makeHolyFish } from './FishDataProvider.js';
import { makeSoldierFish } from './FishDataProvider.js';
import { makeUnHolyFish } from './FishDataProvider.js';


const allTheFish = useFish();
console.log("all the fish", allTheFish);


for (const fish of allTheFish) {
    // console.log("fish");
};

// Below: this invokes the function
FishList();
makeUnHolyFish();
makeHolyFish();
makeSoldierFish();
