import ReactPaginate from "react-paginate";

function Paginate(props:any) {
  const handleIndexClick = (event:any) => {
    props.handlePageClick(event);
  }
  return (
    <div className="pagination-wrap">
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next >"
        onPageChange={handleIndexClick}
        pageRangeDisplayed={5}
        pageCount={props.pageCount}
        previousLabel="< Previous"
        //renderOnZeroPageCount={null}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        containerClassName={"pagination"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
}

export default Paginate;
