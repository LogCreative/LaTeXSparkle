# Part of "Comparing HTML and LaTeX Code"

from manim import *

config["tex_dir"]="C:\\tmp\\"

class HTMLAndTexCode(Scene):
    def construct(self):
        HTMLCode_str = '''<html>
<head>
    <script src="my.js"></script>
</head>
<body>
    Hello, world!
</body>
</html>'''
        HTMLCode = Code(
            code=HTMLCode_str,
            language="html",
            insert_line_no=False,
            background="rectangle",
            font="Consolas",
            background_stroke_width=0
        )

        HTMLCode.shift(LEFT*3)
        self.play(FadeIn(HTMLCode))

        TexCode_str = '''\\documentclass{article}
\\usepackage{my}
\\begin{document}
    Hello, world!
\\end{document}
        '''
        TexCode = Code(
            code=TexCode_str,
            language="tex",
            insert_line_no=False,
            background="rectangle",
            font="Consolas",
            background_stroke_width=0
        )

        TexCode.shift(RIGHT*3)

        tarray = [
            [2,1],
            [4,2],
            [5,3],
            [6,4]
        ]

        self.play(
            TransformFromCopy(
                VGroup(HTMLCode.code[0],HTMLCode.code[7]),
                TexCode.code[0]
            )
        )
        for move in tarray:
            self.play(TransformFromCopy(HTMLCode.code[move[0]],TexCode.code[move[1]]))

        self.wait(2)
        TexCode.generate_target()
        TexCode.target.shift(LEFT*3).scale(1.5)
        self.play(FadeOut(HTMLCode), Transform(TexCode, TexCode.target))

        TexRendered = Tex("Hello, world!").scale(2)
        self.play(ReplacementTransform(TexCode,TexRendered))
        self.play(FadeOut(TexRendered, run_time=1.5))