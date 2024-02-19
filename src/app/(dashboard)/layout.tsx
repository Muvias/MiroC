import { Navbar } from "./_components/Navbar"
import { OrgSidebar } from "./_components/OrgSidebar"
import { Sidebar } from "./_components/Sidebar"

interface DashboardLayoutProps {
    children: React.ReactNode
}

export default function DashboardLayout({
    children,
}: DashboardLayoutProps) {
    return (
        <main className="h-full">
            <Sidebar />

            <div className="pl-[60px] h-full">
                <div className="flex h-full gap-x-3">
                    <OrgSidebar />

                    <div className="h-full flex-1">
                        <Navbar />

                        {children}
                    </div>
                </div>
            </div>
        </main>
    )
}