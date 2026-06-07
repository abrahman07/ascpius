
import { useLanguage } from '../context/useLanguage';

const AppointmentsChart = () => {
  const { t } = useLanguage();
  
  // Chart dimensions
  const chartWidth = 700;
  const chartHeight = 200;
  const paddingLeft = 40;
  const paddingRight = 20;
  const paddingTop = 20;
  const paddingBottom = 30;

  const innerWidth = chartWidth - paddingLeft - paddingRight;
  const innerHeight = chartHeight - paddingTop - paddingBottom;

  // Y axis: 0 to 175
  const yMax = 175;
  const yMin = 0;

  const toY = (val) =>
    paddingTop + innerHeight - ((val - yMin) / (yMax - yMin)) * innerHeight;

  // X axis: 7 days Mon-Sun
  const days = t.days;
  const toX = (i) => paddingLeft + (i / (days.length - 1)) * innerWidth;

  // This Week data points
  const thisWeek = [60, 68, 75, 65, 148, 100, 122];
  // Last Week data points (dashed)
  const lastWeek = [25, 65, 30, 108, 35, 30, 65];

  const buildPath = (data) =>
    data
      .map((val, i) => {
        const x = toX(i);
        const y = toY(val);
        return i === 0
          ? `M ${x} ${y}`
          : `C ${toX(i - 0.5)} ${toY(data[i - 1])} ${toX(i - 0.5)} ${y} ${x} ${y}`;
      })
      .join(" ");

  const buildAreaPath = (data) => {
    const linePath = data
      .map((val, i) => {
        const x = toX(i);
        const y = toY(val);
        return i === 0
          ? `M ${x} ${y}`
          : `C ${toX(i - 0.5)} ${toY(data[i - 1])} ${toX(i - 0.5)} ${y} ${x} ${y}`;
      })
      .join(" ");
    const lastX = toX(data.length - 1);
    const firstX = toX(0);
    const baseY = toY(0);
    return `${linePath} L ${lastX} ${baseY} L ${firstX} ${baseY} Z`;
  };

  // Tooltip at Tue (index 1), value 68
  const tooltipX = toX(1);
  const tooltipY = toY(68);

  const yTicks = [0, 50, 100, 150];

  return (
    <div className="bg-card rounded-2xl border border-[#E6E8EF] shadow-[0_1px_2px_rgba(16,24,40,0.04)] p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-6">
          {/* Tabs */}
          <button
            type="button"
            className="text-sm font-semibold text-foreground whitespace-nowrap"
          >
            {t.appointmentsTitle}
          </button>
          <button
            type="button"
            className="text-sm font-normal text-muted whitespace-nowrap hover:text-foreground"
          >
            {t.appointmentsAI}
          </button>
          <button
            type="button"
            className="text-sm font-normal text-muted whitespace-nowrap hover:text-foreground"
          >
            {t.appointmentsDept}
          </button>
          <button
            type="button"
            className="text-sm font-normal text-muted whitespace-nowrap hover:text-foreground"
          >
            {t.appointmentsDoctor}
          </button>
        </div>
        {/* Legend */}

         <div className="flex items-center gap-4">
          <div className="w-px h-4 bg-[#E6E8EF]" />
          <div className="flex items-center gap-2">
            <svg width="24" height="8">
              <line
                x1="0"
                y1="4"
                x2="24"
                y2="4"
                stroke="#8B6CFF"
                strokeWidth="1.5"
                strokeDasharray="4 3"
              />
            </svg>
            <span className="text-xs text-muted">{t.lastWeek}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg width="24" height="8">
              <line
                x1="0"
                y1="4"
                x2="24"
                y2="4"
                stroke="#5B7CFA"
                strokeWidth="2"
              />
            </svg>
            <span className="text-xs text-muted">{t.thisWeek}</span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="w-full overflow-hidden">
        <svg
          viewBox={`0 0 ${chartWidth} ${chartHeight}`}
          className="w-full"
          style={{ height: "220px" }}
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8B6CFF" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#8B6CFF" stopOpacity="0.02" />
            </linearGradient>
          </defs>

          {/* Y axis grid lines and labels */}

             {yTicks.map((tick) => (
            <g key={tick}>
              <line
                x1={paddingLeft}
                y1={toY(tick)}
                x2={chartWidth - paddingRight}
                y2={toY(tick)}
                stroke="#ECEEF4"
                strokeWidth="1"
              />
              <text
                x={paddingLeft - 8}
                y={toY(tick) + 4}
                textAnchor="end"
                fontSize="11"
                fill="#7C8596"
                fontFamily="Inter, sans-serif"
              >
                {tick === 0 ? "0" : tick}
              </text>
            </g>
          ))}

          {/* Area fill for This Week */}
          <path d={buildAreaPath(thisWeek)} fill="url(#areaGradient)" />

          {/* Last Week line (dashed) */}
          <path
            d={buildPath(lastWeek)}
            fill="none"
            stroke="#8B6CFF"
            strokeWidth="1.5"
            strokeDasharray="5 4"
            opacity="0.7"
          />

          {/* This Week line */}
          <path
            d={buildPath(thisWeek)}
            fill="none"
            stroke="#5B7CFA"
            strokeWidth="2"
          />

          {/* Vertical tooltip line at Tue */}
          <line
            x1={tooltipX}
            y1={paddingTop}
            x2={tooltipX}
            y2={toY(0)}
            stroke="#8B6CFF"
            strokeWidth="1"
            opacity="0.6"
          />

          {/* Tooltip dot */}
          <circle
            cx={tooltipX}
            cy={tooltipY}
            r="5"
            fill="white"
            stroke="#8B6CFF"
            strokeWidth="2"
          />
           {/* Tooltip value label */}
          <text
            x={tooltipX + 12}
            y={tooltipY - 8}
            fontSize="22"
            fontWeight="600"
            fill="#1F2430"
            fontFamily="Inter, sans-serif"
          >
            68
          </text>

          {/* X axis labels */}
          {days.map((day, i) => (
            <text
              key={day}
              x={toX(i)}
              y={chartHeight - 4}
              textAnchor="middle"
              fontSize="11"
              fill="#7C8596"
              fontFamily="Inter, sans-serif"
            >
              {day}
            </text>
          ))}
        </svg>
      </div>
    </div>
  );
};

export default AppointmentsChart;
