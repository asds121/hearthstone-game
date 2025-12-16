const fs = require("fs");
const path = require("path");

// Usage:
// node scripts/generate-api-md.js --apiDir=docs/api --out=docs/API.md --title="API Reference" --sort=alpha --remove-headers

function parseArgs() {
  const args = {};
  process.argv.slice(2).forEach((arg) => {
    if (arg.startsWith("--")) {
      const eq = arg.indexOf("=");
      if (eq === -1) {
        args[arg.slice(2)] = true;
      } else {
        const key = arg.slice(2, eq);
        const val = arg.slice(eq + 1);
        args[key] = val;
      }
    }
  });
  return args;
}

(async () => {
  try {
    const argv = parseArgs();
    const apiDir = path.resolve(__dirname, "..", argv.apiDir || "docs/api");
    const outFile = path.resolve(__dirname, "..", argv.out || "docs/API.md");
    const title = argv.title || "API Documentation";
    const sortMode = (argv.sort || "alpha").toLowerCase(); // 'alpha' or 'none'
    const removeHeaders = !!argv["remove-headers"];

    if (!fs.existsSync(apiDir)) {
      console.error(
        "目录不存在: " +
          apiDir +
          "\n请先运行 `npm run docs:generate` 来生成文档。"
      );
      process.exit(1);
    }

    let names = fs.readdirSync(apiDir).filter((n) => n.endsWith(".md"));

    if (sortMode === "alpha") {
      names = names.sort();
    }

    let merged = `# ${title}\n\n`;
    merged += `> 生成时间：${new Date().toISOString()}\n\n`;

    names.forEach((name) => {
      const full = path.join(apiDir, name);
      let content = fs.readFileSync(full, "utf8");

      if (removeHeaders) {
        // 移除文件开头的第一个 H1 或 H2 标题，避免重复过多大标题
        content = content.replace(/^#\s.*\n/, "");
        content = content.replace(/^##\s.*\n/, "");
      }

      // 添加分隔线和原始内容
      merged += `\n---\n\n`;
      merged += content.trim() + "\n";
    });

    fs.writeFileSync(outFile, merged.trim());
    console.log(`已生成: ${outFile} （来源 ${names.length} 个文件）`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
