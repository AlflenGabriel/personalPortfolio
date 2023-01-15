const scrollToId = (id, updateHash = true) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" })
    if(updateHash) window.location.hash = id
  }
  
  export { scrollToId }