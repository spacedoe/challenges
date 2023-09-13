export function EntryForm(){
    return (
        <>
        <form className="form">
            <h2>NEW ENTRY</h2>
            <label htmlFor="motto">Motto</label>
            <input type="text" id="motto" name="motto"></input>
            <label htmlFor="notes">Notes</label>
            <textarea id="notes" name="notes" rows={5} cols={33}></textarea>
            <button className="button" type="button">Create</button>
        </form>
        </>
    )
}