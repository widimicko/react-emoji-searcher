export const filterEmojis = ({ emojis, searchText = "", maxResults = 20 }) => {
  const filteredEmojis = emojis.filter((emoji) => {
    if (emoji.title.toLowerCase().includes(searchText.toLowerCase())) {
      return true;
    }

    if (emoji.keywords.includes(searchText.toLowerCase())) {
      return true;
    }

    return false;
  });

  return filteredEmojis.splice(0, maxResults);
};
