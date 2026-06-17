# 贡献指南

本仓库维护 Markdown skill。

## Skill 结构

```text
skills/
  示例skill/
    SKILL.md
    assets/
      image.png
```

## 修改流程

1. 修改对应 `skills/<skill>/SKILL.md`。
2. 新主题新建 `skills/<skill>/SKILL.md`。
3. 图片和附件放入所属 skill 目录。
4. 更新根目录 `README.md` 的 skill 索引。
5. 运行检查脚本。

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\check-markdown-assets.ps1
```
