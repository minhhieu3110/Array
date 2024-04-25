let arrNum = []

function input_array(){
    let num = parseInt(document.getElementById('pt').value)
    for (let i = 0; i < num; i++) {
        let pt = +prompt("Nhập phần tử thứ: "+i)
        arrNum.push(pt)

    }
    document.getElementById('array').innerHTML = "Mảng vừa nhập vào là: "+arrNum
    return arrNum;

}
function findmin(){
    let min = arrNum[0]
    for (let i = 1; i < arrNum.length; i++) {
        if (min > arrNum[i]) {
            min = arrNum[i]
        }
    }
    document.getElementById('min').innerHTML = "Giá trị nhỏ nhất trong mảng trên là: "+min
}
function findmineven(){
    let min = arrNum[0]
    for (let i = 1; i < arrNum.length; i++) {
        if ( arrNum[i] % 2 == 0){
            if (min > arrNum[i]) {
                min = arrNum[i]
            }
        }

    }
    document.getElementById('mineven').innerHTML = "Giá trị nhỏ nhất của các phần tử chẵn trong mảng trên là: "+min

}
function findmax_2(){
    let max1 = arrNum[0]
    let max2 = arrNum[0]
    for (let i = 1; i < arrNum.length; i++) {
        if (max1 < arrNum[i]) {
            max1 = arrNum[i]
        }

    }
    for (let i = 1; i < arrNum.length; i++) {
        if (max2 < arrNum[i] && arrNum[i] != max1) {
            max2 = arrNum[i]
        }
    }

    document.getElementById('max_2').innerHTML = "Giá trị lớn nhất thứ 2 trong mảng trên là: "+max2
}
function check(){
    let kq = ""
    for (let i = 1; i < arrNum.length; i++) {
        if(arrNum[i] < arrNum[i-1]){
            kq = "Mảng không luôn tăng dần"
        }else {
            kq = "Mảng luôn tăng dần"
        }
    }
    document.getElementById('kq').innerHTML = kq
}