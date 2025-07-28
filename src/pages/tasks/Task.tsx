import { converMiladi2Jalali, getDatesInRange } from "@/utils/dateutils";
import { useEffect, useState } from "react";

const Task = () => {
    const [dates, setDates] = useState<string[]>([]);

    useEffect(() => {
        const resDates = getDatesInRange(3, 5);
        const resJalaliDates = resDates.map((date) => converMiladi2Jalali(date));
        setDates(resJalaliDates);
    }, []);

    return (
        <div>
            <table className="w-full table-auto text-sm dark:text-white hover:bg-slate-300 bg-slate-200 text-black dark:bg-stone-800 rounded-xl overflow-hidden">
                <thead className="dark:bg-stone-700  bg-slate-400 dark:text-white">
                    <tr className='[&>th]:px-4 [&>th]:py-3 [&>th]:text-center'>
                        <th>تاریخ</th>
                        <th >تسک 1</th>
                        <th>تسک 2</th>

                    </tr>
                </thead>

                <tbody>
                    {dates.map((date, index) => (
                        <tr
                            key={index}
                            className="[&>td]:px-4 [&>td]:py-3 [&>td]:text-center text-center border-b border-stone-700 dark:hover:bg-stone-900 hover:bg-slate-500 transition-colors duration-200"
                        >
                            <td>{date}</td>

                            <td>تسک</td>
                            <td>تسک</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Task;
