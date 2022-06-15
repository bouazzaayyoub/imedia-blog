type ApiActionTypes = "_REQUEST" | "_SUCCESS" | "_ERROR";

export const typeCreator = (type: string, apiActionTypes: ApiActionTypes) =>
  `${type}${apiActionTypes}`;
