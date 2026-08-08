export interface SaveData {
  bestScore: number;
  bestTime: number;
  totalDeliveries: number;
  bikeLevel: number;
}

const DEFAULT_SAVE: SaveData = { bestScore: 0, bestTime: 0, totalDeliveries: 0, bikeLevel: 1 };

export class SaveStore {
  private readonly databaseName = 'demae-3d-save';

  async load(): Promise<SaveData> {
    try {
      const db = await this.open();
      return await new Promise((resolve, reject) => {
        const request = db.transaction('save', 'readonly').objectStore('save').get('player');
        request.onsuccess = () => resolve({ ...DEFAULT_SAVE, ...(request.result as SaveData | undefined) });
        request.onerror = () => reject(request.error);
      });
    } catch {
      const raw = localStorage.getItem(this.databaseName);
      return raw ? { ...DEFAULT_SAVE, ...JSON.parse(raw) as SaveData } : { ...DEFAULT_SAVE };
    }
  }

  async save(data: SaveData): Promise<void> {
    localStorage.setItem(this.databaseName, JSON.stringify(data));
    try {
      const db = await this.open();
      await new Promise<void>((resolve, reject) => {
        const request = db.transaction('save', 'readwrite').objectStore('save').put(data, 'player');
        request.onsuccess = () => resolve(); request.onerror = () => reject(request.error);
      });
    } catch { /* localStorage already contains the backup */ }
  }

  private open(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.databaseName, 1);
      request.onupgradeneeded = () => request.result.createObjectStore('save');
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }
}
