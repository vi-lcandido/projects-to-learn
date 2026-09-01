const pieces = [
    {
      id: 1,
      name: "Caneca Aurora",
      category: "caneca",
      weight: 200,
      price: 85,
      status: "available",
      sold: 3
    },
    {
      id: 2,
      name: "Vaso Orgânico",
      category: "vaso",
      weight: 450,
      price: 120,
      status: "available",
      sold: 5
    },
    {
      id: 3,
      name: "Prato Pétala",
      category: "prato",
      weight: 320,
      price: 75,
      status: "sold",
      sold: 8
    },
    {
      id: 4,
      name: "Caneca Terra",
      category: "caneca",
      weight: 250,
      price: 90,
      status: "available",
      sold: 2
    },
    {
      id: 5,
      name: "Vaso Lua",
      category: "vaso",
      weight: 600,
      price: 150,
      status: "sold",
      sold: 10
    }
  ];

  // create a new array only with the names of the pieces
  // R: map não altera o array original, ele retonra um novo array com os resultados mapeados e 
  // mantém o tamanho do array original

  const piecesNames = pieces.map((piece) => piece.name)

  //  console.log('pieces name:', piecesNames)

  // find all the pieces that are for sale (give me the complete object)
  // R: filter não altera o array original, retorna um novo array com os resultados filtrados de acordo com a condição

  const forSale = pieces.filter((piece) => piece.status === 'available')

  //  console.log('for sale:', forSale)

  // find the pieces name that have category caneca

  const canecaPieces = pieces.filter((piece) => piece.category === 'caneca').map((piece) => piece.name)
  // console.log('caneca pieces:', canecaPieces)

  // find the piece that have id 3
  // R: find não altera o array original, retorna o primeiro elemento que satisfaz a condição,
  // o filter seleciona todos os elementos que satisfazem a condição

  const pieceId3 = pieces.find((piece) => piece.id === 3)

  //console.log('piece id 3:', pieceId3)

  // find if there is a piece that have value greater than 140 and if there is any piece with category xícara
  // R: some retorna true se pelo menos um elemento do array satisfaz a condição, false caso contrário

  const hasPieceOver140 = pieces.some((piece) => piece.price > 140)
  const isCategoryCup = pieces.some((piece) => piece.category === 'xícara')

  // console.log('has piece over 140:', hasPieceOver140)
  // console.log('is category cup:', isCategoryCup)

  //verify if all the pieces weight less than 1kg and if all the pieces price is less than $100
  // R: every retorna true se todos os elementos do array satisfazem a condição, false caso contrário

  const allLessThan1Kg = pieces.every((piece) => piece.weight < 1000)
  const allLessThan100Price = pieces.every((piece) => piece.price < 100)

  // console.log('all less than 1kg:', allLessThan1Kg)
  // console.log('all less than $100:', allLessThan100Price)

  // calculate the total weight of the pieces
  const totalWeight = pieces.reduce((acc, cur) => acc + cur.weight, 0)

  // console.log(`total weight: ${totalWeight}g`)

  
  
  // calculate the total price of the pieces
  const totalPrice = pieces.reduce((acc, cur) => acc + cur.price, 0)

  // console.log(`total price: $${totalPrice}`)

  // how much would I make if i sold all the pieces available
  const availablePiecesValue = forSale.reduce((acc, cur) => acc + cur.price, 0 )

  // console.log(`if i sold all the pieces available, i would make $${availablePiecesValue}`)

  // order the pieces by price in descending order

  const picesToSort = [...pieces]

  const sortedPiecesByPrice = picesToSort.sort((a,b) => {
    return b.price - a.price
  })

  const nameAndPrice = sortedPiecesByPrice.map((piece) => `${piece.name} - $${piece.price}`)
  // console.log('name and price sorted:', nameAndPrice)
 
  // show total pieces, total weight, total value, total sold, availbele pieces, 
  // solde pieces, most expensive and most sold piece

const getPieceStats =(pieces) => {

  if (!pieces?.length) {
    return {
      totalPieces: 0,
      totalWeight: 0,
      totalValue: 0,
      availablePieces: 0,
      soldPieces: 0,
      mostExpensivePiece: null,
      mostSoldPiece: null
    };
  }

  const totalWeight = pieces.reduce((acc, cur) => acc + cur.weight , 0)
  const totalValue = pieces.reduce((acc, cur) => acc + cur.price, 0)
  const availablePieces = pieces.filter((piece) => piece.status === 'available')
  const soldPieces = pieces.filter((piece) => piece.status === 'sold')
  const mostExpensivePiece = pieces.reduce((mostExpensive, piece) => piece.price > mostExpensive.price ? piece : mostExpensive)
  const mostSoldPiece = pieces.reduce((mostSold, piece) => piece.sold > mostSold.sold ? piece : mostSold)

  return {
  totalPieces: pieces.length,
  totalWeight,
  totalValue,
  availablePieces: availablePieces.length,
  soldPieces: soldPieces.length,
  mostExpensivePiece: mostExpensivePiece.name,
  mostSoldPiece: mostSoldPiece.name,
  }
}

console.log(getPieceStats(pieces))
