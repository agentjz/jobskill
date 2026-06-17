(function () {
  const items = window.JOBSKILL_ITEMS || [];
  const guideItem = ["维护指南", "CONTRIBUTING.md"];
  const list = document.getElementById("skillList");
  const content = document.getElementById("content");
  const sidebarMenu = document.getElementById("sidebarMenu");

  function hashName() {
    try {
      return decodeURIComponent(location.hash.replace(/^#/, ""));
    } catch (_error) {
      return "";
    }
  }

  function basePath(path) {
    return path.slice(0, path.lastIndexOf("/") + 1);
  }

  function fixImages(html, base) {
    const template = document.createElement("template");
    template.innerHTML = html;
    template.content.querySelectorAll("img[src]").forEach((img) => {
      const src = img.getAttribute("src") || "";
      if (/^(https?:)?\/\//.test(src) || src.startsWith("/") || src.startsWith("data:")) {
        return;
      }
      img.setAttribute("src", base + src.replace(/^\.\//, ""));
    });
    return template.innerHTML;
  }

  function wrapTables() {
    content.querySelectorAll("table").forEach((table) => {
      if (table.parentElement && table.parentElement.classList.contains("table-wrap")) {
        return;
      }
      const wrapper = document.createElement("div");
      wrapper.className = "table-wrap";
      table.parentNode.insertBefore(wrapper, table);
      wrapper.appendChild(table);
    });
  }

  function escapeTableCell(value) {
    return value.replace(/\|/g, "\\|").replace(/\r?\n/g, "<br>");
  }

  function frontmatterToTable(markdown) {
    const match = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
    if (!match) {
      return markdown;
    }

    const rows = match[1]
      .split(/\r?\n/)
      .map((line) => {
        const index = line.indexOf(":");
        if (index < 0) {
          return null;
        }
        const key = line.slice(0, index).trim();
        const value = line.slice(index + 1).trim();
        return `| ${escapeTableCell(key)} | ${escapeTableCell(value)} |`;
      })
      .filter(Boolean);

    if (!rows.length) {
      return markdown.slice(match[0].length);
    }

    return [
      "| 字段 | 内容 |",
      "| --- | --- |",
      ...rows,
      "",
      markdown.slice(match[0].length)
    ].join("\n");
  }

  function renderList() {
    list.innerHTML = "";
    items.forEach(([name]) => {
      const a = document.createElement("a");
      a.href = "#" + encodeURIComponent(name);
      a.textContent = name;
      a.className = "nav-link";
      a.dataset.skillName = name;
      list.appendChild(a);
    });
  }

  function closeMobileMenu() {
    if (!sidebarMenu || window.innerWidth >= 768 || !window.bootstrap) {
      return;
    }
    const collapse = window.bootstrap.Collapse.getOrCreateInstance(sidebarMenu, { toggle: false });
    collapse.hide();
  }

  function markActive(name) {
    list.querySelectorAll(".nav-link").forEach((link) => {
      link.classList.toggle("active", link.dataset.skillName === name);
    });
  }

  async function loadSkill() {
    const name = hashName() || (items[0] && items[0][0]);
    const item = [...items, guideItem].find(([itemName]) => itemName === name) || items[0];
    if (!item) {
      content.textContent = "没有 skill。";
      return;
    }

    document.title = item[0];
    markActive(item[0]);
    content.textContent = "正在加载...";

    try {
      const response = await fetch(encodeURI(item[1]));
      if (!response.ok) {
        throw new Error("加载失败：" + response.status);
      }
      const markdown = await response.text();
      content.innerHTML = fixImages(marked.parse(frontmatterToTable(markdown)), basePath(item[1]));
      wrapTables();
    } catch (error) {
      content.textContent = error.message;
    }
  }

  renderList();
  list.addEventListener("click", closeMobileMenu);
  window.addEventListener("hashchange", loadSkill);
  loadSkill();
})();
