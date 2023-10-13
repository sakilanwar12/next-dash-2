

export default function Page() {
    return (
        <main className="border border-slate-200 shadow-sm min-h-screen">
            <div className="py-10 px-10">
                <h2 className="text-3xl font-medium">Items Group Page</h2>
                <div className="mt-5"></div>
                <table className="border-collapse border border-slate-400  w-full">
                    <thead>
                        <tr>
                            <th className="border border-slate-300 px-5 py-2 ">State</th>
                            <th className="border border-slate-300 px-5 py-2 ">City</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-slate-300 px-5 py-2 ">Indiana</td>
                            <td className="border border-slate-300  px-5 py-2">Indianapolis</td>
                        </tr>
                        <tr>
                            <td className="border border-slate-300 px-5 py-2 ">Ohio</td>
                            <td className="border border-slate-300  px-5 py-2">Columbus</td>
                        </tr>
                        <tr>
                            <td className="border border-slate-300 px-5 py-2 ">Michigan</td>
                            <td className="border border-slate-300  px-5 py-2">Detroit</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    )
}
