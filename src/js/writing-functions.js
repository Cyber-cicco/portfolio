const textContainer = document.querySelector('#text-container');
const presentationContainer = document.getElementById("presentation")

const portfolioContent = {
  title: 'Bienvenue.',
  subtitle: 'Mon nom est Abel Ciccoli.',
  description: 'Je suis concepteur et développeur d\'applications fullstack.'
}

export const titleWriting = async () => {
  let i = 0;
  const wrapper = document.createElement('div');
  const titleDiv = document.createElement('h2');
  const cursor = document.createElement('div');
  cursor.id = 'cursor';
  cursor.className = 'bg-white h-8 w-4 self-end';
  titleDiv.id = 'title';
  wrapper.id = 'title-wrapper';
  wrapper.className = 'flex flex-row';
  wrapper.appendChild(titleDiv);
  wrapper.appendChild(cursor);
  textContainer.appendChild(wrapper);
  return new Promise((resolve) => {
    const interval = setInterval(() => {
      if (i < portfolioContent.title.length) {
        titleDiv.innerHTML += portfolioContent.title[i];
        i++;
      } else {
        clearInterval(interval);
        resolve();
      }
    }, 20);
  })
}
export const subtitleWriting = async () => {
  let i = 0;
  const wrapper = document.createElement('div');
  const subtitleDiv = document.createElement('div');
  const cursor = document.createElement('div');
  cursor.id = 'cursor';
  cursor.className = 'bg-white h-8 w-4 self-end';
  subtitleDiv.id = 'subtitle';
  wrapper.appendChild(subtitleDiv);
  wrapper.appendChild(cursor);
  wrapper.id = 'subtitle-wrapper';
  wrapper.className = 'flex flex-row';
  textContainer.appendChild(wrapper);
  return new Promise((resolve) => {
    const interval = setInterval(() => {
      if (i < portfolioContent.subtitle.length) {
        subtitleDiv.innerHTML += portfolioContent.subtitle[i];
        i++;
      } else {
        clearInterval(interval);
        resolve();
      }
    }, 20);
  })
}
export const descriptionWriting = async () => {
  let i = 0;
  const wrapper = document.createElement('div');
  const descriptionDiv = document.createElement('div');
  const cursor = document.createElement('div');
  cursor.id = 'cursor';
  cursor.className = 'bg-white h-8 w-4 self-end';
  descriptionDiv.id = 'description';
  descriptionDiv.className = "text-center";
  wrapper.appendChild(descriptionDiv);
  wrapper.appendChild(cursor);
  wrapper.id = 'description-wrapper';
  wrapper.className = 'flex flex-row';
  textContainer.appendChild(wrapper);
  return new Promise((resolve) => {
    const interval = setInterval(() => {
      if (i < portfolioContent.description.length) {
        descriptionDiv.innerHTML += portfolioContent.description[i];
        i++;
      } else {
        clearInterval(interval);
        presentationContainer.style.opacity = 1;
        presentationContainer.style.transition = "opacity 1s";
        console.log(presentationContainer.style)
        resolve();
      }
    }, 20);
  })
}
