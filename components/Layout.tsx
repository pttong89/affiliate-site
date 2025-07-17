'use client'
import { usePathname } from 'next/navigation';
import AmazonPopup from '@/components/AmazonPopup';
import RelatedPostsPopup from '@/components/RelatedPostsPopup';
import Link from 'next/link';
export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
const isPostPage =
  /^\/[a-z0-9-]+$/.test(pathname) &&
  !['/gear', '/about', '/guides', '/info-national-park', '/','/topic'].includes(pathname) &&
  !pathname.startsWith('/topic');
  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Header */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'linear-gradient(135deg, #2c5f2d 0%, #1a3f1b 100%)',
        backdropFilter: 'blur(10px)',
        borderBottom: '3px solid #4a9e4f',
        boxShadow: '0 2px 20px rgba(45, 95, 45, 0.3)',
        transition: 'all 0.3s ease'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '80px'
        }}>
          {/* Logo */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              background: 'linear-gradient(135deg, #87ceeb 0%, #98fb98 100%)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              boxShadow: '0 4px 15px rgba(135, 206, 235, 0.4)',
              transition: 'transform 0.3s ease'
            }}>
              🏔️
            </div>
            <div>
              <h1 style={{
                margin: 0,
                fontSize: '26px',
                fontWeight: 'bold',
                color: '#87ceeb',
                letterSpacing: '-0.5px'
              }}>
                TrailGear Pro
              </h1>
              <p style={{
                margin: 0,
                fontSize: '12px',
                color: '#b0e0e6',
                opacity: 0.9
              }}>
                National Park Adventures
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem'
          }}>
            <Link href="/" style={{
              color: '#e0f6ff',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '500',
              padding: '12px 20px',
              borderRadius: '25px',
              transition: 'all 0.3s ease',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(176, 224, 230, 0.2)';
              e.currentTarget.style.color = '#87ceeb';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#e0f6ff';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              🏠 Home
            </Link>
            
            <Link href="/gear" style={{
              color: '#e0f6ff',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '500',
              padding: '12px 20px',
              borderRadius: '25px',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(176, 224, 230, 0.2)';
              e.currentTarget.style.color = '#87ceeb';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#e0f6ff';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              🎒 Hiking Gear
            </Link>

            <Link href="/info-national-park" style={{
              color: '#e0f6ff',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '500',
              padding: '12px 20px',
              borderRadius: '25px',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(176, 224, 230, 0.2)';
              e.currentTarget.style.color = '#87ceeb';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#e0f6ff';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              🏞️ National Parks
            </Link>

            <Link href="/guides" style={{
              color: '#e0f6ff',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '500',
              padding: '12px 20px',
              borderRadius: '25px',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(176, 224, 230, 0.2)';
              e.currentTarget.style.color = '#87ceeb';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#e0f6ff';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              🗺️ Trail Guides
            </Link>

            <Link href="/about" style={{
              color: '#e0f6ff',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '500',
              padding: '12px 20px',
              borderRadius: '25px',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(176, 224, 230, 0.2)';
              e.currentTarget.style.color = '#87ceeb';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#e0f6ff';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              ℹ️ About
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: '#87ceeb',
            fontSize: '24px',
            cursor: 'pointer',
           
          }}>
            ☰
          </button>
          
        </div>
      </header>

      {/* Main Content */}
      <main style={{ 
        minHeight: '80vh',
        background: 'linear-gradient(180deg, #f0f8ff 0%, #e6f3ff 100%)'
      }}>
        {children}
        
        {isPostPage  && (
  <>
    <AmazonPopup />
    <RelatedPostsPopup />
  </>
)}
      </main>

      {/* Footer */}
      <footer style={{
        background: 'linear-gradient(135deg, #1a3f1b 0%, #2c5f2d 100%)',
        color: '#e0f6ff',
        padding: '60px 0 30px',
        borderTop: '3px solid #4a9e4f'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          {/* Footer Content Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px',
            marginBottom: '40px'
          }}>
            {/* Company Info */}
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '20px'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: 'linear-gradient(135deg, #87ceeb 0%, #98fb98 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px'
                }}>
                  🏔️
                </div>
                <h3 style={{
                  margin: 0,
                  fontSize: '22px',
                  fontWeight: 'bold',
                  color: '#87ceeb'
                }}>
                  TrailGear Pro
                </h3>
              </div>
              <p style={{
                margin: 0,
                fontSize: '14px',
                lineHeight: '1.6',
                color: '#b0e0e6',
                marginBottom: '20px'
              }}>
                Your trusted partner for premium hiking gear and national park adventures. 
                Explore the wilderness with confidence using our carefully curated equipment.
              </p>
              <div style={{
                display: 'flex',
                gap: '15px'
              }}>
                <Link href="#" style={{
                  color: '#87ceeb',
                  fontSize: '24px',
                  transition: 'transform 0.3s ease'
                }} onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.2)';
                }} onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}>
                  📘
                </Link>
                <Link href="#" style={{
                  color: '#87ceeb',
                  fontSize: '24px',
                  transition: 'transform 0.3s ease'
                }} onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.2)';
                }} onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}>
                  📷
                </Link>
                <Link href="#" style={{
                  color: '#87ceeb',
                  fontSize: '24px',
                  transition: 'transform 0.3s ease'
                }} onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.2)';
                }} onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}>
                  🐦
                </Link>
                <Link href="#" style={{
                  color: '#87ceeb',
                  fontSize: '24px',
                  transition: 'transform 0.3s ease'
                }} onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.2)';
                }} onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}>
                  📺
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 style={{
                margin: '0 0 20px 0',
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#87ceeb',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                🔗 Quick Links
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {[
                  { text: 'Hiking Boots', icon: '🥾' },
                  { text: 'Backpacks', icon: '🎒' },
                  { text: 'Camping Gear', icon: '⛺' },
                  { text: 'Navigation Tools', icon: '🧭' },
                  { text: 'Safety Equipment', icon: '🚨' },
                  { text: 'Trail Maps', icon: '🗺️' }
                ].map((item, index) => (
                  <li key={index} style={{ marginBottom: '12px' }}>
                    <Link href="#" style={{
                      color: '#b0e0e6',
                      textDecoration: 'none',
                      fontSize: '14px',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }} onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#87ceeb';
                      e.currentTarget.style.paddingLeft = '10px';
                    }} onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#b0e0e6';
                      e.currentTarget.style.paddingLeft = '0';
                    }}>
                      {item.icon} {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* National Parks */}
            <div>
              <h4 style={{
                margin: '0 0 20px 0',
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#87ceeb',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                🏞️ Featured Parks
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {[
                  { text: 'Yellowstone National Park', icon: '🌋', href:'topic-yellowstone' },
                  { text: 'Grand Canyon National Park', icon: '🏔️', href:'topic-canyon'  },
                  { text: 'Yosemite National Park', icon: '🌲', href:'topic-yosemite'  },
                  { text: 'Rocky Mountain National Park', icon: '⛰️', href:'topic'  },
                  { text: 'Zion National Park', icon: '🏜️', href:'topic-zion'  },
                  { text: 'Glacier National Park', icon: '🧊', href:'topic'  }
                ].map((item, index) => (
                  <li key={index}  style={{ marginBottom: '12px' }}>
                    <Link href={item.href} style={{
                      color: '#b0e0e6',
                      textDecoration: 'none',
                      fontSize: '14px',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }} onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#87ceeb';
                      e.currentTarget.style.paddingLeft = '10px';
                    }} onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#b0e0e6';
                      e.currentTarget.style.paddingLeft = '0';
                    }}>
                      {item.icon} {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Newsletter */}
            <div>
              <h4 style={{
                margin: '0 0 20px 0',
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#87ceeb',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                📧 Stay Connected
              </h4>
              <div style={{ marginBottom: '20px' }}>
                <p style={{
                  margin: '0 0 10px 0',
                  fontSize: '14px',
                  color: '#b0e0e6',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  📞 1-800-TRAILGEAR
                </p>
                <p style={{
                  margin: '0 0 10px 0',
                  fontSize: '14px',
                  color: '#b0e0e6',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  ✉️ info@trailgearpro.com
                </p>
                <p style={{
                  margin: '0 0 20px 0',
                  fontSize: '14px',
                  color: '#b0e0e6',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  📍 Denver, Colorado, USA
                </p>
              </div>
              <div style={{
                display: 'flex',
                gap: '10px',
                marginTop: '15px'
              }}>
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  style={{
                    flex: 1,
                    padding: '12px',
                    border: 'none',
                    borderRadius: '25px',
                    fontSize: '14px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: '#e0f6ff',
                    outline: 'none'
                  }}
                />
                <button style={{
                  padding: '12px 20px',
                  background: 'linear-gradient(135deg, #87ceeb 0%, #98fb98 100%)',
                  border: 'none',
                  borderRadius: '25px',
                  color: '#1a3f1b',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease'
                }} onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                }} onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}>
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div style={{
            borderTop: '1px solid rgba(176, 224, 230, 0.3)',
            paddingTop: '30px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              flexWrap: 'wrap'
            }}>
              <p style={{
                margin: 0,
                fontSize: '14px',
                color: '#b0e0e6'
              }}>
                © {new Date().getFullYear()} TrailGear Pro. All rights reserved.
              </p>
              <div style={{
                display: 'flex',
                gap: '20px'
              }}>
                <Link href="#" style={{
                  color: '#b0e0e6',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'color 0.3s ease'
                }} onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#87ceeb';
                }} onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#b0e0e6';
                }}>
                  Privacy Policy
                </Link>
                <Link href="#" style={{
                  color: '#b0e0e6',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'color 0.3s ease'
                }} onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#87ceeb';
                }} onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#b0e0e6';
                }}>
                  Terms of Service
                </Link>
                <Link href="#" style={{
                  color: '#b0e0e6',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'color 0.3s ease'
                }} onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#87ceeb';
                }} onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#b0e0e6';
                }}>
                  Return Policy
                </Link>
              </div>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <span style={{
                fontSize: '14px',
                color: '#b0e0e6'
              }}>
                Made with
              </span>
              <span style={{
                fontSize: '16px',
                color: '#87ceeb'
              }}>
                💚
              </span>
              <span style={{
                fontSize: '14px',
                color: '#b0e0e6'
              }}>
                for adventurers
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* Responsive CSS */}
      <style jsx>{`
        @media (max-width: 768px) {
          header div {
            flex-direction: column;
            height: auto;
            padding: 1rem;
          }
          nav {
            display: none;
          }
          footer div {
            grid-template-columns: 1fr;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}
