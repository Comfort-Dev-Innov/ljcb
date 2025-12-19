'use client';

import { useState, useMemo } from 'react';
import { Category, Product } from '@/data/productsData';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: Category | null;
}

const ProductModal = ({ isOpen, onClose, category }: ProductModalProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  const itemsPerPage = 15;

  const filteredProducts = useMemo(() => {
    if (!category) return [];
    
    return category.products.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [category, searchQuery]);

  const effectiveCurrentProduct = useMemo(() => {
    if (currentProduct && filteredProducts.some(p => p.id === currentProduct.id)) {
      return currentProduct;
    }
    return filteredProducts.length > 0 ? filteredProducts[0] : null;
  }, [currentProduct, filteredProducts]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleClose = () => {
    setSearchQuery('');
    setCurrentPage(1);
    setCurrentProduct(null);
    onClose();
  };

  const handleProductClick = (product: Product) => {
    setCurrentProduct(product);
  };

  if (!isOpen || !category) return null;

  return (
    <div className="fixed inset-0 z-99 flex items-center justify-center p-4 bg-black/50 animate-fade-in">
      <div className="relative bg-white rounded-[20px] shadow-xl w-full max-w-[650px] max-h-[92vh] flex flex-col animate-modal-pop">
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-2">
          <div className="flex items-center gap-2">
            {category.icon && <category.icon className="text-3xl text-primary" />}
            <h2 className="text-[18px] sm:text-xl md:text-[24px] font-bold font-inter">
              {category.title}
            </h2>
          </div>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:cursor-pointer hover:text-gray-600 transition-colors text-4xl leading-none w-8 h-8 flex items-center justify-center"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        {/* Search Input */}
        <div className="px-6 py-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Product Name..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-[20px] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary font-inter"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Products List */}
        <div className="flex-1 overflow-y-auto px-6 pt-2 pb-6">
          <div className="border border-[#ADADAD] rounded-[10px] overflow-hidden">
            <div className="bg-[#EFEFEF] px-4 py-2 border-b border-[#ADADAD]">
              <h3 className="max-sm:text-[14px] font-semibold text-gray-700 font-inter">Product Name</h3>
            </div>
            <div className="divide-y divide-[#ADADAD]">
              {currentProducts.length > 0 ? (
                currentProducts.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => handleProductClick(product)}
                    className={`w-full max-sm:text-[14px] text-left px-4 py-2 hover:bg-gray-50 transition-colors font-inter ${
                      effectiveCurrentProduct?.id === product.id
                        ? 'bg-primary/10 text-primary font-semibold border-l-4 border-primary'
                        : 'text-gray-700'
                    }`}
                  >
                    {product.name}
                  </button>
                ))
              ) : (
                <div className="max-sm:text-[14px] px-4 py-8 text-center text-gray-500 font-inter">
                  No products found matching your search.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Pagination */}

          <div className="px-6 pb-6">
            <div className="flex items-center justify-center gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed font-inter"
              >
                ‹
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                const showPage =
                  page === 1 ||
                  page === totalPages ||
                  (page >= currentPage - 1 && page <= currentPage + 1);

                if (!showPage && page === currentPage - 2) {
                  return (
                    <span key={page} className="px-2 text-gray-400">
                      ...
                    </span>
                  );
                }

                if (!showPage && page === currentPage + 2) {
                  return (
                    <span key={page} className="px-2 text-gray-400">
                      ...
                    </span>
                  );
                }

                if (!showPage) return null;

                return (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-3 py-1 max-sm:text-[14px] rounded font-inter transition-colors ${
                      currentPage === page
                        ? 'bg-primary text-white'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    {page}
                  </button>
                );
              })}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed font-inter"
              >
                ›
              </button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default ProductModal;

