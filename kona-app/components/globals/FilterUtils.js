export const filterByKeywordInAnyField = (data, fields, keyword) => {
    return data.filter((org) => {
        if (fields.find( (field) => org[field] && org[field].toUpperCase().includes((keyword).toUpperCase()))) {
          return org;
        }
      });
}