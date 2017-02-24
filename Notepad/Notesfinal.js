function Page(title, text) {
    this.title = title;
    this.text = text;
}

Page.prototype.addText = function (add) {
    if (typeof add === 'string') {
        this.text = this.text.concat(add);
    }
    else {
        console.log("Plis next time enter string");
    }
}

Page.prototype.deleteText = function () {
    this.text = '';

}
Page.prototype.reviewPage = function () {
    if (typeof this.title === "string" && typeof this.text === "string") {
        console.log("Title:" + this.title + "\n" + "Text:" + this.text);
    }
}
function SimpleNotepad(numberOfPage) {
    this.numberOfPage = numberOfPage;
    this.notepad = [];

    for(var i = 0; i < numberOfPage; i++){
        this.notepad.push(new Page("", ""));
    }
}

SimpleNotepad.prototype.validatePageNumber = function (page) {
    if (page >= 0 && page < this.numberOfPage) {
        return true;
    } else {
        console.log("Invalid page number");
        return false;
    }
}

SimpleNotepad.prototype.addTextToPage = function (_text, pageNumber) {
    if (typeof _text === "string" && this.validatePageNumber(pageNumber)) {
        this.notepad[pageNumber].addText(_text);
    }
}

SimpleNotepad.prototype.replaceTextToPage = function (_text, pageNumber) {
    if (typeof _text === "string" && this.validatePageNumber(pageNumber)) {
        this.notepad[pageNumber].text = _text;
    }
}

SimpleNotepad.prototype.deleteTextByPage = function (page) {
    if(page >= 0 && page < this.numberOfPages && this.validatePageNumber(pageNumber))
        this.notepad[page].deleteText();
}   

SimpleNotepad.prototype.printAllPages = function () {
    console.log(this.notepad)
    for (var index = 0; index < this.notepad.length; index++) {
        this.notepad[index].reviewPage();
    }
}


function SecuredNotepad(numberOfPages, password) {
    SimpleNotepad.call(this, numberOfPages);
    this.password = password;
}



SecuredNotepad.prototype = Object.create(SimpleNotepad.prototype);
SecuredNotepad.prototype.constructor = SecuredNotepad;

SecuredNotepad.prototype.validatePassword = function(password){
    if(this.password === password){
        return true;
    } else {
        console.log("incorrect password");        
        return false;
    }
}
SecuredNotepad.prototype.addTextToPage = function (text, pageNumber, password) {
    if(this.validatePassword(password))
        SimpleNotepad.prototype.addTextToPage.call(this, text, pageNumber);
}

SecuredNotepad.prototype.replaceTextToPage = function (text, pageNumber, password) {
    if(this.validatePassword(password))
        SimpleNotepad.prototype.replaceTextToPage,call(this,text,pageNumber);
}

SecuredNotepad.prototype.deleteTextByPage = function (page, password) {
    if(this.validatePassword(password))
        SimpleNotepad.prototype.deleteTextByPage.call(this, page);
}   

SecuredNotepad.prototype.printAllPages = function (password) {
    if(this.validatePassword(password))
        SimpleNotepad.prototype.printAllPages.call(this);
}

SecuredNotepad.prototype.searchWord = function(word, password) {
    if(this.validatePassword(password))
        SimpleNotepad.prototype.searchWord.call(this, word);
}

// var securedNotepad = new SecuredNotepad(3, 'pass');
// console.log(securedNotepad);
// securedNotepad.addTextToPage("meh",0,'pass');
// securedNotepad.printAllPages("pass");
// simpleNotepad.addTextToPage("meh",10);
// simpleNotepad.printAllPages();
// simpleNotepad.replaceTextToPage("mehR",0);
// simpleNotepad.replaceTextToPage("mehR",1);
// simpleNotepad.printAllPages();
// console.log(simpleNotepad);
// simpleNotepad.deleteTextByPage(0);
// simpleNotepad.printAllPages();

Page.prototype.searchWord = function (word) {
    if (this.text.search(word) != -1) {
        console.log("This text contain word: " + word)
    } else {
        console.log("This text dosent contain word:" + word)
    }
}

Page.prototype.containNumbers = function () {
    var containnumber = /\d/;
    if (containnumber.test(this.text)) {
        console.log("This text contain number");
    } else {
        console.log("This text dosen't contain number");
    }
}

SimpleNotepad.prototype.searchWord = function(word) {
    for(var page = 0; page < this.notepad.length; page++){
        if(this.notepad[page].text.search("word") != -1 || this.notepad[page].title.search("word") != -1){
            console.log("This Page contain this word");
            return
        }
    }
    console.log("This Page DOSEN'T contain this word");
}

Page.prototype.printAllPagesWithDigits=function(){
    var containnumber = /\d/;
    for(var page = 0; page < this.notepad.length; page++){
        if(containnumber.test(this.notepad[page].text) || containnumber.test(this.notepad[page].title)){
            this.notepad[page].reviewPage();
        }
    }
}

function ElectronicSecuredNotepad(numberOfPages, password) {
    SecuredNotepad.call(this, numberOfPages, password);
    this.isStarted = false;
}

ElectronicSecuredNotepad.prototype = Object.create(SecuredNotepad.prototype);
ElectronicSecuredNotepad.prototype.constructor = ElectronicSecuredNotepad;



ElectronicSecuredNotepad.prototype.myStart = function(){
    this.isStarted = true;
}

ElectronicSecuredNotepad.prototype.myStop = function(){
    this.isStarted = false;
}

ElectronicSecuredNotepad.prototype.isStarted = function(){
    return this.isStarted;
}

ElectronicSecuredNotepad.prototype.validateStarted = function(){
    if(this.isStarted){
        return true;
    } else {
        console.log("you must start electronic notepad first")
        return false;
    }
}

ElectronicSecuredNotepad.prototype.addTextToPage = function (text, pageNumber, password) {
    if(this.validateStarted())
        SecuredNotepad.prototype.addTextToPage.call(this,text,pageNumber,password);
}

ElectronicSecuredNotepad.prototype.replaceTextToPage = function (text, pageNumber, password) {
    if(this.validateStarted())
        SecuredNotepad.prototype.replaceTextToPage.call(this,text,pageNumber,password);
}

ElectronicSecuredNotepad.prototype.deleteTextByPage = function (page, password) {
    if(this.validateStarted())
        SecuredNotepad.prototype.deleteTextByPage.call(this,page,password);
}   

ElectronicSecuredNotepad.prototype.printAllPages = function (password) {
    if(this.validateStarted())
        SecuredNotepad.prototype.printAllPages.call(this,password);
}

ElectronicSecuredNotepad.prototype.searchWord = function(word, password) {
    if(this.validatePassword())
        SecuredNotepad.prototype.searchWord.call(this,word,password);
}

var e = new ElectronicSecuredNotepad(3, "pass");
console.log(e);
e.myStart();
e.addTextToPage("meh",0,'pass');
e.printAllPages("pass");

