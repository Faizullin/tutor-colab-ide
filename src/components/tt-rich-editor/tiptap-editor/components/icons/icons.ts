import { IconType, IconBaseProps } from "react-icons";
import {
  TbBold,
  TbItalic,
  TbUnderline,
  TbStrikethrough,
  TbCode,
  TbSuperscript,
  TbSubscript,
  TbList,
  TbListNumbers,
  TbListDetails,
  TbLink,
  TbLinkOff,
  TbExternalLink,
  TbEdit,
  TbArrowForwardUp,
  TbArrowBackUp,
  TbAlignLeft,
  TbAlignRight,
  TbAlignJustified,
  TbAlignCenter,
  TbEraser,
  TbChevronDown,
  TbMinus,
  TbIndentIncrease,
  TbIndentDecrease,
  TbClipboard,
  TbCheck,
  TbMaximize,
  TbSourceCode,
  TbLetterCase,
  TbTrash,
  TbPhoto,
  TbMinimize,
  TbTextCaption,
  TbAlt,
  TbDownload,
  TbBrandYoutube,
  TbX,
  TbRuler,
  TbPalette,
  TbBan,
  TbPaletteOff,
  TbPlus,
  TbTable,
  TbArrowsHorizontal,
  TbTableRow,
  TbTableColumn,
  TbColumnInsertLeft,
  TbColumnInsertRight,
  TbRowInsertTop,
  TbRowInsertBottom,
  TbRowRemove,
  TbColumnRemove,
  TbSettings,
} from "react-icons/tb";
import { AiOutlineMergeCells, AiOutlineSplitCells } from "react-icons/ai";
import IconCorner from "./Corner";
import IconInlineCode from "./InlineCode";
import IconQuote from "./Quote";
import IconTextHighlight from "./TextHighlight";
import IconTextColor from "./TextColor";
import { Code } from "lucide-react";

export const icons = {
  Bold: TbBold,
  Italic: TbItalic,
  Underline: TbUnderline,
  Strike: TbStrikethrough,
  Code: TbCode,
  SourceCode: TbSourceCode,
  Subscript: TbSubscript,
  Superscript: TbSuperscript,
  BulletList: TbList,
  OrderedList: TbListNumbers,
  TaskList: TbListDetails,
  CodeBlock: TbCode,
  CodeInline: IconInlineCode,
  Link: TbLink,
  Unlink: TbLinkOff,
  Edit: TbEdit,
  ExternalLink: TbExternalLink,
  Redo: TbArrowForwardUp,
  Undo: TbArrowBackUp,
  AlignLeft: TbAlignLeft,
  AlignRight: TbAlignRight,
  AlignJustify: TbAlignJustified,
  AlignCenter: TbAlignCenter,
  Eraser: TbEraser,
  ChevronDown: TbChevronDown,
  Maximize: TbMaximize,
  Minimize: TbMinimize,
  HorizontalRule: TbMinus,
  Indent: TbIndentIncrease,
  Outdent: TbIndentDecrease,
  Clipboard: TbClipboard,
  Check: TbCheck,
  Quote: IconQuote,
  Corner: IconCorner,
  LetterCase: TbLetterCase,
  Trash: TbTrash,
  Image: TbPhoto,
  ImageCaption: TbTextCaption,
  ImageAltText: TbAlt,
  Download: TbDownload,
  Youtube: TbBrandYoutube,
  Close: TbX,
  Ruler: TbRuler,
  TextHighlight: IconTextHighlight,
  TextColor: IconTextColor,
  Palette: TbPalette,
  PaletteOff: TbPaletteOff,
  Ban: TbBan,
  Plus: TbPlus,
  Table: TbTable,
  Stretch: TbArrowsHorizontal,
  HeaderRow: TbTableRow,
  HeaderCol: TbTableColumn,
  ColInsertLeft: TbColumnInsertLeft,
  ColInsertRight: TbColumnInsertRight,
  ColRemove: TbColumnRemove,
  ColHeader: TbTableColumn,
  RowInsertTop: TbRowInsertTop,
  RowInsertBottom: TbRowInsertBottom,
  RowRemove: TbRowRemove,
  RowHeader: TbTableRow,
  MergeCell: AiOutlineMergeCells,
  SplitCell: AiOutlineSplitCells,


  // MY:
  Settings: TbSettings,
  CodeLab: Code
} satisfies Record<string, IconType>;

export type { IconBaseProps, IconType };
