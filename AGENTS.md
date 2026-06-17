# Agent 规则

本仓库是 Markdown skill 文档库。

每个 skill 是一个独立目录。

每个 skill 的正文文件是 `SKILL.md`。

图片和附件放在所属 skill 目录内，正文使用相对路径引用。

## 当前事实主干

只写当前有效内容。

文档、目录、链接、附件和检查脚本讲同一个当前事实。

当前入口：

- `README.md`
- `skills/`
- `skills/<skill>/SKILL.md`
- `scripts/check-markdown-assets.ps1`

## 工作标准

- 先看当前文件，再修改。
- 一个 skill 覆盖一个清晰主题。
- 新主题新建 skill 目录。
- 业务内容以对应 `SKILL.md` 为主干。
- 附件跟随所属 skill。
- 修改正文后同步根目录索引。

## 验证

改动完成后运行：

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\check-markdown-assets.ps1
```
