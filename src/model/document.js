class Passport {
    constructor(name, id, isValid, ) {
        this.name = name /// string
        this.id = id /// string
        this.isValid = isValid /// boolean
    }

    setToCheckP(table) {
        /// assign the passport to checking table
        /// this.table = table
    }
    
    getToCheckP() {
        /// get the current passport position
        /// if passport on the table then can be interacted with
    }


    getCheckP(whatsWrong) {
        /// get the current responce for right/wrong user checks
        /// checks against isValid
        /// undefined if passport isnt present/ student changing
    }
}

class studentID {
    constructor(name, id, isValid, ) {
        this.name = name /// string
        this.id = id /// string
        this.isValid = isValid /// boolean
    }

    setToCheckID(table) {
        /// assign the ID to checking table
        /// this.table = table
    }
    
    getToCheckID() {
        /// get the current ID position
        /// if ID on the table then can be interacted with
    }


    getCheckID(whatsWrong) {
        /// get the current responce for right/wrong user checks
        /// checks against isValid
        /// undefined if ID isnt present/ student changing
    }
}