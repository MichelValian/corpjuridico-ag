import Footer from "@/components/ui/Footer";
import UserTable from "@/components/UserTable";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <UserTable />
      </div>
      <div>
        <Footer />
      </div>
    </>
  
  );
}
