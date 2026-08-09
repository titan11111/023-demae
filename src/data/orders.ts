import { LOCATIONS } from './locations';

export interface Order {
  id: number;
  customerName: string;
  foodName: string;
  destinationId: string;
  timeLimit: number;
  reward: number;
  spillResistance: number;
  spillLabel: string;
}

const CUSTOMERS = ['田中 太郎', '山本 花子', '林 健一', '佐藤 美咲', '鈴木 次郎'];
const FOODS = [
  { name: '黄金チャーハン', resistance: .82, label: 'こぼれにくい' },
  { name: '炎の麻婆豆腐', resistance: .38, label: 'かなりこぼれやすい' },
  { name: '爆速しょうゆラーメン', resistance: .2, label: '最もこぼれやすい' },
  { name: '特製天津飯', resistance: .55, label: 'ややこぼれやすい' },
  { name: '爆盛り餃子', resistance: .92, label: '安定している' },
];

export const ORDERS: Order[] = LOCATIONS.map((location, index) => ({
  id: index + 1,
  customerName: CUSTOMERS[index],
  foodName: FOODS[index].name,
  destinationId: location.id,
  timeLimit: 90,
  reward: 100,
  spillResistance: FOODS[index].resistance,
  spillLabel: FOODS[index].label,
}));
