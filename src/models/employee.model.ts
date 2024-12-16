enum Positions {
    Manager,
    Courier,
    Waiter,
    Clearner,
    Other
}
export interface Employee {
    name: string
    id: number
    employmentStartDate: Date
    position: Positions
    salary: number
}