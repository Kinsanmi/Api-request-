
export interface Props  {
    name: string
}


export default function ReservationCard({name}: Props) {
  return (
    <div>{name}</div>
  )
}