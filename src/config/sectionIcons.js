/**
 * Section-specific Lucide icons — each area uses a distinct icon set
 * while keeping the same meaning (trust, phone, support, etc.).
 * 
 * Optimized imports to reduce bundle size - only importing what we need
 */

// Import only the icons we actually use
import AlertTriangle from 'lucide-react/dist/esm/icons/alert-triangle';
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right';
import AtSign from 'lucide-react/dist/esm/icons/at-sign';
import Award from 'lucide-react/dist/esm/icons/award';
import BadgeCheck from 'lucide-react/dist/esm/icons/badge-check';
import BadgeDollarSign from 'lucide-react/dist/esm/icons/badge-dollar-sign';
import BarChart3 from 'lucide-react/dist/esm/icons/bar-chart-3';
import BookMarked from 'lucide-react/dist/esm/icons/book-marked';
import BookOpen from 'lucide-react/dist/esm/icons/book-open';
import BookOpenCheck from 'lucide-react/dist/esm/icons/book-open-check';
import Brain from 'lucide-react/dist/esm/icons/brain';
import ChevronDown from 'lucide-react/dist/esm/icons/chevron-down';
import ChevronLeft from 'lucide-react/dist/esm/icons/chevron-left';
import ChevronRight from 'lucide-react/dist/esm/icons/chevron-right';
import CircleCheck from 'lucide-react/dist/esm/icons/circle-check';
import CircleCheckBig from 'lucide-react/dist/esm/icons/circle-check-big';
import CircleDot from 'lucide-react/dist/esm/icons/circle-dot';
import CircleHelp from 'lucide-react/dist/esm/icons/circle-help';
import ClipboardList from 'lucide-react/dist/esm/icons/clipboard-list';
import Crosshair from 'lucide-react/dist/esm/icons/crosshair';
import Eye from 'lucide-react/dist/esm/icons/eye';
import EyeOff from 'lucide-react/dist/esm/icons/eye-off';
import FilePenLine from 'lucide-react/dist/esm/icons/file-pen-line';
import Fingerprint from 'lucide-react/dist/esm/icons/scan-search';
import Gem from 'lucide-react/dist/esm/icons/gem';
import GraduationCap from 'lucide-react/dist/esm/icons/graduation-cap';
import HandHelping from 'lucide-react/dist/esm/icons/hand-helping';
import Headphones from 'lucide-react/dist/esm/icons/headphones';
import Headset from 'lucide-react/dist/esm/icons/headset';
import HeartHandshake from 'lucide-react/dist/esm/icons/heart-handshake';
import Laugh from 'lucide-react/dist/esm/icons/laugh';
import Library from 'lucide-react/dist/esm/icons/library';
import ListChecks from 'lucide-react/dist/esm/icons/list-checks';
import Loader2 from 'lucide-react/dist/esm/icons/loader-2';
import LockKeyhole from 'lucide-react/dist/esm/icons/lock-keyhole';
import LogOut from 'lucide-react/dist/esm/icons/log-out';
import Mail from 'lucide-react/dist/esm/icons/mail';
import Medal from 'lucide-react/dist/esm/icons/medal';
import Megaphone from 'lucide-react/dist/esm/icons/megaphone';
import Menu from 'lucide-react/dist/esm/icons/menu';
import MessageCircle from 'lucide-react/dist/esm/icons/message-circle';
import MessageSquare from 'lucide-react/dist/esm/icons/message-square';
import MessageSquareHeart from 'lucide-react/dist/esm/icons/message-square-heart';
import MessageSquareText from 'lucide-react/dist/esm/icons/message-square-text';
import MessagesSquare from 'lucide-react/dist/esm/icons/messages-square';
import PackageCheck from 'lucide-react/dist/esm/icons/package-check';
import PenLine from 'lucide-react/dist/esm/icons/pen-line';
import PenTool from 'lucide-react/dist/esm/icons/pen-tool';
import Phone from 'lucide-react/dist/esm/icons/phone';
import PhoneCall from 'lucide-react/dist/esm/icons/phone-call';
import PhoneIncoming from 'lucide-react/dist/esm/icons/phone-incoming';
import Plus from 'lucide-react/dist/esm/icons/plus';
import Quote from 'lucide-react/dist/esm/icons/quote';
import RefreshCw from 'lucide-react/dist/esm/icons/refresh-cw';
import RotateCcw from 'lucide-react/dist/esm/icons/rotate-ccw';
import ScanSearch from 'lucide-react/dist/esm/icons/scan-search';
import School from 'lucide-react/dist/esm/icons/school';
import Search from 'lucide-react/dist/esm/icons/search';
import Settings2 from 'lucide-react/dist/esm/icons/settings-2';
import ShieldAlert from 'lucide-react/dist/esm/icons/shield-alert';
import ShieldCheck from 'lucide-react/dist/esm/icons/shield-check';
import ShieldEllipsis from 'lucide-react/dist/esm/icons/shield-ellipsis';
import ShieldHalf from 'lucide-react/dist/esm/icons/shield-half';
import ShieldQuestion from 'lucide-react/dist/esm/icons/shield-question';
import SmilePlus from 'lucide-react/dist/esm/icons/smile-plus';
import Sparkles from 'lucide-react/dist/esm/icons/sparkles';
import Star from 'lucide-react/dist/esm/icons/star';
import ThumbsUp from 'lucide-react/dist/esm/icons/thumbs-up';
import Timer from 'lucide-react/dist/esm/icons/timer';
import TriangleAlert from 'lucide-react/dist/esm/icons/triangle-alert';
import Trophy from 'lucide-react/dist/esm/icons/trophy';
import User from 'lucide-react/dist/esm/icons/user';
import UserCheck from 'lucide-react/dist/esm/icons/user-check';
import UserRound from 'lucide-react/dist/esm/icons/user-round';
import UserSearch from 'lucide-react/dist/esm/icons/user-search';
import UsersRound from 'lucide-react/dist/esm/icons/users-round';
import X from 'lucide-react/dist/esm/icons/x';
import Zap from 'lucide-react/dist/esm/icons/zap';

export const hero = {
  trustBadge: ShieldCheck,
  perks: [GraduationCap, Timer, FilePenLine, Headphones],
  form: {
    user: UserRound,
    email: AtSign,
    phone: PhoneCall,
    message: MessagesSquare,
    lock: LockKeyhole,
  },
  loading: Loader2,
  success: CircleCheckBig,
  arrow: ArrowRight,
};

export const stats = {
  items: [UsersRound, Library, Medal, SmilePlus],
};

export const aiWarning = {
  badge: TriangleAlert,
  items: [AlertTriangle, ShieldAlert, MessageSquare, BookOpenCheck],
};

export const topWriters = {
  badge: BadgeCheck,
  verified: CircleCheck,
};

export const features = {
  badge: Gem,
  items: [Sparkles, Crosshair, Brain, HandHelping, Fingerprint, Megaphone],
  arrow: ArrowRight,
};

export const guarantee = {
  badge: ShieldHalf,
  items: [RotateCcw, ThumbsUp, EyeOff, BadgeDollarSign],
};

export const howItWorks = {
  badge: Settings2,
  steps: [ClipboardList, UserSearch, PenLine, ScanSearch, PackageCheck],
  arrow: ArrowRight,
};

export const howItWorksHome1 = {
  badge: Settings2,
  steps: [ClipboardList, UserSearch, Star, ScanSearch],
  arrow: ArrowRight,
};

export const services = {
  tags: CircleCheck,
  phone: PhoneIncoming,
  chat: MessageSquareText,
  writing: PenTool,
  check: CircleCheckBig,
  arrow: ArrowRight,
};

export const servicesHome1 = {
  items: [BookOpen, Crosshair, PenLine, BarChart3, Headphones, Award],
  featured: UserCheck,
  check: CircleCheckBig,
  arrow: ArrowRight,
};

export const ctaBanner = {
  checks: ListChecks,
  arrow: ArrowRight,
};

export const helpBanner = {
  chat: MessageCircle,
  phone: PhoneCall,
  perks: [Zap, ShieldQuestion, CircleHelp],
};

export const trustedBy = {
  badge: BarChart3,
  stats: [UserCheck, Star, School, Laugh],
};

export const testimonials = {
  badge: Quote,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  verified: BadgeCheck,
  user: UserRound,
};

export const supportBanner = {
  avatar: Headset,
  online: CircleDot,
  phone: Phone,
  email: Mail,
};

export const support = {
  badge: Award,
  cards: [MessageSquareHeart, ShieldEllipsis, RefreshCw, Trophy],
  banner: MessageSquare,
  trust: [PhoneCall, Mail, Timer, ShieldCheck, CircleCheckBig],
};

export const faq = {
  badge: CircleHelp,
  chat: MessageSquareText,
  email: Mail,
  chevron: ChevronDown,
};

export const nav = {
  phone: Phone,
  plus: Plus,
  user: User,
  menu: Menu,
  close: X,
};

export const studentNav = {
  phone: PhoneCall,
  user: UserRound,
  logout: LogOut,
  menu: Menu,
  close: X,
  createOrder: FilePenLine,
};

export const footer = {
  phone: PhoneIncoming,
  email: Mail,
  chat: MessageCircle,
  location: BookMarked,
  ssl: ShieldCheck,
  secure: ShieldHalf,
};

export const auth = {
  trustBadge: ShieldCheck,
  perks: [GraduationCap, Timer, FilePenLine, Headphones],
  form: {
    error: AlertTriangle,
    user: UserRound,
    email: AtSign,
    phone: PhoneCall,
    lock: LockKeyhole,
    chevron: ChevronDown,
    eye: Eye,
    eyeOff: EyeOff,
    success: CircleCheckBig,
    loading: Loader2,
  },
};

export const reviews = {
  verified: BadgeCheck,
  star: Star,
  chevron: ChevronDown,
  phone: PhoneCall,
  chat: MessageSquare,
  email: AtSign,
};

export const orders = {
  chevron: ChevronDown,
  arrow: ArrowRight,
  ssl: ShieldEllipsis,
};

export const dashboard = {
  search: Search,
  clock: Timer,
  chat: MessageSquareHeart,
  phone: PhoneCall,
  inquiry: FilePenLine,
  email: Mail,
};
