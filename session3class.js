// bai1:Viết một đoạn mã cho phép người dùng nhập vào một số n.
//  Tiến hành kiểm tra xem đó có phải là một số nguyên hợp lệ hay không. 
//  Nếu đó là số hợp lệ, 
// tiến hành tính kết quả của biểu thức A = 0 + 1 + 2 + … + n
 
// let n = Number(prompt(" n= "));
// let A = 0;
// if (Number.isInteger(n)===true){
//     console.log("la so nguyen hhop le");
//     if (n>0){
//         for( let i = 1; i<=n; i=i+1){
//             A = A + i;
//         }
//         console.log("A= ",A);
//     }
// }





// bai2:Viết một đoạn mã cho phép người dùng nhập vào một số n. 
// Tiến hành kiểm tra xem đó có phải là một số nguyên hợp lệ hay không.
//  Nếu đó là số hợp lệ, tiến hành tính kết quả của biểu thức B = 1 x 2 x 3 x … x n


// let n = Number(prompt(" n= "));
// let B = 1;
// if (Number.isInteger(n)===true){
//     console.log("la so nguyen hhop le");
//     if (n>0){
//         for( let i = 1; i<=n; i=i+1){
//             B = B *i;
//         }
//         console.log("B= ",B);
//     }
// }





// bai3:Viết một đoạn mã cho phép người dùng nhập vào một số n. 
// Tiến hành kiểm tra xem đó có phải là một số nguyên hợp lệ hay không.
//  Nếu đó là số hợp lệ, tiến hành tính tổng của biểu thức C = 1 + ½ + ⅓ + … + 1/n 


// let n = Number(prompt(" n= "));
// let A = 0;
// if (Number.isInteger(n)===true){
//     console.log("la so nguyen hhop le");
//     if (n>0){
//         for( let i = 1; i<=n; i=i+1){
//             A = A + 1/i;
//         }
//         console.log("A= ",A);
//     }
// }




// // bai4Viết một đoạn mã cho phép người dùng nhập vào một số n. 
// Tiến hành kiểm tra xem đó có phải là một số nguyên hợp lệ hay không. 
// Nếu đó là số hợp lệ, 
// tiến hành tính tổng của biểu thức A = 1 x ½  + ½ x ⅓  + ⅓ x ¼  + … + 1/(n-1) x 1/n


// let n = Number(prompt(" n= "));
// let A = 0;
// if (Number.isInteger(n)===true){
//     console.log("la so nguyen hhop le");
//     if (n>0){
//         for( let i = 1; i<n+1; i=i+1){
//             A = A + (1/(i))*(1/(i+1));
//         }
//         console.log("A= ",A);
//     }
// }




// bai5:

// Viết một đoạn mã cho phép người dùng nhập vào một số n.
//  Tiến hành kiểm tra xem đó có phải là một số hợp lệ hay không.
//   Nếu đó là số hợp lệ, tiến hành in ra bảng cửu chương của số đó từ 1 — 10

// Input: n = 8
// Expected output: 8 x 1 = 8
//               8 x 2 = 16
//   …
//   8 x 10 = 80

// // cach 1
// let n =Number(prompt("n= "));
// if(Number.isInteger(n)){
//     console.log(n,"la so nguyen hop le");
//     if(n>0){
//          for (let i = 1;i<=10;i=i+1){
//         x= n*i;
//         console.log(n + "x" + i+ "= " + x);
//          }
//     }
// }






// // bai6:Viết một đoạn mã cho phép người dùng nhập vào một số n. 
// Tiến hành kiểm tra xem đó có phải là một số hợp lệ hay không.
//  Nếu đó là số hợp lệ, tiến hành in ra màn hình console dãy số fibonacci n phần tử

	// Input: n = 13
	// Expected output: 0, 1, 1, 2, 3, 5, 8, 13, …, 144 (13 số) 
    // parseInt


// let n = parseInt(prompt('Enter the number of terms: '));
// if (Number.isInteger(n)=== true){
//     if(n>=0){
// let n1 = 0, n2 = 1, nextTerm;
// console.log('Fibonacci Series:');
// for (let i = 1; i <= n; i++) {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }
// }else (console.log("so khong hop le"));
// }



// bai 7* 
// // Viết một đoạn mã cho phép người dùng nhập vào một số nguyên dương n. 
// Tiến hành kiểm tra xem đó có phải là một số hợp lệ hay không.
//  Nếu đó là số hợp lệ, tiến hành in ra màn hình console các số từ 0 — n theo dạng chẵn lẻ.

// 	Input: n = 5
// 	Expected output:
// 0 - chẵn
// 	1 - lẻ
// 	2 - chẵn
// 	3 - lẻ
// 	4 - chẵn
	// 5 - lẻ





    // let n = Number(prompt("n = "));


    // if (Number.isInteger(n)){
    //     if(n>0){
    //         console.log(n," la so nguyen duong");
    //         for ( let i= 1; i<= n; i=i+1){
    //             if(i%2===0){
    //                 console.log(i + " la so chan");
    //             }else (console.log(i+ " la so le"));
    //         }
    //     }else{
    //         console.log(" so khong hop le, moi nhap lai ");
    //     }
    // }else{
    // console.log(" so khong hop le, moi nhap lai ");
// }




// bai8/
// Viết một đoạn mã cho phép người dùng nhập vào một số nguyên dương n. 
// Tiến hành kiểm tra xem đó có phải là một số hợp lệ hay không.
//  Nếu đó là số hợp lệ, tiến hành in ra màn hình console các số chẵn trước, sau đó in ra các số lẻ sau

// 	Input: n = 5
// 	Expected output:
// 0 
// 	2 
// 	4 
// 	1 
// 	3 
	// 5


    // let n = Number(prompt( "n ="));
    // if (Number.isInteger(n)===true & n > 0){
    //     console.log(n + " la so nguyen duong");
    //     for (let i = 1; i<=n;i=i+1){
    //         if(i%2===0){
    //             console.log(i);
    //         };
        
    //     }
    //     }
    // else {
    //     console.log(n +" khong phai la so nguyen duong")
    // };
    // if (Number.isInteger(n)===true & n > 0){
        
    //     for (let i = 1; i<=n;i=i+1){
    //         if(i%2!=0){
    //             console.log(i);
    //         };
        
    //     }
    //     }
  


    // // Bai9:Viết một đoạn mã cho phép người dùng nhập vào một số nguyên dương n.
    //  Tiến hành kiểm tra xem đó có phải là một số hợp lệ hay không. 
    //  Nếu đó là số hợp lệ, tiến hành kiểm tra xem số đó có phải là
    //   số nguyên tố hay không và in ra màn hình kết quả

// 	Input: n = 1
// 	Expected output:
// 1 không là số nguyên tố

// 	Input: n = 3
// 	Expected output:
// 3 là số nguyên tố

// let n = Number(prompt("nhap n"));
// let A = 0;
// if (n>0 & Number.isInteger(n)===true){
//     console.log(n +" la so nguyen duong");
//     if (n===1) {
//         console.log(n + " ko phai la so nguyen to");
//     }else {
//         for (let i=2; i< n; i=i+1){
//             if(n%i===0) { 
//                 A = A+1;
                
//             }
            
//             }
//             if (A>0){
//                 console.log(n + " khong phai la so nguyen to");
//             }else {
//                 console.log(n + " la so nguyen to");
//             }

//         }
      
//     }
// else{console.log(n + " khong phai la so nguyen duong, moi nhap lai")};




// bai10:  Viết một đoạn mã cho phép người dùng nhập vào một số nguyên dương n. 
// Tiến hành kiểm tra xem đó có phải là một số hợp lệ hay không. 
// Nếu đó là số hợp lệ, tiến hành in ra màn hình console 
// Một tam giác vuông như sau:


// 10.1:	Input: n = 4
// 	Expected output:
// *
// * *
// * * *
// * * * *

// let n = prompt(" n= ");
// if (Number.isFinite(n)===true & n>0){
//     console.log(n + " la so nguyen duong");
//     for (let i=1; i<= n; i=i +1){

//     }
// }











// 10.2:Một tam giác vuông như sau:

// 	Input: n = 4
// 	Expected output:
// * * * *
// * * *
// * *
// *


// 10:3 Một tam giác vuông như sau:

// 	Input: n = 4
// 	Expected output:
// 1
// 1 2
// 1 2 3
// 1 2 3 4


// 10:4 Một tam giác vuông như sau:

// 	Input: n = 4
// 	Expected output:
// 4 3 2 1
// 4 3 2
// 4 3
// 4

	






