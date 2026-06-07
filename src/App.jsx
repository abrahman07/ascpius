import './App.css'
import { LanguageProvider } from './context/LanguageContext.jsx'
// import Header from './components/Header/Header'
// import Home from './components/Home/Home'
import MainHeader from "./sections/MainHeader";
import KpiRow from "./sections/KpiRow";
import QuickActions from "./sections/QuickActions";
import PatientDistribution from "./sections/PatientDistribution";
import AppointmentsChart from "./sections/AppointmentsChart";
import PerformanceChart from "./sections/PerformanceChart";
import TodaysSchedule from "./sections/TodaysSchedule";
import Sidebar from "./sections/Sidebar";
import Topbar from "./sections/Topbar";

function App() {
  return (
    <LanguageProvider>
      {/* <Header />
       <div className="p-6 space-y-6">
          <MainHeader />
          <KpiRow />
          <div className="grid grid-cols-[17fr_59fr_24fr] gap-6">
            <div className="space-y-6">
              <QuickActions />
              <PatientDistribution />
            </div>
            <div className="space-y-6">
              <AppointmentsChart />
              <PerformanceChart />
            </div>
            <TodaysSchedule />
          </div>
        </div>
      <Home /> */}

    <div className="h-screen flex bg-slate-50 text-slate-900 overflow-hidden">
      
      <div className="flex-1 flex flex-col overflow-y-auto">
        <Topbar />

        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <MainHeader />
          <KpiRow />
          <div className="grid grid-cols-[17fr_59fr_24fr] gap-6">
            <div className="space-y-6">
              <QuickActions />
              <PatientDistribution />
            </div>
            <div className="space-y-6">
              <AppointmentsChart />
              <PerformanceChart />
            </div>
            <TodaysSchedule />
          </div>
          </div>
        </div>
        
      </div>
    </div>
    </LanguageProvider>
  )
}

export default App


// import Sidebar from "./sections/Sidebar";
// import Topbar from "./sections/Topbar";
// import MainHeader from "./sections/MainHeader";
// import KpiRow from "./sections/KpiRow";
// import QuickActions from "./sections/QuickActions";
// import PatientDistribution from "./sections/PatientDistribution";
// import AppointmentsChart from "./sections/AppointmentsChart";
// import PerformanceChart from "./sections/PerformanceChart";
// import TodaysSchedule from "./sections/TodaysSchedule";

// export default function App() {
//   return (
//     <div className="h-screen flex bg-slate-50 text-slate-900 overflow-hidden">
//       <Sidebar />
//       <div className="flex-1 flex flex-col overflow-y-auto">
//         <Topbar />
//         <div className="p-6 space-y-6">
//           <MainHeader />
//           <KpiRow />
//           <div className="grid grid-cols-[17fr_59fr_24fr] gap-6">
//             <div className="space-y-6">
//               <QuickActions />
//               <PatientDistribution />
//             </div>
//             <div className="space-y-6">
//               <AppointmentsChart />
//               <PerformanceChart />
//           </div>
//           <TodaysSchedule />
//         </div>
//       </div>

//     </div>
// </div >

// );