// In this style, using Promise.all will be more convenient than trying to model a loop over the log files. In the async function, just using await in a loop is simpler. If reading a file takes some time, which of these two approaches will take the least time to run?

// If one of the files listed in the file list has a typo, and reading it fails, how does that failure end up in the Promise object that your function returns?


async function textFile(filename) {
    const files = {
      "camera_logs.txt": "log1.txt\nlog2.txt\nlog3.txt",
      "log1.txt": "1695709940692\n1695701068331\n1695701189163",
      "log2.txt": "1695796340692\n1695803940692",
      "log3.txt": "1695882740692\n1695890340692"
    };
    return files[filename] || "";
}

async function activityTable() {

    let files = await textFile("camera_logs.txt");
    let logs = await Promise.all(files.split("\n").map(textFile));

    logs.forEach(log => {
      log.split("\n").forEach(timestamp => {
        if (timestamp.trim()) {
            let date = new Date(Number(timestamp));
            let dayy = date.getDay();
            let hourr = date.getHours();
            
            console.log(`Timestamp: ${timestamp}`);
            console.log(`Date: ${date}`);
            console.log(`Day: ${dayy}, Hour: ${hourr}`);
            
          }
      });
    });
}

async function main() {
    try {
        await activityTable();
    } catch (err) {
        console.error(err);
    }
}

main();
