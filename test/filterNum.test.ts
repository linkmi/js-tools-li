import { describe, test, expect } from "@jest/globals";

import {filterNumberFormat,formatDecimal} from '../src/index'

describe("expect", () => {
    it("两位小数", () => {
        expect(filterNumberFormat(2)).toBe('2.00')
    });
    it("一位小数", () => {
        expect(filterNumberFormat(2,1)).toBe('2.0')
    });
    it("千分符", () => {
        expect(filterNumberFormat(2123)).toBe('2,123.00')
    });
    it("保留两位无千分符", () => {
        expect(filterNumberFormat(212)).toBe('212.00')
    });
    
    it("不四舍五入,默认两位小数", () => {
        expect(formatDecimal(212.3652)).toBe('212.36')
    });
    it("不四舍五入,一位小数", () => {
        expect(formatDecimal(212.3652,1)).toBe('212.3')
    });
    it("不四舍五入,无精确度", () => {
        expect(formatDecimal(212.8652,0)).toBe('212')
    });
  });
  