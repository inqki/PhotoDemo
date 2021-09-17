class photo { // class format
    constructor(width = 8, height = 10) { // this is how to write a constructor, this is how we set default values
        this.width = width; // this defines the properties
        this.height = height; // these are the two properties
    }

    price() {
        let finalPrice; // let is another way to write "var" -- better practice

        //if statements/conditions
        if (this.width === 8 && this.height === 10) { // difference between == and === -> === requires that value and the type must be the same, more strict because it checks both the type and the value
            finalPrice = 4;
        } else {
            if (this.width === 10 && this.height === 12){
                finalPrice = 6;
            } else {
                finalPrice = 10;
            }
        } 
            return finalPrice;
    }

    toString() {
        return `This is a ${this.width} by ${this.height} photo and it costs ${this.price()}` // the ` substitutes the "" as used previously
    }  
}

let photo1 = new photo(8, 10);
console.log(photo1.toString());

let photo2 = new photo(20, 30);
console.log(photo2.toString());