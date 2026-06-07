// import { CalendarBlank, ArrowsClockwise } from "@phosphor-icons/react";
import { CalendarBlank, ArrowsClockwise } from "@phosphor-icons/react";
import { useLanguage } from '../context/useLanguage';

export default function MainHeader() {
    const { t } = useLanguage();
    return (
        <section className="bg-background">
            <div className="flex items-center justify-between">
                {/* Left: Title and subtitle */}
                <div>
                    <h1 className="text-2xl font-bold text-foreground leading-tight">
                        {t.mainTitle}
                    </h1>
                    <p className="text-[13px] text-muted mt-1">
                        {t.mainSubtitle}
                    </p>
                </div>

                {/* Right: Date picker and refresh button */}
                <div className="flex items-center gap-4">
                    <button
                        type="button"
                        className="flex items-center gap-2 px-4 py-2 bg-card border border-[#E6E8EF] rounded-xl shadow-[0_1px_2px_rgba(16,24,40,0.06)] text-[13px] font-medium text-foreground"
                    >
                        <CalendarBlank size={16} className="text-muted" />
                        <span>May 15, 2026</span>
                    </button>

                    <button
                        type="button"
                        className="flex items-center gap-2 px-4 py-2 bg-card border border-[#E6E8EF] rounded-xl shadow-[0_1px_2px_rgba(16,24,40,0.06)] text-[13px] font-medium text-foreground"
                    >
                        <ArrowsClockwise size={16} className="text-muted" />
                        <span>{t.refreshBtn}</span>
                    </button>
                </div>
            </div >
        </section >
    );
}
