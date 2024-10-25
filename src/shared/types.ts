export enum SelectedPage {
    Kezdőlap= "kezdőlap",
    Profil = "profil",
    Tevékenységnapló = "tevékenységnapló",
    Emlékeztetők = "emlékeztetők",
    Információk = "információk",
    Hozzáadás = "hozzáadás",
  }


  export interface Activity {
    startTime: string;
    endTime: string;
    name: string [];
    type: string;
  }