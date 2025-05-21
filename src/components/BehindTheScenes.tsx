"use client";

import { useState, useEffect } from "react";
import { Highlight } from "prism-react-renderer";

const codeLines = [
  "const handleSubmit = async (formData) => {",
  "  setLoading(true);",
  "  const response = await fetch('/api/contact', {",
  "    method: 'POST',",
  "    body: JSON.stringify(formData),",
  "    headers: { 'Content-Type': 'application/json' }",
  "  });",
  "  const result = await response.json();",
  "  setLoading(false);",
  "  if(result.success) {",
  "    toast.success('Message sent!');",
  "  }",
  "};"
];

export default function BehindTheScenes() {
  const [typedLines, setTypedLines] = useState<string[]>([""]);
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (lineIdx < codeLines.length) {
      if (charIdx < codeLines[lineIdx].length) {
        timer = setTimeout(() => {
          setTypedLines(lines => {
            const newLines = [...lines];
            if (newLines[lineIdx] === undefined) newLines[lineIdx] = "";
            newLines[lineIdx] += codeLines[lineIdx][charIdx];
            return newLines;
          });
          setCharIdx(idx => idx + 1);
        }, 24);
      } else {
        // Start new line
        timer = setTimeout(() => {
          setTypedLines(lines => [...lines, ""]);
          setLineIdx(idx => idx + 1);
          setCharIdx(0);
        }, 300);
      }
    } else {
      // Animation complete, pause and then reset
      timer = setTimeout(() => {
        setTypedLines([""]);
        setLineIdx(0);
        setCharIdx(0);
        setReset(val => !val); // force state update to re-trigger useEffect
      }, 1700);
    }
    return () => clearTimeout(timer);
  }, [lineIdx, charIdx, reset]);

  // Join lines for syntax highlighting, add cursor if still typing
  const codeString =
    typedLines
      .map((line, i) =>
        i === lineIdx && lineIdx < codeLines.length ? line + "|" : line
      )
      .join("\n");

  return (
    <section className="w-full bg-gradient-to-b from-[#b6deee] to-white py-0 sm:py-20 overflow-x-hidden">
      <div className="max-w-6xl mx-auto w-full px-2 sm:px-4 grid md:grid-cols-2 gap-8 items-center min-w-0">
        <div className="min-w-0 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
            Behind the Scenes
          </h2>
          <p className="text-lg text-gray-700">
            Every great website is powered by clean, modern code that delivers reliability, speed, and security—so your business runs smoothly, no matter what.
          </p>
          <ul className="space-y-3 mt-4 pl-6 text-gray-700">
            <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-blue-400 rounded-full inline-block"></span>
                <span>Custom integrations</span>
            </li>
            <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-blue-400 rounded-full inline-block"></span>
                <span>SEO optimization at the code level</span>
            </li>
            <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-blue-400 rounded-full inline-block"></span>
                <span>Automated forms &amp; analytics</span>
            </li>
            <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-blue-400 rounded-full inline-block"></span>
                <span>Accessible, maintainable, scalable solutions</span>
            </li>
            </ul>
        </div>
        <div className="flex items-center justify-center w-full min-w-0">
          <div className="bg-gray-900 rounded-2xl shadow-2xl w-full max-w-full sm:max-w-md border border-gray-800 overflow-hidden min-w-0">
            <div className="flex items-center px-4 py-2 bg-gray-800 border-b border-gray-700">
              <span className="w-3 h-3 bg-red-400 rounded-full mr-2" />
              <span className="w-3 h-3 bg-yellow-400 rounded-full mr-2" />
              <span className="w-3 h-3 bg-green-400 rounded-full" />
              <span className="ml-4 text-xs text-gray-400 font-mono">App.js</span>
            </div>
            <div className="hide-scrollbar px-3 sm:px-6 py-6 font-mono text-sm text-left bg-gray-900 h-72 overflow-x-auto w-full max-w-full min-w-0">
              <Highlight
                code={codeString}
                language="javascript"
              >
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                  <pre
                    className={className}
                    style={{
                      ...style,
                      background: "transparent",
                      margin: 0,
                      minWidth: "100%",
                      width: "max-content",
                    }}
                  >
                    {tokens.map((line, i) => (
                      <div key={i} {...getLineProps({ line })}>
                        {line.map((token, key) => (
                          <span key={key} {...getTokenProps({ token })} />
                        ))}
                      </div>
                    ))}
                  </pre>
                )}
              </Highlight>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
