

interface PaginationButtonsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginationButtons: React.FC<PaginationButtonsProps> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination">
      <button className="prev" onClick={() => onPageChange(Math.max(currentPage - 1, 1))} disabled={currentPage === 1}>
       
      </button>
      {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNum) => (
        <button 
          key={pageNum}
          onClick={() => onPageChange(pageNum)}
          className={currentPage === pageNum ? "active" : ""}
        >
          {pageNum}
        </button>
      ))}
      <button className="next" onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
       
      </button>
    </div>
  );
}

export default PaginationButtons;
