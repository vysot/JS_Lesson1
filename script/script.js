var x = 6;
var y = 14;
var z = 4;

console.log(x += y - x++ * z);
document.write("x += y - x++ * z = " + x + "<br/>");
// 1.постфиксный инкремент возвращает старое значение переменной x (x = 6);
// 2.умножение x++ * z (6*4 = 24);
// 3.вычитание y - x++ * z (14-6*4 = -10);
// 4.присваивание x += y - x++ * z (x += -10) (6+(-10) = -4);
// 5. x = -4.


x = 6;
y = 14;
z = 4;
console.log(z = --x - y * 5);
document.write("z = --x - y * 5 = " + z + "<br/>");
// 1.предекремент возвращает новое значение переменной x (5);
// 2.умножение y * 5 (14 * 5 = 70);
// 3.вычитание --x - y * 5 (5 - 70 = -65);
// 4. z = -65.

x = 6;
y = 14;
z = 4;
console.log(y /= x + 5 % z);
document.write("y /= x + 5 % z = " + y + "<br/>");
// 1.остаток от деления 5 % z (5 % 4 = 1);
// 2.сложение x + 5 % z (6 + 1 = 7);
// 3.присваивание y /= x + 5 % z (y /= 7) (14 / 7 = 2);
// 4. y = 2.

x = 6;
y = 14;
z = 4;
var res = z - x++ + y * 5
console.log(z - x++ + y * 5);
document.write("z - x++ + y * 5 = " + res + "<br/>");
// 1.постфиксный инкремент возвращает старое значение переменной x (x = 6);
// 2.умножение y * 5 (14 * 5 = 70);
// 3.вычитание z - x++ (4 - 6 = -2);
// 4.сложение z - x++ + y * 5 (-2 + 70 = 68);
// 5.результат  = 68.

x = 6;
y = 14;
z = 4;
console.log(x = y - x++ * z);
document.write("x = y - x++ * z = " + x + "<br/>");
// 1.постфиксный инкремент возвращает старое значение переменной x (x = 6);
// 2.умножение x++ * z (6 * 4 = 24);
// 3.вычитание y - x++ * z (14 - 24 = -10);
// 4.x = -10.