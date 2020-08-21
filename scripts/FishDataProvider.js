    const fishCollection = [
        {
            givenName: "Bart",
            size: 10,
            diet: "crustaceans",
            species: "Clownfish",
            harvestLocation: "Petco",
            image: "yellowfish.jpg"
           
        },

        {
            givenName: "Big Mac",
            size: 12,
            diet: "jellyfish",
            species: "Giant sunfish",
            harvestLocation: "Sam's Club Reef",
            image: "redfish.jpg"
            
        },
        {
            givenName: "Squigle",
            size: 10,
            diet: "smaller fish",
            species: "Moray Eel",
            harvestLocation: "Ole Dan's boat wreck",
            image: "multifish.jpg"
        },
        {
            givenName: "Hammy",
            size: 15,
            diet: "just about everything",
            species: "Groupers",
            harvestLocation: "Jimmy's big boi fishin' spot",
            image: "multifish.jpg"
        },
        {
            givenName: "Tiny",
            size: 5,
            diet: "plankton",
            species: "Blue Chromis",
            harvestLocation: "Young Dan's boat wreck",
            image: "multifish.jpg"
        },
        {
            givenName: "Bart",
            size: 3,
            diet: "crustaceans",
            species: "Clownfish",
            harvestLocation: "Petco",
            image: "multifish.jpg"
        },
        {
            givenName: "Big Mac",
            size: 9,
            diet: "jellyfish",
            species: "Giant sunfish",
            harvestLocation: "Sam's Club Reef",
            image: "multifish.jpg"
        },
        {
            givenName: "Squigle",
            size: 8,
            diet: "smaller fish",
            species: "Moray Eel",
            harvestLocation: "Ole Dan's boat wreck",
            image: "multifish.jpg"
        },
        {
            givenName: "Hammy",
            size: 4,
            diet: "just about everything",
            species: "Groupers",
            harvestLocation: "Jimmy's big boi fishin' spot",
            image: "multifish.jpg"
        },
        {
            givenName: "Tiny",
            size: 1,
            diet: "plankton",
            species: "Blue Chromis",
            harvestLocation: "Young Dan's boat wreck",
            image: "multifish.jpg"
        },
        {
            givenName: "Bart",
            size: 5,
            diet: "crustaceans",
            species: "Clownfish",
            harvestLocation: "Petco",
            image: "multifish.jpg"
        },
        {
            givenName: "Big Mac",
            size: 6,
            diet: "jellyfish",
            species: "Giant sunfish",
            harvestLocation: "Sam's Club Reef",
            image: "multifish.jpg"
        },
        {
            givenName: "Squigle",
            size: 2,
            diet: "smaller fish",
            species: "Moray Eel",
            harvestLocation: "Ole Dan's boat wreck",
            image: "multifish.jpg"
        },
        {
            givenName: "Hammy",
            size: 4,
            diet: "just about everything",
            species: "Groupers",
            harvestLocation: "Jimmy's big boi fishin' spot",
            image: "multifish.jpg"
        },
        {
            givenName: "Tiny",
            size: 1,
            diet: "plankton",
            species: "Blue Chromis",
            harvestLocation: "Young Dan's boat wreck",
            image: "multifish.jpg"
        }
    ] 

    export const useFish = () => {
        return fishCollection.slice()
    }

    export const makeHolyFish = () => {
        const holyArray = [];
        for (const fishObj of fishCollection)
        if (fishObj.size % 3 === 0){
            holyArray.push(fishObj);

            return holyArray;
        }
    }
        // return holyArray;
   
    export const makeSoldierFish = () => {
        const soldierArray = [];
        for (const fishObj of fishCollection)
        if (fishObj.size % 5 === 0 && fishObj.size % 3 !== 0){
        soldierArray.push(fishObj);
        return soldierArray;
        }
    }

        

    export const makeUnHolyFish = () => {
        const unHolyArray = [];
        for (fishObj of fishCollection)
        if (fishObj.size % 5 !== 0 && fishObj.size % 3 !==0){
            unHolyArray.push(fishObj);
            return unHolyArray;
        }
    }
        
    