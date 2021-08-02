# Code Generation for video 01
# Part of "Flexible Code"

from manim import *
config["background_color"] = WHITE

class drawCode(Scene):
    def construct(self, file, lang, scale=0.9):
        c = Code(
            file,
            style=Code.styles_list[4],
            insert_line_no=False,
            background="rectangle",
            language=lang,
            font="Consolas",
            background_stroke_width=0,
            line_spacing=0.4,
            scale_factor=scale
        )
        self.draw_code_all_lines_at_a_time(c)
        self.wait(1)
    
    def draw_code_all_lines_at_a_time(self, Code):
        self.play(*[Write(Code.code[i]) for i in range(Code.code.__len__())])

class stdTexCode(drawCode):
    def construct(self):
        drawCode.construct(self,"stdTexCode.tex","tex")

class manimPythonCode(drawCode):
    def construct(self):
        drawCode.construct(self,"manimPythonCode.py","python")

class displayHTMLCode(drawCode):
    def construct(self):
        drawCode.construct(self, "displayHTMLCode.html","html",0.8)