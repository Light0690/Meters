import SplitType from 'split-type';

/**
 * Заменяет &nbsp; на text обьедененный в span
 * @param { target } <NodeList || HTMLElement>
 * @returns { string } text&nbsp;text -> <span>texttext</span>
 */
const getNonDividingSpace = (target: Object) => {
  const titles = NodeList.prototype.isPrototypeOf(target) ? [...target] : [target];

  titles.forEach((title) => {
    /**
     * Возможно стоит рассмотреть вариант на RegEx
     * ? - Стоит обратить внимание, что splitType дополнительно оборачивает span в span
     */
    let correctTitle = title.innerHTML
      .split(' ')
      .map((text: string) => {
        return /&nbsp;/g.test(text) ? `<span>${text}</span>` : text;
      })
      .join(' ');

    title.innerHTML = correctTitle;
  });

  return titles;
};

const optionsDefault = { yPercent: 100, ease: 'circ.out', duration: 1 };
const positionDefault = (index: number) => (index === 0 ? '0' : '<+=25%');

/**
 * Корректирует текст с помощью getNonDividingSpace и анимирует его с помощью SplitType
 * @param { target } <NodeList || HTMLElement> - заголовок или коллекция заголовков для анимации
 * @param { tl } timeline - timeline gsap для анимации
 * @param { options? } ObjectParamsGsap - options для анимации
 * @param { position? } function - position для анимации
 * @returns { undefined }
 */
const splitTypeHelper = (target: any, tl: gsap.core.Timeline, { options = optionsDefault, position = positionDefault }: options | null = {}): undefined => {
  if (!target) return;

  const splitedTitle = new SplitType(getNonDividingSpace(target), { types: ['lines', 'words'] });

  splitedTitle.lines.forEach((line, index) => {
    const words = line.querySelectorAll('.word');

    if (!words.length) return;

    tl.from(words, options, position(index)).add('title');
  });
};

export default splitTypeHelper;
