const SamplePredictions = () => {
  const selections = [
    {
      match: "Arsenal vs Chelsea",
      competition: "Premier League",
      market: "Over 1.5 Goals",
      odd: "1.35",
      status: "WON",
    },
    {
      match: "Real Madrid vs Barcelona",
      competition: "La Liga",
      market: "Both Teams to Score — Yes",
      odd: "1.60",
      status: "WON",
    },
    {
      match: "Liverpool vs Manchester City",
      competition: "Premier League",
      market: "Over 2.5 Goals",
      odd: "1.85",
      status: "LOCKED",
    },
    {
      match: "Inter Milan vs Napoli",
      competition: "Serie A",
      market: "Double Chance — 1X",
      odd: "1.42",
      status: "LOCKED",
    },
    {
      match: "Bayern Munich vs Dortmund",
      competition: "Bundesliga",
      market: "Both Teams to Score — Yes",
      odd: "1.55",
      status: "LOCKED",
    },
  ];

  // Illustrative values for the design preview.
  const totalOdd = selections
    .reduce((total, selection) => total * Number(selection.odd), 1)
    .toFixed(2);

  const bookmaker = "Bet9ja";
  const bettingCode = "TP365-8XQ9-7MKR-2PWL";

  return (
    <section
      id="predictions"
      className="relative overflow-hidden bg-[#09100d] px-4 py-20 sm:px-6"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#376553]/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#fea92a]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl md:text-4xl">
            Today's Selection.
          </h2>
        </div>

        {/* Betslip */}
        <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-[#376553] bg-[#101a15] shadow-2xl shadow-black/30">

          {/* First two visible selections */}
          <div className="p-1">

            <div className="space-y-3">
              {selections.slice(0, 2).map((selection) => (
                <div
                  key={selection.match}
                  className="rounded-xl border border-[#376553]/50 bg-[#09100d] p-4 sm:p-5"
                >
                  <p className="text-xs font-medium text-gray-500">
                    {selection.competition}
                  </p>

                  <h5 className="mt-1 font-bold text-white sm:text-lg">
                    {selection.match}
                  </h5>

                  <div className="mt-4 flex items-center justify-between gap-3 rounded-lg border border-[#376553]/40 bg-[#14251b] p-3">
                    <div>
                      <p className="text-xs text-gray-500">Market</p>
                      <p className="mt-1 text-sm font-semibold text-gray-200">
                        {selection.market}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-xs text-gray-500">Odds</p>
                      <p className="mt-1 text-lg font-extrabold text-[#fea92a]">
                        {selection.odd}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Locked remaining selections */}
              <div className="relative overflow-hidden rounded-xl border border-[#855391] bg-[#09100d]">
                <div
                  className="pointer-events-none select-none p-4 sm:p-5"
                  aria-hidden="true"
                >
                  {selections.slice(2).map((selection, index) => (
                    <div
                      key={selection.match}
                      className="mb-3 rounded-lg border border-[#376553]/40 bg-[#14251b] p-4 last:mb-0"
                    >
                      <p className="text-xs text-gray-500">
                        SELECTION {String(index + 3).padStart(2, "0")}
                      </p>
                      <p className="mt-2 font-bold text-white">
                        {selection.match}
                      </p>
                      <div className="mt-3 flex justify-between gap-3">
                        <span className="text-sm text-gray-400">
                          {selection.market}
                        </span>
                        <span className="font-bold text-[#fea92a]">
                          {selection.odd}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#09100d]/65 px-4 text-center backdrop-blur-md">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-[#fea92a]/40 bg-[#fea92a]/10 text-[#fea92a]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-6 w-6"
                      aria-hidden="true"
                    >
                      <rect x="4" y="10" width="16" height="11" rx="2" />
                      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                    </svg>
                  </div>

                  <a
                    href="#pricing"
                    className="mt-2 rounded-lg bg-[#fea92a] px-5 py-3 text-sm font-extrabold text-[#09100d] transition hover:bg-amber-400"
                  >
                    Unlock Selections
                  </a>
                </div>
              </div>
            </div>

            {/* Total odds */}
            <div className="mt-5 rounded-xl border border-[#855391] bg-[#fea92a]/5 p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-gray-300">
                    Total Accumulator Odds
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-2xl font-extrabold text-[#fea92a] sm:text-3xl">
                    {totalOdd}
                  </p>
                </div>
              </div>
            </div>

            {/* Betting code */}
            <div className="mt-4 rounded-xl border border-[#376553]/50 bg-[#09100d] p-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-bold text-white">{bookmaker}</p>
                </div>
              </div>

              <div className="relative mt-4 overflow-hidden rounded-lg border border-[#376553]/40 bg-[#14251b] p-4">
                <p
                  className="select-none text-center font-mono text-lg font-bold tracking-widest text-white blur-[6px]"
                  aria-hidden="true"
                >
                  {bettingCode}
                </p>

                <div className="absolute inset-0 flex items-center justify-center bg-[#09100d]/20">
                  <span className="flex items-center gap-2 rounded-lg border border-[#fea92a]/40 bg-[#09100d]/95 px-3 py-2 text-xs font-bold text-[#fea92a]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <rect x="4" y="10" width="16" height="11" rx="2" />
                      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                    </svg>
                    CODE LOCKED
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SamplePredictions;
