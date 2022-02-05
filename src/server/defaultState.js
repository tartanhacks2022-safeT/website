export const defaultState = {
    users:[{
        id:"u1",
        name: "Robin Robinson",
        friends:[`u2`]
    },{
        id:"u2",
        name: "Jackie Jackson",
        friends:[`u1`]
    }],
    categories:[{ // filler
        name:"Sent",
        id:"c1",
        owner:"u1"
    },{
        name:"Received",
        id:"c1",
        owner:"u1"
    }
    ],
    entries:[{
        name:"blah",
        id:"asdf",
        category:"c1",
        owner:"u1"
    }],
};