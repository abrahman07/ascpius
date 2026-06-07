import { ArrowUp } from "@phosphor-icons/react";
import { useLanguage } from '../context/useLanguage';

export default function KpiRow() {
  const { t } = useLanguage();
  return (
    <section className="bg-background">
      <div className="bg-card border border-[#E6E8EF] rounded-2xl shadow-[0_1px_2px_rgba(16,24,40,0.04)]">
        <div className="grid grid-cols-4 divide-x divide-[#ECEEF4]">
          {/* Total Appointment */}
          <div className="px-6 py-4 flex flex-col gap-2">
            <span className="text-[13px] text-muted font-medium">
              {t.kpiTotalAppointment}
            </span>
            <div className="flex items-end justify-between gap-3">
              <span className="text-[28px] leading-8 font-semibold text-foreground">
                1,248
              </span>
              <div className="flex items-center gap-1 pb-1">
                <ArrowUp size={12} weight="bold" className="text-[#22C55E]" />
                <span className="text-[13px] font-medium text-[#22C55E]">
                  18.6%
                </span>
                <span className="text-[13px] text-muted">{t.kpiVsLastWeek}</span>
              </div>
            </div>
          </div>

          {/* Booked by AI Receptionist */}
          <div className="px-6 py-4 flex flex-col gap-2">
            <span className="text-[13px] text-muted font-medium">
              {t.kpiBookedByAI}
            </span>
            <div className="flex items-end justify-between gap-3">
              <span className="text-[28px] leading-8 font-semibold text-foreground">
                842
              </span>
              <div className="flex items-center gap-1 pb-1">
                <span className="text-[13px] text-muted">67.5% {t.kpiOfTotal}</span>
              </div>
            </div>
          </div>

          {/* Confirmed Appointments */}
          <div className="px-6 py-4 flex flex-col gap-2">
            <span className="text-[13px] text-muted font-medium">
              {t.kpiConfirmedAppointments}
            </span>
            <div className="flex items-end justify-between gap-3">
              <span className="text-[28px] leading-8 font-semibold text-foreground">
                756
              </span>
              <div className="flex items-center gap-1 pb-1">
                <ArrowUp size={12} weight="bold" className="text-[#22C55E]" />
                <span className="text-[13px] font-medium text-[#22C55E]">
                  15.5%
                </span>
                <span className="text-[13px] text-muted">{t.kpiVsLastWeek}</span>
              </div>
            </div>
          </div>

          {/* No-Show Prevention */}
          <div className="px-6 py-4 flex flex-col gap-2">
            <span className="text-[13px] text-muted font-medium">
              {t.kpiNoShowPrevention}
            </span>
            <div className="flex items-end justify-between gap-3">
              <span className="text-[28px] leading-8 font-semibold text-foreground">
                232
              </span>
              <div className="flex items-center gap-1 pb-1">
                <ArrowUp size={12} weight="bold" className="text-[#22C55E]" />
                <span className="text-[13px] font-medium text-[#22C55E]">
                  60%
                </span>
                <span className="text-[13px] text-muted">{t.kpiRecoverySuccess}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}