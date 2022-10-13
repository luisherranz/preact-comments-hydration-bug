import { hydrate } from "preact";

const App = () => {
  return (
    <div>
      <div class="first-div">First div</div>
      <div class="second-div">Second div</div>
    </div>
  );
};

const obs = new MutationObserver((records) => {
  console.log(records);
});

obs.observe(window.root, { childList: true, subtree: true });

hydrate(<App />, window.root);
