const TOOLS = [
  // TEXT
  { id: "word-counter",       cat: "text",  icon: "📝", name: "Word Counter",          desc: "Count words, characters, sentences and paragraphs.",         url: "tools/text/word-counter.html" },
  { id: "case-converter",     cat: "text",  icon: "🔡", name: "Case Converter",         desc: "Convert text to upper, lower, title, camel, snake case.",     url: "tools/text/case-converter.html" },
  { id: "lorem-ipsum",        cat: "text",  icon: "📄", name: "Lorem Ipsum Generator",  desc: "Generate placeholder lorem ipsum text by paragraphs.",        url: "tools/text/lorem-ipsum.html" },
  { id: "text-diff",          cat: "text",  icon: "🔀", name: "Text Diff",              desc: "Compare two texts and highlight the differences.",            url: "tools/text/text-diff.html" },
  { id: "find-replace",       cat: "text",  icon: "🔍", name: "Find & Replace",         desc: "Find and replace text with optional regex support.",          url: "tools/text/find-replace.html" },
  { id: "text-reverse",       cat: "text",  icon: "↩️", name: "Text Reverser",          desc: "Reverse text, words, or lines instantly.",                   url: "tools/text/text-reverse.html" },
  { id: "duplicate-remover",  cat: "text",  icon: "🧹", name: "Duplicate Line Remover", desc: "Remove duplicate lines from a list or text block.",           url: "tools/text/duplicate-remover.html" },
  { id: "text-sorter",        cat: "text",  icon: "🗂️", name: "Text Sorter",            desc: "Sort lines alphabetically, numerically, or by length.",       url: "tools/text/text-sorter.html" },

  // MATH
  { id: "percentage-calc",    cat: "math",  icon: "💯", name: "Percentage Calculator",  desc: "Calculate percentages, increases, decreases and ratios.",     url: "tools/math/percentage-calc.html" },
  { id: "unit-converter",     cat: "math",  icon: "📐", name: "Unit Converter",         desc: "Convert length, weight, temperature, area, speed and more.",  url: "tools/math/unit-converter.html" },
  { id: "base-converter",     cat: "math",  icon: "🔢", name: "Number Base Converter",  desc: "Convert numbers between binary, octal, decimal and hex.",     url: "tools/math/base-converter.html" },
  { id: "bmi-calculator",     cat: "math",  icon: "⚖️", name: "BMI Calculator",         desc: "Calculate Body Mass Index from height and weight.",           url: "tools/math/bmi-calculator.html" },
  { id: "age-calculator",     cat: "math",  icon: "🎂", name: "Age Calculator",         desc: "Calculate exact age in years, months and days.",              url: "tools/math/age-calculator.html" },
  { id: "tip-calculator",     cat: "math",  icon: "🍽️", name: "Tip Calculator",         desc: "Calculate tip amount and split bills between people.",        url: "tools/math/tip-calculator.html" },
  { id: "scientific-calc",    cat: "math",  icon: "🧮", name: "Scientific Calculator",  desc: "Full scientific calculator with trig, log, power functions.",  url: "tools/math/scientific-calc.html" },
  { id: "loan-calculator",    cat: "math",  icon: "🏦", name: "Loan Calculator",        desc: "Calculate EMI, total interest, and repayment schedule.",      url: "tools/math/loan-calculator.html" },

  // DEV
  { id: "json-formatter",     cat: "dev",   icon: "{ }", name: "JSON Formatter",         desc: "Format, validate, and minify JSON data.",                    url: "tools/dev/json-formatter.html" },
  { id: "base64",             cat: "dev",   icon: "🔐", name: "Base64 Encode / Decode",  desc: "Encode or decode Base64 strings and files.",                 url: "tools/dev/base64.html" },
  { id: "url-encoder",        cat: "dev",   icon: "🔗", name: "URL Encoder / Decoder",   desc: "Encode or decode URLs and query parameters.",                url: "tools/dev/url-encoder.html" },
  { id: "regex-tester",       cat: "dev",   icon: "🎯", name: "Regex Tester",            desc: "Test regular expressions with live match highlighting.",      url: "tools/dev/regex-tester.html" },
  { id: "html-escape",        cat: "dev",   icon: "🏷️", name: "HTML Escape / Unescape",  desc: "Escape or unescape HTML entities in text.",                  url: "tools/dev/html-escape.html" },
  { id: "hash-generator",     cat: "dev",   icon: "🔑", name: "Hash Generator",          desc: "Generate MD5-style, SHA-style hashes using Web Crypto.",     url: "tools/dev/hash-generator.html" },
  { id: "uuid-generator",     cat: "dev",   icon: "🪪", name: "UUID Generator",          desc: "Generate RFC 4122 v4 UUIDs instantly.",                      url: "tools/dev/uuid-generator.html" },
  { id: "markdown-preview",   cat: "dev",   icon: "✍️", name: "Markdown Preview",        desc: "Write Markdown and preview the rendered HTML side by side.",  url: "tools/dev/markdown-preview.html" },

  // COLOR
  { id: "color-picker",       cat: "color", icon: "🎨", name: "Color Picker",           desc: "Pick a color and get HEX, RGB, and HSL values.",              url: "tools/color/color-picker.html" },
  { id: "hex-rgb",            cat: "color", icon: "🎞️", name: "HEX ↔ RGB Converter",    desc: "Convert colors between HEX, RGB, HSL and HSV.",              url: "tools/color/hex-rgb.html" },
  { id: "gradient-generator", cat: "color", icon: "🌈", name: "Gradient Generator",     desc: "Create CSS linear gradients with live preview and code.",     url: "tools/color/gradient-generator.html" },
  { id: "contrast-checker",   cat: "color", icon: "👁️", name: "Contrast Checker",       desc: "Check WCAG contrast ratio between text and background.",      url: "tools/color/contrast-checker.html" },
  { id: "palette-generator",  cat: "color", icon: "🖌️", name: "Color Palette Generator","desc": "Generate harmonious color palettes from a base color.",      url: "tools/color/palette-generator.html" },
];
