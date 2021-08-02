from manimlib import *
class Hello(Scene):
    def construct(self):
        t = Tex("\\text{Hello, \\LaTeX\\ Sparkle!}")
        t.scale(3)
        t.set_color(BLACK)
        self.play(
            FadeIn(
                t
            )
        )