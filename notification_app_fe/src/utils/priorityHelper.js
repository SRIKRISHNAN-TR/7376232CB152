const priorityWeights = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

export const sortByPriority = (
  notifications
) => {
  return [...notifications].sort(
    (a, b) => {
      const typeDiff =
        priorityWeights[b.Type] -
        priorityWeights[a.Type];

      if (typeDiff !== 0) {
        return typeDiff;
      }
      
      return (
        new Date(b.Timestamp) -
        new Date(a.Timestamp)
      );
    }
  );
};