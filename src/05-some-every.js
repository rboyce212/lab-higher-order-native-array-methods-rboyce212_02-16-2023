/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleSongData = require("../data/songs");
// Do not change the line above.

/**
 * Returns `true` if every song is over two minutes. Otherwise, return `false`.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {boolean}
 */
function allSongsAreOverTwoMinutes(songs) {
  // I think my variable names almost tell the story better than I could with comments ;)  This one checks for runtimeInSeconds values that are greater than 120 (2 minutes).
  const checkRuntimeInSecondsOverTwoMinutes = songs.every((song) => {
    return song.runtimeInSeconds > 120;
  });
  return checkRuntimeInSecondsOverTwoMinutes;
}

/**
 * Returns `true` if any song is over four minutes. Otherwise, return `false`.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {boolean}
 */
function anySongIsOverFourMinutes(songs) {
  // This one checks for runtimeInSeconds values that are greater than 240 (4 minutes).
  const checkRuntimeInSecondsOverFourMinutes = songs.some((song) => {
    return song.runtimeInSeconds > 240;
  });
  return checkRuntimeInSecondsOverFourMinutes;
}

/**
 * Returns `true` if any song is by the artist "Peanut". Otherwise, return `false`.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {boolean}
 */
function anySongIsByPeanut(songs) {
  // This one check for any thing by the artist "Peanut" and returns a boolean value.
  const songIsByPeanut = songs.some((song) => {
    return song.artist === "Peanut";
  });
  return songIsByPeanut;
}

module.exports = {
  allSongsAreOverTwoMinutes,
  anySongIsOverFourMinutes,
  anySongIsByPeanut
};
