import { titleWriting } from './js/writing-functions.js';
import { cursorBlink, twoSecondCursorBlink } from './js/cursor-functions.js';
import { subtitleWriting } from './js/writing-functions.js';
import { descriptionWriting } from './js/writing-functions.js';


document.onload = async function() {
  await titleWriting();
  await twoSecondCursorBlink();
  await subtitleWriting();
  await twoSecondCursorBlink();
  await descriptionWriting();
  cursorBlink();
}();
