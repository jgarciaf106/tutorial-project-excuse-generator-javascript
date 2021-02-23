function excuseGenerator(){
    let who = ['The dog','My grandma','His turtle','My bird'];
    let action = ['ate','peed','crushed','broke'];
    let what = ['my homework', 'the keys', 'the car'];
    let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];
    
    let showOnPage = document.getElementById("excuse");
    let excuse = "";
    let chooseWho = Math.floor((Math.random() * who.length) + 0);
    let chooseAction = Math.floor((Math.random() * action.length) + 0);
    let chooseWhat = Math.floor((Math.random() * what.length) + 0);
    let chooseWhen = Math.floor((Math.random() * when.length) + 0);

    excuse = who[chooseWho] + " " + action[chooseAction] + " " + what[chooseWhat] + " " + when[chooseWhen];

    return showOnPage.innerHTML = excuse;
}

excuseGenerator();