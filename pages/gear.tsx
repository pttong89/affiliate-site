'use client';

import { useState } from 'react';
import Link from 'next/link';

type ProductMeta = {
  title: string;
  slug: string;
  description: string;
};

interface GearPageProps {
  products: ProductMeta[];
}

const GearPage: React.FC<GearPageProps> = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<'pagination' | 'loadmore'>('pagination');
  const [displayedItems, setDisplayedItems] = useState(5);

  const itemsPerPage = 5;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Get current items for pagination
  const getCurrentItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return products.slice(startIndex, endIndex);
  };

  // Get items for load more
  const getLoadMoreItems = () => {
    return products.slice(0, displayedItems);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLoadMore = () => {
    setDisplayedItems(prev => Math.min(prev + itemsPerPage, products.length));
  };

  const currentItems = viewMode === 'pagination' ? getCurrentItems() : getLoadMoreItems();

  return (
    <main>
      <section style={{
        padding: '80px 2rem',
        background: 'linear-gradient(135deg, rgba(135, 206, 235, 0.1) 0%, rgba(152, 251, 152, 0.1) 100%)',
        minHeight: '100vh'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Header */}
          <div style={{
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            <h1 style={{
              fontSize: '3rem',
              marginBottom: '1rem',
              color: '#2c5f2d',
              fontWeight: 'bold'
            }}>
              🛍️ All Hiking Gear
            </h1>
            <p style={{
              fontSize: '1.2rem',
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Explore our complete collection of premium hiking equipment,
              carefully selected for outdoor enthusiasts and adventurers.
            </p>
          </div>

          {/* View Mode Toggle */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '3rem'
          }}>
            <button
              onClick={() => {
                setViewMode('pagination');
                setCurrentPage(1);
                setDisplayedItems(5);
              }}
              style={{
                padding: '10px 20px',
                borderRadius: '25px',
                border: '2px solid #87ceeb',
                background: viewMode === 'pagination' ? '#87ceeb' : 'transparent',
                color: viewMode === 'pagination' ? 'white' : '#2c5f2d',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              📄 Pagination
            </button>
            <button
              onClick={() => {
                setViewMode('loadmore');
                setCurrentPage(1);
                setDisplayedItems(5);
              }}
              style={{
                padding: '10px 20px',
                borderRadius: '25px',
                border: '2px solid #87ceeb',
                background: viewMode === 'loadmore' ? '#87ceeb' : 'transparent',
                color: viewMode === 'loadmore' ? 'white' : '#2c5f2d',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              📋 Load More
            </button>
          </div>

          {/* Gear List */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            marginBottom: '3rem'
          }}>
            {currentItems.map((product, index) => (
              <div key={product.slug} style={{
                background: 'white',
                borderRadius: '20px',
                padding: '2rem',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.15)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
              }}>
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  background: 'linear-gradient(135deg, #87ceeb 0%, #98fb98 100%)',
                  borderRadius: '50%',
                  width: '45px',
                  height: '45px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  color: 'white'
                }}>
                  {['🎒', '🥾', '⛺', '🧭', '🔦', '🥤'][index % 6]}
                </div>

                <div style={{
                  flex: 1,
                  paddingLeft: '5rem'
                }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    marginBottom: '0.5rem',
                    color: '#2c5f2d',
                    fontWeight: 'bold'
                  }}>
                    {product.title}
                  </h3>
                  <p style={{
                    color: '#666',
                    fontSize: '1rem',
                    lineHeight: '1.5',
                    marginBottom: '1rem'
                  }}>
                    {product.description}
                  </p>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    color: '#87ceeb',
                    fontSize: '0.9rem'
                  }}>
                    <span>⭐ Premium Quality</span>
                    <span>🚚 Free Shipping</span>
                    <span>🛡️ 2-Year Warranty</span>
                  </div>
                </div>

                <Link href={`/${product.slug}`} style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#2c5f2d',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  padding: '12px 25px',
                  borderRadius: '30px',
                  border: '2px solid #87ceeb',
                  background: 'transparent',
                  whiteSpace: 'nowrap'
                }} onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#87ceeb';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'translateX(5px)';
                }} onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#2c5f2d';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}>
                  View Details →
                </Link>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {viewMode === 'pagination' && (
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1rem',
              marginTop: '3rem'
            }}>
             

              {/* Pagination logic */}
              {viewMode === 'pagination' && (
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '1rem',
                  marginTop: '3rem',
                  flexWrap: 'wrap'
                }}>
                  {/* Previous */}
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    style={{
                      padding: '10px 20px',
                      borderRadius: '25px',
                      border: '2px solid #87ceeb',
                      background: 'transparent',
                      color: currentPage === 1 ? '#ccc' : '#2c5f2d',
                      fontWeight: 'bold',
                      cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    ← Previous
                  </button>

                  {/* Dynamic numbered pages */}
                  {(() => {
                    const visiblePageCount = 5;
                    const half = Math.floor(visiblePageCount / 2);

                    let start = Math.max(1, currentPage - half);
                    let end = Math.min(totalPages, currentPage + half);

                    if (currentPage <= half) {
                      end = Math.min(totalPages, visiblePageCount);
                    }

                    if (currentPage + half > totalPages) {
                      start = Math.max(1, totalPages - visiblePageCount + 1);
                    }

                    return Array.from({ length: end - start + 1 }, (_, i) => start + i).map(pageNumber => (
                      <button
                        key={pageNumber}
                        onClick={() => handlePageChange(pageNumber)}
                        style={{
                          padding: '10px 15px',
                          borderRadius: '50%',
                          border: '2px solid #87ceeb',
                          background: currentPage === pageNumber ? '#87ceeb' : 'transparent',
                          color: currentPage === pageNumber ? 'white' : '#2c5f2d',
                          fontWeight: 'bold',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          minWidth: '45px'
                        }}
                      >
                        {pageNumber}
                      </button>
                    ));
                  })()}

                  {/* Next */}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    style={{
                      padding: '10px 20px',
                      borderRadius: '25px',
                      border: '2px solid #87ceeb',
                      background: 'transparent',
                      color: currentPage === totalPages ? '#ccc' : '#2c5f2d',
                      fontWeight: 'bold',
                      cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Next →
                  </button>
                </div>
              )}


             
            </div>
          )}

          {/* Load More Button */}
          {viewMode === 'loadmore' && displayedItems < products.length && (
            <div style={{
              textAlign: 'center',
              marginTop: '3rem'
            }}>
              <button
                onClick={handleLoadMore}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '15px 35px',
                  background: 'linear-gradient(135deg, #2c5f2d 0%, #1a3f1b 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50px',
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 5px 20px rgba(44, 95, 45, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(44, 95, 45, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 5px 20px rgba(44, 95, 45, 0.3)';
                }}
              >
                📦 Load More Gear ({products.length - displayedItems} remaining)
              </button>
            </div>
          )}

          {/* Results Info */}
          <div style={{
            textAlign: 'center',
            marginTop: '2rem',
            color: '#666',
            fontSize: '1rem'
          }}>
            {viewMode === 'pagination' ? (
              <p>
                Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, products.length)} of {products.length} items
              </p>
            ) : (
              <p>
                Showing {displayedItems} of {products.length} items
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default GearPage;
import { GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';



export const getStaticProps: GetStaticProps = async () => {
  const dirPath = path.join(process.cwd(), 'content/products');
  const files = fs.readdirSync(dirPath);

  const products: ProductMeta[] = files.map((file) => {
    const raw = fs.readFileSync(path.join(dirPath, file), 'utf-8');
    const json = JSON.parse(raw);
    return { title: json.title, slug: json.slug, description: json.description };
  });

  return { props: { products } };
};