"use client";

import { useState, useEffect, useRef } from "react";
import { Highlight } from "prism-react-renderer";
import { PuzzlePieceIcon, MagnifyingGlassIcon, ChartBarIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import { motion, useInView } from "framer-motion";

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

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    { icon: PuzzlePieceIcon, text: "Custom integrations" },
    { icon: MagnifyingGlassIcon, text: "SEO optimization at the code level" },
    { icon: ChartBarIcon, text: "Automated forms & analytics" },
    { icon: CodeBracketIcon, text: "Accessible, maintainable, scalable solutions" }
  ];

  return (
    <section ref={ref} className="w-full bg-gradient-to-b from-[#b6deee] to-white py-0 sm:py-20 overflow-x-hidden">
      <div className="max-w-6xl mx-auto w-full px-2 sm:px-4 grid md:grid-cols-2 gap-8 items-center min-w-0">
        <motion.div
          className="min-w-0 px-4"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
            Behind the Scenes
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Every great website is powered by clean, modern code that delivers reliability, speed, and security, so your business runs smoothly, no matter what.
          </p>
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-4 group cursor-default"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                  {feature.text}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          className="flex items-center justify-center w-full min-w-0"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-gray-900 rounded-2xl shadow-2xl w-full max-w-full sm:max-w-md border border-gray-700/50 overflow-hidden min-w-0 ring-1 ring-teal-500/20">
            <div className="flex items-center px-4 py-2 bg-gray-800 border-b border-gray-700">
              <span className="w-3 h-3 bg-red-400 rounded-full mr-2 shadow-sm" />
              <span className="w-3 h-3 bg-yellow-400 rounded-full mr-2 shadow-sm" />
              <span className="w-3 h-3 bg-green-400 rounded-full shadow-sm" />
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
                      <div key={i} {...getLineProps({ line })} className="flex">
                        <span className="inline-block w-8 text-right mr-4 text-gray-600 select-none flex-shrink-0">
                          {i + 1}
                        </span>
                        <div className="flex-1">
                          {line.map((token, key) => (
                            <span key={key} {...getTokenProps({ token })} />
                          ))}
                        </div>
                      </div>
                    ))}
                  </pre>
                )}
              </Highlight>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
