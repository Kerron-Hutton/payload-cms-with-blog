import Color from "color";

type Props = {
  hexColor: string;
  tag: string;
};

export function PostTag({ hexColor, tag }: Props) {
  const color = Color(hexColor);

  return (
    <div
      className={"w-fit rounded-full px-[10px] py-[2px] font-semibold"}
      style={{ color: color.hex(), backgroundColor: color.lighten(0.8).hex() }}
    >
      {tag}
    </div>
  );
}
