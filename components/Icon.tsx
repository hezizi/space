import Image from 'next/image'

export default function Icon({
  name,
  width = 28,
  height = 28,
  ...props
}: {
  name: string
  [props: string]: any
}) {
  return (
    <Image
      src={name.includes('http') ? name : `/${name}.svg`}
      width={width}
      height={height}
      {...props}
      alt="Icon"
    />
  )
}
