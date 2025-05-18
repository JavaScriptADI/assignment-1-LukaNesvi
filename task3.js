let Text = "Hello World! My Name is Harold";
let TextCost = Text.length;

console.log("Text: " + Text);
console.log("Character coutn: " + TextCost);
console.log("Main cost: " + TextCost + "₾");
console.log("Taxed (10%): " + (TextCost * 0.10) + "₾");
console.log("Total including tax: " + (TextCost * 1.10) + "₾");