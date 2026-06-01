import {
  ShieldCheck,
  MapPin,
  Lock,
  AlertTriangle,
  Bluetooth,
  BatteryCharging,
  Bell,
  Gauge,
  type LucideIcon,
} from "lucide-react";

export type KeyPoint = {
  icon: LucideIcon;
  title: string;
  text: string;
};

export const keyPoints: KeyPoint[] = [
  {
    icon: ShieldCheck,
    title: "Sécurise la remorque",
    text: "Verrouillage intelligent et protection active contre le vol, même hors ligne.",
  },
  {
    icon: MapPin,
    title: "Tracking GPS",
    text: "Suivi en temps réel et historique complet de tous vos trajets.",
  },
  {
    icon: Lock,
    title: "Contrôle à distance",
    text: "Activez ou désactivez le boîtier où que vous soyez, depuis l'application.",
  },
  {
    icon: AlertTriangle,
    title: "Détection d'accident",
    text: "Alerte automatique et instantanée en cas de choc ou d'anomalie.",
  },
];

export type Feature = {
  icon: LucideIcon;
  title: string;
  text: string;
  tag: string;
};

export const features: Feature[] = [
  {
    icon: MapPin,
    tag: "Localisation",
    title: "Géolocalisation temps réel",
    text: "Position rafraîchie toutes les 10 secondes, précision GPS/GLONASS, couverture multi-réseaux 4G en Europe et zones de geofencing personnalisées.",
  },
  {
    icon: ShieldCheck,
    tag: "Protection",
    title: "Antivol intelligent intégré",
    text: "Détection de mouvement non autorisé, déverrouillage forcé et coupure à distance. Une alerte part avant même que la remorque ne quitte le dépôt.",
  },
  {
    icon: Bluetooth,
    tag: "Accès",
    title: "Contrôle d'accès Bluetooth",
    text: "Identification du chauffeur par badge ou smartphone. Seules les personnes autorisées peuvent désarmer le boîtier.",
  },
  {
    icon: Bell,
    tag: "Notifications",
    title: "Alertes intelligentes",
    text: "Vol, sortie de zone, choc, ouverture de porte, batterie faible : les bonnes alertes, au bon moment, sans bruit inutile.",
  },
  {
    icon: BatteryCharging,
    tag: "Autonomie",
    title: "Plug & play, étanche IP67",
    text: "Installation en quelques minutes, batterie de secours autonome et boîtier durci résistant aux intempéries et aux tentatives de sabotage.",
  },
  {
    icon: Gauge,
    tag: "Pilotage",
    title: "Données d'exploitation",
    text: "Kilométrage, temps de conduite, vitesses, comportement : exportez vos données et optimisez votre flotte.",
  },
];

export type Plan = {
  name: string;
  price: string;
  period: string;
  tagline: string;
  features: string[];
  cta: string;
  highlight?: boolean;
};

export const plans: Plan[] = [
  {
    name: "Essentiel",
    price: "14,90 €",
    period: "/ mois / boîtier",
    tagline: "L'essentiel du suivi pour démarrer sereinement.",
    features: [
      "Tracking GPS temps réel",
      "Historique des trajets 30 jours",
      "Application mobile & web",
      "Alertes de base (mouvement, batterie)",
      "Support par email",
    ],
    cta: "Choisir Essentiel",
  },
  {
    name: "Pro",
    price: "24,90 €",
    period: "/ mois / boîtier",
    tagline: "La protection complète pour les pros du transport.",
    features: [
      "Tout Essentiel, plus :",
      "Antivol intelligent & coupure à distance",
      "Contrôle d'accès Bluetooth",
      "Détection d'accident",
      "Historique 1 an + geofencing",
      "Support prioritaire 7j/7",
    ],
    cta: "Choisir Pro",
    highlight: true,
  },
  {
    name: "Flotte",
    price: "Sur devis",
    period: "tarif dégressif",
    tagline: "Pensé pour les flottes et les grands comptes.",
    features: [
      "Tout Pro, plus :",
      "API & intégrations sur mesure",
      "Comptes multi-utilisateurs & rôles",
      "Tableau de bord flotte avancé",
      "Account manager dédié",
      "Tarification dégressive au volume",
    ],
    cta: "Demander un devis",
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "Le boîtier fonctionne-t-il dans toute l'Europe ?",
    a: "Oui. Le boîtier embarque une connectivité multi-opérateurs 4G qui bascule automatiquement sur le meilleur réseau disponible. Vous gardez le suivi de vos véhicules dans tous les pays d'Europe sans frais d'itinérance supplémentaires.",
  },
  {
    q: "L'installation est-elle compliquée ?",
    a: "Non. Le boîtier est conçu pour une installation plug & play en quelques minutes, sans immobiliser le véhicule. Nous proposons également un réseau de techniciens partenaires pour une pose professionnelle si vous le souhaitez.",
  },
  {
    q: "Que se passe-t-il concrètement en cas de vol ?",
    a: "Dès qu'un mouvement non autorisé est détecté, une alerte instantanée est envoyée et le suivi temps réel s'active. Vous pouvez déclencher la coupure à distance et transmettre la position précise aux forces de l'ordre pour maximiser les chances de récupération.",
  },
  {
    q: "Y a-t-il un engagement de durée ?",
    a: "L'offre Essentiel et Pro sont sans engagement, résiliables à tout moment. Les flottes peuvent souscrire un contrat dédié avec tarif dégressif et conditions adaptées à leur volume.",
  },
  {
    q: "Le boîtier fonctionne-t-il sans connexion réseau ?",
    a: "Oui. En l'absence de couverture, le boîtier enregistre les positions et les événements en mémoire, puis les synchronise automatiquement dès le retour du réseau. Aucune donnée n'est perdue.",
  },
  {
    q: "Mes données sont-elles sécurisées et conformes au RGPD ?",
    a: "Absolument. Les données sont chiffrées de bout en bout et hébergées en Europe. Notre traitement est conforme au RGPD : vous restez seul propriétaire de vos données et en gardez le contrôle total.",
  },
];

export type CompareRow = { label: string; us: boolean; them: boolean | string };

export const compareRows: CompareRow[] = [
  { label: "Installation plug & play en minutes", us: true, them: false },
  { label: "Antivol actif + coupure à distance", us: true, them: false },
  { label: "Suivi temps réel (10 s)", us: true, them: "1 à 5 min" },
  { label: "Détection d'accident automatique", us: true, them: false },
  { label: "Support francophone 7j/7", us: true, them: false },
  { label: "Sans engagement", us: true, them: false },
  { label: "Données hébergées en Europe (RGPD)", us: true, them: "variable" },
];
