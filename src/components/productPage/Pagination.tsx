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
          <PaginationPrevious
            className="bg-primaryColor text-secondaryColor hover:text-secondaryColor hover:bg-buttonHoverColor rounded-3xl border border-secondaryColor hover:border-none md:w-[140px] poppins-medium text-[10px] md:text-[16px] md:h-[50px] transition-colors duration-500"
            onClick={() => goToPage(currentPage - 1)}
          />
        </PaginationItem>
        {pages.map((page) => (
          <PaginationItem className="mx-3" key={page}>
            <PaginationLink
              className="bg-gray-300 border rounded-full size-12"
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
          <PaginationNext
            className="bg-primaryColor text-secondaryColor hover:text-secondaryColor hover:bg-buttonHoverColor rounded-3xl border border-secondaryColor hover:border-none md:w-[140px] poppins-medium text-[10px] md:text-[16px] md:h-[50px] transition-colors duration-500"
            onClick={() => goToPage(currentPage + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default ProductPagination;
