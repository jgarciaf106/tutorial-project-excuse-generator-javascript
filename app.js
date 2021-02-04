function excuseGenerator(){
    let who = ['The dog','My grandma','His turtle','My bird'];
    let action = ['ate','peed','crushed','broke'];
    let what = ['my homework', 'the keys', 'the car'];
    let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];
    
    let showOnPage = document.getElementById("excuse");
    let excuse = "";
    let chooseWho = Math.floor((Math.random() * 3) + 0);
    let chooseAction = Math.floor((Math.random() * 3) + 0);
    let chooseWhat = Math.floor((Math.random() * 2) + 0);
    let chooseWhen = Math.floor((Math.random() * 4) + 0);

    excuse = who[chooseWho] + " " + action[chooseAction] + " " + what[chooseWhat] + " " + when[chooseWhen];

    return showOnPage.innerHTML = excuse;
}

console.log(excuseGenerator());