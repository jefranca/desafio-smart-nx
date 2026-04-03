import '../styles/pagination.css';

function Pagination({ currentPage, onPageChange, totalPages, variant = 'bottom' }) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return totalPages > 1 ? (
    <nav
      className={`pagination pagination-${variant}`}
      aria-label="Paginacao dos personagens"
    >
      {currentPage > 1 ? (
        <button
          aria-label="Pagina anterior"
          className="pagination-button"
          onClick={() => onPageChange(currentPage - 1)}
          type="button"
        >
          <span className="pagination-arrow">&lt;</span>
        </button>
      ) : (
        <span className="pagination-spacer" aria-hidden="true" />
      )}

      <div className="pagination-pages">
        {pages.map((page) => (
          <button
            className={
              page === currentPage
                ? 'pagination-button pagination-button-active'
                : 'pagination-button'
            }
            key={page}
            onClick={() => onPageChange(page)}
            type="button"
          >
            {page}
          </button>
        ))}
      </div>

      {currentPage < totalPages ? (
        <button
          aria-label="Proxima pagina"
          className="pagination-button"
          onClick={() => onPageChange(currentPage + 1)}
          type="button"
        >
          <span className="pagination-arrow">&gt;</span>
        </button>
      ) : (
        <span className="pagination-spacer" aria-hidden="true" />
      )}
    </nav>
  ) : null;
}

export default Pagination;
