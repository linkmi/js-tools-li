//有效数字类型
export function numberIsNaN(value:unknown) {
    return typeof value === 'number' && !isNaN(value);
}