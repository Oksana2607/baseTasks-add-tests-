// 1.	Если а – четное посчитать а*б, иначе а+б

describe('calculateMultiplyOrSum', () => {
    const testData = [
        {a: 1, b: 2, expected: 3},
        {a: 2, b: 3, expected: 6},
        {a: 5, b: 4, expected: 9}
    ];

    testData.forEach((data) => {
        const {a, b, expected} = data;
        const actual = calculateMultiplyOrSum(a, b);

        it(`should return ${expected} when a = ${a} and b = ${b}`, () => {
            assert.strictEqual(actual, expected);
        });
    });
});

// 2.	Определить какой четверти принадлежит точка с координатами (х,у)

describe('defineSpotPosition should return number of quarter by coordinates', () => {
    const testData = [
        {x: 1, y: 2, expected: 1},
        {x: -2, y: 3, expected: 2},
        {x: -3, y: -5, expected: 3},
        {x: 4, y: -7, expected: 4},
        {x: 0, y: 10, expected: 'y'},
        {x: 0, y: -10, expected: 'y'},
        {x: -5, y: 0, expected: 'x'},
        {x: 5, y: 0, expected: 'x'},
        {x: 0, y: 0, expected: 0}
    ];

    testData.forEach(params => {
        const {x, y, expected} = params;
        const actual = defineSpotPosition(x, y);

        it(`should return ${expected} when  x = ${x} and y= ${y}`, () => {
            assert.strictEqual(actual, expected);
        });
    });
});

// 3.	Найти суммы только положительных из трех чисел

describe('findSumOfPositiveNumbers should return sum of positive numbers', () => {
    const testData = [
        {a: 1, b: -1, c: 0, expected: 1},
        {a: -1, b: -1, c: -1, expected: 0},
        {a: 2, b: 0, c: 1, expected: 3},
        {a: 0, b: 10, c: -5, expected: 10},
        {a: 15, b: 3, c: 10, expected: 28},
        {a: 0, b: 0, c: 0, expected: 0}
    ];

    testData.forEach(function (data) {
        const {a, b, c, expected} = data;
        const actual = findSumOfPositiveNumbers(a, b, c);

        it(`should return ${expected} when a = ${a} b = ${b} c = ${c}`, () => {
            assert.strictEqual(actual, expected);
        });
    });
});

// 4.	Посчитать выражение макс(а*б*с, а+б+с)+3

describe('calculateMaxMultiplyOrSumPlusThree should return max result', () => {
    const testData = [
        {a: 2, b: 5, c: 8, expected: 83},
        {a: -2, b: 5, c: 8, expected: 14},
        {a: -2, b: -5, c: 8, expected: 83},
        {a: -2, b: -5, c: -8, expected: -12},
        {a: -2, b: 5, c: -8, expected: 83},
        {a: 2, b: 5, c: -8, expected: 2},
        {a: 2, b: -5, c: -8, expected: 83},
        {a: 2, b: -5, c: 8, expected: 8},
        {a: 0, b: 0, c: 0, expected: 3}
    ];

    testData.forEach((data) => {
        const {a, b, c, expected} = data;
        const actual = calculateMaxMultiplyOrSumPlusThree(a, b, c);

        it(`should return ${expected} when a = ${a}, b = ${b}, c = ${c}`, () => {
            assert.strictEqual(actual, expected);
        });
    });
});

// 5.	Написать программу определения оценки студента по его рейтингу,
//  на основе следующих правил

// Рейтинг 	Оценка
// 0-19	F
// 20-39	E
// 40-59	D
// 60-74	C
// 75-89	B
// 90-100	A

describe('defineStudentGrade should return grade', () => {
    const testData = [
        {rate: 0, expected: 'F'},
        {rate: 73, expected: 'C'},
        {rate: 39, expected: 'E'},
        {rate: 45, expected: 'D'},
        {rate: 61, expected: 'C'},
        {rate: 75, expected: 'B'},
        {rate: 100, expected: 'A'}
    ];

    testData.forEach((data) => {
        const {rate, expected} = data;
        const actual = defineStudentGrade(rate);

        it(`should return ${expected} when rate = ${rate}`, () => {
            assert.strictEqual(actual, expected);
        });
    });
});

describe ('throws Error when rate out of range', () => {
    const testData = [ -1, -100, 101, 200 ];

    testData.forEach((data) => {
        it(`should return Grade is out then out of rate`, () => {
            assert.throws(() => {
                defineStudentGrade(data)}, Error, 'Enter valid rate');
        });
    });
});

// 1.	Найти сумму четных чисел и их количество в диапазоне от 1 до 99

describe('findSumAndQuantityOfEvenNumber should return sum and digits of even numbers', () => {
    const testData = [
        {num: 25, expected: [156, 12]},
        {num: 99, expected: [2450, 49]},
        {num: 15, expected: [56, 7]},
        {num: 8, expected: [20, 4]},
        {num: 1, expected: [0, 0]}
    ];

    testData.forEach((data) => {
        const {num, expected} = data;
        const actual = findSumAndQuantityOfEvenNumber(num);

        it(`should return ${expected} when num = ${num}`, () => {
            assert.deepEqual(actual, expected);
        });
    });
});

// 2.	Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)

describe('checkPrimeNumber should return true, if number is prime or false', () => {
    const testData = [
        {num: 7, expected: true},
        {num: 36, expected: false},
        {num: 193, expected: true},
        {num: 195, expected: false},
        {num: 67, expected: true},
        {num: 99, expected: false},
    ];

    testData.forEach((data) => {
        const {num, expected} = data;
        const actual = checkPrimeNumber(num);

        it(`should return ${expected} when num = ${num}`, () => {
            assert.strictEqual(actual, expected);
        });
    });
});

// 3.	Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)

//Метод последовательного подбора

describe('findSquareRootBySequentialSelection should return the root of the number accurate to integer', () => {
    const testData = [
        {num: 1, expected: 1},
        {num: 4, expected: 2},
        {num: 8, expected: 3},
        {num: 9, expected: 3},
        {num: 25, expected: 5},
        {num: 30, expected: 5},
        {num: 90, expected: 9},
        {num: 95, expected: 10}
    ];

    testData.forEach((data) => {
        const {num, expected} = data;
        const actual = findSquareRootBySequentialSelection(num);

        it(`should return ${expected} when num = ${num}`, () => {
            assert.strictEqual(actual, expected);
        });
    });
});

//Метод бинарного поиска

describe('findSquareRootBinarySearch should return the root of the number accurate to integer', () => {
    const testData = [
        {num: 1, expected: 1},
        {num: 4, expected: 2},
        {num: 8, expected: 3},
        {num: 9, expected: 3},
        {num: 25, expected: 5},
        {num: 30, expected: 5},
        {num: 90, expected: 9},
        {num: 95, expected: 10}
    ];

    testData.forEach((data) => {
        const {num, expected} = data;
        const actual = findSquareRootByBinarySearch(num);

        it(`should return ${expected} when num = ${num}`, () => {
            assert.strictEqual(actual, expected);
        });
    });
});

// 4.	Вычислить факториал числа n. n! = 1*2*…*n-1*n;!

describe('findFactorial should return factorial of the number', () => {
    const testData = [
        {num: 5, expected: 120},
        {num: 8, expected: 40320},
        {num: 9, expected: 362880}
    ];

    testData.forEach((data) => {
        const {num, expected} = data;
        const actual = findFactorial(num);

        it(`should return ${expected} when num = ${num}`, () => {
            assert.strictEqual(actual, expected);
        });
    });
});

describe('findFactorialByRecursion should return factorial of number', () => {
    const testData = [
        {num: 5, expected: 120},
        {num: 8, expected: 40320},
        {num: 9, expected: 362880}
    ];

    testData.forEach((data) => {
        const {num, expected} = data;
        const actual = findFactorialByRecursion(num);

        it(`should return ${expected} when num = ${num}`, () => {
            assert.strictEqual(actual, expected);
        });
    });
});

// 5.	Посчитать сумму цифр заданного числа

describe('calculateSumOfNumbers should return sum of digits', () => {
    const testData = [
        {num: -4526, expected: 17},
        {num: 12, expected: 3},
        {num: 8346, expected: 21},
        {num: -6763, expected: 22},
        {num: 0, expected: 0}
    ];

    testData.forEach((data) => {
        const {num, expected} = data;
        const actual = calculateSumOfNumbers(num);

        it(`should return ${expected} when num = ${num}`, () => {
            assert.strictEqual(actual, expected);
        });
    });
});

// 6.Вывести число, которое является зеркальным отображением последовательности цифр заданного числа, например, задано число 123, вывести 321.

describe('reverseNumber should return inverted number', () => {
    const testData = [
        {num: 1234, expected: 4321},
        {num: 50413, expected: 31405},
        {num: -80005, expected: -50008},
        {num: 437, expected: 734},
        {num: 45, expected: 54}
    ];

    testData.forEach((data) => {
        const {num, expected} = data;
        const actual = reverseNumber(num);

        it(`should return ${expected} when num = ${num}`, () => {
            assert.strictEqual(actual, expected);
        });
    });
});

// Одномерные массивы
// 1.	Найти минимальный элемент массива

describe('findMinElement should return min element of array', () => {
    const testData = [
        {arr: [4, 8, 75, 10, 18], expected: 4},
        {arr: [-4, -100, 75, -10, 18], expected: -100},
        {arr: [-4, 100, 95, -36, 18], expected: -36},
        {arr: [0, 85, 99, 7, 6, 0], expected: 0},
        {arr: [25], expected: 25},
        {arr: [], expected: undefined}
    ];

    testData.forEach((data) => {
        const {arr, expected} = data;
        const actual = findMinElement(arr);

        it(`should return ${expected} when arr = ${arr}`, () => {
            assert.deepEqual(actual, expected);
        });
    });
});

// 2.	Найти максимальный элемент массива

describe('findMaxElement should return max element of array', () => {
    const testData = [
        {arr: [4, 8, 75, -10, -18], expected: 75},
        {arr: [-4, -100, 175, -10, 18], expected: 175},
        {arr: [-4, 100, 95, -36, 18], expected: 100},
        {arr: [0, 85, 99, 7, 6, 0], expected: 99},
        {arr: [25], expected: 25},
        {arr: [], expected: undefined}
    ];

    testData.forEach((data) => {
        const {arr, expected} = data;
        const actual = findMaxElement(arr);

        it(`should return ${expected} when arr = ${arr}`, () => {
            assert.deepEqual(actual, expected);
        });
    });
});

// 3.	Найти индекс минимального элемента массива

describe('findIndexOfMinElement should return index of minimal element', () => {
    const testData = [
        {arr: [-4, -8, -75, -10, -18], expected: 2},
        {arr: [-4, -100, 175, -10, 18], expected: 1},
        {arr: [-4, 100, 95, -36, 18], expected: 3},
        {arr: [0, 85, 99, 7, 6, 15], expected: 0},
        {arr: [25], expected: 0},
        {arr: [], expected: undefined}
    ];

    testData.forEach((data) => {
        const {arr, expected} = data;
        const actual = findIndexOfMinElement(arr);

        it(`should return ${expected} when arr = ${arr}`, () => {
            assert.deepEqual(actual, expected);
        });
    });
});

// 4.	Найти индекс максимального элемента массива

describe('findIndexOfMaxElement should return index of maximal element', () => {
    const testData = [
        {arr: [4, 8, 75, -10, -18], expected: 2},
        {arr: [-4, -100, 175, 1000, 18], expected: 3},
        {arr: [-4, 100, 95, -36, 18], expected: 1},
        {arr: [258, 0, 85, 99, 7, 6, 15], expected: 0},
        {arr: [25], expected: 0},
        {arr: [], expected: undefined}
    ];

    testData.forEach((data) => {
        const {arr, expected} = data;
        const actual = findIndexOfMaxElement(arr);

        it(`should return ${expected} when arr = ${arr}`, () => {
            assert.deepEqual(actual, expected);
        });
    });
});

// 5.	Посчитать сумму элементов массива с нечетными индексами

describe('calculateSumOfElementsWithOddIndex should return sum of elements with odd index', () => {
    const testData = [
        {arr: [4, 8, 75, -10, -18], expected: -2},
        {arr: [-4, -100, 175, 1000, 18, 3], expected: 903},
        {arr: [-4, 100, 95, -36, 18, 15, -5, 0], expected: 79},
        {arr: [258, 0, 85, 99, 7, 6, 15], expected: 105},
        {arr: [25], expected: 25},
        {arr: [], expected: undefined}
    ];

    testData.forEach((data) => {
        const {arr, expected} = data;
        const actual = calculateSumOfElementsWithOddIndex(arr);

        it(`should return ${expected} when arr = ${arr}`, () => {
            assert.deepEqual(actual, expected);
        });
    });
});

// 6.	Сделать реверс массива (массив в обратном направлении)

describe('reverseArray should return inverted array', () => {
    const testData = [
        {arr: [4, 8, 75, -10, -18], expected: [-18, -10, 75, 8, 4]},
        {arr: [-4, -100, 175, 1000, 18, 3], expected: [3, 18, 1000, 175, -100, -4]},
        {arr: [-4, 100, 95, -36, 18, 15, -5, 0], expected: [0, -5, 15, 18, -36, 95, 100, -4]},
        {arr: [258, 0, 85, 99, 7, 6, 15], expected: [15, 6, 7, 99, 85, 0, 258]},
        {arr: [25], expected: [25]},
        {arr: [], expected: []}
    ];

    testData.forEach((data) => {
        const {arr, expected} = data;
        const actual = reverseArray(arr);

        it(`should return ${expected} when arr = ${arr}`, () => {
            assert.deepEqual(actual, expected);
        });
    });
});

// 7.	Посчитать количество нечетных элементов массива

describe('calculateQuantityOfOddElements should return number of odd elements of the array', () => {
    const testData = [
        {arr: [4, 8, 75, -10, -18], expected: 1},
        {arr: [-4, -100, 175, 1000, 18, 3], expected: 2},
        {arr: [-4, 100, 95, -36, 18, 15, -5, 0], expected: 3},
        {arr: [258, 0, 85], expected: 1},
        {arr: [], expected: 0},
        {arr: [-42], expected: 0},
        {arr: [45], expected: 1},
        {arr: [1, -18, 10, 25, -34, 58], expected: 2}
    ];

    testData.forEach((data) => {
        const {arr, expected} = data;
        const actual = calculateQuantityOfOddElements(arr);

        it(`should return ${expected} when arr = ${arr}`, () => {
            assert.strictEqual(actual, expected);
        });
    });
});

// 8.	Поменять местами первую и вторую половину массива, например, для массива 1 2 3 4 5, результат 3 4 5 1 2

describe('changeHalfOfArray should return modified half of the array', () => {
    const testData = [
        {arr: [4, 8, 75, -10, -18], expected: [75, -10, -18, 4, 8]},
        {arr: [-4, -100, 175, 1000, 18, 3], expected: [1000, 18, 3, -4, -100, 175]},
        {arr: [-4, 100, 95, -36, 18, 15, -5, 0], expected: [18, 15, -5, 0, -4, 100, 95, -36]},
        {arr: [258, 0, 85], expected: [0, 85, 258]},
        {arr: [45], expected: [45]},
        {arr: [], expected: []}
    ];

    testData.forEach((data) => {
        const {arr, expected} = data;
        const actual = changeHalfOfArray(arr);

        it(`should return ${expected} when arr = ${arr}`, () => {
            assert.deepEqual(actual, expected);
        });
    });
});

// 9.	Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert))

//Сортировка Bubble

describe('sortBubble should return sorted array by bubble', () => {
    const testData = [
        {arr: [4, 8, 75, -10, -18], expected: [-18, -10, 4, 8, 75]},
        {arr: [-4, -100, 175, 1000, 18, 3], expected: [-100, -4, 3, 18, 175, 1000]},
        {arr: [-4, 100, 95, -36, 18, 15, -5, 0], expected: [-36, -5, -4, 0, 15, 18, 95, 100]},
        {arr: [258, 0, 85], expected: [0, 85, 258]},
        {arr: [45], expected: [45]},
        {arr: [], expected: []}
    ];

    testData.forEach((data) => {
        const {arr, expected} = data;
        const actual = sortBubble(arr);

        it(`should return ${expected} when arr = ${arr}`, () => {
            assert.deepEqual(actual, expected);
        });
    });
});

//Сортировка Select

describe('sortSelect should return sorted array by select', () => {
    const testData = [
        {arr: [4, 8, 75, -10, -18], expected: [-18, -10, 4, 8, 75]},
        {arr: [-4, -100, 175, 1000, 18, 3], expected: [-100, -4, 3, 18, 175, 1000]},
        {arr: [-4, 100, 95, -36, 18, 15, -5, 0], expected: [-36, -5, -4, 0, 15, 18, 95, 100]},
        {arr: [258, 0, 85], expected: [0, 85, 258]},
        {arr: [45], expected: [45]},
        {arr: [], expected: []}
    ];

    testData.forEach((data) => {
        const {arr, expected} = data;
        const actual = sortSelect(arr);

        it(`should return ${expected} when arr = ${arr}`, () => {
            assert.deepEqual(actual, expected);
        });
    });
});

//Сортировка Insert

describe('sortInsertion should return sorted array by insertion', () => {
    const testData = [
        {arr: [4, 8, 75, -10, -18], expected: [-18, -10, 4, 8, 75]},
        {arr: [-4, -100, 175, 1000, 18, 3], expected: [-100, -4, 3, 18, 175, 1000]},
        {arr: [-4, 100, 95, -36, 18, 15, -5, 0], expected: [-36, -5, -4, 0, 15, 18, 95, 100]},
        {arr: [258, 0, 85], expected: [0, 85, 258]},
        {arr: [45], expected: [45]},
        {arr: [], expected: []}
    ];

    testData.forEach((data) => {
        const {arr, expected} = data;
        const actual = sortInsertion(arr);

        it(`should return ${expected} when arr = ${arr}`, () => {
            assert.deepEqual(actual, expected);
        });
    });
});

// 10.	Отсортировать массив (Quick, Merge, Shell, Heap)

// Сортировка Quick Sort

describe('sortQuick should return sorted array by quick sort', () => {
    const testData = [
        {arr: [4, 8, 75, -10, -18], expected: [-18, -10, 4, 8, 75]},
        {arr: [-4, -100, 175, 1000, 18, 3], expected: [-100, -4, 3, 18, 175, 1000]},
        {arr: [-4, 100, 95, -36, 18, 15, -5, 0], expected: [-36, -5, -4, 0, 15, 18, 95, 100]},
        {arr: [258, 0, 85], expected: [0, 85, 258]},
        {arr: [45], expected: [45]},
        {arr: [], expected: []}
    ];

    testData.forEach((data) => {
        const {arr, expected} = data;
        const actual = sortQuick(arr);

        it(`should return ${expected} when arr = ${arr}`, () => {
            assert.deepEqual(actual, expected);
        });
    });
});

// Функции

// 1.	Получить строковое название дня недели по номеру дня.

describe('receiveStringWeekDay should return day of the week', () => {
    const testData = [
        {num: 1, expected: 'Sunday'},
        {num: 2, expected: 'Monday'},
        {num: 3, expected: 'Tuesday'},
        {num: 4, expected: 'Wednesday'},
        {num: 5, expected: 'Thursday'},
        {num: 6, expected: 'Friday'},
        {num: 7, expected: 'Saturday'}
    ];

    testData.forEach((data) => {
        const {num, expected} = data;
        const actual = receiveStringWeekDay(num);

        it(`should return ${expected} when num = ${num}`, () => {
            assert.strictEqual(actual, expected);
        });
    });
});

describe('throws error when num is out of range 1 to 7', () => {
    const testData = [-1, 0, 8];

    testData.forEach((data) => {
        it(`should return ${data} is out of range`, () => {
            assert.throws(() => {
                receiveStringWeekDay(data)}, Error, 'There is not such day of the week');
        });
    });
});

// 2.	Найти расстояние между двумя точками в двухмерном декартовом пространстве.

describe('findDistanceBetweenPoints should return distance between two dots', () => {
    const testData = [
        {num1: 1, num2: -1, num3: -5, num4: -4, expected: 7},
        {num1: 15, num2: 0, num3: -5, num4: -8, expected: 22},
        {num1: -6, num2: -8, num3: 16, num4: 15, expected: 32},
        {num1: 5, num2: 10, num3: 15, num4: -8, expected: 21}
    ];

    testData.forEach((data) => {
        const {num1, num2, num3, num4, expected} = data;
        const actual = findDistanceBetweenPoints(num1, num2, num3, num4);

        it(`should return ${expected} when num1 = ${num1}, num2 = ${num2}, num3 = ${num3}, num4 = ${num4}`, () => {
            assert.strictEqual(actual, expected);
        });
    });
});

// Доп. задание

// 0. Найти два наименьших элемента массива

describe('findTwoSmallestEllements should return two minimal elements of array', () => {
    const testData = [
        {array: [], expected: undefined},
        {array: [5], expected: undefined},
        {array: [0, -5, 10, -8, 4], expected: [-8, -5]},
        {array: [2, 5, 1, 9, 7, 3], expected: [1, 2]},
        {array: [-8, -4, -12, -25, -1], expected: [-25, -12]}
    ];

    testData.forEach((data) => {
        const {array, expected} = data;
        const actual = findTwoSmallestEllements(array);

        it(`should return ${expected} when array = ${array}`, () => {
            assert.deepEqual(actual, expected);
        });
    });
});

// 1. Найти среднее арифметическое элементов массива

describe("findAverageOfElements should return average of array's elements", () => {
    const testData = [
        {array: [], expected: undefined},
        {array: [5], expected: 5},
        {array: [0, -5, 10, -8, 4], expected: 0.2},
        {array: [2, 5, 1, 9, 7], expected: 4.8},
        {array: [-8, -4, -12, -25, -1], expected: -10}
    ];

    testData.forEach((data) => {
        const {array, expected} = data;
        const actual = findAverageOfElements(array);

        it(`should return ${expected} when array = ${array}`, () => {
            assert.strictEqual(actual, expected);
        });
    });
});

// 2. Найти максимальные элементы столбцов матрицы

describe('findMaxElementsOfMatrix should return maximal element of matrix', () => {
    const testData = [
        {matrix: [], expected: undefined},
        {matrix: [[2, 7, 4]], expected: [2, 7, 4]},
        {matrix: [[0, -5, 10, -8, 4], [4, 8, 15, 3, 18], [17, 35, -10, 6, -74]], expected: [17, 35, 15, 6, 18]},
        {matrix: [[25, 1, -9, 42, 7], [3, -7, 5, 36, -2], [45, -36, 5, 9, 14]], expected: [45, 1, 5, 42, 14]}
    ];

    testData.forEach((data) => {
        const {matrix, expected} = data;
        const actual = findMaxElementsOfMatrix(matrix);

        it(`should return ${expected} when matrix = ${matrix}`, () => {
            assert.deepEqual(actual, expected);
        });
    });
});

// 3. Разложить положительные и отрицательные элементы по разным массивам

describe('spreadPositiveAndNegativeElementsOfArray should return two arrays: with positive and negative elements', () => {
    const testData = [
        {array: [], expected: [[], []]},
        {array: [5], expected: [[5], []]},
        {array: [5, -3, -2, 0, 14, 85], expected: [[5, 14, 85], [-3, -2, 0]]},
        {array: [-9, 1, -15, 8, -3, -2], expected: [[1, 8], [-9, -15, -3, -2]]}
    ];

    testData.forEach((data) => {
        const {array, expected} = data;
        const actual = spreadPositiveAndNegativeElementsOfArray(array);

        it(`should return ${expected} when array = ${array}`, () => {
            assert.deepEqual(actual, expected);
        });
    });
});

// 4. Представить натуральное число в виде простых сомножителей

describe('presentNumberAsPrimeFactors should return prime number as a multiply of prime factors', () => {
    const testData = [
        {num: 18, expected: [2, 3, 3]},
        {num: 45, expected: [3, 3, 5]},
        {num: 102, expected: [2, 3, 17]},
        {num: 145, expected: [5, 29]},
        {num: 73, expected: [73]}
    ];

    testData.forEach((data) => {
        const {num, expected} = data;
        const actual = presentNumberAsPrimeFactors(num);

        it(`should return ${expected} when num = ${num}`, () => {
            assert.deepEqual(actual, expected);
        });
    });
});

// 5. Посчитать количество простых чисел в массиве

describe('calculatePrimeNumbers should return quantity of prime numbers in array', () => {
    const testData = [
        {array: [], expected: 0},
        {array: [5], expected: 1},
        {array: [5, 3, 2, 14, 85], expected: 3},
        {array: [9, 18, 15, 8, 3, 2], expected: 2}
    ];

    testData.forEach((data) => {
        const {array, expected} = data;
        const actual = calculatePrimeNumbers(array);

        it(`should return ${expected} when array = ${array}`, () => {
            assert.strictEqual(actual, expected);
        });
    });
});

// 6. Посчитать количество вхождений цифры в числе

describe('countNumberOfDigitOccurrence should return quantity of digit in number', () => {
    const testData = [
        {num: 0, expected: undefined},
        {num: 4545, expected: "Number 4545 consists of '4': 2 times; '5': 2 times; "},
        {
            num: 4567456,
            expected: "Number 4567456 consists of '4': 2 times; '5': 2 times; '6': 2 times; '7': 1 times; "
        },
        {
            num: 12345,
            expected: "Number 12345 consists of '1': 1 times; '2': 1 times; '3': 1 times; '4': 1 times; '5': 1 times; "
        }
    ];

    testData.forEach((data) => {
        const {num, expected} = data;
        const actual = countNumberOfDigitOccurrence(num);

        it(`should return ${expected} when num = ${num}`, () => {
            assert.strictEqual(actual, expected);
        });
    });
});

// 7. Определить абсолютное значение разницы сумм диагоналей квадратной матрицы

describe('getDifferenceOfMatrixDiagonals should return difference of matrix diagonals', () => {
    const testData = [
        {matrix: [], expexted: undefined},
        {matrix: [[2, 7], [4, 5]], expected: 4},
        {
            matrix: [[0, -5, 10, -8, 4], [4, 8, 15, 3, 18], [17, 35, -10, 6, -74], [24, 5, -14, 7, -9], [15, 0, -9, 15, 7]],
            expected: 5
        },
        {matrix: [[25, 1, -9, 42], [3, -7, 5, 36], [45, -36, 5, 9], [45, 1, 5, 42]], expected: 9}
    ];

    testData.forEach((data) => {
        const {matrix, expected} = data;
        const actual = getDifferenceOfMatrixDiagonals(matrix);

        it(`should return ${expected} when matrix = ${matrix}`, () => {
            assert.strictEqual(actual, expected);
        });
    });
});

// 8. Определить, принадлежит ли число последовательности Фибоначчи

describe('checkNumberBelongToFibonacci should return true or false', () => {
    const testData = [
        {num: 0, expected: undefined},
        {num: -4, expected: undefined},
        {num: 610, expected: true},
        {num: 9, expected: false},
        {num: 4181, expected: true},
        {num: 234, expected: false}
    ];

    testData.forEach((data) => {
        const {num, expected} = data;
        const actual = checkNumberBelongToFibonacci(num);

        it(`should return ${expected} when num = ${num}`, () => {
            assert.strictEqual(actual, expected);
        });
    });
});

// 9. Напишите функцию, которая принимает список неотрицательных целых чисел, упорядочивает их так,
// чтобы они составляли максимально возможное число. [0, 1, 2, 3] => 3210

describe('receiveMaxNumber should return max number', () => {
    const testData = [
        {array: [], expected: undefined},
        {array: [5], expected: 5},
        {array: [5, 3, 2, 4, 8], expected: 85432},
        {array: [0, 7, 1, 3, 2], expected: 73210},
        {array: [9, 8, 5, 8, 3, 2], expected: 988532}
    ];

    testData.forEach((data) => {
        const {array, expected} = data;
        const actual = receiveMaxNumber(array);

        it(`should return ${expected} when array = ${array}`, () => {
            assert.strictEqual(actual, expected);
        });
    });
});

