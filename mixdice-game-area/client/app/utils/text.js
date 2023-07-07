export const replaceUserMention = (text, replacer) => {
  return text.replace(/@([A-Za-z]+)/, (match, p1) => {
    return replacer(p1);
  });
};
