const FinnIcon = props => {
  return (
    <svg
    width={40}
    height={40}
    className="w-5 inline-block transition-transform group-hover:rotate-[25deg]"
    viewBox="0 0 40 40"
    fill="currentColor"
    {...props}
    xmlns="http://www.w3.org/2000/svg">
      <rect width="256" height="256" fill="none"></rect>
      <rect x="56" y="104" width="144" height="72" rx="32" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></rect>
      <path d="M24,64a24,24,0,0,1,48,0H184a24,24,0,0,1,48,0v80a64.1,64.1,0,0,1-64,64H88a64.1,64.1,0,0,1-64-64Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path>
      <circle cx="92" cy="140" r="12"></circle><circle cx="164" cy="140" r="12"></circle>
    </svg>

  )
}

export default FinnIcon


