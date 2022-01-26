/**
 * Prompt
 *
 * Given a time in -hour AM/PM format, convert it to military (24-hour) time.
 * Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
 * - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
 *
 * Example:
 * Return '12:01:00'.
 * Return '00:01:00'.
 *
 */

const s = "12:04:43AM";

function timeConversion(s) {
  const sAsArray = s.split("");
  let hourValue = 0;
  let result = null;

  for (const value of sAsArray) {
    // if PM and NOT 12
    if (sAsArray[8] === "P" && Number(sAsArray[0] + sAsArray[1]) != 12) {
      hourValue = Number(sAsArray[0] + sAsArray[1]) + 12;
      result = `${hourValue}:${sAsArray[3] + sAsArray[4]}:${
        sAsArray[6] + sAsArray[7]
      }`;
    }
    // if AM and NOT 12
    if (sAsArray[8] === "A" && Number(sAsArray[0] + sAsArray[1]) != 12) {
      result = sAsArray.splice(0, 8).join("");
    }
    // if AM and IS 12
    if (sAsArray[8] === "A" && Number(sAsArray[0] + sAsArray[1]) === 12) {
      result = `00:${sAsArray[3] + sAsArray[4]}:${sAsArray[6] + sAsArray[7]}`;
    }
    // if PM and IS 12
    if (sAsArray[8] === "P" && Number(sAsArray[0] + sAsArray[1]) === 12) {
      result = sAsArray.splice(0, 8).join("");
    }
    return result;
  }
}

console.log(timeConversion(s));
