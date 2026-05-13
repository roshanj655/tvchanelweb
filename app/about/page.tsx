import { Tv, Users, Globe, Award, Signal, Shield, TrendingUp, Radio } from 'lucide-react';
import Link from 'next/link';

const milestones = [
  { year: '2010', title: 'Founded', desc: 'StreamTV launched with just 10 channels and a vision to revolutionize live broadcasting.' },
  { year: '2014', title: 'Global Expansion', desc: 'Expanded to 40+ countries, bringing live news and entertainment to millions worldwide.' },
  { year: '2018', title: '100M Viewers', desc: 'Crossed the milestone of 100 million monthly active viewers across all platforms.' },
  { year: '2021', title: '4K Streaming', desc: 'Launched industry-first 4K HDR live streaming across 50+ premium channels.' },
  { year: '2024', title: '200+ Channels', desc: 'Today we offer 200+ live channels spanning news, sports, movies, and entertainment.' },
];

const team = [
  { name: 'Sarah Mitchell', role: 'Chief Executive Officer', img: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'James Rodriguez', role: 'Chief Technology Officer', img: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Priya Patel', role: 'Head of Content', img: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Marcus Chen', role: 'VP of Engineering', img: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400' },
];

const values = [
  { icon: Signal, title: 'Quality First', desc: 'We never compromise on streaming quality. Every channel delivered in the highest possible resolution.' },
  { icon: Shield, title: 'Trusted & Reliable', desc: '99.9% uptime guarantee ensures your favorite shows are always available when you need them.' },
  { icon: Globe, title: 'Globally Accessible', desc: 'Broadcasting to 120+ countries with localized content and multi-language support.' },
  { icon: TrendingUp, title: 'Always Innovating', desc: 'Constantly pushing boundaries with new technology to enhance your viewing experience.' },
];

export default function AboutPage() {
  return (
    <div className="bg-slate-950 pt-16">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-950 py-24">
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'linear-gradient(rgba(239,68,68,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(239,68,68,0.2) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-red-600/15 border border-red-500/30 rounded-full px-4 py-1.5 mb-6">
            <Radio className="w-3.5 h-3.5 text-red-400" />
            <span className="text-red-300 text-xs font-semibold uppercase tracking-wider">Our Story</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Broadcasting the World&apos;s
            <br />
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Best Content</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Since 2010, StreamTV has been on a mission to bring live television to everyone, everywhere. We believe great content should have no boundaries.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-red-400 text-sm font-semibold uppercase tracking-wider">Our Mission</span>
            <h2 className="text-4xl font-bold text-white mt-3 mb-6">Connecting the World Through Live Broadcasting</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              We started StreamTV with a simple belief: everyone deserves access to quality live television without borders or barriers. What began as a small streaming service has grown into one of the world&apos;s most trusted broadcasting platforms.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Today, we serve over 50 million viewers daily across 120+ countries, delivering 200+ live channels spanning news, sports, entertainment, and culture — all in stunning high definition.
            </p>
            <Link
              href="/live-tv"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-semibold px-6 py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-red-600/30"
            >
              <Tv className="w-4 h-4" />
              Explore Our Channels
            </Link>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our Team at Work"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-slate-900 border border-slate-700 rounded-2xl p-5 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">50M+</div>
                  <div className="text-slate-400 text-sm">Daily Viewers</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-slate-900 border border-slate-700 rounded-2xl p-5 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-sky-600/20 rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-sky-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">120+</div>
                  <div className="text-slate-400 text-sm">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-red-400 text-sm font-semibold uppercase tracking-wider">What We Stand For</span>
            <h2 className="text-4xl font-bold text-white mt-3">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-red-500/30 transition-all duration-300 group">
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

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-red-400 text-sm font-semibold uppercase tracking-wider">Our Journey</span>
          <h2 className="text-4xl font-bold text-white mt-3">Key Milestones</h2>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-0.5 top-0 bottom-0 w-px bg-slate-700 hidden md:block" />
          <div className="space-y-8">
            {milestones.map((m, i) => (
              <div key={m.year} className={`relative flex gap-8 items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-red-500/20 transition-colors">
                    <div className="text-red-400 font-bold text-2xl mb-1">{m.year}</div>
                    <div className="text-white font-semibold text-lg mb-2">{m.title}</div>
                    <div className="text-slate-500 text-sm leading-relaxed">{m.desc}</div>
                  </div>
                </div>
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full border-4 border-slate-950 z-10" />
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-red-400 text-sm font-semibold uppercase tracking-wider">The People Behind StreamTV</span>
            <h2 className="text-4xl font-bold text-white mt-3">Leadership Team</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-600 transition-all duration-300">
                <div className="relative overflow-hidden h-56">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                </div>
                <div className="p-4">
                  <div className="text-white font-semibold">{member.name}</div>
                  <div className="text-slate-500 text-sm mt-0.5">{member.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-3xl p-12 text-center">
          <Award className="w-14 h-14 text-amber-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">Award-Winning Broadcasting</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto mb-8">
            Recognized by industry leaders for innovation, quality, and commitment to viewer experience.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {['Best Streaming Platform 2024', 'Innovation Award 2023', 'Most Reliable Service 2022'].map((award) => (
              <div key={award} className="bg-amber-400/10 border border-amber-400/20 rounded-xl px-5 py-3">
                <span className="text-amber-300 font-medium text-sm">{award}</span>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}
