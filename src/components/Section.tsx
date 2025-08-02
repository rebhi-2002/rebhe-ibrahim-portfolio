import React from "react";
import parse, {
  attributesToProps,
  DOMNode,
  Element,
  HTMLReactParserOptions,
} from "html-react-parser";

const Section: React.FC<{ content: string }> = ({ content }) => {
  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      // Check if the node is a <pre> element
      if (domNode instanceof Element && domNode.tagName === "pre") {
        const preProps = attributesToProps(domNode.attribs);

        // Find the <code> element inside the <pre> tag
        const codeNode = domNode.children.find(
          (child) => child instanceof Element && child.tagName === "code"
        ) as Element | undefined;

        if (codeNode) {
          const codeProps = attributesToProps(codeNode.attribs);
          // Get the raw text content from inside the <code> tag
          const codeString =
            (codeNode.children[0] as DOMNode & { data?: string })?.data || "";

          return (
            <pre {...preProps}>
              <code
                {...codeProps}
                dangerouslySetInnerHTML={{ __html: codeString }}
              />
            </pre>
          );
        }
      }
    },
  };

  return (
    <section className="section-content">{parse(content, options)}</section>
  );
};

export default Section;

/* import parse from "html-react-parser";
// import ReactMarkdown from "react-markdown";

function sanitizeHtml(html: string): string {
  return html
    .replace(/<([a-z]+component)[^>]*>/gi, "") // remove unknown component tags
    .replace(/<\/([a-z]+component)>/gi, "")
    .replace(/<profiler[^>]*>/gi, "")
    .replace(/<\/profiler>/gi, "")
    .replace(/onclick=/gi, "data-onclick=") // prevent broken handlers
    .replace(/<(suspense|list)[^>]*>/gi, "") // remove opening tag
    .replace(/<\/(suspense|list)>/gi, ""); // remove closing tag
}

const Section: React.FC<{ content: string }> = ({ content }) => {
  const cleanHtml = sanitizeHtml(content);
  return <section className="section-content">{parse(cleanHtml)}</section>;
  // return (
  //   <section className="section-content">
  //     <ReactMarkdown>{content}</ReactMarkdown>
  //   </section>
  // );
};

export default Section; */
