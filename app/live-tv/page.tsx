'use client';

import { useState } from 'react';
import { Play, Radio, Users, Signal, Volume2, Maximize, Settings, Search } from 'lucide-react';
import { channels } from '@/lib/channels-data';

export default function LiveTVPage() {
  const [activeChannel, setActiveChannel] = useState(channels[0]);
  const [search, setSearch] = useState('');

  const filteredChannels = channels.filter(
    (ch) =>
      ch.name.toLowerCase().includes(search.toLowerCase()) ||
      ch.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-slate-950 pt-16 min-h-screen flex flex-col">
      <div className="bg-slate-900 border-b border-slate-800 px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="live-dot w-2 h-2 bg-red-500 rounded-full" />
            <span className="text-red-400 text-xs font-bold uppercase tracking-wider">Live TV</span>
          </div>
          <span className="text-slate-600 text-xs hidden sm:inline">|</span>
          <span className="text-slate-400 text-xs hidden sm:inline">{channels.filter((c) => c.isLive).length} channels broadcasting</span>
        </div>
        <div className="flex items-center gap-2">
          <Signal className="w-4 h-4 text-green-400" />
          <span className="text-green-400 text-xs font-medium">HD Quality</span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
        <div className="flex-1 flex flex-col min-w-0">
          <div className="relative bg-black w-full" style={{ aspectRatio: '16/9', maxHeight: '75vh' }}>
            <iframe
              key={activeChannel.id}
              src={`https://www.youtube.com/embed/${activeChannel.streamId}?autoplay=1&mute=1&controls=1&modestbranding=1&rel=0`}
              title={`${activeChannel.name} Live Stream`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />

            <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/60 to-transparent p-4 flex items-center justify-between pointer-events-none">
              <div className="flex items-center gap-2">
                <div
                  className="flex items-center gap-2 rounded-lg px-3 py-1.5"
                  style={{ backgroundColor: `${activeChannel.color}CC` }}
                >
                  <div className="live-dot w-2 h-2 bg-white rounded-full" />
                  <span className="text-white text-xs font-bold uppercase">Live</span>
                </div>
                <div className="bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1.5">
                  <span className="text-white text-xs font-medium">CH {activeChannel.number}</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1.5">
                <Users className="w-3 h-3 text-slate-300" />
                <span className="text-slate-300 text-xs">{activeChannel.viewers} watching</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 border-t border-slate-800 p-4 sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4 min-w-0">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-lg font-black flex-shrink-0 shadow-lg"
                  style={{
                    backgroundColor: activeChannel.color,
                    boxShadow: `0 4px 20px ${activeChannel.color}50`,
                  }}
                >
                  {activeChannel.name.slice(0, 2)}
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h1 className="text-white text-xl font-bold">{activeChannel.name}</h1>
                    <span
                      className="text-xs font-medium px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: `${activeChannel.color}20`, color: activeChannel.color }}
                    >
                      {activeChannel.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mt-1 flex-wrap">
                    <span className="text-slate-400 text-sm">{activeChannel.currentShow}</span>
                    <span className="text-slate-700">|</span>
                    <div className="flex items-center gap-1.5 text-red-400 text-sm">
                      <div className="live-dot w-1.5 h-1.5 bg-red-400 rounded-full" />
                      <span className="font-medium">On Air Now</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <button className="p-2.5 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors" aria-label="Volume">
                  <Volume2 className="w-4 h-4 text-slate-400" />
                </button>
                <button className="p-2.5 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors" aria-label="Settings">
                  <Settings className="w-4 h-4 text-slate-400" />
                </button>
                <button className="p-2.5 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors" aria-label="Fullscreen">
                  <Maximize className="w-4 h-4 text-slate-400" />
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {['HD', '16:9', 'Stereo', 'Live Stream'].map((tag) => (
                <span key={tag} className="text-slate-500 text-xs bg-slate-800 px-2.5 py-1 rounded-lg">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:hidden bg-slate-950 border-t border-slate-800 p-4">
            <h3 className="text-white font-semibold text-sm mb-3">More Channels</h3>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {channels.slice(0, 10).map((ch) => (
                <button
                  key={ch.id}
                  onClick={() => setActiveChannel(ch)}
                  className={`flex-shrink-0 flex flex-col items-center gap-2 p-3 rounded-xl transition-all ${
                    activeChannel.id === ch.id ? 'bg-slate-800 border border-slate-600' : 'hover:bg-slate-900'
                  }`}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm font-bold"
                    style={{ backgroundColor: ch.color }}
                  >
                    {ch.name.slice(0, 2)}
                  </div>
                  <span className="text-slate-400 text-xs whitespace-nowrap">{ch.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden lg:flex flex-col w-80 xl:w-96 bg-slate-900 border-l border-slate-800 flex-shrink-0">
          <div className="p-4 border-b border-slate-800">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-white font-semibold">Channels</h2>
              <span className="text-slate-500 text-xs">{channels.filter((c) => c.isLive).length} Live</span>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
              <input
                type="text"
                placeholder="Search channels..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-600 rounded-xl pl-9 pr-3 py-2 text-xs focus:outline-none focus:border-red-500/50 transition-colors"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {filteredChannels.map((ch) => (
              <button
                key={ch.id}
                onClick={() => setActiveChannel(ch)}
                className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-800/60 transition-colors text-left group ${
                  activeChannel.id === ch.id ? 'bg-slate-800 border-l-2 border-red-500' : 'border-l-2 border-transparent'
                }`}
              >
                <div className="relative flex-shrink-0">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm font-bold"
                    style={{ backgroundColor: ch.color }}
                  >
                    {ch.name.slice(0, 2)}
                  </div>
                  {ch.isLive && (
                    <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-red-600 rounded-full border-2 border-slate-900 flex items-center justify-center">
                      <div className="live-dot w-1 h-1 bg-white rounded-full" />
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <span className={`text-sm font-medium truncate block ${activeChannel.id === ch.id ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                    {ch.name}
                  </span>
                  <span className="text-slate-600 text-xs truncate block mt-0.5">{ch.currentShow}</span>
                </div>

                <div className="flex flex-col items-end gap-1 flex-shrink-0">
                  {ch.isLive ? (
                    <div className="flex items-center gap-1 text-red-400 text-[10px] font-bold uppercase">
                      <Radio className="w-2.5 h-2.5" />
                      Live
                    </div>
                  ) : (
                    <span className="text-slate-600 text-[10px]">Off Air</span>
                  )}
                  <span className="text-slate-600 text-[10px]">{ch.viewers}</span>
                </div>

                {activeChannel.id === ch.id && (
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 bg-red-600/20 rounded-lg flex items-center justify-center">
                      <Play className="w-3 h-3 text-red-400 fill-red-400" />
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>

          <div className="p-4 border-t border-slate-800">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-500">{filteredChannels.length} channels available</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
