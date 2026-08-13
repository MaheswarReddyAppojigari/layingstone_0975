'use client';

import React, { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import Link from 'next/link';

type Category = 'All' | 'Residential' | 'Commercial' | 'Residential Interiors' | 'Commercial Interiors' | 'Sport Infra' | 'Landscaping';

interface Project {
  id: number;
  name: string;
  category: Exclude<Category, 'All'>;
  location: string;
  year: string;
  area: string;
  desc: string;
  emoji: string;
  featured?: boolean;
}


const projects: Project[] = [
  { id: 1, name: 'Prestige Villa, Whitefield', category: 'Residential', location: 'Bangalore', year: '2025', area: '4,200 sq.ft', desc: 'A contemporary 4BHK villa with premium finishes, landscaped garden, and smart home integration.', emoji: '🏡', featured: true },
  { id: 2, name: 'Skyline Corporate Park', category: 'Commercial', location: 'Hyderabad', year: '2025', area: '45,000 sq.ft', desc: 'Grade-A office complex with IGBC Green certification, modern amenities, and flexible floor plates.', emoji: '🏢', featured: true },
  { id: 3, name: 'Serene Living Interiors', category: 'Residential Interiors', location: 'Chennai', year: '2024', area: '2,800 sq.ft', desc: 'Complete 3BHK interior transformation with modular kitchen, custom wardrobes, and luxury bathrooms.', emoji: '🛋️', featured: true },
  { id: 4, name: 'TechHub Office Fit-out', category: 'Commercial Interiors', location: 'Pune', year: '2025', area: '8,500 sq.ft', desc: 'Activity-based office design for a leading IT company with collaborative zones and branded environments.', emoji: '💼' },
  { id: 5, name: 'Champions Arena', category: 'Sport Infra', location: 'Bangalore', year: '2024', area: '12,000 sq.ft', desc: 'FIFA-certified synthetic turf football pitch with floodlighting, drainage, and spectator seating.', emoji: '⚽', featured: true },
  { id: 6, name: 'Green Oasis Garden', category: 'Landscaping', location: 'Hyderabad', year: '2025', area: '6,000 sq.ft', desc: 'Tropical residential garden with water feature, pergola, outdoor lighting, and lawn development.', emoji: '🌿' },
  { id: 7, name: 'Heritage Bungalow Renovation', category: 'Residential', location: 'Mysore', year: '2024', area: '5,500 sq.ft', desc: 'Complete renovation of a heritage bungalow preserving original character while adding modern amenities.', emoji: '🏠' },
  { id: 8, name: 'Metro Retail Complex', category: 'Commercial', location: 'Mumbai', year: '2024', area: '28,000 sq.ft', desc: 'Multi-level retail complex with premium anchor stores, food court, and entertainment zone.', emoji: '🛍️' },
  { id: 9, name: 'Luxury Penthouse Interiors', category: 'Residential Interiors', location: 'Bangalore', year: '2025', area: '4,500 sq.ft', desc: 'Ultra-luxury penthouse interior with Italian marble, custom furniture, and smart home automation.', emoji: '✨' },
  { id: 10, name: 'Grand Hotel Lobby', category: 'Commercial Interiors', location: 'Chennai', year: '2024', area: '12,000 sq.ft', desc: 'Five-star hotel lobby and common area fit-out with premium materials and bespoke lighting design.', emoji: '🏨' },
  { id: 11, name: 'Olympic Training Centre', category: 'Sport Infra', location: 'Pune', year: '2024', area: '25,000 sq.ft', desc: 'Multi-sport indoor facility with certified surfaces for basketball, badminton, and athletics.', emoji: '🏟️' },
  { id: 12, name: 'Corporate Campus Grounds', category: 'Landscaping', location: 'Bangalore', year: '2025', area: '2 acres', desc: 'Complete landscaping of a corporate campus with formal gardens, water features, and outdoor seating.', emoji: '🌳' },
  { id: 13, name: 'Riverside Luxury Homes', category: 'Residential', location: 'Kochi', year: '2023', area: '3,800 sq.ft', desc: 'Cluster of 8 luxury villas with river views, private pools, and premium construction quality.', emoji: '🏘️' },
  { id: 14, name: 'Medical Centre Construction', category: 'Commercial', location: 'Hyderabad', year: '2023', area: '18,000 sq.ft', desc: 'NABH-compliant medical centre with OT suites, ICU, and diagnostic facilities.', emoji: '🏥' },
  { id: 15, name: 'Modern Villa Interiors', category: 'Residential Interiors', location: 'Hyderabad', year: '2023', area: '3,200 sq.ft', desc: 'Contemporary villa interiors with open-plan living, modular kitchen, and home theatre.', emoji: '🛏️' },
  { id: 16, name: 'Tennis Academy Courts', category: 'Sport Infra', location: 'Chennai', year: '2023', area: '8,000 sq.ft', desc: 'Four ITF-standard tennis courts with synthetic surface, lighting, and spectator gallery.', emoji: '🎾' },
];

const categories: Category[] = ['All', 'Residential', 'Commercial', 'Residential Interiors', 'Commercial Interiors', 'Sport Infra', 'Landscaping'];

const ITEMS_PER_PAGE = 9;

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [lightbox, setLightbox] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchCat = activeCategory === 'All' || p.category === activeCategory;
      const matchSearch = search === '' || p.name.toLowerCase().includes(search.toLowerCase()) || p.location.toLowerCase().includes(search.toLowerCase()) || p.category.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, search]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const handleFilter = (cat: Category) => {
    setActiveCategory(cat);
    setPage(1);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setPage(1);
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-[#1F3A5F]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1F3A5F] via-[#162d4a] to-[#0d1f33]" />
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #D4AF37 0%, transparent 60%)' }}
          />
          <div className="relative z-10 text-center px-4 max-w-3xl mx-auto pt-28 pb-16">
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 border border-[#D4AF37]/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              <span className="text-[#D4AF37] text-sm font-medium">Our Portfolio</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Projects That Define
              <span className="block text-[#D4AF37]">Our Legacy</span>
            </h1>
            <p className="text-white/70 text-lg">
              500+ completed projects across residential, commercial, interiors, sports, and landscaping — each a testament to our commitment to quality.
            </p>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-16 bg-[#F3F3F3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Search & Filters */}
            <div className="mb-10 space-y-6">
              {/* Search */}
              <div className="max-w-md mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search projects by name, location, or category..."
                    value={search}
                    onChange={handleSearch}
                    className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                  />
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
                </div>
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleFilter(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      activeCategory === cat
                        ? 'bg-[#1F3A5F] text-white shadow-md'
                        : 'bg-white text-gray-600 hover:bg-[#1F3A5F] hover:text-white border border-gray-200'
                    }`}
                  >
                    {cat}
                    <span className={`ml-1.5 text-xs ${activeCategory === cat ? 'text-[#D4AF37]' : 'text-gray-400'}`}>
                      ({cat === 'All' ? projects.length : projects.filter(p => p.category === cat).length})
                    </span>
                  </button>
                ))}
              </div>

              {/* Results count */}
              <p className="text-center text-gray-500 text-sm">
                Showing {paginated.length} of {filtered.length} projects
                {activeCategory !== 'All' && ` in ${activeCategory}`}
                {search && ` matching "${search}"`}
              </p>
            </div>

            {/* Projects Grid */}
            {paginated.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginated.map((project) => (
                  <div
                    key={project.id}
                    className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
                    onClick={() => setLightbox(project)}
                  >
                    {/* Image Placeholder */}
                    <div className="relative h-52 bg-gradient-to-br from-[#1F3A5F] to-[#162d4a] flex items-center justify-center overflow-hidden">
                      <span className="text-6xl opacity-30 group-hover:opacity-50 transition-opacity group-hover:scale-110 transition-transform duration-500">{project.emoji}</span>
                      {project.featured && (
                        <div className="absolute top-3 left-3 bg-[#D4AF37] text-[#1F3A5F] text-xs font-bold px-2 py-1 rounded-full">
                          Featured
                        </div>
                      )}
                      <div className="absolute top-3 right-3 bg-white/10 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                        {project.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="font-bold text-[#1F3A5F] mb-2 group-hover:text-[#D4AF37] transition-colors">{project.name}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{project.desc}</p>
                      <div className="flex flex-wrap gap-3 text-xs text-gray-400 mb-4">
                        <span className="flex items-center gap-1">📍 {project.location}</span>
                        <span className="flex items-center gap-1">📅 {project.year}</span>
                        <span className="flex items-center gap-1">📐 {project.area}</span>
                      </div>
                      <button className="text-[#1F3A5F] text-sm font-semibold hover:text-[#D4AF37] transition-colors flex items-center gap-1">
                        View Details →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-[#1F3A5F] mb-2">No projects found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-12">
                <button
                  onClick={() => setPage(Math.max(1, page - 1))}
                  disabled={page === 1}
                  className="px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 hover:bg-[#1F3A5F] hover:text-white hover:border-[#1F3A5F] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  ← Prev
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <button
                    key={p}
                    onClick={() => setPage(p)}
                    className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
                      page === p ? 'bg-[#1F3A5F] text-white' : 'border border-gray-200 text-gray-600 hover:bg-[#1F3A5F] hover:text-white hover:border-[#1F3A5F]'
                    }`}
                  >
                    {p}
                  </button>
                ))}
                <button
                  onClick={() => setPage(Math.min(totalPages, page + 1))}
                  disabled={page === totalPages}
                  className="px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 hover:bg-[#1F3A5F] hover:text-white hover:border-[#1F3A5F] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  Next →
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-[#1F3A5F] to-[#162d4a]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Your Project Could Be Next</h2>
            <p className="text-white/70 text-lg mb-10">Join 500+ satisfied clients who trusted LayingStone to build their vision.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-[#D4AF37] text-[#1F3A5F] font-semibold px-8 py-4 rounded-xl hover:bg-[#c9a430] transition-colors">
                Start Your Project
              </Link>
              <Link href="/residential-construction" className="border border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors">
                View Packages
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-56 bg-gradient-to-br from-[#1F3A5F] to-[#162d4a] flex items-center justify-center relative">
              <span className="text-8xl opacity-40">{lightbox.emoji}</span>
              <div className="absolute top-4 right-4">
                <button
                  onClick={() => setLightbox(null)}
                  className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white transition-colors"
                >
                  ✕
                </button>
              </div>
              {lightbox.featured && (
                <div className="absolute top-4 left-4 bg-[#D4AF37] text-[#1F3A5F] text-xs font-bold px-3 py-1 rounded-full">
                  Featured Project
                </div>
              )}
            </div>
            <div className="p-8">
              <div className="inline-block bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-semibold px-3 py-1 rounded-full mb-3">
                {lightbox.category}
              </div>
              <h3 className="text-xl font-bold text-[#1F3A5F] mb-3">{lightbox.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">{lightbox.desc}</p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[['📍', 'Location', lightbox.location], ['📅', 'Year', lightbox.year], ['📐', 'Area', lightbox.area]].map(([icon, label, value]) => (
                  <div key={label} className="text-center p-3 bg-[#F3F3F3] rounded-xl">
                    <div className="text-lg mb-1">{icon}</div>
                    <div className="text-xs text-gray-400">{label}</div>
                    <div className="text-sm font-semibold text-[#1F3A5F]">{value}</div>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="w-full bg-[#1F3A5F] text-white font-semibold py-3 rounded-xl hover:bg-[#162d4a] transition-colors text-center block"
                onClick={() => setLightbox(null)}
              >
                Enquire About Similar Project
              </Link>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <FloatingButtons />
    </>
  );
}
