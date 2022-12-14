export const generateQueries = (
  selectedTopic,
  selectedSortBy,
  selectedOrderBy
) => {
  const validSortBy = ["created_at", "title", "author", "votes"];
  const validOrder = ["ASC", "DESC"];
  let urlQuery = "";
  let requestParams = {};

  if (selectedTopic) {
    urlQuery += `?topic=${selectedTopic}`;
    requestParams = { ...requestParams, topic: selectedTopic };
  }

  if (validSortBy.includes(selectedSortBy)) {
    urlQuery += `?sort_by=${selectedSortBy}`;
    requestParams = { ...requestParams, sort_by: selectedSortBy };
  }

  if (validOrder.includes(selectedOrderBy)) {
    urlQuery += `?order=${selectedOrderBy}`;
    requestParams = { ...requestParams, order: selectedOrderBy };
  }

  return {
    url: urlQuery,
    request: requestParams,
  };
};
