import { useNavigate } from 'react-router-dom';

export type SizeType = 'big' | 'small';
export type FruitType = {
  apple: boolean;
  tangerine: boolean;
  grape: boolean;
};

export type FormSampleProps = {
  name: string;
  size: SizeType;
  fruit: FruitType;
  blood: string;
  actions: {
    onChangeName: (name: string) => void;
    onChangeSize: (size: SizeType) => void;
    onChangeFruit: (fruit: string, value: boolean) => void;
    onChagenBlood: (blood: string) => void;
    onSubmit: () => void;
  };
};

export function FormSample(props: FormSampleProps) {
  const { name, actions, size, fruit, blood } = props;
  const navigate = useNavigate();
  return (
    <>
      <div>
        <label>ラベル</label>
      </div>
      <div>
        名前：
        <input
          type="text"
          name="namae"
          size={40}
          value={name}
          onChange={(e) => actions.onChangeName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="radio"
          name="size"
          value="big"
          checked={size === 'big'}
          onChange={() => actions.onChangeSize('big')}
        />
        大
        <input
          type="radio"
          name="size"
          value="small"
          checked={size === 'small'}
          onChange={() => actions.onChangeSize('small')}
        />
        小
      </div>
      <div>
        <input
          type="checkbox"
          name="fruit"
          value="apple"
          checked={fruit.apple}
          onChange={(e) => actions.onChangeFruit('apple', e.target.checked)}
        />
        りんご
        <input
          type="checkbox"
          name="fruit"
          value="tangerine"
          checked={fruit.tangerine}
          onChange={(e) => actions.onChangeFruit('tangerine', e.target.checked)}
        />
        みかん
        <input
          type="checkbox"
          name="fruit"
          value="grape"
          checked={fruit.grape}
          onChange={(e) => actions.onChangeFruit('grape', e.target.checked)}
        />
        ぶどう
      </div>
      <div>
        <select
          name="blood"
          value={blood}
          onChange={(e) => actions.onChagenBlood(e.target.value)}
        >
          <option value="A">A型</option>
          <option value="B">B型</option>
          <option value="O">O型</option>
          <option value="AB">AB型</option>
        </select>
      </div>
      <div>
        <input type="button" value="戻る" onClick={() => navigate(-1)} />
        <input type="submit" value="OK" onClick={() => actions.onSubmit()} />
      </div>
    </>
  );
}
