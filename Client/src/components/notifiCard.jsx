const NotiCard = ()=>{
  return(
    <>
        <div class="flex items-center gap-4">
      <span class="relative flex shrink-0 overflow-hidden rounded-full w-12 h-12">
        <img src='' alt="Avatar" />
        <span class="flex h-full w-full items-center justify-center rounded-full bg-muted">JS</span>
      </span>
      <div>
        <p class="font-medium"></p>
        <p class="text-sm">Started Following You</p>
      </div>
    </div>
    </>
  )
}
export default NotiCard;