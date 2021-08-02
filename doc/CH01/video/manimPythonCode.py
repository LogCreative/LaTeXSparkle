from manimlib import *
class Hello(Scene):
    def construct(self):
        self.play(
            Tex("Hello, \\LaTeX\\ Sparkle!")
        )