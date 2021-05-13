pdflatex -output-format=dvi lspqr.tex
dvisvgm --zoom=-1 --exact --font-format=woff lspqr.dvi

# Customized QR Code

$x=0
(Get-Content lspqr.svg)|
    ForEach-Object {
        $_ -replace "<g (.+)>",'<g $1 style="font-size: 2; font-weight: bold;" transform="translate(0,1.5)">'
    } |
    ForEach-Object {
        $c = ''
        switch ($x) {
            0 {$c='内'}
            1 {$c='卷'}
            2 {$c='禁'}
            3 {$c='止'}
        }
        $x++
        if($x -eq 4){
            $x=0
        }
        $replacer = "<text `$1`>"+ $c +"</text>"
        $_ -replace "<rect (.+)\/>",$replacer
    } | Out-File outqr.svg -Force                        # 输出文件