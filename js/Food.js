class Food{

        constructor(){}

        getFoodStock(){

            foodS = database.ref('Food');
            foodS.on( "value" , this.updateFoodStock);
        
        }

        deductFoodStock(){

                if(keyWentDown(UP_ARROW)){

                    foodS = foodS-1;

                }

        }

        updateFoodStock(data){

                FOODS = data.val();

                database.ref('/').update({

                  Food:FOODS

                })
    
        }

}