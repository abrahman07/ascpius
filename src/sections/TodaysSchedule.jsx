// import React from "react";
import { useLanguage } from '../context/useLanguage';

const scheduleItems = [
  {
    time: "08:30 AM",
    patientName: "Mohammed Al-Otaibi",
    appointmentType: "General Medicine Consultation",
    doctor: "Dr. Khalid Mohammad",
    status: "Confirmed",
    statusColor: "text-emerald-600",
    statusBorder: "border-emerald-200",
    statusBg: "bg-emerald-50",
  },
  {
    time: "09:00 AM",
    patientName: "Fatima Al-Harbi",
    appointmentType: "Cardiology Follow-Up",
    doctor: "Dr. Khalid Mohammad",
    status: "Checked In",
    statusColor: "text-emerald-600",
    statusBorder: "border-emerald-200",
    statusBg: "bg-emerald-50",
  },
  {
    time: "09:30 AM",
    patientName: "Ahmed Hassan",
    appointmentType: "Dermatology Consultation",
    doctor: "Dr. Faisal Khan",
    status: "Waiting",
    statusColor: "text-orange-500",
    statusBorder: "border-orange-200",
    statusBg: "bg-orange-50",
  },
  {
    time: "10:00 AM",
    patientName: "Aisha Abdullah",
    appointmentType: "Pediatric Consultation",
    doctor: "Dr. Reem Al-Qahtani",
    status: "Confirmed",
    statusColor: "text-emerald-600",
    statusBorder: "border-emerald-200",
    statusBg: "bg-emerald-50",
  },
  {
    time: "10:30 AM",
    patientName: "Omar Al-Shammari",
    appointmentType: "Orthopedic Assessment",
    doctor: "Dr. Abdullah Salem",
    status: "Payment Pending",
    statusColor: "text-orange-500",
    statusBorder: "border-orange-200",
    statusBg: "bg-orange-50",
  },
  {
    time: "11:00 AM",
    patientName: "Noor Mohammed",
    appointmentType: "ENT Consultation",
    doctor: "Dr. Hassan Al-Zahrani",
    status: "In Consultation",
    statusColor: "text-accent",
    statusBorder: "border-blue-200",
    statusBg: "bg-blue-50",
  },
];

export default function TodaysSchedule() {
  const { t } = useLanguage();

  // Map status values to translation keys
  const getTranslatedStatus = (status) => {
    const statusMap = {
      'Confirmed': t.scheduleStatusConfirmed,
      'Checked In': t.scheduleStatusCheckedIn,
      'Waiting': t.scheduleStatusWaiting,
      'Payment Pending': t.scheduleStatusPaymentPending,
      'In Consultation': t.scheduleStatusInConsultation,
    };
    return statusMap[status] || status;
  };

  return (
    <div className="bg-card rounded-2xl border border-[#E6E8EF] shadow-[0_1px_2px_rgba(16,24,40,0.04)] p-4 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold text-foreground">
          {t.todaysScheduleTitle}
        </h2>
        <a
          href="#"
          className="text-sm font-medium text-primary hover:underline"
        >
          {t.viewAllAppointments}
        </a>
      </div>

      {/* Schedule List */}
      <div className="flex flex-col gap-3">
        {scheduleItems.map((item, index) => (
          <div
            key={index}
            className="bg-card rounded-xl border border-[#E6E8EF] shadow-[0_1px_2px_rgba(16,24,40,0.04)] p-3 flex flex-col gap-2"
          >
            {/* Top row: time + patient info */}
            <div className="flex items-start gap-3">
              <span className="text-[13px] font-medium text-muted whitespace-nowrap pt-[1px]">
                {item.time}
              </span>
              <div className="w-px self-stretch bg-[#E6E8EF]" />
              <div className="flex flex-col gap-[2px]">
                <span className="text-sm font-semibold text-foreground leading-snug">
                  {item.patientName}
                </span>
                <span className="text-xs text-muted leading-snug">
                  {item.appointmentType}
                </span>
              </div>
            </div>

                {/* Divider */}
            <div className="h-px bg-[#ECEEF4]" />

            {/* Bottom row: doctor + status badge */}
            <div className="flex items-center justify-between">
              <span className="text-[13px] text-muted font-medium">
                {item.doctor}
              </span>
              <span
                className={`text-[12px] font-medium px-3 py-[3px] rounded-full border ${item.statusColor} ${item.statusBorder} ${item.statusBg}`}
              >
                {getTranslatedStatus(item.status)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
