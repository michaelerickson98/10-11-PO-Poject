class product{
    constructor(name, cost){
        this.name = name
        this.cost = cost
    }
}

let products = new Map()
products.set(1, new product('Chocolate', 100))
products.set(7, new product('Cracker', 120))

function vendingMachine(products, money, selection){
    let item = products.get(selection)
    const coins = [500, 200, 100, 50, 20, 10]
    if(item==null) return "Enter a valid product number"
    let changeDue = money - item.cost
    let change =[]
    if(changeDue<0) return "Not enough money for this product"
    for(let coin of coins){
        let amountLeft = changeDue%coin
        if(amountLeft != changeDue){
            change.push((changeDue-amountLeft))
            changeDue = amountLeft
        }
    }
    return `{ product: "${item.name}", change: [${change}] }`
}

console.log(vendingMachine(products, 200, 7))
console.log(vendingMachine(products, 500, 0))
console.log(vendingMachine(products, 90, 1))
