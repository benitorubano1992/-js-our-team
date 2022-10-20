console.log("pagina collegata");
const teamMember=[
    {
        name:"Wayne Barnett",
        role:"Founder & CEO	",
        img:"wayne-barnett-founder-ceo.jpg"

    },
    {
        name:"Angela Caroll",
        role:"Chief Editor",
        img:"angela-caroll-chief-editor.jpg "

    },
    {
        name:"Walter Gordon",
        role:"Office Manager",
        img:"walter-gordon-office-manager.jpg"

    },
    {
        name:"Angela Lopez",
        role:"Social Media Manager",
        img:"angela-lopez-social-media-manager.jpg"

    },
    {
        name:"Scott Estrada",
        role:"Developer",
        img:"scott-estrada-developer.jpg"

    },
    {
        name:"Barbara Ramos",
        role:"Graphic Designer",
        img:"barbara-ramos-graphic-designer.jpg"

    },


]
	
console.log(teamMember);
//Milestone 1 Stampare su console le info per ogni oggetto dell'array team Member
for(let member of teamMember){//scorro l'array di opggetti
    
    for(let key in member){//per ciascun oggetto alla volta scorro le sue chiavi e stampo il valore
        console.log(member[key]);
    }
}
//milestone 2 stampare le stesse inforamzioni sottoforma di stringhe sul dom
/*
const ulTeam=document.getElementById("list-member");

for(let member of teamMember){
const liMember=document.createElement("li");
liMember.textContent=member.name;
const ulIntern=document.createElement("ul");
let result=""
for(let key in member){
    if(key !== "name"){
        result+=`<li>${member[key]}</li>`
    }
}       
ulIntern.innerHTML=result;
liMember.append(ulIntern);
ulTeam.append(liMember);
}

*/


//Milestone 3 Bonus

const rowContainer=document.querySelector(".row");
rowContainer.innerHTML=generateHtml(teamMember);



/**
 * funzione che prende un array di oggetti che costruisce un string literal da inserire nell'elemento con class="row"
 * @param{object}un array di oggetti
 * @returns a string literal
 */
function generateHtml(objectArray){
    let result="";
    for(let i=0;i<objectArray.length;i++){
        result+=`  
    <div class=card>    
    <div class="card-image">
        <img src="img/${objectArray[i].img}" alt="${objectArray[i].name} profile pic">
    </div> 
    <div class="card-text">
        <p>${objectArray[i].name}</p>
        <p>${objectArray[i].role}</p>
    </div>
    </div>
    `
}
return result;

}


