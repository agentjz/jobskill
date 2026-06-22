# jobskill

项目地址：https://agentjz.github.io/jobskill/

<p align="center">
  <img alt="flight department" src="https://img.shields.io/badge/flight-department-111827?style=for-the-badge&labelColor=0f172a">
  <img alt="daily work skills" src="https://img.shields.io/badge/daily-work%20skills-0f766e?style=for-the-badge&labelColor=042f2e">
  <img alt="github pages" src="https://img.shields.io/badge/GitHub-Pages-0969da?style=for-the-badge&labelColor=111827">
  <img alt="MIT license" src="https://img.shields.io/badge/license-MIT-b08d57?style=for-the-badge&labelColor=1c1917">
</p>

`jobskill` 是飞行部日常工作的 skill 集。

当前内容覆盖每天查看事项、资质录入、资质代码查询、特殊机场资格代码、统计发布流程、飞行人员资质笔记和重新获得资格训练。

## 当前 skills

| Skill | 内容 |
| --- | --- |
| [每天看](./skills/01/SKILL.md) | 每天查看事项 |
| [资质录入、统计与发布](./skills/02/SKILL.md) | 资质录入、运行资格统计、技术等级变更统计和飞行门户资质发布 |
| [资质代码](./skills/03/SKILL.md) | 资质代码表 |
| [特殊机场资格代码](./skills/04/SKILL.md) | 特殊机场资格代码表 |
| [飞行人员资质笔记](./skills/05/SKILL.md) | 副驾驶、机长和教员资质笔记 |
| [重新获得资格训练](./skills/06/SKILL.md) | 重新获得资格训练和熟练检查不合格处理 |

## 目录

| 路径 | 用途 |
| --- | --- |
| `index.html` | GitHub Pages 入口 |
| `skills/01` 到 `skills/06` | skill 正文和附件 |
| `CONTRIBUTING.md` | 维护指南 |
| `SKILL_INDEX.md` | skill 索引 |
| `css/site.css` | 页面样式 |
| `js/skills.js` | skill 索引 |
| `js/site.js` | Markdown 加载和渲染 |
| `libs/marked.min.js` | Markdown 渲染库 |
| `scripts/check-markdown-assets.ps1` | Markdown 图片链接检查 |

## 本地检查

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\check-markdown-assets.ps1
```

## 许可

本项目使用 [MIT License](./LICENSE)。
