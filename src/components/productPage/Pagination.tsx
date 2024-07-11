import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type TProductPaginationProps = {
  currentPage: number;
  totalPages: number;
  goToPage: (page: number) => void;
};

const ProductPagination = ({
  currentPage,
  totalPages,
  goToPage,
}: TProductPaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={() => goToPage(currentPage - 1)} />
        </PaginationItem>
        {pages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              isActive={page === currentPage}
              onClick={() => goToPage(page)}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext onClick={() => goToPage(currentPage + 1)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default ProductPagination;
