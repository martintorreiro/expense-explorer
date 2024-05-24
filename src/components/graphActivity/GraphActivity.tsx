import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface MonthProps {
    name: string;
    number: number;
    days: number;
    firstWeekday: number;
    lastWeekday: number;
    colspan: number;
}

const getMonthDays = (actualYear: number, monthKey: number) => {
    const days = new Date(actualYear, monthKey + 1, 0).getDate();
    return days;
};

const getFirstWeekday = (actualYear: number, monthKey: number) => {
    const firstWeekday = new Date(actualYear, monthKey, 1).getDay();
    return firstWeekday;
};

const getLastWeekday = (actualYear: number, monthKey: number) => {
    const lastWeekday = new Date(
        actualYear,
        monthKey,
        new Date(actualYear, monthKey + 1, 0).getDate()
    ).getDay();
    return lastWeekday;
};

const getMonthName = (actualYear: number, monthKey: number, locale: string) => {
    const monthName = new Intl.DateTimeFormat(locale, {
        month: 'short',
    }).format(new Date(actualYear, monthKey));
    return monthName;
};

const getMonthCalendar = (year: number, locale: string) => {
    const months = [...Array(12).keys()];
    const calendar = months.map((monthKey) => {
        const month = {
            number: monthKey,
            name: getMonthName(year, monthKey, locale),
            days: getMonthDays(year, monthKey),
            firstWeekday: getFirstWeekday(year, monthKey),
            lastWeekday: getLastWeekday(year, monthKey),
            colspan:
                monthKey === 0
                    ? Math.ceil(getMonthDays(year, monthKey) / 7)
                    : Math.ceil(
                          (getMonthDays(year, monthKey) -
                              (getFirstWeekday(year, monthKey)
                                  ? 7 - getFirstWeekday(year, monthKey)
                                  : 0)) /
                              7
                      ),
        };
        return month;
    });

    return calendar;
};

const GraphActivity = () => {
    const [locale, setLocale] = useState('en');
    const [actualYear, setActualYear] = useState(2024);
    const [monthCalendar, setMonthCalendar] = useState<MonthProps[]>([]);

    useEffect(() => {
        const months = getMonthCalendar(actualYear, locale);
        setMonthCalendar(months);
    }, [actualYear, locale]);

    const days = [...Array(7).keys()];
    const firstWeekday = getFirstWeekday(actualYear, 0);
    const lastWeekday = getLastWeekday(actualYear, 11);
    const leapYear = actualYear % 4 === 0 ? true : false;
    const totalWeeks = leapYear && firstWeekday > 4 ? 54 : 53;

    const dayCalendar = days.map((dayKey) => {
        const dayName = new Intl.DateTimeFormat(locale, {
            weekday: 'short',
        }).format(new Date(actualYear, 0, dayKey + 1));
        return dayName;
    });

    const renderDate = (weekday: number) => {
        let counter = 0;
        const render = [];

        while (counter < totalWeeks) {
            render.push(
                <td
                    className={`dateBox ${
                        (counter === 0 && weekday < firstWeekday) ||
                        (counter === totalWeeks - 1 && weekday > lastWeekday)
                            ? 'emptyDate'
                            : ''
                    }`}
                ></td>
            );
            counter++;
        }
        return render;
    };

    return (
        <GraphStyles>
            <table>
                <thead>
                    <tr>
                        <td></td>
                        {monthCalendar.map((month) => (
                            <td colSpan={month.colspan}>{month.name}</td>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='labelWeek'> </td>
                        {renderDate(0)}
                    </tr>
                    <tr>
                        <td className='labelWeek'>
                            <span>{dayCalendar[1]}</span>
                        </td>
                        {renderDate(1)}
                    </tr>
                    <tr>
                        <td className='labelWeek'> </td>
                        {renderDate(2)}
                    </tr>
                    <tr>
                        <td className='labelWeek'>
                            <span>{dayCalendar[3]}</span>
                        </td>
                        {renderDate(3)}
                    </tr>
                    <tr>
                        <td className='labelWeek'> </td>
                        {renderDate(4)}
                    </tr>
                    <tr>
                        <td className='labelWeek'>
                            <span>{dayCalendar[5]}</span>
                        </td>
                        {renderDate(5)}
                    </tr>
                    <tr>
                        <td className='labelWeek'> </td>
                        {renderDate(6)}
                    </tr>
                </tbody>
            </table>
        </GraphStyles>
    );
};

const GraphStyles = styled.div`
    overflow-x: auto;

    .labelWeek {
        height: 10px;
    }

    .labelWeek {
        max-height: 10px;
        display: flex;
        align-items: center;
        margin-right: 12px;
    }

    .dateBox {
        min-height: 10px;
        min-width: 10px;
        border: 0.4px solid black;
        display: table-cell;
    }

    .emptyDate {
        opacity: 0;
    }
`;

export default GraphActivity;
