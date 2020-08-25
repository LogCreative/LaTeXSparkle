:: 该批处理文件将会批量由 tex 复制为 txt
:: HTML 不识别 .tex 的插入，需要转换为 txt
:: LogCreative 2020 · LaTeX Sparkle CC-BY-SA

@echo off
setlocal enabledelayedexpansion

::切换到上级目录
cd ../

for /F %%i in ('DIR /B *.tex') do (
    ::复制文件要加 "" 防止参数歧义
    COPY %%i "txt/%%~ni.txt" /Y
)

pause