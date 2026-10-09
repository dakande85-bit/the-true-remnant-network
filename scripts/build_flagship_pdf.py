#!/usr/bin/env python3
"""Build a press-quality PDF from the single-source TypeScript JSON manuscript."""
import json, re, os, html
from pathlib import Path
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, KeepTogether, HRFlowable
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_CENTER,TA_LEFT
from reportlab.lib.colors import HexColor
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.pagesizes import A5
src=Path("src/data/flagship.ts").read_text(encoding="utf-8")
data=json.loads(src.split("export const flagshipBook:LibraryBook = ",1)[1].rsplit(";",1)[0])
out=Path("public/books/spiritual-warfare-standing-firm-in-christ.pdf")
out.parent.mkdir(parents=True,exist_ok=True)
regular="/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf"
bold="/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf"
if os.path.exists(regular):
 pdfmetrics.registerFont(TTFont("BookSerif",regular))
 pdfmetrics.registerFont(TTFont("BookSerifBold",bold))
else:
 regular=bold=None
serif="BookSerif" if regular else "Times-Roman"
serif_bold="BookSerifBold" if bold else "Times-Bold"
ink=HexColor("#223148"); gold=HexColor("#98743c"); muted=HexColor("#64707b")
styles={
 "kicker":ParagraphStyle("Kicker",fontName="Helvetica-Bold",fontSize=8,leading=13,textColor=gold,spaceAfter=16,alignment=TA_CENTER),
 "title":ParagraphStyle("TitleCustom",fontName=serif_bold,fontSize=27,leading=34,textColor=ink,alignment=TA_CENTER,spaceAfter=18),
 "subtitle":ParagraphStyle("SubtitleCustom",fontName=serif,fontSize=12,leading=19,textColor=muted,alignment=TA_CENTER,spaceAfter=16),
 "chapter":ParagraphStyle("ChapterCustom",fontName=serif_bold,fontSize=17,leading=23,textColor=ink,spaceAfter=16,keepWithNext=True),
 "body":ParagraphStyle("BodyCustom",fontName=serif,fontSize=10.25,leading=17.5,textColor=ink,spaceAfter=12),
 "ref":ParagraphStyle("RefCustom",fontName="Helvetica",fontSize=8,leading=13,textColor=gold,spaceBefore=12,spaceAfter=14),
 "contents":ParagraphStyle("TOCCustom",fontName=serif,fontSize=10.5,leading=18,textColor=ink,spaceAfter=7),
}
W,H=A5
def furniture(c,d):
 c.saveState()
 c.setStrokeColor(HexColor("#ded5c5"));c.setLineWidth(.6)
 c.line(40,H-35,W-40,H-35)
 c.setFont("Helvetica",7);c.setFillColor(muted)
 c.drawString(40,H-27,"UNSEEN WAR / THE LIBRARY")
 c.drawRightString(W-40,27,str(d.page))
 c.restoreState()
doc=SimpleDocTemplate(str(out),pagesize=A5,leftMargin=44,rightMargin=44,topMargin=55,bottomMargin=51,title=data["title"],author="Unseen War",subject="Scripture-based spiritual warfare and prayer guide")
story=[Spacer(1,90),Paragraph("UNSEEN WAR · THE LIBRARY",styles["kicker"]),Paragraph("SPIRITUAL<br/>WARFARE",styles["title"]),Paragraph("Standing Firm in Christ",styles["subtitle"]),Spacer(1,18),HRFlowable(width="40%",thickness=1,color=gold,hAlign="CENTER"),Spacer(1,25),Paragraph("A Biblical Guide to Prayer, Repentance, Discernment and Intercession",styles["subtitle"]),Spacer(1,110),Paragraph("SCRIPTURE · PRAYER · STEADFAST FAITH",styles["kicker"]),PageBreak(),Paragraph("Contents",styles["chapter"])]
for i,c in enumerate(data["pages"],1):
 story.append(Paragraph(f'{i:02d}  {html.escape(c["heading"])}',styles["contents"]))
story.append(PageBreak())
for i,ch in enumerate(data["pages"],1):
 story.extend([Paragraph("SECTION "+str(i).zfill(2),styles["kicker"]),Paragraph(html.escape(ch["heading"]),styles["chapter"])])
 for para in ch["body"].split("\\n\\n"):
  if para.strip():story.append(Paragraph(html.escape(para).replace("\\n","<br/>"),styles["body"]))
 if ch.get("reference"):story.append(Paragraph("READ IN YOUR BIBLE  ·  "+html.escape(ch["reference"]),styles["ref"]))
 if i<len(data["pages"]):story.append(PageBreak())
doc.build(story,onFirstPage=furniture,onLaterPages=furniture)
print(f'Created {out} with {len(data["pages"])} sections')
