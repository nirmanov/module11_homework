
import { getPercents } from "../srs/percents";

describe("Проверка рассчёта процента от числа", () => {
    it("10% от 100 = 10", () => expect(getPercents(10, 100)).toBe(10));
    it("15% от 30 = 4.5", () => expect(getPercents(15, 30)).toBe(4.5));
    it("6% от 70 = 4.2", () => expect(getPercents(6, 70)).toBe(4.2));
    it("0% от 10 = 0", () => expect(getPercents(0, 10)).toBe(0));
    it("-7% от 50 = error", () => expect(getPercents(-7, 50)).toBe("Процент не может быть меньше нуля."));
    it("30% от -90 = error", () => expect(getPercents(30, -90)).toBe("Процент не может быть взят от отрицательного числа."));
    it("120% от 34 = error", () => expect(getPercents(120, 34)).toBe("Процент не может быть больше ста."));
});