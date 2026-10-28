import {
  ShieldCheck, BadgeCheck, FileCheck2, Truck, Stamp, GraduationCap, Users,
  Building2, Languages, Landmark, Gavel, Building, Briefcase, Globe2, Upload,
  SearchCheck, PackageCheck, MapPin, Clock, Headset, Lock, Phone, Mail,
  MessageCircle, ChevronDown, ChevronRight, Menu, X, Star, CheckCircle2,
  ArrowRight, Award, Globe, FileText, Calendar, Quote,
} from "lucide-react";

const MAP = {
  ShieldCheck, BadgeCheck, FileCheck2, Truck, Stamp, GraduationCap, Users,
  Building2, Languages, Landmark, Gavel, Building, Briefcase, Globe2, Upload,
  SearchCheck, PackageCheck, MapPin, Clock, Headset, Lock, Phone, Mail,
  MessageCircle, ChevronDown, ChevronRight, Menu, X, Star, CheckCircle2,
  ArrowRight, Award, Globe, FileText, Calendar, Quote,
};

export default function Icon({ name, className }) {
  const Cmp = MAP[name] || FileText;
  return <Cmp className={className} />;
}
