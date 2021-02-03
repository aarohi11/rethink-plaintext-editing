export function listFiles() {

  

  const guide = new File(
    [
      `The objective is to make this application better in a perceptible way. Features this application has had include a text editor, markdown or code previews, and even file changes persisting through reloads.

Install any npm packages you'd like.

This is designed for creative freedom.

Once complete, email me a repo link at will@rethink.software.

Thanks for trying my challenge!

- Will
`
    ],
    "/README.txt",
    {
      type: "text/plain",
      lastModified: new Date("2020-01-05T16:39:00")
    }
  );

  var plaindata = localStorage.getItem('plain');
  console.log(plaindata);

  const plain = new File(
    [plaindata],
    "/plain.txt",
    {
      type: "text/plain"
      /*lastModified: new Date("1995-12-17T03:24:00")*/
    }
  );

  var waterdata = localStorage.getItem('water');

  const water = new File(
    [waterdata],
    "/water.txt",
    {
      type: "text/plain"
      /*lastModified: new Date("1998-12-17T04:24:00")*/
    }
  );

  var fancydata = localStorage.getItem('fancy');

  // Here is a markdown file
  const fancy = new File(
    [fancydata],
    "/fancy.md",
    {
      type: "text/markdown"
      //lastModified: new Date("2018-09-14T09:32:17")
    }
  );

  const javascript = new File(
    [
      `import { useState, useRef, useEffect } from 'react';

// From: https://blog.castiel.me/posts/2019-02-19-react-hooks-get-current-state-back-to-the-future/

export default initialValue => {
  const [state, setState] = useState(initialValue);
  const stateRef = useRef(state);
  useEffect(() => {
    stateRef.current = state;
  }, [state]);
  return [state, stateRef, setState];
};`
    ],
    "/use-ref-state.js",
    {
      type: "text/javascript",
      lastModified: new Date("2019-04-01T12:15:01")
    }
  );

  const json = new File(
    [
      `{
    "name" : "Admin",
    "email" : "admin@neptune.com",
    "rights" : [ "admin", "editor", "contributor" ]
}`
    ],
    "/document.json",
    {
      type: "application/json",
      lastModified: new Date("2011-07-29T16:01:35")
    }
  );

  return [guide, plain, water, fancy, javascript, json];
}
