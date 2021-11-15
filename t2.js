function Voiture(brand, model) {
    if(this instanceof Voiture) {
            
    }
    return new {brand, 
               model}
}

var v = Voiture("Ford", "Focus");
console.log(v);
