import type { EvidenceLevel } from "./site";

export type DatabaseSection = {
  title: string;
  count: number;
  evidence: EvidenceLevel;
  fields: string[];
  records: string[];
};

export const databaseSections: DatabaseSection[] = [
  {
    title: "People",
    count: 8,
    evidence: "official",
    fields: ["Name", "Role", "Known ties", "Source"],
    records: ["Jason Duval", "Lucia Caminos", "Cal Hampton", "Boobie Ike", "Dre'Quan Priest", "Real Dimez", "Raul Bautista", "Brian Heder"]
  },
  {
    title: "Places",
    count: 6,
    evidence: "official",
    fields: ["Region", "Type", "Evidence", "Guide status"],
    records: ["Vice City", "Leonida Keys", "Grassrivers", "Port Gellhorn", "Ambrosia", "Mount Kalaga"]
  },
  {
    title: "Vehicles",
    count: 6,
    evidence: "official",
    fields: ["Category", "Status", "Source", "Launch notes"],
    records: ["Street cars and traffic", "Motorcycles and bikes", "Boats and watercraft", "Aircraft", "Police and emergency vehicles", "Edition or bonus vehicles"]
  }
];
