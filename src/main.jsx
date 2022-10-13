import { hydrate } from "preact";

const App = () => {
  return (
    <div>
      <div class="first-div">First div</div>
      <div class="second-div">Second div</div>
    </div>
  );
};

let records = [];

const obs = new MutationObserver((r) => {
  records.push(...r);
});

obs.observe(window.root, { childList: true, subtree: true });

hydrate(<App />, window.root);

records.push(...obs.takeRecords());

obs.disconnect();

console.log(records)
