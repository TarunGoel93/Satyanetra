"use client";

// Import your existing Dashboard component
import  Dashboard  from "../../src/pages/Dashboard";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Dashboard />
    </div>
  );
}




// "use client"

// import { useEffect } from "react"

// export default function DashboardPage() {
//   useEffect(() => {
//     // Redirect to the existing React app dashboard
//     window.location.href = "/src/App.tsx"
//   }, [])

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
//       <div className="text-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#8B1538] mx-auto mb-4"></div>
//         <p className="text-[#6b6b6b]">Loading VISTA Dashboard...</p>
//       </div>
//     </div>
//   )
// }
