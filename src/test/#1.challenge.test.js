import { client } from "../client";

test(`Prints out the URL value associated with each “Icon” within “RelatedTopics”`, async () => {
  const response = await client().get("").expect(200);

  const baseUrl = "https://duckduckgo.com";

  const result = JSON.parse(response.text).RelatedTopics.reduce((r, i) => {
    if (i.Icon.URL && !r) {
      r = baseUrl + i.Icon.URL;
    } else if (i.Icon.URL) {
      r = [...r, baseUrl + i.Icon.URL];
    }
    return r;
  }, []);

  console.log(result);
});
