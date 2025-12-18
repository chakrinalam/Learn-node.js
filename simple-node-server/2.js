const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === "/table1/create") {
        res.end("You called the operation create for table1.");
    } else if (url === "/table1/read") {
        res.end("You called the operation read for table1.");
    } else if (url === "/table1/update") {
        res.end("You called the operation update for table1.");
    } else if (url === "/table1/delete") {
        res.end("You called the operation delete for table1.");
    }

    else if (url === "/table2/create") {
        res.end("You called the operation create for table2.");
    } else if (url === "/table2/read") {
        res.end("You called the operation read for table2.");
    } else if (url === "/table2/update") {
        res.end("You called the operation update for table2.");
    } else if (url === "/table2/delete") {
        res.end("You called the operation delete for table2.");
    }

    else if (url === "/table3/create") {
        res.end("You called the operation create for table3.");
    } else if (url === "/table3/read") {
        res.end("You called the operation read for table3.");
    } else if (url === "/table3/update") {
        res.end("You called the operation update for table3.");
    } else if (url === "/table3/delete") {
        res.end("You called the operation delete for table3.");
    }

    else if (url === "/table4/create") {
        res.end("You called the operation create for table4.");
    } else if (url === "/table4/read") {
        res.end("You called the operation read for table4.");
    } else if (url === "/table4/update") {
        res.end("You called the operation update for table4.");
    } else if (url === "/table4/delete") {
        res.end("You called the operation delete for table4.");


    } else {
        res.end("Invalid operation");
    }
})
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
