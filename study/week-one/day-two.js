const pieces = [
    {
      id: 1,
      name: "Caneca Aurora",
      category: "caneca",
      price: 85,
      stock: 4,
      glaze: "branco",
      available: true
    },
    {
      id: 2,
      name: "Vaso Orgânico",
      category: "vaso",
      price: 120,
      stock: 2,
      glaze: "verde",
      available: true
    },
    {
      id: 3,
      name: "Prato Pétala",
      category: "prato",
      price: 75,
      stock: 0,
      glaze: "azul",
      available: false
    }
  ];
    //Destructuring de objeto 
    //get the first piece and extract name, price and category

    const { name, price, category} =pieces[0]
    // console.log(`the first piece is ${name}, it costs $${price}.00 and it is a ${category}`) 

    //get the name of the first piece, and save it in a variable
    const {name: pieceName} = pieces[0]    
    // console.log(`the first piece is ${pieceName}`)

    const categories = ['caneca', 'vaso', 'prato']
     const [firstCategory, secondCategory, thirdCategory] = categories

    //  console.log(`the first category is ${firstCategory}`)
    //  console.log(`the second category is ${secondCategory}`)
    //  console.log(`the third category is ${thirdCategory}`)

    //Crie um novo array contendo as peças antigas + a nova peça.
    const newPiece = {
      id: 4,
      name: "Caneca Terra",
      category: "caneca",
      price: 90,
      stock: 3,
      glaze: "marrom",
      available: true
    };

    const newPieces = [...pieces, newPiece]
    // console.log('peças atualizadas:', newPieces)
    // console.log(`tamanho da lista de peças original: ${pieces.length}`)
    // console.log(`tamanho da lista de peças atualizadas: ${newPieces.length}`)

    //Change the price of Caneca Aurora to 95, creating a new array with the updated price.

    const updatedPiece = pieces.map((piece) => {
      if (piece.name === "Caneca Aurora") {
        return{
          ...piece,
          price: 95
        }
      }
      return piece
    })

    // console.log(pieces[0].price);
    // console.log(updatedPiece[0].price);

    const updatedPiece2 = pieces.map((piece) => {
      if (piece.name === "Caneca Aurora") {
        return{
          ...piece,
          price: 100,
          stock: 10,
          glaze: "terracota"
        }
      }
      return piece
    })
    // console.log(pieces[0]);
    // console.log(updatedPiece2[0]);

//Crie uma nova versão da primeira peça sem a propriedade available.

const {available, ...newFirstPiece} = pieces[0]
// console.log(newFirstPiece);

// crie uma função que aceite qualquer quantidade de preços - função calcular média

const calculateAverage = (...prices) => {

  if(prices.length === 0) {
    return 0
  } 
  console.log(prices);
  const sum = prices.reduce((acc, price) => acc + price, 0)
  const average = sum / prices.length
  return average

}

// console.log(calculateAverage());

// crie uma funçäo que deve receber uma peça e retornar um novo objeto contendo apenas name, category, price, stock e isAvailable
// isAvailable deve ser calculado assim: true se stock > 0 e false se stock === 0

const createPiceSummary = (piece) => {
  const  {name, category, price, stock} = piece
  const isAvailable = stock > 0 

  return {name, category, price, stock, isAvailable}
}

// console.log(createPiceSummary(pieces[1]))

const applyDiscount = (piecesList, discount) => {
  const piecesDiscounted = piecesList.map((piece) => {
    return{
      ...piece,
      price: piece.price * (1 - discount / 100)
    }
  })

  return piecesDiscounted
}
const appliedDiscount = applyDiscount(pieces, 10)
const beforeAndAfterDiscount = pieces.map(
  (piece, index) => `${piece.name} - $${piece.price} -> $${appliedDiscount[index].price}`
)
// console.log(beforeAndAfterDiscount)