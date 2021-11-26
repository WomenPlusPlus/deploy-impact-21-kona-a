const fieldMatchesKeyword = (value, keyword) => {
  if (!value) return false;
  const re = new RegExp('\\b' + keyword + '\\b', 'i');
  return value.match(re);
}

export const filterByKeywordInAnyField = (data, fields, keyword) => {
    return data.filter((org) => {
        if (fields.find( (field) => fieldMatchesKeyword(org[field], keyword))) {
          return org;
        }
      });
}
