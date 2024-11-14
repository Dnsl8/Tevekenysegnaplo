export enum SelectedPage {
    Kezdőlap= "kezdőlap",
    Profil = "profil",
    Tevékenységnapló = "tevékenységnapló",
    Emlékeztetők = "emlékeztetők",
    Információk = "információk",
    Hozzáadás = "hozzáadás",
    Lábléc= "lábléc",
  }


  export interface Activity {
    id?: string;
    startTime: string;
    endTime: string;
    name: string [];
    type: string;
  }