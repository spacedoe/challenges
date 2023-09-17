/* eslint-disable react/prop-types */
export function TabBar() {
    return (
    <>
    <section className="tabbar__section"> 
  
    <TabElement className="tab-button__all-entries" text="All Entries" number={3}/>
    <TabElement className="tab-button__favourites" text="Favourites" number={1}/>

    </section>
    </>
    )
}


function TabElement({className, text, number }){
    return (
        <>
        <button type="button" className={className} >{text}</button>
        <span className="number">{number}</span>
        </>
    )

}