export interface Channel {
  id: number;
  name: string;
  category: string;
  color: string;
  number: string;
  isLive: boolean;
  currentShow: string;
  viewers: string;
  streamId?: string;
}

export const channels: Channel[] = [
  { id: 1, name: "NewsNow", category: "News", color: "#ef4444", number: "001", isLive: true, currentShow: "Morning Briefing", viewers: "1.2M", streamId: "jfKfPfyJRdk" },
  { id: 2, name: "SportZone", category: "Sports", color: "#3b82f6", number: "002", isLive: true, currentShow: "Premier League Live", viewers: "3.4M", streamId: "jfKfPfyJRdk" },
  { id: 3, name: "CineMax", category: "Movies", color: "#f59e0b", number: "003", isLive: true, currentShow: "Action Blockbuster", viewers: "890K", streamId: "jfKfPfyJRdk" },
  { id: 4, name: "DocuWorld", category: "Documentary", color: "#10b981", number: "004", isLive: true, currentShow: "Planet Earth", viewers: "560K", streamId: "jfKfPfyJRdk" },
  { id: 5, name: "KidsTV", category: "Kids", color: "#ec4899", number: "005", isLive: true, currentShow: "Cartoon Hour", viewers: "2.1M", streamId: "jfKfPfyJRdk" },
  { id: 6, name: "TechVision", category: "Technology", color: "#06b6d4", number: "006", isLive: true, currentShow: "Future Tech Today", viewers: "430K", streamId: "jfKfPfyJRdk" },
  { id: 7, name: "MusicBeat", category: "Music", color: "#a855f7", number: "007", isLive: false, currentShow: "Top 40 Countdown", viewers: "780K", streamId: "jfKfPfyJRdk" },
  { id: 8, name: "LifeStyle+", category: "Lifestyle", color: "#f97316", number: "008", isLive: true, currentShow: "Home & Garden", viewers: "320K", streamId: "jfKfPfyJRdk" },
  { id: 9, name: "GlobalNews", category: "News", color: "#ef4444", number: "009", isLive: true, currentShow: "World Report", viewers: "2.8M", streamId: "jfKfPfyJRdk" },
  { id: 10, name: "SportExtra", category: "Sports", color: "#3b82f6", number: "010", isLive: false, currentShow: "NFL Highlights", viewers: "1.5M", streamId: "jfKfPfyJRdk" },
  { id: 11, name: "FilmClassic", category: "Movies", color: "#f59e0b", number: "011", isLive: true, currentShow: "Golden Age Cinema", viewers: "210K", streamId: "jfKfPfyJRdk" },
  { id: 12, name: "NatureHD", category: "Documentary", color: "#10b981", number: "012", isLive: true, currentShow: "Wild Africa", viewers: "670K", streamId: "jfKfPfyJRdk" },
  { id: 13, name: "AnimePlus", category: "Kids", color: "#ec4899", number: "013", isLive: false, currentShow: "Anime Marathon", viewers: "1.9M", streamId: "jfKfPfyJRdk" },
  { id: 14, name: "FinanceTV", category: "Business", color: "#06b6d4", number: "014", isLive: true, currentShow: "Market Watch", viewers: "890K", streamId: "jfKfPfyJRdk" },
  { id: 15, name: "CookingCh", category: "Lifestyle", color: "#f97316", number: "015", isLive: true, currentShow: "Chef's Kitchen", viewers: "540K", streamId: "jfKfPfyJRdk" },
  { id: 16, name: "HistoryNet", category: "Documentary", color: "#10b981", number: "016", isLive: true, currentShow: "World War II", viewers: "760K", streamId: "jfKfPfyJRdk" },
  { id: 17, name: "CrimeWatch", category: "Drama", color: "#6366f1", number: "017", isLive: false, currentShow: "True Crime Files", viewers: "430K", streamId: "jfKfPfyJRdk" },
  { id: 18, name: "Comedy+", category: "Entertainment", color: "#eab308", number: "018", isLive: true, currentShow: "Stand Up Night", viewers: "1.1M", streamId: "jfKfPfyJRdk" },
  { id: 19, name: "SciFiMax", category: "Entertainment", color: "#8b5cf6", number: "019", isLive: true, currentShow: "Space Odyssey", viewers: "870K", streamId: "jfKfPfyJRdk" },
  { id: 20, name: "TravelTV", category: "Lifestyle", color: "#f97316", number: "020", isLive: false, currentShow: "World Explorer", viewers: "650K", streamId: "jfKfPfyJRdk" },
  { id: 21, name: "WeatherNow", category: "News", color: "#ef4444", number: "021", isLive: true, currentShow: "24/7 Weather", viewers: "980K", streamId: "jfKfPfyJRdk" },
  { id: 22, name: "FashionTV", category: "Lifestyle", color: "#ec4899", number: "022", isLive: true, currentShow: "Runway Live", viewers: "720K", streamId: "jfKfPfyJRdk" },
  { id: 23, name: "GamersTV", category: "Technology", color: "#06b6d4", number: "023", isLive: false, currentShow: "Esports Arena", viewers: "2.3M", streamId: "jfKfPfyJRdk" },
  { id: 24, name: "HealthPlus", category: "Lifestyle", color: "#10b981", number: "024", isLive: true, currentShow: "Wellness Today", viewers: "410K", streamId: "jfKfPfyJRdk" },
];

export const categories = ["All", "News", "Sports", "Movies", "Documentary", "Kids", "Technology", "Lifestyle", "Business", "Drama", "Entertainment", "Music"];
