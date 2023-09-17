/* eslint-disable react/prop-types */
export function EntryList({motto, date, notes}) {
    return (
        <>
        <section className="entry__section">
            <h2>{date}</h2>
            <h1>{motto}</h1>
            <button></button>
            <p>{notes}</p>

        </section>
        </>
    )
}