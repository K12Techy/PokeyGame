function CardBattle(PlayerCard, CompCard){
PlayerCard = SpecAtkCalc(PlayerCard, CompCard);
CompCard = SpecAtkCalc(CompCard,PlayerCard);
    
PlayerCard, CompCard = CardAttack(PlayerCard, CompCard, "WeakPhy")

CompCard, PlayerCard = CardAttack(CompCard, PlayerCard, "Strong Psy")
}
function CardAttack(Attacker, Defender, SelectedAtk){
    
return Attacker, Defender;
}


function SpecAtkCalc(Card1, Card2){
    

    if (Card1.AtkType != "" && Card2.AtkType != "") {
        Card1.SpecAtk = 1;
    switch (Card1.AtkType){
        case "Normal":
            if (Card2.AtkType == "Rock" || Card2.AtkType == "Steel" ) {
                Card1.SpecAtk = .5;
            }
        break;
        case "Fire" :
            if (Card2.AtkType == "Water" || Card2.AtkType == "Ground" || Card2.AtkType == "Rock"){
                Card1.SpecAtk = .5;
            }
            else if (Card2.AtkType == "Grass" || Card2.AtkType == "Ice" || Card2.AtkType == "Bug" || Card2.AtkType == "Steel"){
                Card1.SpecAtk = 1.5;
            }
        break;
        case "Water" :
            if (Card2.AtkType == "Fire" || Card2.AtkType == "Rock" || Card2.AtkType == "Ground") {
                Card1.SpecAtk = 1.5;        
            }
            else if(Card2.AtkType == "Grass" || Card2.AtkType == "Dragon") {
                Card1.SpecAtk = .5;
            }
        break;
        case "Grass" :
            if (Card2.AtkType == "Fire" || Card2.AtkType == "Flying" || Card2.AtkType == "Bug" || Card2.AtkType == "Dragon" || Card2.AtkType == "Steel"){
                Card1.SpecAtk = .5;
            }
            else if (Card2.Atktype == "Water" || Card2.AtkType == "Ground" || Card2.AtkType == "Rock"){
                Card1.SpecAtk = 1.5;
            }
        break;
        case "Electric":
            if (Card2.AtkType == "Water" || Card2.AtkType == "Flying" ){
                Card1.SpecAtk = 1.5;
            }
            else if (Card2.AtkType == "Grass" || Card2.AtkType == "Ground" || Card2.AtkType == "Dragon"){
                Card1.SpecAtk = .5;
            }
        break;
        case "Ice":
            if (Card2.AtkType == "Fire" || Card2.AtkType == "Ice" || Card2.AtkType == "Steel"){
                Card1.SpecAtk = .5;
            }
            else if (Card2.AtkType == "Grass" || Card2.AtkType == "Fighting" || Card2.AtkType == "Ground" || Card2.AtkType == "Flying" || Card2.AtkType == "Dragon"){
                Card1.SpecAtk = 1.5;
            }
        break;
        case "Fighting":
            if (Card2.AtkType == "Normal" || Card2.AtkType == "Ground" || Card2.AtkType == "Rock" || Card2.AtkType == "Steel" || Card2.AtkType == "Dark" ){
                Card1.SpecAtk = 1.5;
            }
            else if (Card2.AtkType == "Ice" || Card2.AtkType == "Flying" || Card2.AtkType == "Psychic" || Card2.AtkType == "Bug" ){
                Card1.SpecAtk = .5;
            }
        break;
        case "Poison":
            if(Card2.AtkType == "Poison" || Card2.AtkType == "Ground" || Card2.AtkType == "Rock" || Card2.AtkType == "Ghost" || Card2.AtkType == "Steel" ){
                Card1.SpecAtk = .5;
            }
            else if(Card2.AtkType == "Grass" || Card2.AtkType == "Fighting" ||Card2.AtkType == "Bug" ){
                Card1.SpecAtk = 1.5;
            }
        break;
        case "Ground":
            if (Card2.AtkType == "Fire" || Card2.AtkType == "Electric" || Card2.AtkType == "Rock" || Card2.AtkType == "Steel" ){
                Card1.SpecAtk = 1.5;
            }
            else if (Card2.AtkType == "Grass" || Card2.AtkType == "Fighting" || Card2.AtkType == "Flying" || Card2.AtkType == "Bug" ){
                Card1.SpecAtk = .5;
            }
        break;
        case "Flying":
            if(Card2.AtkType == "Grass" || Card2.AtkType == "Fighting" || Card2.AtkType == "Bug" ){
                Card1.SpecAtk = 1.5;
            }
            else if(Card2.AtkType == "Electric" || Card2.AtkType == "Ice" || Card2.AtkType == "Rock" || Card2.AtkType == "Steel" ){
                Card1.SpecAtk = .5;
            }
        break;
        case "Psychic":
            if(Card2.AtkType == "Fighting" || Card2.AtkType == "Poison" || Card2.AtkType == "Ghost" ){
                Card1.SpecAtk = 1.5;
            }
            else if(Card2.AtkType == "Psychic" || Card2.AtkType == "Dark" ){
                Card1.SpecAtk = .5;
            }
        break;
        case "Bug" :
            if(Card2.AtkType == "Fire" || Card2.AtkType == "Fighting" || Card2.AtkType == "Ice" || Card2.AtkType == "Flying" || Card2.AtkType == "Rock" || Card2.AtkType == "Dragon" || Card2.AtkType == "Steel" ){
                Card1.SpecAtk =.5;
            }
            else if (Card2.AtkType == "Normal" ||Card2.AtkType == "Grass" ||Card2.AtkType == "Ground" ||Card2.AtkType == "Dark" ){
                Card1.SpecAtk = 1.5;
            }
        break;
        case "Rock" :
            if(Card2.AtkType == "Fire" || Card2.AtkType == "Ice" || Card2.AtkType == "Flying" || Card2.AtkType == "Bug"  ){
                Card1.SpecAtk = 1.5;
            }
            else if (Card2.AtkType == "Fighting" || Card2.AtkType == "Ground" || Card2.AtkType == "Steel" ) {
                Card1.SpecAtk = .5;
            }
        break;
        case "Ghost" :
            if(Card2.AtkType == "Dark" || Card2.AtkType == "Psychic" || Card2.AtkType == "Fighting" || Card2.AtkType == "Ghost" ){
                Card1.SpecAtk = 1.5;
            }
            else if(Card2.AtkType == "Normal" ||  Card2.AtkType == "Steel" ){
                Card1.SpecAtk = .5;
            }
        break;
        case "Dragon" :
            if(Card2.AtkType == "Normal" || Card2.AtkType == "Fire" || Card2.AtkType == "Water" || Card2.AtkType == "Grass" || Card2.AtkType == "Electric" || Card2.AtkType == "Fighting" || Card2.AtkType == "Poison" || Card2.AtkType == "Ground" || Card2.AtkType == "Flying" || Card2.AtkType == "Psychic" || Card2.AtkType == "Bug" ||Card2.AtkType == "Rock" ||Card2.AtkType == "Ghost" ||Card2.AtkType == "Dark" ||Card2.AtkType == "Steel" ){
                Card1.SpecAtk = 1.3;
            }
            else if(Card2.AtkType == "Ice"){
                Card1.SpecAtk = .5;
            }
            else if(Card2.AtkType == "Dragon"){
                Card1.SpecAtk = 1.5;
            }
        break;
        case "Dark" :
            if(Card2.AtkType == "Fighting" || Card2.AtkType == "Poison" || Card2.AtkType == "Bug" || Card2.AtkType == "Steel" ){
                Card1.SpecAtk = .5;
            }
            else if(Card2.AtkType == "Psychic") {
                Card1.SpecAtk = 1.5;
            }
        break;
        case "Steel" :
            if(Card2.AtkType == "Fire" || Card2.AtkType == "Water" || Card2.AtkType == "Electric" || Card2.AtkType == "Fighting" ){
                Card1.SpecAtk = .5;
            }
            else if(Card2.AtkType == "Ice" || Card2.AtkType == "Ground" || Card2.AtkType == "Rock" ){
                Card1.SpecAtk = 1.5;
            }
        break;
    
    
    }
    }
return Card1;
}