import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const totalPages = 121; // Exemple, mais tu peux le récupérer depuis ton API
const maxVisiblePages = 5;

export default function MoviePagination({ paginationvalue, setPaginationValue }: {
  paginationvalue: number;
  setPaginationValue: (page: number) => void;
}) {
  const getVisiblePages = () => {
    const pages: number[] = [];
    const startPage = Math.max(1, paginationvalue - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <Pagination className="transition-all duration-1000">
      <PaginationPrevious
        className="hover:bg-white/30 hover:text-white cursor-pointer duration-300 transition-colors ease-in-out items-center h-8 mx-2"
        onClick={() => paginationvalue > 1 && setPaginationValue(paginationvalue - 1)}
      />
      <PaginationContent className="transition-all duration-1000">
        {getVisiblePages().map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              isActive={paginationvalue === page}
              className={`${
                paginationvalue === page
                  ? "bg-white/30 text-white border-none"
                  : "hover:bg-white/20 hover:text-white"
              } cursor-pointer transition-colors ease-in-out duration-1000`}
              onClick={() => setPaginationValue(page)}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
      </PaginationContent>
      <PaginationNext
        className="hover:bg-white/30 hover:text-white cursor-pointer duration-300 transition-colors ease-in-out items-center h-8 mx-2"
        onClick={() =>
          paginationvalue < totalPages && setPaginationValue(paginationvalue + 1)
        }
      />
    </Pagination>
  );
}
