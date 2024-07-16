//Array creation and Intialization
let i=" ";
for(i=0;i<10;i++){
    document.write(i);
}
document.write("<br>")


//Array Manipulation
let fruit=["Apple","Orange","Pineapple"]
document.write(fruit);
document.write("<br>")
//pusp
fruit.push("Grapes");
document.write(fruit)
document.write("<br>")
//pop
fruit.pop();
document.write(fruit)
document.write("<br>")
//shift
fruit.shift();
document.write(fruit)
document.write("<br>")

//Array Searching
let vegtable=["tomato","Onion","greens"]
document.write(vegtable);
document.write("<br>")
//Indexof
document.write(vegtable.indexOf("Onion"));
document.write("<br>")


//Array joining
document.write(vegtable.join("fruit"))
document.write("<br>")

//Array Merging
const ar=fruit.concat(vegtable);
document.write(ar);