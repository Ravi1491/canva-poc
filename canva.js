// import { ApifyClient } from "apify-client";
const ApifyClient = require("apify-client");

// Initialize the ApifyClient with API token
const client = new ApifyClient({
  token: "apify_api_LGFj0BYglJHEDCFx3yzggItpwl0pi80gGE6f",
});

// Prepare Actor input
const input = {
  startUrls: [
    {
      url: "https://www.canva.com/banners/templates/diwali/",
    },
  ],
  proxyConfig: {
    useApifyProxy: true,
  },
};

(async () => {
  // Run the Actor and wait for it to finish
  const run = await client.actor("P7C1BZV18DYQkPuFv").call(input);

  // Fetch and print Actor results from the run's dataset (if any)
  console.log("Results from dataset");
  const { items } = await client.dataset(run.defaultDatasetId).listItems();
  items.forEach((item) => {
    console.dir(item);
  });
})();
