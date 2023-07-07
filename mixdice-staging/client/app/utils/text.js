export const replaceUserMention = (text, replacer) =>
  text.replace(/@([A-Za-z]+)/, (match, p1) => replacer(p1));
