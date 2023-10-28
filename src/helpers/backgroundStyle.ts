export default function bgs(img: string) {
  return `background-image: linear-gradient(rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5)),
      linear-gradient(180deg, rgba(0, 24, 38, 0.75) 0%, rgba(0, 37, 49, 0) 50%),
      url(${img});`;
}