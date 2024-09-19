import Header from "@/components/shared/Header";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return <div className="w-full">
        <div className='h-[108px]'>
            <Header />
        </div>
        <div >
            {children}
        </div>
    </div>
}

export default RootLayout;