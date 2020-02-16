
//intermediate function
function extend(Child, Parent){
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function HtmlElement(){
    this.click = function(){
        console.log('cliked');
    }
}

HtmlElement.prototype.focus = function(){
    console.log('focused');
}


function HtmlSelectElement(items=[]){
    this.items =items

    this.addItem = function(item){
        this.items.push(item);
    };
    this.removeItem = function(item){
        this.items.splice(this.items.indexOf(items), 1);
    };
    this.render = function(){
        return `
        <select> ${this.items.map(item =>`
        <option>${item}</option>`).join('')}
        <select>`;
    }
};

function HtmlImageElement(src=undefined){
    this.src = src;
    this.render = function(){
        return `<img src="${this.src}" />`; //ES6
    }
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

/* HtmlSelectElement.prototype = Object.create(HtmlElement.prototype);
HtmlSelectElement.prototype.constructor = HtmlSelectElement; */

const html = new HtmlElement();
const select = new HtmlSelectElement();
console.log(select);