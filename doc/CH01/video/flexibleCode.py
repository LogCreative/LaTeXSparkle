# Code Generation for video 01
# Part of "Flexible Code"

from manim import *

class flexibleCode(Scene):
    def construct(self):
        stdTexCode = Code(
            "stdTexCode.tex",
            style=Code.styles_list[4],
            insert_line_no=False,
            background="rectangle",
            language="tex",
            font="Consolas",
            background_stroke_width=0
        )
        self.play(Write(stdTexCode))