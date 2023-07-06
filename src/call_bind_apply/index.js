import React, { useEffect } from "react"
import { Text } from "react-native"

function getFullName(value1,value2,valu) {
    console.log(value1+value1)
    return this.firstName + " " + this.lastName
}

const person1 = {
    firstName: 'john',
    lastName: 'doe'
}

const person2 = {
    firstName: "aman",
    lastName: "attri"
}


export default Call_Bind_Apply_Screen = () => {

    function testBind() {
        var method = getFullName.bind(person2)
        return method("aman","attri","hello")
    }

    return (<Text>
        Learning call apply bind fuction call {testBind()}
    </Text>)
}
