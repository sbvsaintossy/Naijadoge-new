import React, { useState, useEffect, useRef } from 'react';
import { LivestreamComment, LivestreamGift } from '../types';
import {
  Heart,
  Send,
  Sparkles,
  Users,
  Flame,
  Volume2,
  VolumeX,
  Share2,
  MoreVertical,
  Shield,
  Crown,
  Gift as GiftIcon,
  CheckCircle,
  TrendingUp,
} from 'lucide-react';

interface FloatingHeartItem {
  id: number;
  color: string;
  left: number;
  scale: number;
}

const INITIAL_COMMENTS: LivestreamComment[] = [
  {
    id: 'c1',
    user: 'Kofi Mensah',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    badge: 'VIP 6',
    level: 42,
    message: 'Greetings from Ghana 🇬🇭 Top energy!',
    country: 'Ghana',
    countryFlag: '🇬🇭',
    timestamp: 'Just now',
  },
  {
    id: 'c2',
    user: 'Wanjiru N.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80',
    badge: 'Top Fan',
    level: 38,
    message: 'Watching from Kenya 🇰🇪 Beautiful stream tonight',
    country: 'Kenya',
    countryFlag: '🇰🇪',
    timestamp: 'Just now',
  },
  {
    id: 'c3',
    user: 'Chidi Okafor',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    badge: 'VIP 9',
    level: 65,
    message: 'You look amazing Queen of Africa 👑',
    country: 'Nigeria',
    countryFlag: '🇳🇬',
    timestamp: 'Just now',
  },
  {
    id: 'c4',
    user: 'Thabo M.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
    badge: 'VIP 4',
    level: 29,
    message: 'Love from South Africa 🇿🇦 Naijadoge hosts are the best',
    country: 'South Africa',
    countryFlag: '🇿🇦',
    timestamp: 'Just now',
  },
  {
    id: 'c5',
    user: 'Fatou Diallo',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80',
    badge: 'Patron',
    level: 54,
    message: 'Hello from Senegal 🇸🇳 sending big love!',
    country: 'Senegal',
    countryFlag: '🇸🇳',
    timestamp: 'Just now',
  },
];

const RECURRING_MESSAGES = [
  { user: 'Amina Bello', flag: '🇳🇬', msg: 'The audio & video quality is next level 🔥', level: 51, badge: 'VIP 8' },
  { user: 'Samuel Osei', flag: '🇬🇭', msg: 'Super proud of African livestreaming 🚀', level: 33, badge: 'Supporter' },
  { user: 'David Kimani', flag: '🇰🇪', msg: 'Naijadoge agency changed the game in Nairobi', level: 60, badge: 'VIP 10' },
  { user: 'Rose Khumalo', flag: '🇿🇦', msg: 'Sending blessings from Cape Town ❤️✨', level: 47, badge: 'VIP 5' },
  { user: 'Emeka Nwosu', flag: '🇳🇬', msg: 'Lions loaded ready for the battle round 🦁', level: 78, badge: 'Legend' },
  { user: 'Mariam Toure', flag: '🇨🇮', msg: 'Salutations depuis Abidjan! 👑', level: 40, badge: 'VIP 4' },
  { user: 'Tariq Hassan', flag: '🇪🇬', msg: 'Amazing vibes from Cairo 🇪🇬', level: 36, badge: 'Fan' },
  { user: 'Blessing Adebayo', flag: '🇳🇬', msg: 'Top 1 African host on the platform tonight! 🎉', level: 82, badge: 'Diamond VIP' },
];

const PRESET_GIFTS: { name: string; icon: string; coins: number; color: string }[] = [
  { name: 'Lion Gift', icon: '🦁', coins: 29999, color: 'from-amber-500 to-yellow-300' },
  { name: 'Crown Gift', icon: '👑', coins: 15000, color: 'from-yellow-400 to-amber-600' },
  { name: 'Galaxy Gift', icon: '🌌', coins: 10000, color: 'from-purple-500 to-indigo-400' },
  { name: '500 Coins', icon: '🪙', coins: 500, color: 'from-yellow-300 to-yellow-500' },
];

export const LiveStreamSimulator: React.FC = () => {
  const [viewerCount, setViewerCount] = useState(18432);
  const [diamonds, setDiamonds] = useState(2487500);
  const [comments, setComments] = useState<LivestreamComment[]>(INITIAL_COMMENTS);
  const [activeBannerGift, setActiveBannerGift] = useState<LivestreamGift | null>({
    id: 'g1',
    sender: 'Amina B.',
    giftName: 'Lion Gift',
    giftIcon: '🦁',
    coins: 29999,
    highlightColor: 'from-amber-500 to-yellow-300',
  });
  const [floatingHearts, setFloatingHearts] = useState<FloatingHeartItem[]>([]);
  const [userComment, setUserComment] = useState('');
  const [isMuted, setIsMuted] = useState(true);
  const [streamLikes, setStreamLikes] = useState(384200);

  const commentsEndRef = useRef<HTMLDivElement>(null);
  const heartCounter = useRef(0);

  // Periodic simulated realistic viewer fluctuation
  useEffect(() => {
    const viewerInterval = setInterval(() => {
      setViewerCount((prev) => {
        const delta = Math.floor(Math.random() * 21) - 8;
        return Math.max(16500, prev + delta);
      });
    }, 2400);

    return () => clearInterval(viewerInterval);
  }, []);

  // Periodic live upward scrolling comments
  useEffect(() => {
    let msgIndex = 0;
    const commentInterval = setInterval(() => {
      const template = RECURRING_MESSAGES[msgIndex % RECURRING_MESSAGES.length];
      msgIndex++;

      const newComment: LivestreamComment = {
        id: `c_${Date.now()}_${Math.random()}`,
        user: template.user,
        avatar: `https://images.unsplash.com/photo-${1500000000000 + (msgIndex % 10) * 100000}?w=100&auto=format&fit=crop&q=80`,
        badge: template.badge,
        level: template.level,
        message: template.msg,
        country: 'Africa',
        countryFlag: template.flag,
        timestamp: 'Just now',
      };

      setComments((prev) => [...prev.slice(-12), newComment]);
    }, 2800);

    return () => clearInterval(commentInterval);
  }, []);

  // Periodic automatic gift notifications ("Amina sent Lion Gift", etc.)
  useEffect(() => {
    const giftQueue = [
      { sender: 'Samuel Osei', giftName: 'Crown Gift', giftIcon: '👑', coins: 15000, color: 'from-yellow-400 to-amber-600' },
      { sender: 'David Kimani', giftName: 'Galaxy Gift', giftIcon: '🌌', coins: 10000, color: 'from-purple-500 to-indigo-400' },
      { sender: 'Rose Khumalo', giftName: '500 Coins', giftIcon: '🪙', coins: 500, color: 'from-yellow-300 to-yellow-500' },
      { sender: 'Amina Bello', giftName: 'Lion Gift', giftIcon: '🦁', coins: 29999, color: 'from-amber-500 to-yellow-300' },
    ];
    let gIdx = 0;

    const giftInterval = setInterval(() => {
      const item = giftQueue[gIdx % giftQueue.length];
      gIdx++;
      const newGift: LivestreamGift = {
        id: `gift_${Date.now()}`,
        sender: item.sender,
        giftName: item.giftName,
        giftIcon: item.giftIcon,
        coins: item.coins,
        highlightColor: item.color,
      };
      setActiveBannerGift(newGift);
      setDiamonds((prev) => prev + item.coins);

      // Trigger burst of hearts
      triggerHeartBurst(4);
    }, 4500);

    return () => clearInterval(giftInterval);
  }, []);

  const triggerHeartBurst = (count = 3) => {
    const colors = ['#D4AF37', '#FF3B69', '#5B8DEF', '#FF6B6B', '#F59E0B', '#E11D48'];
    const newHearts: FloatingHeartItem[] = [];

    for (let i = 0; i < count; i++) {
      heartCounter.current += 1;
      newHearts.push({
        id: heartCounter.current,
        color: colors[Math.floor(Math.random() * colors.length)],
        left: Math.floor(Math.random() * 60) + 20, // 20% to 80%
        scale: 0.8 + Math.random() * 0.5,
      });
    }

    setFloatingHearts((prev) => [...prev.slice(-15), ...newHearts]);
    setStreamLikes((prev) => prev + count * 12);
  };

  const handleSendGift = (gift: typeof PRESET_GIFTS[0]) => {
    const customGift: LivestreamGift = {
      id: `user_gift_${Date.now()}`,
      sender: 'You (VIP Guest)',
      giftName: gift.name,
      giftIcon: gift.icon,
      coins: gift.coins,
      highlightColor: gift.color,
    };
    setActiveBannerGift(customGift);
    setDiamonds((prev) => prev + gift.coins);
    triggerHeartBurst(6);

    const userGiftComment: LivestreamComment = {
      id: `cg_${Date.now()}`,
      user: 'You',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
      badge: 'Patron VIP',
      level: 99,
      message: `Sent ${gift.name} (${gift.icon})! Keep shining!`,
      country: 'Global',
      countryFlag: '🌍',
      timestamp: 'Just now',
    };
    setComments((prev) => [...prev.slice(-12), userGiftComment]);
  };

  const handlePostComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userComment.trim()) return;

    const newComment: LivestreamComment = {
      id: `user_c_${Date.now()}`,
      user: 'You',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
      badge: 'VIP Guest',
      level: 50,
      message: userComment.trim(),
      country: 'Africa',
      countryFlag: '🌍',
      timestamp: 'Just now',
    };

    setComments((prev) => [...prev.slice(-12), newComment]);
    setUserComment('');
    triggerHeartBurst(2);
  };

  return (
    <div
      id="livestream-simulation-container"
      className="relative w-full max-w-[420px] mx-auto aspect-[9/16] rounded-[32px] overflow-hidden border-[6px] border-[#1a3454] bg-[#11253E] shadow-2xl select-none flex flex-col justify-between"
    >
      {/* Radial Gold Lighting Gradient & African Queen Streamer Portrait Asset */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_40%,_rgba(212,175,55,0.18)_0%,_transparent_70%)] z-10 pointer-events-none" />
        <img
          src="/src/assets/images/african_queen_host_1788008269534.jpg"
          alt="Featured Naijadoge Elite Livestream Host"
          className="w-full h-full object-cover object-center scale-[1.02]"
          referrerPolicy="no-referrer"
        />
        {/* Cinematic Studio Overlays: Top Vignette & Bottom Text Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-[#07111F]/30 to-[#07111F]/70" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-transparent to-black/40" />
      </div>

      {/* Floating Animated Hearts Canvas */}
      <div className="absolute right-4 bottom-24 w-28 h-64 pointer-events-none z-30 overflow-hidden">
        {floatingHearts.map((heart) => (
          <div
            key={heart.id}
            className="absolute bottom-0 animate-float-heart"
            style={{
              left: `${heart.left}%`,
              transform: `scale(${heart.scale})`,
              color: heart.color,
            }}
          >
            <Heart className="w-6 h-6 fill-current drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" />
          </div>
        ))}
      </div>

      {/* ================= TOP HEADER BAR ================= */}
      <div className="relative z-20 p-3.5 space-y-2">
        <div className="flex items-center justify-between gap-2">
          {/* Host Profile Capsule */}
          <div className="flex items-center gap-2 bg-[#07111F]/80 backdrop-blur-md border border-white/[0.15] py-1 pl-1 pr-3 rounded-full shadow-lg">
            <div className="relative">
              <img
                src="/src/assets/images/african_queen_host_1788008269534.jpg"
                alt="Amara Queen"
                className="w-8 h-8 rounded-full object-cover border border-[#D4AF37]"
                referrerPolicy="no-referrer"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-[#07111F] rounded-full" />
            </div>
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1">
                <span className="text-[11px] font-bold text-white leading-tight">Amara Gold</span>
                <Crown className="w-3 h-3 text-[#D4AF37] fill-[#D4AF37]" />
              </div>
              <span className="text-[9px] text-[#B8C4D3] font-medium tracking-wide flex items-center gap-1">
                <span className="text-[#D4AF37] font-semibold">NAIJADOGE</span> Elite
              </span>
            </div>
            <button
              onClick={() => triggerHeartBurst(5)}
              className="ml-1 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-[#D4AF37] hover:bg-[#E8D38A] text-[#07111F] rounded-full transition-all cursor-pointer active:scale-95 shadow-sm"
            >
              + Follow
            </button>
          </div>

          {/* Viewer Count & Live Badge */}
          <div className="flex items-center gap-1.5">
            <div className="flex items-center gap-1.5 bg-rose-600/90 backdrop-blur-md px-2.5 py-1 rounded-full text-white text-[10px] font-black uppercase tracking-wider shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
              <span>LIVE</span>
            </div>

            <div className="flex items-center gap-1 bg-[#07111F]/80 backdrop-blur-md border border-white/[0.15] px-2.5 py-1 rounded-full text-white text-[11px] font-mono font-semibold">
              <Users className="w-3 h-3 text-[#5B8DEF]" />
              <span>{viewerCount.toLocaleString()}</span>
            </div>

            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-1.5 bg-[#07111F]/80 backdrop-blur-md border border-white/[0.15] rounded-full text-white/90 hover:text-white cursor-pointer"
              title={isMuted ? 'Unmute preview' : 'Mute preview'}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#D4AF37]" />}
            </button>
          </div>
        </div>

        {/* Stream Metrics & Top Ranking Pill */}
        <div className="flex items-center justify-between text-[10px] text-[#B8C4D3] px-1">
          <div className="flex items-center gap-2 bg-[#11253E]/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/[0.08]">
            <span className="text-[#D4AF37] font-bold">#1 Africa Daily Streamer</span>
            <span className="text-white/40">•</span>
            <span className="font-mono text-white/90">{(diamonds / 1000).toFixed(1)}k 🪙</span>
          </div>

          <div className="flex items-center gap-1 bg-amber-500/10 border border-amber-500/20 text-[#D4AF37] px-2 py-0.5 rounded text-[10px] font-medium">
            <Sparkles className="w-3 h-3" />
            <span>1080p Ultra HD</span>
          </div>
        </div>

        {/* Dynamic Gift Banner Notification (e.g. Amina sent Lion Gift) */}
        {activeBannerGift && (
          <div className="relative animate-in fade-in slide-in-from-left-4 duration-300">
            <div className="flex items-center gap-2 bg-gradient-to-r from-[#11253E]/95 via-[#0D1B2A]/90 to-transparent border-l-4 border-[#D4AF37] pl-2.5 pr-4 py-1.5 rounded-r-full shadow-[0_4px_20px_rgba(0,0,0,0.6)] backdrop-blur-md">
              <span className="text-2xl filter drop-shadow-md animate-bounce">{activeBannerGift.giftIcon}</span>
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-1 text-[11px] font-bold text-white">
                  <span>{activeBannerGift.sender}</span>
                  <span className="text-[#D4AF37]">sent {activeBannerGift.giftName}</span>
                </div>
                <div className="flex items-center gap-1 text-[9px] text-[#B8C4D3]">
                  <span className="text-yellow-400 font-bold">+{activeBannerGift.coins.toLocaleString()} Coins</span>
                  <span className="text-white/30">•</span>
                  <span className="text-emerald-400 font-semibold">Naijadoge Partner Pool</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ================= MIDDLE / BOTTOM STREAM FEED ================= */}
      <div className="relative z-20 p-3.5 space-y-3 flex flex-col justify-end">
        {/* Continuous Scrolling Comments Stream */}
        <div
          id="livestream-comments-scroller"
          className="max-h-44 overflow-y-auto space-y-1.5 pr-1 scrollbar-none flex flex-col-reverse"
        >
          <div ref={commentsEndRef} />
          {comments
            .slice()
            .reverse()
            .map((c) => (
              <div
                key={c.id}
                className="flex items-start gap-1.5 text-[11px] leading-tight bg-[#07111F]/70 backdrop-blur-md border border-white/[0.08] px-2.5 py-1.5 rounded-xl w-fit max-w-[92%] transition-all animate-in fade-in duration-200"
              >
                {/* Level / VIP Badge */}
                {c.badge && (
                  <span className="shrink-0 text-[8px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-gradient-to-r from-amber-500 to-yellow-600 text-black shadow-xs">
                    {c.badge}
                  </span>
                )}
                <div className="flex items-baseline gap-1 flex-wrap">
                  <span className="font-bold text-[#D4AF37] flex items-center gap-0.5">
                    {c.countryFlag} {c.user}:
                  </span>
                  <span className="text-white/95 font-medium">{c.message}</span>
                </div>
              </div>
            ))}
        </div>

        {/* Interactive Quick-Send Gift Pills */}
        <div className="space-y-1.5 pt-1">
          <div className="flex items-center justify-between text-[10px] text-[#B8C4D3]/80 px-1 font-medium">
            <span>Tap to send gift simulation:</span>
            <span className="text-[#D4AF37] flex items-center gap-1">
              <Flame className="w-3 h-3" /> {streamLikes.toLocaleString()} Likes
            </span>
          </div>

          <div className="grid grid-cols-4 gap-1.5">
            {PRESET_GIFTS.map((g) => (
              <button
                key={g.name}
                onClick={() => handleSendGift(g)}
                className="flex flex-col items-center justify-center p-1.5 rounded-xl bg-[#11253E]/90 hover:bg-[#1B365D] border border-white/[0.12] hover:border-[#D4AF37] transition-all cursor-pointer active:scale-95 group shadow-sm"
              >
                <span className="text-base group-hover:scale-125 transition-transform">{g.icon}</span>
                <span className="text-[9px] font-bold text-white tracking-tight mt-0.5">{g.name.split(' ')[0]}</span>
                <span className="text-[8px] text-[#D4AF37] font-mono">{g.coins}🪙</span>
              </button>
            ))}
          </div>
        </div>

        {/* Live Interaction Comment Input Bar */}
        <form onSubmit={handlePostComment} className="flex items-center gap-2 pt-1">
          <div className="relative flex-1">
            <input
              type="text"
              value={userComment}
              onChange={(e) => setUserComment(e.target.value)}
              placeholder="Send real-time comment..."
              className="w-full bg-[#07111F]/90 backdrop-blur-md border border-white/[0.15] focus:border-[#D4AF37] rounded-full px-3.5 py-2 text-xs text-white placeholder-[#B8C4D3]/50 focus:outline-none transition-all shadow-inner"
            />
          </div>

          <button
            type="submit"
            aria-label="Send live comment"
            className="p-2 bg-[#D4AF37] hover:bg-[#E8D38A] text-[#07111F] rounded-full cursor-pointer transition-all active:scale-95 shadow-md shrink-0"
          >
            <Send className="w-3.5 h-3.5" />
          </button>

          <button
            type="button"
            onClick={() => triggerHeartBurst(8)}
            aria-label="Send hearts"
            className="p-2 bg-rose-600/90 hover:bg-rose-500 text-white rounded-full cursor-pointer transition-all active:scale-110 shadow-md shrink-0"
          >
            <Heart className="w-3.5 h-3.5 fill-current" />
          </button>
        </form>
      </div>
    </div>
  );
};
