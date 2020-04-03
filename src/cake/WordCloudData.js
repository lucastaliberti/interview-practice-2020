export class WordCloudData {
  constructor(inputString) {
    this.wordsToCounts = new Map();
    this.populateWordsToCounts(inputString);
  }

  populateWordsToCounts(inputString) {
    const stringArray = inputString
      .replace(/[^\w\s'.-]/g, "")
      .replace(/\s-\s|\.+/g, " ")
      .split(" ");

    // Count the frequency of each word
    for (const word of stringArray) {
      if (!word || word === "") {
        continue;
      }

      if (this.wordsToCounts.has(word)) {
        this.wordsToCounts.set(word, this.wordsToCounts.get(word) + 1);
        continue;
      }

      const capitalizedWord = this.capitalize(word);
      if (this.wordsToCounts.has(capitalizedWord)) {
        this.wordsToCounts.set(
          word,
          this.wordsToCounts.get(capitalizedWord) + 1
        );
        this.wordsToCounts.delete(capitalizedWord);
        continue;
      }

      const loweredWord = word.toLowerCase(word);
      if (this.wordsToCounts.has(loweredWord)) {
        this.wordsToCounts.set(word, this.wordsToCounts.get(loweredWord) + 1);
        this.wordsToCounts.delete(loweredWord);
        continue;
      }

      this.wordsToCounts.set(word, 1);
    }
  }

  capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
}
