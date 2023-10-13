

const DemoData = ({ pageName }) => {
    return (
  
        <div className=" px-20 mt-20">
            <div className="shadow-sm bg-white p-5">
                <h2 className="text-lg font-medium text-slate-500">Page Title: <span className="text-slate-800">{pageName}</span></h2>
            </div>
            <table className="border-collapse border border-slate-400   w-full">
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
    );
};

export default DemoData;