import {numberIsNaN} from './utils/utils'


// 数字千分符
export function filterNumberFormat(value:number, fix:number = 2):string {
    if (!value) {
        let newNum:string = '0'
        return newNum
    }
    if (numberIsNaN(Number(value))) {
        let parts = Number(value).toFixed(fix).toString().split('.')
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        let num = parts.join('.')
        return num
    } else {
        return String(value)
    }
}



// 不四舍五入 decimal：精确度
export function formatDecimal(num:number, decimal:number = 2):string {
   let newNum:string = num.toString()
    let index = newNum.indexOf('.')
    if (index !== -1) {
        newNum = newNum.substring(0, decimal + index + 1)
    } else {
        newNum = newNum.substring(0)
    }
    return parseFloat(newNum).toFixed(decimal)
}