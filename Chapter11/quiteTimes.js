// There’s a security camera near Carla’s lab that’s activated by a motion sensor. It is connected to the network and starts sending out a video stream when it is active. Because she’d rather not be discovered, Carla has set up a system that notices this kind of wireless network traffic and turns on a light in her lair whenever there is activity outside, so she knows when to keep quiet.

// She’s also been logging the times at which the camera is tripped for a while and wants to use this information to visualize which times, in an average week, tend to be quiet, and which tend to be busy. The log is stored in files holding one time stamp number (as returned by Date.now()) per line.

// 1695709940692
// 1695701068331
// 1695701189163
// The "camera_logs.txt" file holds a list of log files. Write an asynchronous function activityTable(day) that for a given day of the week returns an array of 24 numbers, one for each hour of the day, that hold the number of camera network traffic observations seen in that hour of the day. Days are identified by number using the system used by Date.getDay, where Sunday is 0 and Saturday is 6.

// The activityGraph function, provided by the sandbox, summarizes such a table into a string.

// To read the files, use the textFile function defined earlier—given a filename, it returns a promise that resolves to the file’s content. Remember that new Date(timestamp) creates a Date object for that time, which has getDay and getHours methods returning the day of the week and the hour of the day.

// Both types of files—the list of log files and the log files themselves—have each piece of data on its own line, separated by newline ("\n") characters.


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

    let logFileList = await textFile("camera_logs.txt");
  
    for (let filename of logFileList.split("\n")) {
      if (filename.trim()) {
        let log = await textFile(filename);
        for (let timestamp of log.split("\n")) {
          if (timestamp.trim()) {
            let date = new Date(Number(timestamp));
            let dayy = date.getDay();
            let hourr = date.getHours();
            
            console.log(`Timestamp: ${timestamp}`);
            console.log(`Date: ${date}`);
            console.log(`Day: ${dayy}, Hour: ${hourr}`);
            
          }
        }
      }
    }
  }
  
  activityTable()
  .then(() => console.log("Completed Succesfully"))
  .catch((err) => console.error(err));
  