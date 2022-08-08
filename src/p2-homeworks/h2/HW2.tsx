import React, {useState} from 'react'
import Affairs from './Affairs'


export type AffairPriorityType = 'high' | 'middle' | 'low'

export type AffairType = {
    _id: number
    name: string
    priority: string
}

export type FilterType = 'all' | AffairPriorityType


const defaultAffairs: Array<AffairType> = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'TypeScript', priority: 'high'},
    {_id: 3, name: 'Eat', priority: 'low'},
    {_id: 4, name: 'Sleep', priority: 'low'},
    {_id: 5, name: 'Work', priority: 'high'},
    {_id: 6, name: 'Reproduce', priority: 'middle'},
]

export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): any => { // need to fix any
    switch (filter) {
        case "high": return affairs.filter(affair => affair.priority === "high")
        case "middle": return affairs.filter(affair => affair.priority === "middle")
        case "low": return affairs.filter(affair => affair.priority === "low")
        default: return affairs
    }}

export const deleteAffair = (affairs: Array<AffairType>, _id: number): any => { // need to fix any
    return (
        affairs.filter(affair => affair._id !== _id)
    )
}




function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))
    const ChangeFilter = (filter: FilterType) => {
        setFilter(filter)
    }

    return (
        <div>

            <h1>HomeWork 2</h1>

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
                ChangeFilter={ChangeFilter}
            />


            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}

        </div>
    )
}

export default HW2
