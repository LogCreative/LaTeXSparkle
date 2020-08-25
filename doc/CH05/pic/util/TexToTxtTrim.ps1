# 该批处理文件将会批量由 tex 复制为 txt

# HTML 不识别 .tex 的插入，需要转换为 txt
# 并且删除 空格 与 空行

# 运行时请使用 .\TexToTxtTrim.ps1 指令
# LogCreative 2020 · LaTeX Sparkle CC-BY-SA

# 返回上级目录
Set-Location ..\

# 如果存在文件夹 txt 则删除
if (Test-Path -Path txt) {
    Remove-Item txt -Force -Recurse
}

# 创建目录
mkdir txt

# 对于每一个 .tex 文件
Get-ChildItem . '*.tex' -Force | ForEach-Object -Process {

    # 更改后缀名
    $newPath = [System.IO.Path]::ChangeExtension($_,'.txt')

    # 复制文件
    Copy-Item -Path $_ -Destination txt/$newPath -Force

    (Get-Content txt/$newPath)| 
        ForEach-Object { $_ -replace '\s{2,}',' ' } |   # 合并空格
        Where-Object {$_.trim() -ne ""} |               # 去除空行
        Out-File txt/$newPath -Force                    # 输出文件

}