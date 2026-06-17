$ErrorActionPreference = "Stop"

$root = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$markdownFiles = Get-ChildItem -LiteralPath $root -Recurse -File -Filter "*.md"
$missing = New-Object System.Collections.Generic.List[string]

foreach ($file in $markdownFiles) {
  $text = Get-Content -LiteralPath $file.FullName -Raw -Encoding UTF8
  $matches = [regex]::Matches($text, '!\[[^\]]*\]\(([^)]+)\)')
  foreach ($match in $matches) {
    $target = $match.Groups[1].Value.Trim()
    if ($target -match '^(https?:)?//' -or $target.StartsWith('#')) {
      continue
    }

    $cleanTarget = $target -replace '^<|>$', ''
    $cleanTarget = ($cleanTarget -split '#')[0]
    $cleanTarget = ($cleanTarget -split '\?')[0]
    $candidate = Join-Path $file.DirectoryName $cleanTarget

    if (-not (Test-Path -LiteralPath $candidate)) {
      $relativeFile = [System.IO.Path]::GetRelativePath($root, $file.FullName)
      $missing.Add("${relativeFile}: $target")
    }
  }
}

if ($missing.Count -gt 0) {
  Write-Host "Missing Markdown image assets:" -ForegroundColor Red
  $missing | ForEach-Object { Write-Host "  $_" }
  exit 1
}

Write-Host "Markdown image assets OK"
