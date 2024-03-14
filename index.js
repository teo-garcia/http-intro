import http from "http";
import psList from "ps-list";
const port = 3000;

const server = http.createServer(async (req, res) => {
  if (req.url === "/max-pid" && req.method === "GET") {
    const maxUsageProccess = await getMaxUsageProcess();

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write(JSON.stringify(maxUsageProccess));
    res.end();
  }
});

const getMaxUsageProcess = async () => {
  const processList = await psList();
  const formattedAndSortedProccessList = processList
    .map((process) => {
      return {
        pid: process.pid,
        name: process.name,
        cpu: process.cpu,
      };
    })
    .sort((processA, processB) => {
      return processB.cpu - processA.cpu;
    });

  return formattedAndSortedProccessList[0];
};

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port} 🚀`);
});
