import React from "react";
import { useLanguage } from "../context/useLanguage";

const departmentsData = [
  {
    key: "deptGeneralMedicine",
    name: "General Medicine",
    count: 320,
    percentage: 25.6,
    barColor: "bg-primary",
    trackColor: "bg-[#EDE8FF]",
  },
  {
    key: "deptCardiology",
    name: "Cardiology",
    count: 248,
    percentage: 19.9,
    barColor: "bg-accent",
    trackColor: "bg-[#E8EDFF]",
  },
  {
    key: "deptOrthopedics",
    name: "Orthopedics",
    count: 186,
    percentage: 14.9,
    barColor: "bg-[#16A34A]",
    trackColor: "bg-[#DCFCE7]",
  },
  {
    key: "deptPediatrics",
    name: "Pediatrics",
    count: 152,
    percentage: 12.2,
    barColor: "bg-[#EA580C]",
    trackColor: "bg-[#FFEDD5]",
  },
  {
    key: "deptDermatology",
    name: "Dermatology",
    count: 128,
    percentage: 10.3,
    barColor: "bg-[#E11D48]",
    trackColor: "bg-[#FFE4E6]",
  },
  {
    key: "deptENT",
    name: "ENT",
    count: 96,
    percentage: 7.1,
    barColor: "bg-[#0EA5E9]",
    trackColor: "bg-[#E0F2FE]",
  },
];

export default function PatientDistribution() {
  const { t } = useLanguage();

  return (
    <div className="bg-card rounded-2xl border border-[#E6E8EF] shadow-[0_1px_2px_rgba(16,24,40,0.04)] p-4">
      <h2 className="text-base font-semibold text-foreground mb-3">
        {t.patientDistributionTitle}
      </h2>
      <div className="border-t border-[#ECEEF4] mb-4" />
      <div className="space-y-4">
        {departmentsData.map((dept) => (
          <div key={dept.key}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-sm font-medium text-foreground">
                {t[dept.key]}
              </span>
              <span className="text-sm text-muted">
                {dept.count}{" "}
                <span className="text-muted">({dept.percentage}%)</span>
              </span>
            </div>
            <div className={`w-full h-[6px] rounded-full ${dept.trackColor}`}>
              <div
                className={`h-full rounded-full ${dept.barColor}`}
                style={{ width: `${dept.percentage * (100 / 26)}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
