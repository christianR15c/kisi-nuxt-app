export const fetchData = () => {
  const { data } = useAsyncData('articles', () =>
    $fetch(
      `http://api.mediastack.com/v1/news?access_key=7ece07c4fc282720cbd8d8fabedb23d3&languages=en`
    )
  );
  return data;
};

export const fetchSingleArticle = (articleTitle) => {
  let article;
  const { data } = useAsyncData('articles', () =>
    $fetch(
      `http://api.mediastack.com/v1/news?access_key=7ece07c4fc282720cbd8d8fabedb23d3&languages=en`
    )
  );
  return data._rawValue.data.filter((article) => article.title == articleTitle);
};
