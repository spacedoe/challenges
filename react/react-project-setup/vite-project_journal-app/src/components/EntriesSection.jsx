import { TabBar } from "./tabBar"
import { EntryList } from "./EntryList"
export function EntriesSection() {
    return (
        <>
        <TabBar/>
        <EntryList date="12.09.2023" motto="That's life in the city" notes="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
        <EntryList date="13.09.2023" motto="Something new" notes="lorem lorem" />

        </>
    )
}

