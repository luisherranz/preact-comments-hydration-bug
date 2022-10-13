import { hydrate } from "preact";

const App = () => {
  return (
    <div>
      <div class="first-div animation">Before the comment</div>
      <div class="second-div animation">After the comment</div>
    </div>
  );
};

let records = [];

const obs = new MutationObserver((r) => {
  records.push(...r);
});

obs.observe(window.root, { childList: true, subtree: true });

setTimeout(() => {
  hydrate(<App />, window.root);
  console.log("hydrated");

  records.push(...obs.takeRecords());

  obs.disconnect();

  console.log(records);
}, 1500);
