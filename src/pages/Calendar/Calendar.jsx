import { useState } from 'react';

// Example event data with repeat patterns
const events = [
    { date: '2024-09-01', title: 'Open Play', description: '8am at Sunstone Pickleball Courts', repeat: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
];

// Array of month names
const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

// Array of days of the week (Sunday to Saturday)
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// Helper function to generate event dates
const getEventDates = (event, currentMonth, currentYear) => {
    const eventDates = [];
    const eventDate = new Date(event.date);
    const monthStart = new Date(currentYear, currentMonth, 1);
    const monthEnd = new Date(currentYear, currentMonth + 1, 0);

    if (Array.isArray(event.repeat)) {
        // Handle custom day repetition (e.g., Mon, Wed, Fri)
        for (let day = new Date(monthStart); day <= monthEnd; day.setDate(day.getDate() + 1)) {
            if (event.repeat.includes(daysOfWeek[day.getDay()])) {
                eventDates.push(new Date(day));
            }
        }
    } else {
        // Non-recurring event, add if it falls within the current month and year
        if (
            eventDate.getFullYear() === currentYear &&
            eventDate.getMonth() === currentMonth
        ) {
            eventDates.push(eventDate);
        }
    }

    return eventDates;
};

// Main Calendar component
const Calendar = () => {
    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());
    const [currentWeek, setCurrentWeek] = useState(0); // For tracking which week is being viewed on mobile
    const [selectedEvent, setSelectedEvent] = useState(null);

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

    const prevMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear(currentYear - 1);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
        setCurrentWeek(0); // Reset the week view when switching months
    };

    const nextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
        setCurrentWeek(0); // Reset the week view when switching months
    };

    const prevWeek = () => {
        if (currentWeek > 0) {
            setCurrentWeek(currentWeek - 1);
        }
    };

    const nextWeek = () => {
        if (currentWeek < Math.ceil(daysInMonth / 7) - 1) {
            setCurrentWeek(currentWeek + 1);
        }
    };

    const generateCalendarDays = () => {
        const calendarDays = [];
        const eventDates = {};

        // Populate event dates based on whether events are recurring or single-day
        events.forEach(event => {
            const dates = getEventDates(event, currentMonth, currentYear);
            dates.forEach(date => {
                const dateKey = date.toISOString().split('T')[0];
                if (!eventDates[dateKey]) {
                    eventDates[dateKey] = [];
                }
                eventDates[dateKey].push(event);
            });
        });

        // Add empty cells before the first day of the month
        for (let i = 0; i < firstDayOfMonth; i++) {
            calendarDays.push(<div key={`empty-${i}`} className="h-16 border"></div>);
        }

        // Add days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const formattedDate = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            const eventsForDay = eventDates[formattedDate] || [];

            calendarDays.push(
                <div key={day} className="h-20 md:h-24 border flex flex-col items-center text-sm p-1">
                    <span className="font-bold">{day}</span>
                    {eventsForDay.map((event, index) => (
                        <button
                            key={index}
                            className="mt-1 text-xs text-blue-500 underline truncate text-wrap"
                            onClick={() => setSelectedEvent(event)}
                        >
                            {event.title}
                        </button>
                    ))}
                </div>
            );
        }

        return calendarDays;
    };

    const renderWeekView = () => {
        const days = generateCalendarDays();
        const startOfWeek = currentWeek * 7;
        const weekDays = days.slice(startOfWeek, startOfWeek + 7);

        return (
            <div className="grid grid-cols-7 gap-1 text-center">
                {weekDays}
            </div>
        );
    };

    const renderMonthView = () => {
        return (
            <div className="grid grid-cols-7 gap-2 text-center">
                {generateCalendarDays()}
            </div>
        );
    };

    return (
        <section className="bg-white py-10 max-sm:py-6">
            <div className="container mx-auto px-4 max-sm:px-2">
                <h2 className="text-3xl font-bold text-center mb-8">Events Calendar</h2>

                <div className="border border-gray-300 rounded-lg p-6 max-sm:p-2">
                    <div className="flex justify-between items-center mb-4">
                        {/* Hide month navigation on mobile */}
                        <button onClick={prevMonth} className="sm:block text-xl p-2 bg-gray-200 rounded-md hover:bg-gray-300">
                            &larr; Previous
                        </button>
                        <div className="md:text-3xl text-xl font-semibold max-sm:mx-auto">
                            {months[currentMonth]} {currentYear}
                        </div>
                        <button onClick={nextMonth} className="sm:block text-xl p-2 bg-gray-200 rounded-md hover:bg-gray-300">
                            Next &rarr;
                        </button>
                    </div>

                    {/* Weekdays Row */}
                    <div className="grid grid-cols-7 text-center font-semibold hidden sm:grid">
                        {daysOfWeek.map((day, index) => (
                            <div key={index} className="h-16 flex justify-center items-center">
                                {day}
                            </div>
                        ))}
                    </div>

                    {/* Calendar Days */}
                    <div className="hidden sm:block">
                        {renderMonthView()}
                    </div>

                    {/* Week-by-Week View for Mobile */}
                    <div className="block sm:hidden">
                        <div className="flex justify-between mb-2">
                            <button onClick={prevWeek} className="text-base p-2 bg-gray-200 rounded-md hover:bg-gray-300 max-sm:text-md">
                                &larr; Previous Week
                            </button>
                            <button onClick={nextWeek} className="text-base p-2 bg-gray-200 rounded-md hover:bg-gray-300 max-sm:text-md">
                                Next Week &rarr;
                            </button>
                        </div>
                        {renderWeekView()}
                    </div>
                </div>

                {/* Modal to show event details */}
                {selectedEvent && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-8 rounded-lg shadow-lg relative max-w-md mx-auto">
                            <h3 className="text-xl font-bold mb-4">{selectedEvent.title}</h3>
                            <p className="mb-4">{selectedEvent.description}</p>
                            <button
                                onClick={() => setSelectedEvent(null)}
                                className="text-blue-500 underline"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Calendar;
