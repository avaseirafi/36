class Food{
    constructor(){
        var FoodStock;
    }
    getFoodStock(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", function(data){
            playerCount = data.val();
        })
    }

    updateFoodStock(count){
        database.ref('/').update({
            playerCount: count
        });
    }

    deductFood(name){
        var playerIndex = "player"+playerCount;
        database.ref(playerIndex).set({
            name: name
        });
    }

    display(){
        
    }
}