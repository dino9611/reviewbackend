try {
    console.loog('dfsfs')
} catch (error) {
    // if (error) throw error
    // console.log('masuk catch')
    // console.log(error)
}
// console.log('tes')

var bisa='genap'

var fakhran=[,
    {
        dzaky:()=>{
            return {
                idham:[()=>{
                    return [,(param)=>{
                        if(param){
                            return{genap:'tari'}
                        }else{
                            return{genap:'tika'}
                        }
                    }]
                }]
            }
        }
    }
]

console.log(fakhran[1].dzaky()['idham'][0]()[1](false)['genap'])
console.log(fakhran[1].dzaky()['idham'][0]()[1](true)[bisa])
//tika
// fakhran[1].dzaky()['idham'][0]()[1](true)[bisa]//tari








// const a=[2,1,1]
// var b={}
// for(var i=0;i<a.length;i++){
//     b={...b,[i]:0}
//     for(var j=0;j<a.length;j++){
//         if(a[i]==a[j]){
//             b={...b,[i]:b[i]+1}
//         }
//     }
// }
// console.log(b)
// var hasil
// for (const key in b) {
//     if(b[key]===1){
//         hasil=a[key]
//     }
// }
// console.log(hasil)


var arr =[1,2,3]
var [tiga]=arr

console.log(tiga)

