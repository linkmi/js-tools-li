// 数字千分符
export function filterNumberFormat(value, fix = 2) {
    if (!value) {
        let newNum = 0
        newNum = newNum.toFixed(fix)
        return newNum
    }
    if (numberIsNaN(Number(value))) {
        let parts = Number(value).toFixed(fix).toString().split('.')
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        let num = parts.join('.')
        return num
    } else {
        return value
    }
}


function numberIsNaN(value) {
    return typeof value === 'number' && !isNaN(value);
}
// 不四舍五入
export function formatDecimal(num, decimal) {
    num = num.toString()
    let index = num.indexOf('.')
    if (index !== -1) {
        num = num.substring(0, decimal + index + 1)
    } else {
        num = num.substring(0)
    }
    return parseFloat(num).toFixed(decimal)
}