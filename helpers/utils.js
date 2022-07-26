export const fetchData = () => {
  const { data } = useAsyncData('articles', () =>
    $fetch(
      `http://api.mediastack.com/v1/news?access_key=e7e0e1a16a34d472348bb78efe878221&languages=en`
    )
  );
  return data;
};

export const fetchSingleArticle = (articleTitle) => {
  let article;
  const { data } = useAsyncData('articles', () =>
    $fetch(
      `http://api.mediastack.com/v1/news?access_key=5f20d05256e0c162434916ef15c419e3&languages=en`
    )
  );
  return data._rawValue.data.filter(
    (article) => article.title === articleTitle
  );
};
