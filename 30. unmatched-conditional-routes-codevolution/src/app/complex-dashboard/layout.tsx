// // each slot @... is passed as a prop

export default function DashboardLayout({
  children,
  users, // slot1
  revenue, // slot2
  notifications, // slot3
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = false;
  return isLoggedIn ? (
    <div>
      <div>{children}</div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
      </div>
    </div>
  ) : (
    login
  );
}

// import Notifications from "@/components/Notifications";
// import RevenueMetrics from "@/components/RevenueMetrics";
// import UserAnalytics from "@/components/UserAnalytics";

// export default function DashboardLayout({ children }: { children: React.ReactNode }) {
//   return (
//     //
//     <>
//       <div>{children}</div>
//       <UserAnalytics />
//       <RevenueMetrics />
//       <Notifications />
//     </>
//   );
// }
