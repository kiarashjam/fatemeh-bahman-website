# PowerShell script to push to GitHub
# Run this after creating your GitHub repository

Write-Host "🚀 GitHub Push Script" -ForegroundColor Green
Write-Host ""

# Check if remote exists
$remoteExists = git remote get-url origin 2>$null
if ($remoteExists) {
    Write-Host "Remote already exists: $remoteExists" -ForegroundColor Yellow
    $useExisting = Read-Host "Use existing remote? (y/n)"
    if ($useExisting -eq "n") {
        git remote remove origin
    }
}

if (-not (git remote get-url origin 2>$null)) {
    Write-Host "📝 Please provide your GitHub repository URL:" -ForegroundColor Cyan
    Write-Host "   Example: https://github.com/YOUR_USERNAME/fatemeh-bahman-website.git" -ForegroundColor Gray
    $repoUrl = Read-Host "GitHub repository URL"
    
    if ($repoUrl) {
        Write-Host ""
        Write-Host "Adding remote..." -ForegroundColor Yellow
        git remote add origin $repoUrl
        
        Write-Host "Pushing to GitHub..." -ForegroundColor Yellow
        git push -u origin master
        
        if ($LASTEXITCODE -eq 0) {
            Write-Host ""
            Write-Host "✅ Successfully pushed to GitHub!" -ForegroundColor Green
            Write-Host "   Visit: $repoUrl" -ForegroundColor Cyan
        } else {
            Write-Host ""
            Write-Host "❌ Push failed. Please check:" -ForegroundColor Red
            Write-Host "   1. Repository exists on GitHub" -ForegroundColor Yellow
            Write-Host "   2. You have access to the repository" -ForegroundColor Yellow
            Write-Host "   3. Authentication is set up correctly" -ForegroundColor Yellow
        }
    } else {
        Write-Host "❌ No URL provided. Exiting." -ForegroundColor Red
    }
} else {
    Write-Host "Pushing to existing remote..." -ForegroundColor Yellow
    git push -u origin master
}
