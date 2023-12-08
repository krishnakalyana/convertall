import React from "react";
function usePagination(totalItems, itemsPerPage = 6, currentPage) {
  const [items, setItems] = React.useState([]);
  const numberOfPages = Math.ceil(totalItems.length / itemsPerPage);
  const paginatedItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setItems(totalItems.slice(startIndex, endIndex));
  };
  React.useEffect(() => {
    paginatedItems();
  }, [currentPage]);
  return { items, numberOfPages };
}
export default usePagination;
