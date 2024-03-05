/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length < 1) {
        return [];
    }
    return [numbers[0], numbers[numbers.length - 1]];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const newarray: number[] = [];
    for (let i = 0; i < numbers.length; i++) {
        newarray.push(numbers[i] * 3);
    }
    return newarray;
    //return numbers.map((number) => number * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const arraystring: number[] = [];
    for (let i = 0; i < numbers.length; i++) {
        const num: number = parseInt(numbers[i]);
        if (!isNaN(num)) {
            arraystring.push(num);
        } else {
            arraystring.push(0);
        }
    }
    return arraystring;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] =>
    amounts.map((str) => {
        const numstr = str.startsWith("$") ? str.slice(1) : str;
        const num = parseInt(numstr);
        return isNaN(num) ? 0 : num;
    });

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const newMessages = [...messages];
    const filtered = newMessages.filter((message) => !message.endsWith("?"));
    const final = filtered.map((message) =>
        message.endsWith("!") ? message.toUpperCase() : message
    );
    return final;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    /*let total = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length <= 4) {
            total++;
        }
    }*/
    return words.filter((word) => word.length < 4).length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }
    const validcolore = ["red", "green", "blue"];
    return colors.every((color) => validcolore.includes(color));

    //colors.filter(color => color === "red")
    //return false;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let sum = 0;
    for (let i = 0; i < addends.length; i++) {
        sum += addends[i];
    }
    const numstring: string = addends.join("+");
    return sum + "=" + (numstring || 0);
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(oldValues: number[]): number[] {
    const values = [...oldValues];
    const isNegative = values.some((num: number): boolean => num < 0);
    // reduce filter splice sllice

    const sum = values.reduce(
        (currenttotal: number, num: number) => currenttotal + num,
        0
    );

    /*for (let i = 0; i < values.length; i++) {
        if (values[i] < 0 && !negative) {
            negative = true;
            values.splice(i, 0, sum);
            i++;
        } else {
            sum += values[i];
        }
    }*/
    if (!isNegative) {
        values.push(sum);
        return values;
    } else {
        const negIndex = values.findIndex((num: number): boolean => num < 0);
        const slicedArray = values.slice(0, negIndex);
        const sum = slicedArray.reduce(
            (currenttotal: number, num: number) => currenttotal + num,
            0
        );
        values.splice(negIndex + 1, 0, sum);
        return values;
    }
}
function pow(arg0: number, arg1: number): number {
    throw new Error("Function not implemented.");
}