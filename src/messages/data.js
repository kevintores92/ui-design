
import { 
  MessageSquare, 
  Users, 
  Megaphone, 
  Workflow, 
  LayoutTemplate, 
  Bot, 
  Tags, 
  MessageCircle, 
  PhoneIncoming, 
  PhoneOutgoing, 
  Phone, 
  Voicemail, 
  BarChart3, 
  Crown, 
  CreditCard, 
  Settings,
  LayoutDashboard,
  Calendar,
  PieChart,
  Globe,
  Image,
  Shield,
  LayoutGrid,
  Smartphone,
  Rocket
} from "lucide-react";

export const currentUser = {
  name: "Dhairya Raghav",
  initials: "DR",
  avatarColor: "bg-indigo-600"
};

export const navigationItems = [
  { icon: MessageSquare, label: "Messenger", id: "messenger", active: true },
  { icon: Users, label: "Contacts", id: "contacts" },
  { icon: Megaphone, label: "Campaigns", id: "campaigns" },
  { icon: Workflow, label: "Drip Automation", id: "drip-automation" },
  { icon: LayoutTemplate, label: "Templates", id: "templates" },
  { 
    icon: Bot, 
    label: "AI Agent", 
    id: "ai-agent",
    children: [
      { icon: Tags, label: "Classification", id: "ai-classification" },
      { icon: MessageCircle, label: "Replies", id: "ai-replies" },
      { icon: PhoneIncoming, label: "Inbound Calls", id: "ai-inbound" },
      { icon: PhoneOutgoing, label: "Outbound Calls", id: "ai-outbound" },
      { icon: Phone, label: "Cold Calling", id: "ai-cold-calling" },
    ]
  },
  { icon: Voicemail, label: "Voicemail Drops", id: "voicemail-drops" },
  { icon: BarChart3, label: "Reports", id: "reports" },
  { icon: Crown, label: "Membership", id: "membership" },
  { icon: CreditCard, label: "Billing", id: "billing" },
  { icon: Settings, label: "Settings", id: "settings" },
];

export const conversations = [
  {
    id: 1,
    name: "Dhairya Staging",
    initials: "DS",
    avatarColor: "bg-purple-600",
    lastMessage: "Great! So, which slot works best for you?",
    time: "Aug 07",
    unread: 10,
    status: "hot",
    tags: ["Follow Up", "Lead"],
    type: "sms",
    selected: true
  },
  {
    id: 2,
    name: "Praz Tbm",
    initials: "PT",
    avatarColor: "bg-yellow-600",
    lastMessage: "Well, safe travels back to Spain! Is...",
    time: "6:07 PM",
    unread: 8,
    status: "warm",
    tags: ["New"],
    type: "sms"
  },
  {
    id: 3,
    name: "Peter",
    initials: "P",
    avatarColor: "bg-indigo-600",
    lastMessage: "Hey Peter, Your appointment is in 10...",
    time: "5:00 PM",
    unread: 2,
    status: "nurture",
    tags: [],
    type: "sms"
  },
  {
    id: 4,
    name: "Betty",
    initials: "B",
    avatarColor: "bg-red-500",
    lastMessage: "Your chat has ended",
    time: "Aug 07",
    unread: 2,
    status: "drip",
    tags: ["Closed"],
    type: "sms"
  },
  {
    id: 5,
    name: "Betty Cooper",
    initials: "BC",
    avatarColor: "bg-gray-400",
    lastMessage: "Great choice! Please use this link to...",
    time: "Aug 07",
    unread: 3,
    status: "no_status",
    tags: ["VIP", "Urgent"],
    type: "sms"
  },
  {
    id: 6,
    name: "Inder",
    initials: "I",
    avatarColor: "bg-orange-500",
    lastMessage: "Hi Inder! I hope you're well. Just...",
    time: "Aug 07",
    unread: 6,
    status: "hot",
    tags: [],
    type: "sms"
  },
  {
    id: 7,
    name: "Peter Y",
    initials: "PY",
    avatarColor: "bg-gray-300",
    lastMessage: "hiii",
    time: "Jul 25",
    unread: 4,
    status: "wrong_number",
    tags: ["Archive"],
    type: "sms"
  }
];

export const activeConversation = {
  contact: {
    name: "Dhairya staging",
    email: "popeyaanehh@yandex.com",
    phone: "(844) 502-1526",
    initials: "DS",
    avatarColor: "bg-[#C5A572]", // Gold-ish color from screenshot
    owner: "Dhairya Raghav"
  },
  messages: [
    {
      id: 1,
      sender: "Dhairya Staging",
      initials: "DS",
      avatarColor: "bg-purple-600",
      content: "Wait, Can you tell me about your new app features?",
      time: "18:26",
      isMe: false
    },
    {
      id: 2,
      sender: "Me",
      content: "Sure, Dhairya. Our new app features enhanced security, a revamped UI, and more customization options. Do you need any more details?",
      time: "18:26",
      isMe: true,
      status: "delivered"
    },
    {
      id: 3,
      sender: "Dhairya Staging",
      initials: "DS",
      avatarColor: "bg-purple-600",
      content: "Yes, especially about the security features.",
      time: "18:26",
      isMe: false
    },
    {
      id: 4,
      sender: "Me",
      content: "Our security features include end-to-end encryption, regular security audits, multi-factor authentication, and compliance with GDPR and HIPAA standards. We also offer advanced threat detection and continuous monitoring.",
      time: "18:26",
      isMe: true,
      status: "delivered"
    }
  ]
};
