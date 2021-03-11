:: 该批处理文件将会批量由 tex 转换生成 svg
:: 所有文字部分都将被忽略
:: 2020/10/23 添加 PGFPlots 库
:: 2020/10/23 路径替换
:: LogCreative 2020 · LaTeX Sparkle CC-BY-SA

@echo off
setlocal enabledelayedexpansion

::切换到上级目录
cd ../

for /F %%i in ('DIR /B *.tex') do (
    ::复制文件要加 "" 防止参数歧义
    COPY %%i "util/%%i" /Y
)

cd util

::对于每一个.tex文件
for /F %%i in ('DIR /B *.tex') do (
    
    cls

    ::去除文件后缀的变量
    REM echo %%~ni

    (
        for /f "tokens=*" %%j in (%%i) do (
            set s=%%j
            set s=!s:./data=../../data!
            echo !s!
        )
    )>%%i.bak

    move /y %%i.bak %%i

    if not %%i==SVGOut.tex (
        echo Processing: %%i
        title Processing: %%i
        echo.

        ::编写 SVGOut.tex 待编译文件
        echo \documentclass[tikz]{standalone}>SVGOut.tex
        echo \usepackage{tikz}>>SVGOut.tex
        :: echo \usepackage{tkz-euclide}>>SVGOut.tex
        echo \usepackage{pgfplots,pgfplotstable}>>SVGOut.tex
        echo \pgfplotsset{compat=1.17,width=6.5cm}>>SVGOut.tex
        echo \usepackage{graphicx}>>SVGOut.tex
        echo \usetikzlibrary{plotmarks}>>SVGOut.tex
        echo \usepgfplotslibrary{colorbrewer}>>SVGOut.tex
        echo \usepgfplotslibrary{statistics}>>SVGOut.tex
        echo \usepgfplotslibrary{fillbetween}>>SVGOut.tex
        echo \usepgfplotslibrary{polar}>>SVGOut.tex
        echo \begin{document}>>SVGOut.tex
        echo \input{./%%i}>>SVGOut.tex
        echo \end{document}>>SVGOut.tex

        ::使用 htLaTeX 编译出 HTML
        htlatex.exe "SVGOut.tex" "html,fn-in,imgdir:Images/," "" "%%i" "--interaction=nonstopmode"    

        ::更名SVG
        REN SVGOut-1.svg %%~ni.svg

        ::移动svg
        MOVE %%~ni.svg ../svg/%%~ni.svg

    )
)

::删除所有临时文件
for /F %%i in ('DIR /B *.*') do (
    echo %%i 
    if not %%i==TexToSvg.bat (
        del /Q %%i
    )
)

::删除无用文件夹
rd Images

cls
echo 处理完成。
pause

