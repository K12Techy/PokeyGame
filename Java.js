
function PlayCard(){

    
    var P1 = CreatePlayer("Red", "Red.png");
    var Card = CreateCard("Pikachu", 150, 12,10,10, "Pika.png", "Electric") ;  
    var Card2 = CreateCard("Charmander", 160, 15,10,10, "Charmander.png","Fire") ;
    document.getElementById("Card1").innerHTML = Card.Display();
    document.getElementById("Card2").innerHTML = Card2.Display();
    document.getElementById("Player").innerHTML = P1.Display();
    P1.AddCard(Card1);
    P1.AddCard(Card2);
    }
function CreateCard(Name, HP, Attack, Defense, SpecAtk, CardImg, AtkType = "", AtkType2 = ""){
    var Card = {
        "Name" : "",
        "CardImg" : "",
        "BaseHP": 0 ,
        "HP" : 0,
        "BaseSpecAtk":0,
        "SpecAtk" : 0,
        "BaseAttack":0,
        "Attack" : 0,
        "BaseDefense":0,
        "Defense" : 0,
        "Level" : 1,
        "ExpCounter": 0,
        "AtkType" : "",
        "AtkType2" : "",
        // functions for card below

        "Atk1" : function(){
            var Hit = this.Attack *= this.SpecAtk
            return Hit
        },
        "Atk2" : function(){
            var Hit = (Math.round(Math.random() * 3) + this.SpecAtk) *  this.Attack ;
            return Hit;
        },
        "Atk3" : function(){
            this.SpecCalc();
            var Hit = this.SpecAtk + this.Attack ;
            return Hit;

            
        },
        "SpecCalc":function(){
            var Spec = 0;
            if (this.AtkType == "Water" || this.AtkType2 == "Water"){
                this.HP += 30;
                //Heals 30 hp with one attack
            }
            else if (this.AtkType == "Fire" || this.AtkType2 == "Fire"){
                Spec = ( this.Attack += 10, this.SpecAtk + 1);
                this.HP -= 10;
                return Spec;
                //Increases special attack counter and Attack but reduces hp
            }
            else if (this.AtkType == "Grass" || this.AtkType == "Grass"){
                Spec = this.BaseHP += 3;
                return Spec;
                //Increases base Hp with each attack
            }
            else if (this.AtkType == "Electric" || this.AtkType == "Electric"){
                Spec = (this.HP += 10, this.SpecAtk =.5);
                return Spec;
                //Increases special attack counter with hp increase
            }
            else if (this.AtkType == "Ice" ||  this.AtkType2 == "Ice"){
                Spec = this.ExpCounter += .3;
                return Spec;
                //Increases Exp with each attack
            }
            else if(this.AtkType == "Fighting" || this.AtkType2 == "Fighting"){
                Spec = this.Attack += 5;
                return Spec;
                //Increases attack for this battle
            }
            else if (this.AtkType == "Poison" || this.AtkType2 == "Poison"){
                Spec += 1;
                if (Spec = 1){
                    Defender.BaseHP - (Defender.BaseHP * .05);
                }
                else if (Spec = 2){
                    Defender.BaseHP - (Defender.BaseHP * .10);
                }
                else if (Spec >= 3){
                    Defender.BaseHP - (Defender.BaseHP * .3);
                    
                }
                return Spec;
                //Adds a "Poison counter" to Spec value, as the spec value increases the defenders hp is reduced by a percent of their Base hp
            }
            else if(this.AtkType == "Ground" || this.AtkType2 == "Ground"){
                Spec = this.BaseDefense += 2;
                return Spec;
                //Increases base defense for each attack
            }
            else if (this.AtkType == "Flying" || this.AtkType2 == "Flying"){
                Spec = (this.Attack += 1, this.Defense += 1, this.SpecAtk + .5);
                return Spec;
            //Increases attack defense and special attack with each attack
            }
            else if(this.AtkType == "Psychic" || this.AtkType2 == "Psychic"){
                Spec = this.SpecAtk += 3;
                return Spec;
            //Increases Spec Attack without adverse effects
            }
            
            else if (this.AtkType == "Bug" || this.AtkType == "Bug"){
                Spec = (this.HP += 30);
                return Spec;
                //drains HP from enemy
            }
            else if(this.AtkType == "Rock" || this.AtkType2 == "Rock"){
                Spec = (this.Defense += 20, this.HP += 5);
                return Spec;
                //increases defense and slighty restores hp
            }
            else if(this.AtkType == "Ghost" || this.AtkType2 == "Ghost"){
                Spec = (this.SpecAtk += 2, this.HP += 20);
                return Spec;
                //raises special attack and restores hp
            }
            else if(this.AtkType == "Dragon" || this.AtkType2 == "Dragon"){
                Spec = (this.BaseHP += 5, this.BaseAttack += 2, this.BaseDefense += 2, this.ExpCounter+=1);
                return Spec;
                //raises all base stats and exp
            }
            else if(this.AtkType == "Dark" || this.AtkType2 == "Dark"){
                Spec = (this.SpecAtk += 1, this.Attack += 10, this.Defense += 10);
                return Spec;
                // rases special attack, regular attack, and defense for the battle
            }
            else if(this.AtkType == "Steel" || this.AtkType2 == "Steel"){
                spec = (this.Defense += 15, this.Attack += 15);
                return Spec;
                // Raises attack and defense for the battle
            }
        }
        ,
        "Display" : function(){
        var OutputString = '<div class="card" style="width: 18rem;">';
        OutputString += '<img src="./img/' + this.CardImg + '" class="card-img-top" alt="...">' ;
        OutputString += '<div class="card-body">' ;
        OutputString += '<p class="card-title"> <strong style="font-size:1.5em">'+ this.Name + '</strong> Level: ' + this.Level +'</p>' ;
        OutputString += '<p class="card-text"> Class:  '+ this.AtkType +'</p>' ;
        OutputString += '<p class="card-text">HP: '+ this.HP + '</p>' ;
        OutputString += '</div> </div>' ;
            return OutputString;
            
        }
    }

    Card.Name = Name;
    Card.BaseHP = Card.HP = HP;
    Card.BaseAttack = Card.Attack = Attack;
    Card.BaseDefense = Card.Defense = Defense;
    Card.BaseSpecAtk = Card.SpecAtk = SpecAtk;
    Card.CardImg = CardImg ;
    Card.AtkType = AtkType ;
    Card.AtkType2 = AtkType2;
    return Card;
}

function CreatePlayer(Name, PlayerImg){

    var Player = {
        "Name":"",
        "Deck" : [],
        "Img" : "",
        "PlayCard" : function(){
            if(this.Deck.length == 0){
                return 0;
            }
            else{
                var item = Math.round(Math.random * (this.Deck.length -1));
                return this.Deck.slice(item,1);
            }

        },
        "Display" : function(){
                var OutputString = '<div class="card" style="width: 18rem;">';
                OutputString += '<img src="./img/' + this.Img + '" class="card-img-top" alt="..." style = "height:150px; width:120">' ;
                OutputString += '<div class="card-body">' ;
                OutputString += '<p class="card-title"> <strong style="font-size:1.5em">'+ this.Name +  '</p>' ;
                OutputString += '<p class="card-text"> Class:  </p>' ;
                OutputString += '<p class="card-text">HP: </p>' ;
                OutputString += '</div> </div>' ;
                    return OutputString;

        },
        "AddCard" : function(Card){
            this.Deck.push(Card);

        }
    }
    Player.Img = PlayerImg
    Player.Name = Name;
    return Player;
    
}



//Testing Function 
//var C1 = CreateCard("Squirtle", 150, 15, 16, 2, "Squirtle.png", "Water");
//var Hit = C1.Atk3();
//
//document.getElementById("test").innerHTML =  C1.HP;