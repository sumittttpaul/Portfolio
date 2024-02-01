import style from "./style.module.css";

export default function GlobeAnimation() {
  return (
    <div className={style.globe}>
      <div className={style.wrapper}>
        <div className={style.circle} />
        <div className={style.circle} />
        <div className={style.circle} />
        <div className={style.circleHor} />
        <div className={style.circleHorMiddle} />
      </div>
    </div>
  );
}
