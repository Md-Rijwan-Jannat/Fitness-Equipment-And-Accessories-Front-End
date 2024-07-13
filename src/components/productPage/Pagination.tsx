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
  goToPage: (page: number) => void;
  totalDataLength: number;
  productsPerPage: number;
};

const ProductPagination = ({
  currentPage,
  goToPage,
  totalDataLength,
  productsPerPage,
}: TProductPaginationProps) => {
  const totalPages = Math.ceil(totalDataLength / productsPerPage);

  const generatePageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className="bg-primaryColor text-secondaryColor hover:text-secondaryColor hover:bg-buttonHoverColor rounded-3xl border border-secondaryColor hover:border-none md:w-[140px] poppins-medium text-[10px] md:text-[16px] md:h-[50px] transition-colors duration-500"
            onClick={() => currentPage > 1 && goToPage(currentPage - 1)}
          />
        </PaginationItem>
        {generatePageNumbers().map((page) => (
          <PaginationItem className="mx-1 md:mx-3" key={page}>
            <PaginationLink
              className={`bg-gray-300 border rounded-full hover:bg-primaryColor hover:text-secondaryColor size-6 md:size-12 ${
                page === currentPage ? "bg-primaryColor text-white" : ""
              }`}
              isActive={page === currentPage}
              onClick={() => goToPage(page)}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        {totalPages > 1 && currentPage < totalPages && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationNext
            className={`${"bg-primaryColor text-secondaryColor hover:text-secondaryColor hover:bg-buttonHoverColor rounded-3xl border border-secondaryColor hover:border-none md:w-[140px] poppins-medium text-[10px] md:text-[16px] md:h-[50px] transition-colors duration-500"}`}
            onClick={() => goToPage(currentPage + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default ProductPagination;
