
export const cursorBlink = () => {
  const cursor = document.querySelector('#cursor');
  setInterval(() => {
    if (cursor.style.visibility === 'visible') {
      cursor.style.visibility = 'hidden';
    } else {
      cursor.style.visibility = 'visible';
    }
  }, 500);
}

export const transitionCursorBlink = async () => {
  const cursor = document.querySelector('#cursor');
  let i = 0;
  return new Promise((resolve) => {
    const interval = setInterval(() => {
      if (cursor.style.visibility === 'visible') {
        cursor.style.visibility = 'hidden';
      } else {
        cursor.style.visibility = 'visible';
      } if (i === 3) {
        clearInterval(interval);
        document.querySelector('#cursor').remove();
        resolve();
      }
      i++;
    }, 300);

  })
}
