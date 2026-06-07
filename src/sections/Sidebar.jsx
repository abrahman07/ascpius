import {
  SquaresFour,
  CalendarCheck,
  Phone,
  MagicWand,
  UsersThree,
  UserCirclePlus,
  FilePlus,
  ChartBar,
  CalendarPlus,
  ChartBarHorizontal,
  Gear,
} from "@phosphor-icons/react";

export default function Sidebar() {
  const navIcons = [
    { icon: CalendarCheck, label: "Calendar" },
    { icon: Phone, label: "Phone" },
    { icon: MagicWand, label: "AI Tools" },
    { icon: UsersThree, label: "Patients" },
    { icon: UserCirclePlus, label: "Add Patient" },
    { icon: FilePlus, label: "New File" },
    { icon: ChartBar, label: "Reports" },
    { icon: CalendarPlus, label: "Schedule" },
    { icon: ChartBarHorizontal, label: "Analytics" },
  ];

  return (
    <div className="h-screen w-[56px] flex flex-col  items-center py-4 flex-shrink-0" style={{backgroundColor: '#f2f4f7'}}>

      {/* Active Dashboard Icon */}
      <div className="mb-4 w-10 h-10 bg-primary rounded-xl flex items-center justify-center cursor-pointer">
        <SquaresFour size={20} weight="fill" className="text-white" />
      </div>

      {/* Nav Icons */}
      <div className="flex flex-col items-center gap-[20px] flex-1">
        {navIcons.map(({ icon: Icon, label }) => (
          <button
            key={label}
            type="button"
            aria-label={label}
            className="w-8 h-8 flex items-center justify-center text-muted hover:text-white transition-colors cursor-pointer"
          >
            <Icon size={20} weight="regular" />
          </button>
        ))}
      </div>

      {/* Settings at bottom */}
      <div className="mt-auto mb-2">
        <button
          type="button"
          aria-label="Settings"
          className="w-8 h-8 flex items-center justify-center text-muted hover:text-white transition-colors cursor-pointer"
        >
          <Gear size={20} weight="regular" />
        </button>
      </div>
    </div>
  );
}
