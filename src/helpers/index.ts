export const createCachedFetch = () => {
  const fetchMap: any = {};
  return (url: any, options?: any) => {
    if (!fetchMap[url]) {
      fetchMap[url] = fetch(url, options).then((res) => res.json());
    }
    return fetchMap[url];
  };
};
