
export default function RegularList({
    items,
    resourceName,
    ItemC
}) {
  return (

    [
        items.map((i,index)=><ItemC key={index}  {...{[resourceName]:i}}/>)
    ]
  )
}
