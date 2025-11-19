"use client";

import { useState, useEffect } from "react";
import { Highlight } from "prism-react-renderer";
import { motion } from "framer-motion";

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

  const features = [
    "Custom integrations",
    "SEO optimization at the code level",
    "Automated forms & analytics",
    "Accessible, maintainable, scalable solutions"
  ];

  return (
    <section className="w-full bg-[#fafafa] py-32 overflow-x-hidden">
      <div className="max-w-6xl mx-auto w-full px-6 grid md:grid-cols-2 gap-24 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-5xl md:text-6xl font-light text-black mb-8 tracking-tight leading-tight">
            Behind the code
          </h2>
          <p className="text-[#737373] text-lg leading-relaxed font-light mb-12">
            Clean, modern code powers reliable websites. Built with current frameworks and best practices.
          </p>
          <ul className="space-y-6">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-4 text-base group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
              >
                <span className="mt-2 w-1.5 h-1.5 bg-black rounded-full flex-shrink-0 transition-transform duration-300 group-hover:scale-150" />
                <span className="text-[#404040] font-light leading-relaxed transition-colors duration-300 group-hover:text-black">
                  {feature}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          className="flex items-center justify-center w-full"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <div className="bg-white w-full border border-[#e5e5e5] overflow-hidden hover:border-black/20 transition-colors duration-500">
            <div className="flex items-center px-5 py-4 bg-[#fafafa] border-b border-[#e5e5e5]">
              <span className="text-sm text-[#737373] font-mono">App.js</span>
            </div>
            <div className="hide-scrollbar px-8 py-8 font-mono text-sm text-left bg-white h-96 overflow-x-auto w-full">
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
                        <span className="inline-block w-8 text-right mr-4 text-[#999999] select-none flex-shrink-0 font-light">
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
