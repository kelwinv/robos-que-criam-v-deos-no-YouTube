import { videoMakerDatesType } from './types';

import * as robots from './robots'



function start() {
  const videoMakerDates = {} as videoMakerDatesType;

  robots.userInput.selectAndReturnLanguage(videoMakerDates)
  robots.userInput.askAndReturnSearchTerm(videoMakerDates)
  robots.userInput.askAndReturnPrefix(videoMakerDates)

  console.log(videoMakerDates)
}

start();
