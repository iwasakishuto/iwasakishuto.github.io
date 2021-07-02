#coding: utf-8
import os
import sys
import json
import datetime
import argparse
from pathlib import Path

here = os.path.abspath(os.path.dirname(__file__))

if __name__ == "__main__":
    parser = argparse.ArgumentParser(prog="typingdata-create", add_help=True)
    parser.add_argument("-OCP", "--out-progress",    type=Path,  default=Path(os.path.join(here, "progress.json")), help="")
    parser.add_argument("-OCB", "--out-code-before", type=Path,  default=Path(os.path.join(here, "code-before.json")), help="")
    parser.add_argument("-OCA", "--out-code-after",  type=Path,  default=Path(os.path.join(here, "code-after.json")),  help="")
    parser.add_argument("--ttfontname",     type=Path, default=Path(os.path.join(here, "../../../fonts/Monaco/Monaco.ttf")), help="")
    parser.add_argument("--pygments-theme", type=Path, default=Path(os.path.join(here, "../../../css/monokai.css")), help="")
    parser.add_argument("--fontheight",     type=int,   default=40,    help="Font height.")
    parser.add_argument("--X",              type=int,   default=600,   help="X coordinate of typingd data.")
    parser.add_argument("--Y",              type=int,   default=310,   help="Y coordinate of typingd data.")
    parser.add_argument("--bar-width",      type=int,   default=10,    help="Progress bar's width.")
    parser.add_argument("--max-iter",       type=int,   default=10,    help="Maximum iteration. (The length of the typing data.)")
    parser.add_argument("--total-sec",      type=float, default=0.703, help="Total seconds (appear with progress bar.)")
    args = parser.parse_args()

    out_progress_path = args.out_progress
    ttfontname     = str(args.ttfontname)
    pygments_theme = str(args.pygments_theme)
    bar_width  = args.bar_width
    max_iter   = args.max_iter
    total_sec  = args.total_sec
    fontheight = args.fontheight
    X, Y = args.X, args.Y

    birthday  = datetime.date(year=1998, month=7, day=3)
    # today     = datetime.date.today()
    JST   = datetime.timezone(datetime.timedelta(hours=+9), 'JST')
    today = datetime.datetime.now(JST)
    today = datetime.date(year=today.year, month=today.month, day=today.day)
    lefetimes = (today-birthday).days
    digit = len(str(lefetimes))
    typing = []
    for i in range(1,max_iter+1):
        percentage = (i/max_iter)
        days = int(lefetimes*percentage)
        curt_date = birthday + datetime.timedelta(days=days)
        age = curt_date.year - birthday.year
        if (curt_date.month < birthday.month) or (curt_date.month == birthday.month and curt_date.day < birthday.day):
            age -= 1
        sec = total_sec * percentage
        progress_bar = ("#" * int(percentage * bar_width)).ljust(bar_width, "-")
        typing.append(f"{days:>0{digit}}/{lefetimes} [{progress_bar}] {i*10:>3}% - {sec:.3f}[s] Age:{age:>2}")
    with out_progress_path.open(mode="w") as f:
        f.write(json.dumps(obj={
            "typing": typing,
            "ttfontname": ttfontname,
            "fontsize": 36,
            "fontheight": fontheight,
            "textRGB": [255,255,255],
            "x": X,
            "y": int(Y + fontheight*5),
            "start": 55,
            "end": 65,
            "last": True,
        }, ensure_ascii=False, indent=4))
    print(f"Typing data is save at \x1b[34m{out_progress_path}\x1b[0m")

    out_code_before_path = args.out_code_before
    with out_code_before_path.open(mode="w") as f:
        f.write(json.dumps(obj={
        "typing": ">>> try:\n...     from iwasakishuto import portfolio\n>>> except ModuleNotFoundError:\n...     print(f\"Nice to meet you :)\")\n>>> portfolio.load()",
        "ttfontname": ttfontname,
        "pygments-theme": pygments_theme,
        "fontsize": 36,
        "fontheight": fontheight,
        "textRGB": [255,255,255],
        "X": X,
        "Xspan": 5,
        "Y": Y,
        "start" : 30,
        "end": 55,
        "last": True,
    }, ensure_ascii=False, indent=4))
    print(f"Code Typing data (before) is save at \x1b[34m{out_code_before_path}\x1b[0m")

    out_code_after_path = args.out_code_after
    with out_code_after_path.open(mode="w") as f:
        f.write(json.dumps(obj={
        "typing": ">>> portfolio.start()",
        "ttfontname": ttfontname,
        "pygments-theme": pygments_theme,
        "fontsize": 36,
        "fontheight": fontheight,
        "textRGB": [255,255,255],
        "X": X,
        "Xspan": 5,
        "Y": int(Y + fontheight*6),
        "start" : 65,
        "end": 70,
        "last": True,
    }, ensure_ascii=False, indent=4))
    print(f"Code Typing data (after) is save at \x1b[34m{out_code_after_path}\x1b[0m")

