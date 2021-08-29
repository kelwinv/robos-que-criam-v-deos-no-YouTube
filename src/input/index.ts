import readLine from "readline-sync";

import { videoMakerDatesType } from "../types";

const allSupportedLanguages = ["pt-br", "en"];

const askAndReturnSearchTermText = {
  "pt-br": "digite um termo de pesquisa da Wikipedia: ",
  en: "type a wikipedia search term: ",
};

const askAndReturnPrefixText = {
  "pt-br": "Escolha o prefixo",
  en: "choose the prefix",
};

const prefixesAll = {
  "pt-br": ["Quem é", "Oque é", "A historia de"],
  en: ["Who is", "What is", "The history of"],
};

function selectAndReturnLanguage(videoMakerDates: videoMakerDatesType) {
  const languageIndex = readLine.keyInSelect(
    allSupportedLanguages,
    "select your language: "
  );

  return (videoMakerDates.language = allSupportedLanguages[languageIndex]);
}

function askAndReturnSearchTerm(videoMakerDates: videoMakerDatesType) {
  const searchTerm = readLine.question(
    askAndReturnSearchTermText[videoMakerDates.language]
  );

  return (videoMakerDates.searchTerm = searchTerm);
}

function askAndReturnPrefix(videoMakerDates: videoMakerDatesType) {
  const language = videoMakerDates.language;
  const prefixes = prefixesAll[language];
  const text = askAndReturnPrefixText[language]

  console.log(text)

  const selectedPrefixIndex = readLine.keyInSelect(
    prefixes.map((prefixes) => `${prefixes} ${videoMakerDates.searchTerm}`),
    text
  );

  return (videoMakerDates.prefixes = prefixes[selectedPrefixIndex]);
}

export const userInput = {
  askAndReturnSearchTerm,
  selectAndReturnLanguage,
  askAndReturnPrefix,
};
