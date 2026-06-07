import {
  CalendarPlus,
  UserPlus,
  Star,
  BellRinging,
  CalendarX,
  FileText,
} from "@phosphor-icons/react";

import { File } from "lucide-react";
import { useLanguage } from '../context/useLanguage';

export default function QuickActions() {
  const { t } = useLanguage();
  
  const actionStyles = [
    {
      bg: "bg-quick-action-violet",
      border: "border-[#D9D0FF]",
      iconBg: "bg-primary",
      icon: <CalendarPlus size={22} color="white" />,
    },
    {
      bg: "bg-quick-action-pink",
      border: "border-[#F6D1DA]",
      iconBg: "bg-[#E8365D]",
      icon: <UserPlus size={22} color="white" />,
    },
    {
      bg: "bg-quick-action-blue",
      border: "border-[#C9DDF6]",
      iconBg: "bg-accent",
      icon: <File size={22}  color="white" />,
    },
    {
      bg: "bg-quick-action-green",
      border: "border-[#CBEBD7]",
      iconBg: "bg-[#1A9E5C]",
      icon: <File size={22}  color="white" />,
    },
    {
      bg: "bg-quick-action-orange",
      border: "border-[#F3D2B7]",
      iconBg: "bg-[#E8621A]",
      icon: <File size={22} color="white" />,
    },
    {
      bg: "bg-quick-action-indigo",
      border: "border-[#CDD5F2]",
      iconBg: "bg-[#4A5FD4]",
      icon: <File size={22} color="white" />,
    },
  ];

  const actions = t.quickActions.map((action: any, index: number) => ({
    label: action.label,
    sub: action.sub,
    ...actionStyles[index],
  }));

  return (
    <section className="bg-card rounded-2xl border border-[#E6E8EF] shadow-[0_1px_2px_rgba(16,24,40,0.04)] p-4">
      <h2 className="text-base font-semibold text-foreground mb-3">
        {t.quickActionsTitle}
      </h2>
      <div className="w-full h-px bg-[#ECEEF4] mb-3" />
      <div className="flex flex-col gap-3">
        {actions.map((action) => (
          <button
            key={action.label}
            type="button"
            className={`flex items-center gap-3 w-full rounded-xl px-3 py-3 ${action.bg} border ${action.border} text-left transition-opacity hover:opacity-90`}
          >
            <div
              className={`flex-shrink-0 w-10 h-10 rounded-xl ${action.iconBg} flex items-center justify-center`}
            >
              {action.icon}
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-foreground leading-5">
                {action.label}
              </span>
              <span className="text-xs text-muted leading-4">{action.sub}</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
