// src/components/Features.jsx

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import {
  CheckCircle2,
  XCircle,
  MinusCircle,
  Trophy,
  TrendingUp,
  Target,
  CalendarDays,
  ChevronRight,
  ChevronLeft,
  Clock,
  ShieldCheck,
  Activity,
} from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const settledPredictions = {
  wins: 72,
  losses: 23,
  voids: 5,
};

// Demonstration data only.
// Replace these figures with actual settled prediction records.
const performanceBySport = [
  {
    sport: "Football",
    market: "Match Result",
    settled: 45,
    wins: 34,
    losses: 11,
  },
  {
    sport: "Football",
    market: "Over/Under",
    settled: 25,
    wins: 19,
    losses: 6,
  },
  {
    sport: "Basketball",
    market: "Match Winner",
    settled: 20,
    wins: 14,
    losses: 6,
  },
  {
    sport: "Tennis",
    market: "Match Winner",
    settled: 10,
    wins: 5,
    losses: 5,
  },
];

// Demonstration betting slips.
// These are illustrative records, not verified betting results.
const winningSlips = [
  {
    id: 1,
    bookingCode: "DEMO-001",
    company: "Betting Company A",
    status: "Won",
    accuracyRate: 80,
    totalOdds: 3.45,
    settledAt: "14 Oct 2026, 8:30 PM",
    events: [
      {
        sport: "Football",
        homeTeam: "Arsenal",
        awayTeam: "Chelsea",
        market: "Over 1.5 Goals",
        odds: 1.35,
        prediction: "Over 1.5",
        result: "2–1",
        status: "Won",
      },
      {
        sport: "Football",
        homeTeam: "Real Madrid",
        awayTeam: "Valencia",
        market: "Match Result",
        odds: 1.55,
        prediction: "Real Madrid Win",
        result: "3–0",
        status: "Won",
      },
      {
        sport: "Football",
        homeTeam: "Inter Milan",
        awayTeam: "Napoli",
        market: "Double Chance",
        odds: 1.65,
        prediction: "Inter or Draw",
        result: "2–0",
        status: "Won",
      },
    ],
  },
  {
    id: 2,
    bookingCode: "DEMO-002",
    company: "Betting Company B",
    status: "Won",
    accuracyRate: 75,
    totalOdds: 2.85,
    settledAt: "13 Oct 2026, 9:15 PM",
    events: [
      {
        sport: "Football",
        homeTeam: "Liverpool",
        awayTeam: "Everton",
        market: "Match Result",
        odds: 1.45,
        prediction: "Liverpool Win",
        result: "2–0",
        status: "Won",
      },
      {
        sport: "Basketball",
        homeTeam: "Team Alpha",
        awayTeam: "Team Beta",
        market: "Match Winner",
        odds: 1.40,
        prediction: "Team Alpha Win",
        result: "102–96",
        status: "Won",
      },
    ],
  },
  {
    id: 3,
    bookingCode: "DEMO-003",
    company: "Betting Company C",
    status: "Won",
    accuracyRate: 100,
    totalOdds: 2.10,
    settledAt: "12 Oct 2026, 7:45 PM",
    events: [
      {
        sport: "Tennis",
        homeTeam: "Player A",
        awayTeam: "Player B",
        market: "Match Winner",
        odds: 1.40,
        prediction: "Player A Win",
        result: "2–0 sets",
        status: "Won",
      },
      {
        sport: "Football",
        homeTeam: "Team C",
        awayTeam: "Team D",
        market: "Over/Under",
        odds: 1.50,
        prediction: "Over 1.5 Goals",
        result: "2–1",
        status: "Won",
      },
    ],
  },
  {
    id: 4,
    bookingCode: "DEMO-004",
    company: "Betting Company A",
    status: "Lost",
    accuracyRate: 50,
    totalOdds: 4.20,
    settledAt: "11 Oct 2026, 6:00 PM",
    events: [
      {
        sport: "Football",
        homeTeam: "Team E",
        awayTeam: "Team F",
        market: "Match Result",
        odds: 1.80,
        prediction: "Team E Win",
        result: "1–1",
        status: "Lost",
      },
      {
        sport: "Basketball",
        homeTeam: "Team G",
        awayTeam: "Team H",
        market: "Match Winner",
        odds: 2.33,
        prediction: "Team G Win",
        result: "98–101",
        status: "Lost",
      },
    ],
  },
  {
    id: 5,
    bookingCode: "DEMO-005",
    company: "Betting Company B",
    status: "Void",
    accuracyRate: 50,
    totalOdds: 1.95,
    settledAt: "10 Oct 2026, 5:30 PM",
    events: [
      {
        sport: "Football",
        homeTeam: "Team I",
        awayTeam: "Team J",
        market: "Match Result",
        odds: 1.95,
        prediction: "Team I Win",
        result: "Match abandoned",
        status: "Void",
      },
    ],
  },
];

const formatPercentage = (value) => `${value.toFixed(1)}%`;

const StatCard = ({ title, value, subtitle, icon: Icon }) => (
  <div className="rounded-2xl border border-[#376553] bg-[#162821] p-5 transition-all duration-300 hover:border-[#fea92a] sm:p-6">
    <div className="mb-4 flex items-center justify-between">
      <span className="text-sm font-medium text-gray-400">{title}</span>

      <div className="rounded-xl bg-[#18ffc8]/10 p-2.5">
        <Icon size={22} className="text-[#18ffc8]" />
      </div>
    </div>

    <div className="text-3xl font-extrabold text-white sm:text-4xl">
      {value}
    </div>

    <p className="mt-2 text-sm leading-6 text-gray-400">{subtitle}</p>
  </div>
);

const StatusBadge = ({ status }) => {
  const styles = {
    Won: "border-emerald-400/20 bg-emerald-400/10 text-emerald-400",
    Lost: "border-red-400/20 bg-red-400/10 text-red-400",
    Void: "border-gray-400/20 bg-gray-400/10 text-gray-300",
  };

  const icons = {
    Won: CheckCircle2,
    Lost: XCircle,
    Void: MinusCircle,
  };

  const Icon = icons[status] || Activity;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-bold ${
        styles[status] || styles.Void
      }`}
    >
      <Icon size={14} />
      {status}
    </span>
  );
};

const SlipCard = ({ slip }) => {
  const settledEvents = slip.events.filter(
    (event) => event.status !== "Void"
  );

  const wonEvents = settledEvents.filter(
    (event) => event.status === "Won"
  );

  const eventAccuracy =
    settledEvents.length > 0
      ? (wonEvents.length / settledEvents.length) * 100
      : 0;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#855391] bg-[#162821] transition-all duration-300 hover:border-[#fea92a] hover:shadow-xl hover:shadow-black/20">

      {/* Slip Header */}
      <div className="border-b border-white/10 bg-[#102019] p-5">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-400">
              Booking Code
            </p>

            <h3 className="break-all text-lg font-extrabold text-white">
              {slip.bookingCode}
            </h3>
          </div>

          <StatusBadge status={slip.status} />
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-300">
          <ShieldCheck size={17} className="shrink-0 text-[#18ffc8]" />

          <span className="truncate">{slip.company}</span>
        </div>

        <div className="mt-3 flex items-center gap-2 text-xs text-gray-400">
          <Clock size={14} />

          <span>{slip.settledAt}</span>
        </div>
      </div>

      {/* Slip Statistics */}
      <div className="grid grid-cols-2 border-b border-white/10">
        <div className="border-r border-white/10 p-4">
          <p className="mb-1 text-xs text-gray-400">Total Odds</p>

          <p className="text-2xl font-extrabold text-[#18ffc8]">
            {slip.totalOdds.toFixed(2)}
          </p>
        </div>

        <div className="p-4">
          <p className="mb-1 text-xs text-gray-400">Accuracy</p>

          <p className="text-2xl font-extrabold text-white">
            {formatPercentage(eventAccuracy)}
          </p>
        </div>
      </div>

      {/* Individual Events */}
      <div className="flex-1 p-2">

        <div className="space-y-3">
          {slip.events.map((event, index) => (
            <div
              key={`${slip.id}-${index}`}
              className="rounded-xl border border-white/5 bg-[#0d1913] p-3"
            >
              <div className="mb-2 flex items-center justify-between gap-2">
                <span className="text-xs font-medium text-[#18ffc8]">
                  {event.sport}
                </span>

                <span className="text-xs font-bold text-gray-300">
                  Odds: {event.odds.toFixed(2)}
                </span>
              </div>

              <p className="mb-2 text-sm font-semibold leading-5 text-white">
                {event.homeTeam}{" "}
                <span className="text-gray-500">vs</span>{" "}
                {event.awayTeam}
              </p>

              <div className="mb-3">
                <p className="text-xs text-gray-500">Prediction Market</p>

                <p className="mt-1 text-sm text-gray-300">
                  {event.market}
                </p>
              </div>

              <div className="flex items-end justify-between gap-2 border-t border-white/5 pt-3">
                <div className="min-w-0">
                  <p className="text-xs text-gray-500">Selection</p>

                  <p className="mt-1 break-words text-xs font-semibold text-white">
                    {event.prediction}
                  </p>
                </div>

                <div className="shrink-0 text-right">
                  <p className="text-xs text-gray-500">Result</p>

                  <p className="mt-1 text-sm font-bold text-white">
                    {event.result}
                  </p>
                </div>
              </div>

              <div className="mt-3">
                <StatusBadge status={event.status} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

const Features = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const totalSettled =
    settledPredictions.wins +
    settledPredictions.losses;

  const winRate =
    totalSettled > 0
      ? (settledPredictions.wins / totalSettled) * 100
      : 0;

  const filteredSlips =
    activeFilter === "All"
      ? winningSlips
      : winningSlips.filter(
          (slip) => slip.status === activeFilter
        );

  return (
    <section
      id="features"
      className="overflow-hidden bg-[#09100d] py-16 sm:py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">

          <h2 className="mb-4 text-3xl font-extrabold text-white sm:text-4xl md:text-4xl">
            Winning Selections.
          </h2>

          <p className="text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
           Verified recent results of our accurate betting tips
          </p>
        </div>

        {/* Performance Overview */}
        <div className="mb-12 sm:mb-16">

          {/* Win Rate */}
          <div className="mt-5 rounded-2xl border border-[#376553] bg-[#162821] p-5 sm:p-7">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

              <div className="flex-1">
                <div className="mb-2 flex items-center gap-2">
                  <TrendingUp size={20} className="text-[#18ffc8]" />

                  <h4 className="font-bold text-white">
                    Settled Prediction Win Rate
                  </h4>
                </div>

                <p className="max-w-2xl text-sm leading-7 text-gray-400">
                  Win rate is calculated by dividing the number of winning
                  settled predictions by all settled predictions, then
                  multiplying by 100. Voided predictions are excluded.
                </p>
              </div>

              <div className="min-w-[140px] text-center">
                <div className="text-4xl font-extrabold text-[#18ffc8]">
                  {formatPercentage(winRate)}
                </div>
              </div>
            </div>

            <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-[#855391] transition-all duration-500"
                style={{ width: `${winRate}%` }}
              />
            </div>
          </div>
        </div>

        {/* Historical Records / Winning Slips */}
        <div id="winning-slips">

          {filteredSlips.length > 0 ? (
            <Swiper
              key={activeFilter}
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              slidesPerGroup={1}
              navigation={{
                prevEl: ".slips-prev",
                nextEl: ".slips-next",
              }}
              pagination={{
                clickable: true,
                el: ".slips-pagination",
              }}
              autoplay={
                filteredSlips.length > 3
                  ? {
                      delay: 5000,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    }
                  : false
              }
              loop={filteredSlips.length > 3}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
              }}
              className="winning-slips-swiper !pb-12"
            >
              {filteredSlips.map((slip) => (
                <SwiperSlide key={slip.id} className="!h-auto">
                  <SlipCard slip={slip} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="rounded-2xl border border-[#376553] bg-[#162821] px-5 py-12 text-center">
              <p className="font-semibold text-white">
                No slips found for this status.
              </p>

              <p className="mt-2 text-sm text-gray-400">
                Choose another filter to view available records.
              </p>
            </div>
          )}

        </div>
      </div>

      {/* Component-specific Swiper Styles */}
      <style>{`
        .winning-slips-swiper .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #6b8276;
          opacity: 1;
          transition: all 0.3s ease;
        }

        .winning-slips-swiper .swiper-pagination-bullet-active {
          width: 24px;
          border-radius: 8px;
          background: #18ffc8;
        }

        .slips-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: #6b8276;
          opacity: 1;
          cursor: pointer;
        }

        .slips-pagination .swiper-pagination-bullet-active {
          width: 24px;
          background: #18ffc8;
        }

        .winning-slips-swiper .swiper-slide {
          height: auto;
        }
      `}</style>
    </section>
  );
};

export default Features;