// All supported languages — add new entries here to expand the language selector
export const LANGUAGES = [
  { code: 'en', nativeLabel: 'English' },
  { code: 'ar', nativeLabel: 'العربية' },
];

// All app-wide translation keys — add new keys for every new string in the UI
const translations = {
  en: {
    // meta
    dir: 'ltr',
    lang: 'en',
    // header
    brandName: 'OmniMed',
    langLabel: 'English',
    notifications: 'Notifications',
    userProfile: 'User profile',
    // main header
    mainTitle: 'Reception Command Center',
    mainSubtitle: 'Deliver exceptional patient experiences with AI-powered scheduling and intelligent hospital operations',
    refreshBtn: 'Refresh',
    // appointments chart
    appointmentsTitle: 'Total Appointments',
    appointmentsAI: 'AI Bookings',
    appointmentsDept: 'Department Performance',
    appointmentsDoctor: 'Doctor Utilization',
    lastWeek: 'Last Week',
    thisWeek: 'This Week',
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    // quick actions
    quickActionsTitle: 'Quick Actions',
    quickActions: [
      { label: 'Create Appointment', sub: 'Schedule New' },
      { label: 'Register Walk-In', sub: 'Add Patient' },
      { label: 'Check Availability', sub: 'Doctor Schedule' },
      { label: 'Send Reminder', sub: 'WhatsApp / SMS' },
      { label: 'Reschedule', sub: 'Move Appointment' },
      { label: 'Generate Report', sub: 'Download Report' },
    ],
    // kpi row
    kpiTotalAppointment: 'Total Appointment',
    kpiBookedByAI: 'Booked by AI Receptionist',
    kpiConfirmedAppointments: 'Confirmed Appointments',
    kpiNoShowPrevention: 'No-Show Prevention',
    kpiVsLastWeek: 'vs last week',
    kpiOfTotal: 'of total',
    kpiRecoverySuccess: 'Recovery Success',
    // today's schedule
    todaysScheduleTitle: "Today's Schedule",
    viewAllAppointments: 'View All Appointments',
    scheduleStatusConfirmed: 'Confirmed',
    scheduleStatusCheckedIn: 'Checked In',
    scheduleStatusWaiting: 'Waiting',
    scheduleStatusPaymentPending: 'Payment Pending',
    scheduleStatusInConsultation: 'In Consultation',
    // patient distribution
    patientDistributionTitle: 'Patient Distribution',
    deptGeneralMedicine: 'General Medicine',
    deptCardiology: 'Cardiology',
    deptOrthopedics: 'Orthopedics',
    deptPediatrics: 'Pediatrics',
    deptDermatology: 'Dermatology',
    deptENT: 'ENT',
    // general
    hello: 'Hello',
  },
  ar: {
    // meta
    dir: 'rtl',
    lang: 'ar',
    // header
    brandName: 'OmniMed',
    langLabel: 'العربية',
    notifications: 'الإشعارات',
    userProfile: 'ملف المستخدم',
    // main header
    mainTitle: 'مركز قيادة الاستقبال',
    mainSubtitle: 'قدم تجارب المرضى الاستثنائية بفضل الجدولة المدعومة بالذكاء الاصطناعي وعمليات المستشفى الذكية',
    refreshBtn: 'تحديث',
    // appointments chart
    appointmentsTitle: 'إجمالي المواعيد',
    appointmentsAI: 'الحجوزات الآلية',
    appointmentsDept: 'أداء القسم',
    appointmentsDoctor: 'استخدام الطبيب',
    lastWeek: 'الأسبوع الماضي',
    thisWeek: 'هذا الأسبوع',
    days: ['الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت', 'الأحد'],
    // quick actions
    quickActionsTitle: 'إجراءات سريعة',
    quickActions: [
      { label: 'إنشاء موعد', sub: 'جدولة جديدة' },
      { label: 'تسجيل مريض طارئ', sub: 'إضافة مريض' },
      { label: 'فحص التوفر', sub: 'جدول الطبيب' },
      { label: 'إرسال تذكير', sub: 'WhatsApp / SMS' },
      { label: 'إعادة جدولة', sub: 'نقل الموعد' },
      { label: 'إنشاء تقرير', sub: 'تحميل التقرير' },
    ],
    // kpi row
    kpiTotalAppointment: 'إجمالي المواعيد',
    kpiBookedByAI: 'محجوز بالريسيبشن الذكي',
    kpiConfirmedAppointments: 'مواعيد مؤكدة',
    kpiNoShowPrevention: 'منع عدم الحضور',
    kpiVsLastWeek: 'مقابل الأسبوع الماضي',
    kpiOfTotal: 'من الإجمالي',
    kpiRecoverySuccess: 'نجاح التعافي',
    // today's schedule
    todaysScheduleTitle: 'جدول اليوم',
    viewAllAppointments: 'عرض جميع المواعيد',
    scheduleStatusConfirmed: 'مؤكد',
    scheduleStatusCheckedIn: 'تم التسجيل',
    scheduleStatusWaiting: 'في الانتظار',
    scheduleStatusPaymentPending: 'في الانتظار الدفع',
    scheduleStatusInConsultation: 'في المشاورة',
    // patient distribution
    patientDistributionTitle: 'توزيع المرضى',
    deptGeneralMedicine: 'الطب العام',
    deptCardiology: 'أمراض القلب',
    deptOrthopedics: 'جراحة العظام',
    deptPediatrics: 'طب الأطفال',
    deptDermatology: 'الأمراض الجلدية',
    deptENT: 'أنف وأذن وحنجرة',
    // general
    hello: 'مرحباً',
  },
};

export default translations;
