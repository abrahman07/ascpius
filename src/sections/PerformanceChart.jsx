import { CaretDown } from "@phosphor-icons/react";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// Bar heights as percentage of max (30K), approximate from the chart
const barData = [
  { month: "Jan", value: 28000, heightPct: 93 },
  { month: "Feb", value: 21000, heightPct: 70 },
  { month: "Mar", value: 24000, heightPct: 80 },
  { month: "Apr", value: 19000, heightPct: 63 },
  { month: "May", value: 1248, heightPct: 20, active: true },
  { month: "Jun", value: 20000, heightPct: 67 },
  { month: "Jul", value: 31000, heightPct: 100 },
  { month: "Aug", value: 21000, heightPct: 70 },
  { month: "Sep", value: 23000, heightPct: 77 },
  { month: "Oct", value: 22000, heightPct: 73 },
  { month: "Nov", value: 22000, heightPct: 73 },
  { month: "Dec", value: 14000, heightPct: 47 },
];

const yLabels = ["30K", "20K", "10K", "0"];

export default function PerformanceChart() {
  return (
    <section className="bg-card rounded-2xl border border-[#E6E8EF] shadow-[0_1px_2px_rgba(16,24,40,0.04)] p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-base font-semibold text-foreground">
          Monthly Booking Performance
        </h2>
        <button
          type="button"
          className="flex items-center gap-1 text-[13px] text-muted font-medium"
        >
          <CaretDown size={14} weight="bold" />
          <span>This Year</span>
        </button>
      </div>

      {/* Divider */}
      <div className="border-b border-[#ECEEF4] mb-4" />

      {/* Sub-KPI Row */}
      <div className="grid grid-cols-4 gap-3 mb-6">
        {/* Total Appointment */}
        <div className="bg-metric-tint-violet border border-[#DDD3FF] rounded-2xl p-4">
          <p className="text-sm font-medium text-primary mb-2">
            Total Appointment
          </p>
          <div className="flex items-end justify-between">
            <span className="text-[28px] font-bold text-foreground leading-none">
              12,842
            </span>
            <span className="text-xs font-semibold text-green-500 flex items-center gap-0.5">
              ↑21.6%
            </span>
          </div>
        </div>

          {/* Completed Visits */}
        <div className="rounded-2xl p-4 border border-[#E6E8EF]">
          <p className="text-sm font-medium text-green-500 mb-2">
            Completed Visits
          </p>
          <div className="flex items-end justify-between">
            <span className="text-[28px] font-bold text-foreground leading-none">
              10,826
            </span>
            <span className="text-xs font-semibold text-green-500 flex items-center gap-0.5">
              ↑18.3%
            </span>
          </div>
        </div>

        {/* Follow-up Visits */}
        <div className="rounded-2xl p-4 border border-[#E6E8EF]">
          <p className="text-sm font-medium text-[#F59E0B] mb-2">
            Follow-up Visits
          </p>
          <div className="flex items-end justify-between">
            <span className="text-[28px] font-bold text-foreground leading-none">
              2,146
            </span>
            <span className="text-xs font-semibold text-green-500 flex items-center gap-0.5">
              ↑14.8%
            </span>
          </div>
        </div>

        {/* New Patients */}
        <div className="rounded-2xl p-4 border border-[#E6E8EF]">
          <p className="text-sm font-medium text-accent mb-2">New Patients</p>
          <div className="flex items-end justify-between">
            <span className="text-[28px] font-bold text-foreground leading-none">
              4,732
            </span>
            <span className="text-xs font-semibold text-green-500 flex items-center gap-0.5">
              ↑23.8%
            </span>
          </div>
        </div>
      </div>

        {/* Bar Chart */}
      <div className="flex gap-3">
        {/* Y-axis labels */}
        <div
          className="flex flex-col justify-between pb-6 pr-1"
          style={{ height: 220 }}
        >
          {yLabels.map((label) => (
            <span
              key={label}
              className="text-[11px] text-muted text-right leading-none"
            >
              {label}
            </span>
          ))}
        </div>

        {/* Chart area */}
        <div className="flex-1 relative">
          {/* Horizontal grid lines */}
          <div className="absolute inset-0 pb-6 flex flex-col justify-between pointer-events-none">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="border-t border-[#ECEEF4] w-full" />
            ))}
          </div>

          {/* Bars */}
          <div
            className="flex items-end gap-[6px] pb-6 relative"
            style={{ height: 220 }}
          >
            {barData.map((bar) => (
              <div
                key={bar.month}
                className="flex-1 flex flex-col items-center gap-1 h-full justify-end relative group"
              >
                {/* Tooltip for May */}
                {bar.active && (
                  <div
                    className="absolute bottom-[calc(100%-30px)] left-1/2 -translate-x-1/2 mb-2 bg-card border border-[#E6E8EF] rounded-xl shadow-[0_4px_12px_rgba(16,24,40,0.12)] px-3 py-2 z-10 whitespace-nowrap pointer-events-none"
                    style={{ bottom: `calc(${bar.heightPct}% - 10px)` }}
                  >
                    <p className="text-[13px] font-semibold text-foreground">
                      May
                    </p>
                    <p className="text-[13px] text-foreground">
                      1,248 Appointments
                    </p>
                  </div>
                )}
                <div
                  className={`w-full rounded-t-lg ${bar.active ? "bg-primary" : "bg-[#E8E6F8]"}`}
                  style={{
                    height: `${bar.heightPct}%`,
                    backgroundImage: bar.active
                      ? undefined
                      : "repeating-linear-gradient(-45deg, transparent, transparent 3px, rgba(139,108,255,0.15) 3px, rgba(139,108,255,0.15) 4px)",
                  }}
                />
              </div>
            ))}
          </div>

          {/* X-axis labels */}
          <div className="flex gap-[6px]">
            {barData.map((bar) => (
              <div key={bar.month} className="flex-1 text-center">
                <span className="text-[11px] text-muted">{bar.month}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}