# Agent 规则

本仓库维护飞行部日常工作使用的 skill。

始终使用简体中文和项目 owner 交流。

面向普通维护者的说明写在 `CONTRIBUTING.md`。`CONTRIBUTING.md` 只写自然语言维护说明，不写开发流程、命令、脚本、路径同步细节。

本文件写给 agent，记录每次维护时必须遵守的流程、同步点和边界。

## 当前事实主干

只写当前有效内容。

历史提交、旧数据、旧入口、旧能力只能作为判断证据，不能进入当前正文、页面、README、计划、状态或回复主干。

不做旧兼容说明，不写 legacy 包装，不写“旧东西怎么处理”的特殊分支。

当前没有的能力，不写进源码、文档、页面、索引、prompt 或 CLI 输出。

文档、目录、页面索引、附件和检查脚本必须讲同一个当前事实。

## Owner 原文

owner 给出要写入 skill 的原文时，按原文字句写入。

除非 owner 明确要求整理、改写或结构化，不自行增删、解释、换口径、扩写、改成表格或补充背景。

不要把 owner 的一句话改成“更完整”的版本。先保持原文，再按明确要求调整格式。

## 仓库入口

- `index.html`：GitHub Pages 页面入口。
- `js/skills.js`：页面左侧导航和加载顺序。
- `skills/01` 到 `skills/06`：当前 skill 正文和附件。
- `README.md`：项目首页说明。
- `SKILL_INDEX.md`：数字目录和 skill 名称索引。
- `CONTRIBUTING.md`：给普通维护者看的维护指南。
- `scripts/check-markdown-assets.ps1`：Markdown 图片链接检查。

## Skill 结构

每个 skill 使用数字目录，避免中文路径带来的发布和加载问题。

```text
skills/
  01/
    SKILL.md
  02/
    SKILL.md
```

每个 `SKILL.md` 使用标准 skill 头：

```markdown
---
name: skill 名称
description: skill 使用场景。
---

# skill 名称
```

附件放在所属 skill 目录内，正文使用相对路径引用。

## 每次维护流程

1. 先确认 owner 当前要改的对象：哪个 skill、哪段正文、页面、README、维护指南，还是索引。
2. 读取相关文件现状，不只看用户摘出来的一段。
3. 判断这次改动是否涉及名称、顺序、正文、附件或页面入口。
4. 修改正文时遵守 owner 原文规则。
5. 新增图片或附件时，放入对应 skill 目录，并使用相对路径引用。
6. 新增、删除、重命名或调整 skill 顺序时，同步更新 `js/skills.js`、`README.md` 和 `SKILL_INDEX.md`。
7. 页面布局、导航、渲染方式变化时，同步检查 `index.html`、`css/site.css`、`js/site.js`。
8. 维护说明变化时，普通维护者口径写入 `CONTRIBUTING.md`，agent 执行流程写入本文件。
9. 运行验证。
10. 收尾时说明改了什么、验证了什么、是否提交或 push。

## 页面维护

页面是 GitHub Pages 静态页面。

页面左侧导航来自 `js/skills.js`。

页面右侧正文通过 fetch 加载对应 Markdown。

`skills/` 目录使用数字目录。

Markdown 文件有 frontmatter。站点根目录保留 `.nojekyll`，让 GitHub Pages 原样发布 Markdown 文件。

不要为了缓存问题随手给本地 JS/CSS 引用加版本号；只有 owner 明确要求时才做。

## 验证

每次改动后运行：

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\check-markdown-assets.ps1
```

涉及 skill 索引时，确认 `js/skills.js` 里的每个路径都存在。

涉及页面时，用本地静态服务检查页面能打开、导航能切换、Markdown 能加载。

PowerShell 读取中文文件时使用 UTF-8。终端显示乱码时，不要直接判断文件内容损坏，先用 UTF-8 方式重新读取确认。

## 提交与推送

没有 owner 明确要求时，不提交、不 push。

提交信息使用简体中文，一句话概括实际改动。

提交前确认暂存区只包含本次任务相关文件。

## 收尾回复

最终回复保持简洁。

说明实际修改、验证结果和未做事项。

不粘贴大段日志、diff 或源码，除非 owner 明确要求。
