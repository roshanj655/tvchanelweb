'use client';

import Link from 'next/link';
import { Radio, Play, TrendingUp, Users, Tv, Award, ChevronRight, Signal, Globe, Shield, Phone, Smartphone } from 'lucide-react';
import channelsData from '@/lib/channels-data';
import { useEffect, useState } from 'react';
import { Channel } from '@/lib/interface';
import HLSPlayer from '@/components/ui/HLSPlayer';

const stats = [
  { label: 'Live Channels', value: '200+', icon: Tv },
  { label: 'Daily Viewers', value: '1M+', icon: Users },
  { label: 'Countries', value: '1+', icon: Globe },
  { label: 'HD Channels', value: '98%', icon: Signal },
];

const features = [
  {
    icon: Radio,
    title: 'Always Live',
    desc: 'Non-stop live broadcasting across all genres, 24 hours a day, 7 days a week.',
  },
  {
    icon: Shield,
    title: 'Crystal Clear HD',
    desc: 'Premium HD and 4K streaming quality with adaptive bitrate technology.',
  },
  {
    icon: Globe,
    title: 'Watch Anywhere',
    desc: 'Stream on any device — TV, phone, tablet, or desktop, from anywhere in the world.',
  },
  {
    icon: Award,
    title: 'Award Winning',
    desc: 'Recognized as the best live streaming platform for three consecutive years.',
  },
];

const tickerItems = [
  'BREAKING: Major sports championship results announced',
  'LIVE: World leaders summit continues in Geneva',
  'MARKETS: Tech stocks reach record highs',
  'SPORTS: Championship finals begin tonight',
  'WEATHER: Severe storm warning issued for coastal regions',
  'ENTERTAINMENT: Award season kicks off with stellar lineup',
];

export default function Home() {
   const [channels, setChannels] = useState<Channel[]>([]);
   useEffect(() => {
         fetchChannels();
       }, []);
       const fetchChannels = async () => {
           try {
               const data = await channelsData.fetchChannels();
               setChannels(data);
               stats[0].value = `${data.length}+`;
               console.log(data);
           } catch (error) {
             console.error('Failed to load channels:', error);
           } finally {
           //   setLoading(false);
           }
         };
  const featuredChannels = channels.slice(0, 6);
  return (
    <div className="bg-slate-950">
      {/* News Ticker */}
      <div className="bg-red-600 pt-16">
        <div className="flex items-center overflow-hidden h-9">
          <div className="flex-shrink-0 bg-red-800 px-4 h-full flex items-center gap-2 z-10">
            <div className="live-dot w-2 h-2 bg-white rounded-full" />
            <span className="text-white text-xs font-bold uppercase tracking-wider">Breaking</span>
          </div>
          <div className="overflow-hidden flex-1">
            <div className="ticker-animate whitespace-nowrap text-white text-xs font-medium">
              {tickerItems.map((item, i) => (
                <span key={i} className="mr-12">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 min-h-[85vh] flex items-center">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(rgba(239,68,68,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(239,68,68,0.15) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-sky-600/8 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-red-600/15 border border-red-500/30 rounded-full px-4 py-1.5 mb-6">
                <div className="live-dot w-2 h-2 bg-red-400 rounded-full" />
                <span className="text-red-300 text-xs font-semibold uppercase tracking-wider">Live Now</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
                Watch TV
                <br />
                <span className="text-gradient">Live, Anytime,</span>
                <br />
                Anywhere
              </h1>

              <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
                Stream 200+ live channels in HD quality — news, sports, movies, entertainment and more. No subscription required.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/live-tv"
                  className="flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-red-600/30 hover:-translate-y-0.5"
                >
                  <Play className="w-5 h-5 fill-white" />
                  Start Watching Free
                </Link>
                <Link
                  href="/channels"
                  className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold px-6 py-3.5 rounded-xl border border-slate-700 transition-all duration-200 hover:-translate-y-0.5"
                >
                  Browse Channels
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-6">
                {stats.slice(0, 3).map(({ label, value }) => (
                  <div key={label}>
                    <div className="text-2xl font-bold text-white">{value}</div>
                    <div className="text-slate-500 text-sm">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-slate-800/60 border border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl">
                <div className="relative bg-slate-900 aspect-video flex items-center justify-center overflow-hidden">
                  {/* <img
                    src="https://images.pexels.com/photos/1227996/pexels-photo-1227996.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Live TV Preview"
                    className="w-full h-full object-cover opacity-70"
                  /> */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  <HLSPlayer src={featuredChannels[3]?.link} />
                </div>

                <div className="p-4 grid grid-cols-4 gap-2">
                  {featuredChannels.slice(0, 4).map((ch) => (
                    <div
                      key={ch.id}
                      className="rounded-lg p-2.5 flex flex-col items-center gap-1 cursor-pointer hover:bg-slate-700/50 transition-colors"
                      style={{ backgroundColor: `#00000015` }}
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                        
                      >
                        <img src={'https://www.codeminer.in/tvchanel/admin/upload/' +ch.logo} />
                      </div>
                      <span className="text-slate-400 text-[10px] truncate w-full text-center">{ch.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-slate-800 border border-slate-700 rounded-xl p-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-sky-500/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-sky-400" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">50M+</div>
                    <div className="text-slate-400 text-xs">Viewers Today</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(({ label, value, icon: Icon }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="w-11 h-11 bg-red-600/15 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{value}</div>
                  <div className="text-slate-500 text-sm">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Now Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="live-dot w-2.5 h-2.5 bg-red-500 rounded-full" />
              <span className="text-red-400 text-sm font-semibold uppercase tracking-wider">Streaming Now</span>
            </div>
            <h2 className="text-3xl font-bold text-white">Popular Live Channels</h2>
          </div>
          <Link
            href="/channels"
            className="flex items-center gap-1 text-slate-400 hover:text-red-400 text-sm font-medium transition-colors"
          >
            View All <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredChannels.map((ch) => (
            <Link key={ch.id} href={`/live-tv?id=${ch.id}`}>
              <div className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-600 transition-all duration-300 hover:shadow-xl hover:shadow-black/40 hover:-translate-y-1 cursor-pointer">
                <div className="relative aspect-video bg-slate-800 overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-30"
                    
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-xl font-black shadow-2xl"
                      
                    >
                      <img src={'https://www.codeminer.in/tvchanel/admin/upload/' +ch.logo} />
                    </div>
                  </div>
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-red-600/90 backdrop-blur-sm rounded-full px-2.5 py-1">
                    <div className="live-dot w-1.5 h-1.5 bg-white rounded-full" />
                    <span className="text-white text-[10px] font-bold uppercase">Live</span>
                  </div>
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm rounded-full px-2.5 py-1">
                    {/* <span className="text-white text-[10px] font-medium">{ch.viewers}</span> */}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                      <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-semibold">{ch.name}</div>
                      <div className="text-slate-500 text-sm mt-0.5">{ch.code}</div>
                    </div>
                    <span
                      className="text-xs font-medium px-2.5 py-1 rounded-full"
                    >
                      {ch.category}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Why Choose OM Diamond 24?</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              We deliver the best live television experience with cutting-edge technology and an unmatched channel lineup.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-red-500/30 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-red-600/15 rounded-xl flex items-center justify-center mb-5 group-hover:bg-red-600/25 transition-colors">
                  <Icon className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-red-700 via-red-600 to-orange-600 rounded-3xl p-12 text-center overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
            <div className="relative">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Ready to Watch Live TV?</h2>
              <p className="text-red-100 text-lg mb-8 max-w-xl mx-auto">
                Join millions of viewers streaming live channels right now. No signup required.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/live-tv"
                  className="flex items-center gap-2 bg-white text-red-600 font-bold px-8 py-4 rounded-xl hover:bg-red-50 transition-colors shadow-xl"
                >
                  <Smartphone className="w-5 h-5 fill-red-600" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
                  Download Our App
                </Link>
                <Link
                  href="/channels"
                  className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/30 transition-colors border border-white/30"
                >
                  Browse Channels
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
