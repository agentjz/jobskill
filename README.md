# jobskill

项目地址：https://agentjz.github.io/jobskill/

<p align="center">
  <img alt="flight department" src="https://img.shields.io/badge/flight-department-111827?style=for-the-badge&labelColor=0f172a">
  <img alt="daily work skills" src="https://img.shields.io/badge/daily-work%20skills-0f766e?style=for-the-badge&labelColor=042f2e">
  <img alt="github pages" src="https://img.shields.io/badge/GitHub-Pages-0969da?style=for-the-badge&labelColor=111827">
  <img alt="MIT license" src="https://img.shields.io/badge/license-MIT-b08d57?style=for-the-badge&labelColor=1c1917">
</p>

`jobskill` 是飞行部日常工作的 skill 集。

当前内容覆盖资质录入、资质代码查询、特殊机场资格代码、技术等级变更统计、飞行门户资质发布，以及副驾驶、机长、教员和重新获得资格训练相关笔记。

## 当前 skills

| Skill | 内容 |
| --- | --- |
| [资质录入时用](./skills/01/SKILL.md) | 资质录入时用 |
| [资质代码](./skills/02/SKILL.md) | 资质代码表 |
| [特殊机场资格代码](./skills/03/SKILL.md) | 特殊机场资格代码表 |
| [如何统计当前有效EAMA资质](./skills/04/SKILL.md) | 当前有效 EAMA 资质人员统计流程 |
| [技术等级变更统计](./skills/05/SKILL.md) | 技术等级变更信息统计流程 |
| [飞行门户资质发布流程](./skills/06/SKILL.md) | 飞行门户资质发布流程 |
| [副驾驶资质笔记](./skills/07/SKILL.md) | 副驾驶本场训练、120 天 100 小时、航线检查等笔记 |
| [机长资质笔记](./skills/08/SKILL.md) | 机长 60 天要求、一检二检、机长分级等笔记 |
| [教员资质笔记](./skills/09/SKILL.md) | 教员分类、B 教、教员资格有效期等笔记 |
| [重新获得资格训练](./skills/10/SKILL.md) | 重新获得资格训练和熟练检查不合格处理 |

## 目录

| 路径 | 用途 |
| --- | --- |
| `index.html` | GitHub Pages 入口 |
| `skills/01` 到 `skills/10` | skill 正文和附件 |
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
