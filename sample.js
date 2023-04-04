//以下再宣言


// varによる再宣言
// var nickname = "taro"
// console.log(nickname)
// var nickname = "ichiro"
// console.log(nickname)


// letによる再宣言　再宣言できない
// let nickname = "taro"
// console.log(nickname)
// let nickname = "ichiro"
// console.log(nickname)


// constによる再宣言　再宣言できない
// const nickname = "taro"
// console.log(nickname)
// const nickname = "ichiro"
// console.log(nickname)


//以下再代入


//varによる再代入
// var nickname = "taro"
// console.log(nickname)
// nickname = "jiro"
// console.log(nickname)


//letによる再代入
// let nickname = "taro"
// console.log(nickname)
// nickname = "jiro"
// console.log(nickname)


//constによる再代入 再代入できない
// const nickname = "taro"
// console.log(nickname)
// nickname = "jiro"
// console.log(nickname)


//varのスコープ

// var str = "webcamp" //グローバルスコープ

// function foo() {
//   console.log(str)
//   var y = "hello" //関数スコープ
// }

// foo()
// console.log(y) //関数スコープなので関数外からyは参照できない


//letのスコープ

// function foo() {
//   let x = "webcamp"
//   {
//     let y = "hello webcamp"
//   }
//   console.log(x)
//   console.log(y)
// }

// foo()  //変数yはブロック外から参照したためエラー

// for (let i = 0; i < 10; i++) {
//   console.log(i)
// }

// console.log(i)  //変数iは()のブロック外から参照したためエラー


//巻き上げ
var str = "webcamp"

function foo() {
  console.log(str)
  var str = "dmm webcamp"
  console.log(str)
}

foo()