import { h } from "preact";

// Recursive function that transfoms a DOM tree into vDOM.
export default function toVdom(node) {
  const props = {};
  const attributes = node.attributes;
  const childNodes = node.childNodes;

  if (node.nodeType === 3) return node.data;
  if (node.localName === "script") return h("script");

  for (let i = 0; i < attributes.length; i++) {
    props[attributes[i].name] = attributes[i].value;
  }

  // Walk child nodes and return vDOM children.
  const children = [];
  for (let i = 0; i < childNodes.length; i++) {
    const child = childNodes[i];
    if (child.nodeType === 8) {
      removedComments.push({ })
      child.remove();
      i--;
    } else {
      children.push(toVdom(child));
    }
  }

  return h(node.localName, props, children);
}
