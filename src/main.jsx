import { hydrate } from "preact";
import toVdom from "./vdom";

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
  const vdom = toVdom(window.root)
  hydrate(vdom.props.children, window.root);
  console.log("hydrated");

  records.push(...obs.takeRecords());

  obs.disconnect();

  window.hydrated.innerHTML = "Hydrated!";

  console.log(records);
}, 1500);
