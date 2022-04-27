import {DateTime} from "luxon";

export default (date: String) => {
    const dt = DateTime.fromISO(date)
    const refactorDate = dt.toLocaleString({
        weekday: 'short',
        day: 'numeric',
        month: 'long',
        hour: 'numeric',
        minute: '2-digit',
    })

    return refactorDate
}