export interface LocationData {
  id: string;
  label: string;
  address: string;
  x: number;
  z: number;
  color: string;
}

export const SHOP = { id: 'shop', label: '爆速飯店', address: '中央通り 1-1', x: 0, z: 132, color: '#dc291a' } satisfies LocationData;

export const LOCATIONS: LocationData[] = [
  { id: 'house_a', label: '青い屋根の家', address: 'さくら通り 3-15', x: -102, z: -130, color: '#348ac7' },
  { id: 'house_b', label: '夕日荘', address: '西町 2-8', x: -110, z: 16, color: '#d46242' },
  { id: 'house_c', label: 'ひかりハイツ', address: '東町 4-20', x: 100, z: -36, color: '#e0a52d' },
  { id: 'house_d', label: '緑風館', address: '公園前 1-6', x: 108, z: -110, color: '#4f9a62' },
  { id: 'house_e', label: '白雲邸', address: '中央北 5-2', x: 4, z: -140, color: '#d9d2c0' },
];
