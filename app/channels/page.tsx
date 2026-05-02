'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Search, Play, Radio, Users } from 'lucide-react';
import { Category, Channel } from '@/lib/interface';
import channelsData from '@/lib/channels-data';

export default function ChannelsPage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [channels, setChannels] = useState<Channel[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
   useEffect(() => {
      fetchChannels();
      fetchCategories();
    }, []);
    const fetchChannels = async () => {
        try {
            const data = await channelsData.fetchChannels();
            setChannels(data);
            console.log(data);
        } catch (error) {
          console.error('Failed to load channels:', error);
        } finally {
        //   setLoading(false);
        }
      };
    const fetchCategories = async () => {
        try {
            const data = await channelsData.categories();
            setCategories(data);
            console.log(data);
        } catch (error) {
          console.error('Failed to load channels:', error);
        } finally {
        //   setLoading(false);
        }
      };
  const filtered = channels.filter((ch) => {
    const matchSearch = ch.name.toLowerCase().includes(search.toLowerCase()) || ch.category.toLowerCase().includes(search.toLowerCase());
    const matchCat = activeCategory === 'All' || ch.category === activeCategory;
    return matchSearch && matchCat;
  });

  // const liveCount = channels.filter((c) => c.isLive).length;

  return (
    <div className="bg-slate-950 pt-16 min-h-screen">
      <section className="relative bg-gradient-to-br from-slate-900 to-slate-950 py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'linear-gradient(rgba(239,68,68,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(239,68,68,0.2) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-red-600/15 border border-red-500/30 rounded-full px-4 py-1.5 mb-5">
            <div className="live-dot w-2 h-2 bg-red-400 rounded-full" />
            {/* <span className="text-red-300 text-xs font-semibold uppercase tracking-wider">{liveCount} Channels Live Now</span> */}
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">All Channels</h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Browse our full lineup of 200+ live channels across every genre and category.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search channels..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 text-slate-100 placeholder-slate-500 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-red-500/60 focus:ring-1 focus:ring-red-500/30 transition-colors"
            />
          </div>
          <div className="text-slate-500 text-sm flex items-center flex-shrink-0">
            {filtered.length} channels
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.name
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:border-slate-600 hover:text-slate-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-slate-600" />
            </div>
            <div className="text-slate-400 text-lg font-medium">No channels found</div>
            <div className="text-slate-600 text-sm mt-1">Try a different search or category</div>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {filtered.map((ch) => (
              <Link key={ch.id} href={`/live-tv?id=${ch.id}`}>
                <div className="group bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col items-center gap-3 hover:border-slate-600 hover:bg-slate-800/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 cursor-pointer">
                  <div className="relative">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-xl font-black shadow-lg group-hover:scale-105 transition-transform duration-300"
                      style={{
                        boxShadow: `0 8px 24px 40`,
                      }}
                    >
                      <img src={'https://www.codeminer.in/tvchanel/admin/upload/' +ch.logo} />
                    </div>
                    {/* {ch.isLive && (
                      <div className="absolute -top-1.5 -right-1.5 flex items-center gap-0.5 bg-red-600 rounded-full px-1.5 py-0.5">
                        <div className="live-dot w-1.5 h-1.5 bg-white rounded-full" />
                      </div>
                    )} */}
                  </div>

                  <div className="text-center w-full">
                    <div className="text-white font-semibold text-sm truncate">{ch.name}</div>
                    <div className="text-slate-500 text-xs mt-0.5 truncate">{ch.category}</div>
                  </div>

                  <div className="w-full flex items-center justify-between">
                    <span className="text-slate-600 text-[10px] font-mono">CH {ch.code}</span>
                    {/* {ch.isLive ? (
                      <span className="flex items-center gap-1 text-red-400 text-[10px] font-bold uppercase">
                        <Radio className="w-2.5 h-2.5" />
                        Live
                      </span>
                    ) : (
                      <span className="text-slate-600 text-[10px]">Off Air</span>
                    )} */}
                  </div>

                  {/* <div className="w-full hidden group-hover:flex flex-col gap-1.5 mt-0 border-t border-slate-700/50 pt-2">
                    <div className="text-slate-400 text-[10px] truncate text-center">{ch.currentShow}</div>
                    <div className="flex items-center justify-center gap-1 text-slate-500 text-[10px]">
                      <Users className="w-2.5 h-2.5" />
                      {ch.viewers}
                    </div>
                  </div> */}

                  <div className="w-full hidden group-hover:flex">
                    <div className="w-full flex items-center justify-center gap-1.5 bg-red-600/20 hover:bg-red-600 text-red-400 hover:text-white text-xs font-semibold py-1.5 rounded-lg transition-colors">
                      <Play className="w-3 h-3 fill-current" />
                      Watch
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
