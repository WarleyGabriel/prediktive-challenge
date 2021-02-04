import { client } from "../client";

test(`Print the name of each character from the result set in a comma separated list`, async () => {
  const response = await client().get("").expect(200);

  const result = JSON.parse(response.text).RelatedTopics.reduce((r, i) => {
    const regex = /<a.+">(.+)<\/a>/g;
    let [, name] = regex.exec(i.Result);

    name = name.replace(/\(.+\)/g, "");

    if (!r) {
      r = name;
    } else {
      r = `${r}, ${name}`;
    }
    return r;
  }, "");

  console.log(result);
});
