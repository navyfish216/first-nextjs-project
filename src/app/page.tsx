import Card from "./components/Card";
import Button from "./components/Button";

export default function Page() {
  return (
    <div>
      <div className="space-y-4 m-4">
        {/* 
        */}
        <Card title="カードのタイトル" description="カードの説明文がここに入ります" />
        <Card title="別のカード" description="違う内容でも同じスタイルを適用できます" />
      </div>
      <div className="space-y-4 m-4 grid grid-cols-1">
        <Button>購入する</Button>
        <Button>送信する</Button>
        <Button>詳細を見る</Button>
      </div>
    </div>
  );
}
