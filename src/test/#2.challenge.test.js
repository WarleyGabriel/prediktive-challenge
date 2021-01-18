import { client } from "../client";

test(`Print the name of each character from the result set in a comma separated list`, async () => {
  const response = await client().get("").expect(200);

  const result = JSON.parse(response.text).RelatedTopics.reduce((r, i) => {
    const regex = /<a.+">(.+)<\/a>/g;
    const [, name] = regex.exec(i.Result);

    if (!r) {
      r = name;
    } else {
      r = `${r}, ${name}`;
    }
    return r;
  }, "");

  console.log(result);
});
