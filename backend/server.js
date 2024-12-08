import express from "express"

const app = express()

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "1st joke",
            content: "this is 1st joke",
        },
        {
            id: 2,
            title: "2nd joke",
            content: "this is 2nd joke",
        },
        {
            id: 3,
            title: "3rd joke",
            content: "this is 3rd joke",
        },
        {
            id: 4,
            title: "4th joke",
            content: "this is 4th joke",
        },
        {
            id: 5,
            title: "5th joke",
            content: "this is 5th joke",
        },
        {
            id: 6,
            title: "6th joke",
            content: "this is 6th joke",
        },
    ]
    res.send(jokes)
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`your app is running on port ${port}`)
});